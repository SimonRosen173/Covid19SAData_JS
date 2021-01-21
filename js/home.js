var gen_data, all_cum_data, all_daily_data, data_info;

// Check if website being run locally or is deployed - used for development
var is_dev = (location.hostname === "localhost" || location.hostname === "127.0.0.1");
console.log("is_dev: " + is_dev);

var data_base_url = '';

// Use local files if being run locally - i.e. in dev
if (!is_dev) {
    data_base_url = 'https://raw.githubusercontent.com/SimonRosen173/Covid19SAData_Data/master/data/';
} else {
    data_base_url = 'test_data/'; // local files not shown in repo
}


var col_id_map = { /* Maps col name from csv file to html element id */

};

// function load_set_summary_data(){
//     var csv_name = 'sa/gen_data.csv';
//     Plotly.d3.csv(data_base_url + csv_name, function(data){set_summary_table(data[0])});
// }

function createHyperlink(parent_id, link_id, text, url, is_new_page){
    // Create anchor element.
    var a = document.createElement('a');

    // Create the text node for anchor element.
    var link = document.createTextNode(text);

    // Append the text node to anchor element.
    a.appendChild(link);

    // Set the title.
    a.title = text;

    // Set the href property.
    a.href = url; // "https://" +

    a.id = link_id;

    //open in new tab if required
    if (is_new_page){
        a.target="_blank";
    }

    // Append the anchor element to the body.
    document.getElementById(parent_id).appendChild(a);
}

function setSummaryTable(data) {

    // for (data_key in data){
    //     console.log(data_key, data[data_key]);
    // }

    var id_list = ['tot','change','last_date','second_last_date'];
    var val_name_list = ['confirmed','active','tests','recoveries','deaths'];

    // Change Interval
    var change_interval_el = document.getElementById("summary_tbl_interval");
    // var change_interval_second_el = document.getElementById("");

    // Sources
    // summary_tbl_sources
    var source_cell_id = "summary_tbl_sources";
    var source_urls_arr = data['sources_'+val_name_list[0]].split(',');
    var source_a_ids = [];
    for (var j = 0; j<source_urls_arr.length; j++){
        source_a_ids.push("sources_"+ val_name_list[0] +"_a_"+(j+1));
        createHyperlink(source_cell_id, source_a_ids[j],"["+(j+1)+"]", source_urls_arr[j], true);
    }

    change_interval_el.innerText = data['second_last_date_'+val_name_list[0]] +  " - "
        + data['last_date_'+val_name_list[0]];

    for (var i = 0; i<val_name_list.length; i++){
        // Total Value
        var curr_tot_el = document.getElementById("tot_"+val_name_list[i]+"_td");
        curr_tot_el.innerText = formatVal(data['tot_'+val_name_list[i]], false);

        // Change in value
        var curr_change_el = document.getElementById("change_"+val_name_list[i]+"_td");
        curr_change_el.innerText = formatVal(data['change_'+val_name_list[i]],true);

        // Change interval
        // var change_interval = document.getElementById("change_interval_"+val_name_list[i]+"_td");
        // change_interval.innerText = data['second_last_date_'+val_name_list[i]] +  " - "
        //     + data['last_date_'+val_name_list[i]];

        // Sources
        // if (val_name_list[i] !== 'active'){
        //     var source_cell_id = "sources_"+ val_name_list[i] +"_td";
        //     var source_urls_arr = data['sources_'+val_name_list[i]].split(',');
        //     var source_a_ids = [];
        //     for (var j = 0; j<source_urls_arr.length; j++){
        //         source_a_ids.push("sources_"+ val_name_list[i] +"_a_"+(j+1));
        //         createHyperlink(source_cell_id, source_a_ids[j],"["+(j+1)+"]", source_urls_arr[j], true);
        //     }
        // }
    }
    // console.log(data);
}

function makeAllDailyDataLineCharts(all_daily_data, data_type){

    var col_suffix = '';
    if (data_type==='default' || data_type === null){
        // do nothing
    } else if (data_type==='rol_avg_3'){
        col_suffix = '_rol_avg_3';
    } else if (data_type==='rol_avg_7'){
        col_suffix = '_rol_avg_7';
    }

    var all_y_cols = {
        'cases_tests':['confirmed', 'tests'],
        'cases':['confirmed'],
        'active':['active'],
        'recoveries_deaths':['recovered','deaths'],
        'deaths':['deaths']
    };

    if (data_type !== 'default'){
        for (var key in all_y_cols){
            var curr_y_cols = all_y_cols[key];
            for (var i = 0; i<curr_y_cols.length; i++){
                curr_y_cols[i] = curr_y_cols[i] + col_suffix;
            }
            all_y_cols[key] = curr_y_cols; // I don't think curr_y_cols was set by reference
        }
    }

    // Daily change in tests and positive cases over time
    makeLineChart(all_daily_data, "dailyCasesTestsLineGraphDiv", "date", all_y_cols['cases_tests'],
        'Date', 'Daily Change', ['Confirmed Cases','Tests'],['firebrick','blue']);
    // Daily change in cases over time
    makeLineChart(all_daily_data, "dailyCasesLineGraphDiv", "date", all_y_cols['cases'],
        'Date', 'Daily Change in No of Cases', ['Confirmed Cases'],['firebrick']);
    // Daily change in active cases over time
    makeLineChart(all_daily_data, "dailyActiveLineGraphDiv", "date", all_y_cols['active'],
        'Date', 'Daily Change of Active Cases', ['Active'],['firebrick']);
    // Recoveries & Deaths
    makeLineChart(all_daily_data, "dailyRecoveriesDeathsLineGraphDiv", "date", all_y_cols['recoveries_deaths'],
        'Date', 'Daily Change', ['Recoveries','Deaths'],['green','black']);
    // Deaths
    makeLineChart(all_daily_data, "dailyDeathsLineGraphDiv", "date", all_y_cols['deaths'],
        'Date', 'Cumulative No of Deaths', ['Deaths'],['black']);
}

function makeAllCumDataLineCharts(all_cum_data){
    var all_y_cols = {
        'cases_tests':['confirmed', 'tests'],
        'cases':['confirmed'],
        'active':['active'],
        'recoveries_deaths':['recovered','deaths'],
        'deaths':['deaths']
    };

    // Tests & Cases
    makeLineChart(all_cum_data, "cumCasesTestsLineGraphDiv", "date", ['confirmed', 'tests'],
        'Date', 'Cumulative No', ['Confirmed Cases','Tests'],['firebrick','blue']);
    // Cases
    makeLineChart(all_cum_data, "cumCasesLineGraphDiv", "date", ['confirmed'],
        'Date', 'Cumulative No of Cases', ['Confirmed Cases'],['firebrick']);
    // Active Cases
    makeLineChart(all_cum_data, "cumActiveLineGraphDiv", "date", ['active'],
        'Date', 'Cumulative No of Active Cases', ['Active'],['firebrick']);
    // Ratio of positive cases to tests conducted
    makeLineChart(all_cum_data, "cumCasesTestsRatioLineGraphDiv", "date", ['confirmed_div_by_tests'],
        'Date', 'Ratio', ['Confirmed Cases : Tests'],['firebrick']);
    // Recoveries & Deaths
    makeLineChart(all_cum_data, "cumRecoveriesDeathsLineGraphDiv", "date", ['recovered', 'deaths'],
        'Date', 'Cumulative No', ['Recoveries','Deaths'],['green','black']);
    // Deaths
    makeLineChart(all_cum_data, "cumDeathsLineGraphDiv", "date", ['deaths'],
        'Date', 'Cumulative No of Deaths', ['Deaths'],['black']);
    // Ratio of deaths & recoveries to confirmed
    makeLineChart(all_cum_data, "cumDeathsRecoveriesCasesRatioLineGraphDiv", "date",
        ['recovered_div_by_confirmed','deaths_div_by_confirmed'],
        'Date', 'Ratio', ['Recoveries : Confirmed Cases','Deaths : Confirmed Cases'],['green','black']);
}


function loadData(){
    // Data Info
    Plotly.d3.csv(data_base_url + "data_info.csv", function(raw_data) {
        data_info = toFormattedDict(raw_data);
        // console.log(data_info);
        // console.log(raw_data);
        var sa_last_updated_val = getValFromFormattedDict(data_info, "name",
            "sa_page_updated", "date_updated");
        var last_updated_val_el = document.getElementById("last_updated_val");
        last_updated_val_el.innerText = sa_last_updated_val;
    });

    // Gen Data
    Plotly.d3.csv(data_base_url + "sa/gen_data.csv", function(raw_data) {
        console.log(raw_data);
        gen_data = raw_data[0];
        setSummaryTable(gen_data);
    });

    // All Cum Data
    Plotly.d3.csv(data_base_url + "sa/all_cum_data.csv", function(raw_data) {
        all_cum_data = toFormattedDict(raw_data);
        makeAllCumDataLineCharts(all_cum_data);
    });

    // All Daily Data
    Plotly.d3.csv(data_base_url + "sa/all_daily_data.csv", function(raw_data) {
        all_daily_data = toFormattedDict(raw_data);
        makeAllDailyDataLineCharts(all_daily_data, "default");
    });
}

// e.g. default or rolling average
function changeDailyDataType(){
    //
}

function main(){
    // console.log("Plotly loaded and main run");
    // load_set_summary_data();
    // createLineCharts();
    loadData();

    // Needs to be done while using GitHub pages base url
    if (window.location.hostname === "simonrosen173.github.io"){
        //prov_page_btn
        let prov_page_btn_el = document.getElementById("prov_page_btn");
        prov_page_btn_el.href = "/Covid19SAData_JS/provinces/";
    }
    // console.log(formatVal(10000, true));
}

function dailyDataTypeRBChanged(el){
    var data_type = el.value;
    makeAllDailyDataLineCharts(all_daily_data, data_type);
    // console.log(data_type);
}

window.onload = function (){
    // $.getScript('js/plotly-latest.min.js', function(){main();});
    $.getScript('js/libs/plotly-basic.min.js', function(){main();});
};

var data_base_url = 'https://raw.githubusercontent.com/SimonRosen173/Covid19SAData_Data/master/data/';
var col_id_map = { /* Maps col name from csv file to html element id */

};


function load_set_summary_data(){
    var csv_name = 'sa/gen_data.csv';
    Plotly.d3.csv(data_base_url + csv_name, function(data){set_summary_table(data[0])});
}

function createHyperlink(parent_id, link_id, text, url){
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

    // Append the anchor element to the body.
    document.getElementById(parent_id).appendChild(a);
}

function set_summary_table(data) {

    // for (data_key in data){
    //     console.log(data_key, data[data_key]);
    // }

    var id_list = ['tot','change','last_date','second_last_date'];
    var val_name_list = ['confirmed','active','tests','recoveries','deaths'];

    for (var i = 0; i<val_name_list.length; i++){
        // tot & change
        var curr_tot_el = document.getElementById("tot_"+val_name_list[i]+"_td");
        curr_tot_el.innerText = data['tot_'+val_name_list[i]];
        var curr_change_el = document.getElementById("change_"+val_name_list[i]+"_td");
        curr_change_el.innerText = data['change_'+val_name_list[i]];

        // change interval
        var change_interval = document.getElementById("change_interval_"+val_name_list[i]+"_td");
        change_interval.innerText = data['second_last_date_'+val_name_list[i]] +  " - "
            + data['last_date_'+val_name_list[i]];

        // sources - TODO
        if (val_name_list[i] !== 'active'){
            var source_cell_id = "sources_"+ val_name_list[i] +"_td";
            var source_urls_arr = data['sources_'+val_name_list[i]].split(',');
            var source_a_ids = [];
            for (var j = 0; j<source_urls_arr.length; j++){
                source_a_ids.push("sources_"+ val_name_list[i] +"_a_"+(j+1));
                createHyperlink(source_cell_id, source_a_ids[j],"["+(j+1)+"]", source_urls_arr[j]);
            }
        }
    }
    // console.log(data);
}

load_set_summary_data();

function createLineCharts(){
    // ALL CUMULATIVE DATA
    Plotly.d3.csv(data_base_url + "sa/all_cum_data.csv", function(raw_data) {
        var all_cum_data = toFormattedDict(raw_data);

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
            'Date', 'Ratio of Confirmed Cases to Tests Conducted', ['Confirmed Cases : Tests'],['firebrick']);
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

    });

    // ALL DAILY DATA
    Plotly.d3.csv(data_base_url + "sa/all_daily_data.csv", function(raw_data) {
        var all_daily_data = toFormattedDict(raw_data);

        // Daily change in tests and positive cases over time
        makeLineChart(all_daily_data, "dailyCasesTestsLineGraphDiv", "date", ['confirmed', 'tests'],
            'Date', 'Daily Change', ['Confirmed Cases','Tests'],['firebrick','blue']);
        // Daily change in cases over time
        makeLineChart(all_daily_data, "dailyCasesLineGraphDiv", "date", ['confirmed'],
            'Date', 'Daily Change in No of Cases', ['Confirmed Cases'],['firebrick']);
        // Daily change in active cases over time
        makeLineChart(all_daily_data, "dailyActiveLineGraphDiv", "date", ['active'],
            'Date', 'Daily Change of Active Cases', ['Active'],['firebrick']);
        // Recoveries & Deaths
        makeLineChart(all_daily_data, "dailyRecoveriesDeathsLineGraphDiv", "date", ['recovered', 'deaths'],
            'Date', 'Daily Change', ['Recoveries','Deaths'],['green','black']);
        // Deaths
        makeLineChart(all_daily_data, "dailyDeathsLineGraphDiv", "date", ['deaths'],
            'Date', 'Cumulative No of Deaths', ['Deaths'],['black']);
    });
}

createLineCharts();

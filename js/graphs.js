var data_base_url = 'https://raw.githubusercontent.com/SimonRosen173/Covid19SAData_Data/master/data/';
let is_display_mode_bar, is_range_editable;

// Butchering JS but meh... JS is just the product of some insane developer's fever dream

function initConfigs(){
    setInteractivity('med');
    // is_display_mode_bar = true;
    // is_range_editable = true;
}

// NOTE: This will only change variables not reload graphs
// high - show display mode bar
//      - edit range
// med - hide display mode bar
//     - cannot edit range
// low - static graph
function setInteractivity(interactive_lvl){
    switch(interactive_lvl){
        case "high":
            is_display_mode_bar = true;
            is_range_editable = true;
            break;
        case "med":
            is_display_mode_bar = false;
            is_range_editable = false;
            break;
        case "low":
            break;
    }
}

// index_data = {index_name: []}
// data = {col1_name: [], col2_name: [], ...}
function formatData(raw_data){
    var data = {};
    var data_keys = Object.keys(raw_data[0]);

    var index_name = data_keys[0];
    var index_data = {};
    index_data[index_name] = [];

    for (var i = 1; i < data_keys.length; i ++){
        data[data_keys[i]] = [];
    }

    // console.log(data_keys);
    for (var i = 0; i < raw_data.length; i++){
        index_data[index_name].push(raw_data[i][index_name]);

        for (var j = 1; j < data_keys.length; j++){
            var col_name = data_keys[j];
            data[col_name].push(raw_data[i][col_name]);
        }
    }
    return [index_data[index_name], index_name, data];
}

function toFormattedDict(raw_data){
    var data = {};
    var data_keys = Object.keys(raw_data[0]);

    // var index_name = data_keys[0];
    // var index_data = {};
    // index_data[index_name] = [];

    for (var i = 0; i < data_keys.length; i ++){
        data[data_keys[i]] = [];
    }

    // console.log(data_keys);
    for (var i = 0; i < raw_data.length; i++){
        // index_data[index_name].push(raw_data[i][index_name]);

        for (var j = 0; j < data_keys.length; j++){
            var col_name = data_keys[j];
            data[col_name].push(raw_data[i][col_name]);
        }
    }
    return data;
}

// key_col_name - column where key resides, key - value of key, val_col_name - column where val resides
function getValFromFormattedDict(data, key_col_name, key, val_col_name){
    var key_col_vals = data[key_col_name];
    var val_col_vals = data[val_col_name];

    for (var i =0; i<key_col_vals.length; i++){
        if (key_col_vals[i] === key){
            return val_col_vals[i];
        }
    }
}

function formatVal(value, include_sign){
    var formatted_val;
    var is_pos = value >= 0;

    formatted_val = parseFloat(value).toLocaleString('en');
    formatted_val = formatted_val.replace(/,/g, ' ');

    if (include_sign && is_pos){
        formatted_val = "+" + (formatted_val);
    }
    return formatted_val;
}

function createPieChart(csv_name, col_name, div_name){
    Plotly.d3.csv(data_base_url + csv_name, function(data){ makePieChart(data, col_name, div_name)});
}

function createLineChart(
    csv_name,
    div_id,
    x_col, // string denoting key in dict for x axis
    y_cols, // list of strings denoting key in dict for y values for each curve
    xaxis_title, yaxis_title,
    names, // list of strings - names of each curve
    colors, // list of strings - color of each curve
    start_x="",
    date_format = '%Y-%m-%d',
){
    Plotly.d3.csv(data_base_url + csv_name, function(raw_data){
        data = toFormattedDict(raw_data);
        // console.log(data);
        makeLineChart(data, div_id, x_col, y_cols, xaxis_title, yaxis_title, names, colors,
            start_x, date_format)
    });
}

// function createGroupLineChart(csv_name, col_name, div_name){
//     Plotly.d3.csv(data_base_url + csv_name, function(data){ makeGroupChart(data, col_name, div_name)});
// }

function makePieChart(raw_data, col_name, div_id){
    var tmp_arr = formatData(raw_data);

    // #1f77b4 or rgb(31, 119, 180)  // muted blue
    // #ff7f0e or rgb(255, 127, 14)  // safety orange
    // #2ca02c or rgb(44, 160, 44)   // cooked asparagus green
    // #d62728 or rgb(214, 39, 40)   // brick red
    // #9467bd or rgb(148, 103, 189) // muted purple
    // #8c564b or rgb(140, 86, 75)   // chestnut brown

    var index_data = tmp_arr[0];
    var index_name = tmp_arr[1];
    var chart_data = tmp_arr[2][col_name];

    var data = [{
        values: chart_data,
        labels: index_data,
        type: 'pie',
        hoverinfo:'label+percent',
        hovertemplate: '%{label}<br>%{value}<extra></extra>',
        // hoverlabel: {namelength:0},
        textinfo: 'value+label',
        textposition: 'inside'
    }];

    var layout = {
        legend:{x:0, y:1},
        showlegend: false,
        margin: {
            t:0, // 50
            b:20,
            l:0,
            r:0
        },
        // colorway: [
        //     '#1f77b4',
        //     '#d62728',
        //     '#2ca02c',
        //     '#9467bd',
        //     '#ff7f0e',
        //     '#8c564b',
        // ]
        // Python Plotly default colors
        colorway: [
            '#636EFA',
            '#E8543A',
            '#63CC96',
            '#AB63FA',
            '#EEA058',
            '#6AD3F3',
            '#E96490',
            '#B6E880',
            '#EF96FE'
        ]
    };

    var config = {
        displayModeBar: false,
        responsive: true
    };

    Plotly.newPlot(div_id, data, layout, config);

    // console.log(chart_data);
    // console.log(index_dict);
}

function makeLineChart(
    data,
    div_id,
    x_col, // string denoting key in dict for x axis
    y_cols, // list of strings denoting key in dict for y values for each curve
    xaxis_title, yaxis_title,
    names, // list of strings - names of each curve
    colors, // list of strings - color of each curve
    start_x="",
    date_format = '%Y-%m-%d',
){
    var x_data =  data[x_col];
    // var y_data = [];

    var data_keys = Object.keys(data);

    var traces = [];

    var count = 0;
    for (var i = 0; i < y_cols.length; i++){
        if (data_keys.includes(y_cols[i])){
            var temp_trace = {
                x: x_data,
                y: data[y_cols[i]],
                type: 'scatter',
                mode: 'line',
                name: names[i],
                hovertemplate: '%{y}<extra></extra>',
                hoverinfo: "all",
                // color:'red'
                line: {
                    color: colors[i],
                    // width: 3
                }
            };
            // console.log(temp_trace['hoverlabel']);
            // console.log(temp_trace);
            traces.push(temp_trace);
        }
    }

    //
    var layout = {
        // legend: {x: 0, y: 1},
        // https://plotly.com/javascript/axes/
        xaxis: {
            title: {
                text: xaxis_title,
            },
            gridcolor: 'white',
            zerolinecolor: 'white',
            fixedrange: !is_range_editable
        },
        yaxis: {
            title: {
                text: yaxis_title
            },
            gridcolor: 'white',
            zerolinecolor: 'white',
            fixedrange: !is_range_editable
        },
        showlegend: true,
        legend: {x: 0.01, y: 0.98, title: {text: ""}},
        margin: {
            t: 30,
            b: 40,
            l: 50,
            r: 65,
        },
        plot_bgcolor:"#E5ECF6",
    };

    var config = {
        displayModeBar: is_display_mode_bar,
        responsive: true
    };

    Plotly.newPlot(div_id, traces, layout, config);

}

function makeGroupLineChart(){

}

initConfigs();
// Provinces PieCharts
// function createProvPieCharts(){
//     // Cases per prov
//     createPieChart("tot_provinces.csv", 'total', 'totCasesPerProvDiv');
//     createPieChart("tot_provinces.csv", 'latest_change', 'latestChangeCasesPerProvDiv');
//
//     // Tests Per Prov
//     createPieChart("tot_tests_provinces.csv", 'total', 'totTestsPerProvDiv');
//
//     // Recoveries per prov
//     createPieChart("tot_recovered_provinces.csv", 'total', 'totRecoveriesPerProvDiv');
//     createPieChart("tot_recovered_provinces.csv", 'latest_change', 'latestChangeRecoveriesPerProvDiv');
//
//     // Deaths per prov
//     createPieChart("tot_deaths_provinces.csv", 'total', 'totDeathsPerProvDiv');
//     createPieChart("tot_deaths_provinces.csv", 'latest_change', 'latestChangeDeathsPerProvDiv');
// }

// createProvPieCharts();



// createLineChart("sa/all_cum_data.csv", "lineGraphDiv", "date", ['confirmed', 'tests'],
//     'Date', 'Cumulative No', ['confirmed','tests'],['firebrick','blue']);
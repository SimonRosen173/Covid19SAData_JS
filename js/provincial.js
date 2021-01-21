var is_dev = (location.hostname === "localhost" || location.hostname === "127.0.0.1");
console.log("is_dev: " + is_dev);

var data_base_url = '';

// Use local files if being run locally - i.e. in dev
if (!is_dev) {
    data_base_url = 'https://raw.githubusercontent.com/SimonRosen173/Covid19SAData_Data/master/data/';
} else {
    data_base_url = '../test_data/'; // local files not shown in repo
}

// data_base_url = 'https://raw.githubusercontent.com/SimonRosen173/Covid19SAData_Data/master/data/';

function createProvPieCharts(){
    // Cases per prov
    createPieChart("provincial/tot_provinces.csv", 'total', 'totCasesPerProvPieChartDiv');
    createPieChart("provincial/tot_provinces.csv", 'latest_change', 'latestChangeCasesPerProvPieChartDiv');
    //
    // // Tests Per Prov
    // createPieChart("provincial/tot_tests_provinces.csv", 'total', 'totTestsPerProvDiv');
    //
    // // Recoveries per prov
    // createPieChart("provincial/tot_recovered_provinces.csv", 'total', 'totRecoveriesPerProvDiv');
    // createPieChart("provincial/tot_recovered_provinces.csv", 'latest_change', 'latestChangeRecoveriesPerProvDiv');
    //
    // // Deaths per prov
    // createPieChart("provincial/tot_deaths_provinces.csv", 'total', 'totDeathsPerProvDiv');
    // createPieChart("provincial/tot_deaths_provinces.csv", 'latest_change', 'latestChangeDeathsPerProvDiv');
}

function setSummaryTable(data){
    let prov_map = { /* Indexes */
        "Eastern Cape": "ec",
        "Free State": "fs",
        "Gauteng": "gp",
        "KwaZulu-Natal": "kzn",
        "Limpopo": "lp",
        "Mpumalanga": "mp",
        "North West": "nw",
        "Northern Cape": "nc",
        "Western Cape": "wc",
        "Unknown": "unk",
        "Total": "sa"
    }

    let val_ids = ["tot_confirmed", "change_confirmed", "tot_recoveries", "change_recoveries",
        "tot_deaths", "change_deaths","tot_active", "change_active"];

    for (let i = 0; i<data['Province'].length; i++){
        let curr_prov = prov_map[data['Province'][i]];
        for (let j = 0; j<val_ids.length; j++){
            let curr_cell_el = document.getElementById(val_ids[j]+"_"+curr_prov+"_td");

            let include_sign = val_ids[j].includes("change");
            curr_cell_el.innerText = formatVal(data[val_ids[j]][i],include_sign);
        }
    }
}

function loadData(){
    // SUMMARY
    Plotly.d3.csv(data_base_url + "provincial/prov_summary.csv", function(raw_data) {
        // console.log(raw_data);
        let prov_summary_data = toFormattedDict(raw_data);
        // console.log(prov_summary_data);
        setSummaryTable(prov_summary_data);
    });

    // TOTALS
    // Cases
    Plotly.d3.csv(data_base_url + "provincial/tot_provinces.csv", function(raw_data) {
        // let prov_cases_data = raw_data;
        makePieChart(raw_data, 'total', 'totCasesPerProvPieChartDiv');
        makePieChart(raw_data, 'latest_change', 'changeCasesPerProvPieChartDiv');
    });
    // Deaths
    Plotly.d3.csv(data_base_url + "provincial/tot_deaths_provinces.csv", function(raw_data) {
        // let prov_cases_data = raw_data;
        makePieChart(raw_data, 'total', 'totDeathsPerProvPieChartDiv');
        makePieChart(raw_data, 'latest_change', 'changeDeathsPerProvPieChartDiv');
    });
    // Recoveries
    Plotly.d3.csv(data_base_url + "provincial/tot_recovered_provinces.csv", function(raw_data) {
        // let prov_cases_data = raw_data;
        makePieChart(raw_data, 'total', 'totRecoveriesPerProvPieChartDiv');
        makePieChart(raw_data, 'latest_change', 'changeRecoveriesPerProvPieChartDiv');
    });

}

function main(){
    loadData();
    // createProvPieCharts();
}
// console.log("Provinces js loaded");

window.onload = function (){
    // $.getScript('js/plotly-latest.min.js', function(){main();});
    if (window.location.hostname === "simonrosen173.github.io"){
        //prov_page_btn
        let home_page_btn_el = document.getElementById("home_page_btn");
        home_page_btn_el.href = "/Covid19SAData_JS/";
    }

    $.getScript('../js/libs/plotly-basic.min.js', function(){main();});
};
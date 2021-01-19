data_base_url = 'https://raw.githubusercontent.com/SimonRosen173/Covid19SAData_Data/master/data/';

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

function loadData(){
    // Summary
    // CASES DATA
    Plotly.d3.csv(data_base_url + "provincial/tot_provinces.csv", function(raw_data) {
        // let prov_cases_data = raw_data;
        makePieChart(raw_data, 'total', 'totCasesPerProvPieChartDiv');
        //
    });
}

function main(){
    loadData();
    // createProvPieCharts();
}
// console.log("Provinces js loaded");

window.onload = function (){
    // $.getScript('js/plotly-latest.min.js', function(){main();});
    $.getScript('../js/libs/plotly-basic.min.js', function(){main();});
};
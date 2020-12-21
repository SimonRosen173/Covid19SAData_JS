function createProvPieCharts(){
    // Cases per prov
    createPieChart("provincial/tot_provinces.csv", 'total', 'totCasesPerProvDiv');
    createPieChart("provincial/tot_provinces.csv", 'latest_change', 'latestChangeCasesPerProvDiv');

    // Tests Per Prov
    createPieChart("provincial/tot_tests_provinces.csv", 'total', 'totTestsPerProvDiv');

    // Recoveries per prov
    createPieChart("provincial/tot_recovered_provinces.csv", 'total', 'totRecoveriesPerProvDiv');
    createPieChart("provincial/tot_recovered_provinces.csv", 'latest_change', 'latestChangeRecoveriesPerProvDiv');

    // Deaths per prov
    createPieChart("provincial/tot_deaths_provinces.csv", 'total', 'totDeathsPerProvDiv');
    createPieChart("provincial/tot_deaths_provinces.csv", 'latest_change', 'latestChangeDeathsPerProvDiv');
}
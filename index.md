---
layout: default
title: Covid-19 SA Data
description: South African Covid-19 data & visualisations. <br>Contains data for confirmed cases, tests, recoveries, deaths & active cases.
author: Simon Rosen
last_updated: 10:56 03 September 2020
---
<center><a href="/provinces" id="prov_page_btn" class="btn alt_btn_col">Data Per Province Page</a></center> 
Click the above button to be taken to a page showing Covid-19 data per province. 

___

<br>
These charts are all interactive. Mouse over an aspect of the chart to see more info, or if you are on mobile tap.
<br>

**Note: Breaks in histograms are as a result of data not being available for those days.**

# Summary
<div><div id="summary_tbl_interval" class = "date-cell">... - ...</div></div>
<p style="margin-top: 0.1rem;">
These dates specify the dates to which the data corresponds to, i.e. change is calculated using the difference of the 
values between the two dates and total corresponds to the latest date.
</p>

___

<!--| | Total | Change | Interval of Change | Sources | -->

<div>
    <table class = "centred">
        <thead>
            <tr class = "header">
                <th></th>
                <th>Total</th>
                <th>Change</th>
            </tr>
        </thead>
        <tbody>
            <tr class="highlight-hover">
                <td class="index">Cases</td>
                <td id = "tot_confirmed_td" class="bold">   ...   </td>
                <td id = "change_confirmed_td" class="bold">   ...   </td>
            </tr>
            <tr class="highlight-hover">
                <td class="index">Active Cases</td>
                <td id = "tot_active_td" class="bold">   ...   </td>
                <td id = "change_active_td" class="bold">   ...   </td>
            </tr>
            <tr class="highlight-hover">
                <td class="index">Tests</td>
                <td id = "tot_tests_td" class="bold">   ...   </td>
                <td id = "change_tests_td" class="bold">   ...   </td>
            </tr>
            <tr class="highlight-hover">
                <td class="index">Recoveries</td>
                <td id = "tot_recoveries_td" class="bold">   ...   </td>
                <td id = "change_recoveries_td" class="bold">   ...   </td>
            </tr>
            <tr class="highlight-hover">
                <td class="index">Deaths</td>
                <td id = "tot_deaths_td" class="bold">   ...   </td>
                <td id = "change_deaths_td" class="bold">   ...   </td>
            </tr>
        </tbody>
    </table>
</div>
<div style="padding-top: 0.6rem; padding-bottom: 0.1rem;"><strong>Sources:</strong> <div class="inline-div" id="summary_tbl_sources"></div></div>
# Configuration
___
#### Daily Data Type
<input type="radio" id="default_rb" name="daily_data_type" value="default" onchange="dailyDataTypeRBChanged(this);" checked='true'>
<label for="default_rb">Default</label><br>
<input type="radio" id="rol_avg_3_rb" name="daily_data_type" value="rol_avg_3" onchange="dailyDataTypeRBChanged(this);">
<label for="rol_avg_3_rb">3 day rolling average</label><br>
<input type="radio" id="rol_avg_7_rb" name="daily_data_type" value="rol_avg_7" onchange="dailyDataTypeRBChanged(this);">
<label for="rol_avg_7_rb">7 day rolling average</label>

# Testing & Cases Over Time
___
## Cumulative
### Date vs Cumulative No of Tests & Positive Cases 
<div class = "line-graph" id = "cumCasesTestsLineGraphDiv"></div>

### Date vs Cumulative No of Positive Cases
<div class = "line-graph" id = "cumCasesLineGraphDiv"></div>
[What “flattening the curve” means and why it’s so important.](https://sacoronavirus.co.za/2020/03/22/what-flattening-the-curve-means-and-why-its-so-important/) - COVID-19 Corona Virus South African Resource Portal

### Date vs Cumulative No of Active Cases
Active cases are cases where there has not yet been an outcome. I.e. confirmed cases - recoveries - deaths.
<div class = "line-graph" id = "cumActiveLineGraphDiv"></div>

### Date vs Ratio of Positive Cases To Test Conducted
i.e. positive cases divided by tests conducted. 
<div class = "line-graph" id = "cumCasesTestsRatioLineGraphDiv"></div>

<!--
##############
 DAILY CHANGE
##############
-->
## Daily Change
### Date vs Daily Change in Positive Cases & Tests
<div class = "line-graph" id = "dailyCasesTestsLineGraphDiv"></div>

### Date vs Daily Change in Positive Cases
<div class = "line-graph" id = "dailyCasesLineGraphDiv"></div>

### Date vs Daily Change in Active Cases
<div class = "line-graph" id = "dailyActiveLineGraphDiv"></div>

<!--
### Date vs No of Tests Per Day
<div class="iframeDiv" align="center">
    <iframe class="lazy" data-src="date_vs_daily_tests.html" scrolling="no" frameborder="0"></iframe>
</div>
Note, the data contained in this figure was obtained by calculating the difference between the daily 'total tested' statistics released by governement. As such this data may not directly correspond to the amount of tests actually conducted each day.
### Date vs No of Positive Cases Per Day Per Province
Note: You can click on provinces in the legend to hide or show them on the graph.
<div class="iframeDiv" align="center">
    <iframe class="lazy" data-src="date_vs_daily_cases_per_province.html" scrolling="no" frameborder="0"></iframe>
</div>
UNK - Unkown -->
<br>

# Recoveries And Deaths Over Time
___
## Cumulative
### Date vs Cumulative No of Recoveries & Deaths
<div class = "line-graph" id = "cumRecoveriesDeathsLineGraphDiv"></div>

### Date vs Cumulative No of Deaths
<div class = "line-graph" id = "cumDeathsLineGraphDiv"></div>

### Date vs Ratio of Deaths & Recoveries To Confirmed Cases
i.e. deaths divided by confirmed cases and recoveries divided by confirmed cases. 
<div class = "line-graph" id = "cumDeathsRecoveriesCasesRatioLineGraphDiv"></div>

## Daily Change
### Date vs Daily Change in Recoveries & Deaths
<!--<div class="iframeDiv" align="center">
    <iframe class="lazy" data-src="daily_deaths_recovered.html" scrolling="no" frameborder="0"></iframe>
</div>-->
<div class = "line-graph" id = "dailyRecoveriesDeathsLineGraphDiv"></div>

### Date vs Daily Change in Deaths
<!--<div class="iframeDiv" align="center">
    <iframe class="lazy" data-src="daily_deaths.html" scrolling="no" frameborder="0"></iframe>
</div>-->
<div class = "line-graph" id = "dailyDeathsLineGraphDiv"></div>

<!--
<br>
**Data last updated: 10:56 03 September 2020**
-->

{% include_relative _includes/footer.md %}

<script src = "js/graphs.js"></script>
<script src = "js/home.js"></script>

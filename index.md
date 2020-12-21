---
layout: default
title: Covid-19 SA Data
description: South African Covid-19 data & visualisations. <br>Contains data for confirmed cases, tests, recoveries, deaths & active cases.
author: Simon Rosen
last_updated: 10:56 03 September 2020
---
<center><a href="/provinces" class="btn alt_btn_col">Data Per Province Page</a></center> 
Click the above button to be taken to a page showing Covid-19 data per province. 

___

<br>
These charts are all interactive. Mouse over an aspect of the chart to see more info, or if you are on mobile tap.

# Summary
___

<!--| | Total | Change | Interval of Change | Sources | -->

<div>
    <table class = "centred">
        <thead>
            <tr class = "header">
                <th></th>
                <th>Total</th>
                <th>Change</th>
                <th>Dates*</th>
                <th>Sources</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="index">Cases</td>
                <td id = "tot_confirmed_td" class="bold"></td>
                <td id = "change_confirmed_td" class="bold"></td>
                <td id = "change_interval_confirmed_td"></td>
                <td id = "sources_confirmed_td"></td>
            </tr>
            <tr>
                <td class="index">Active Cases</td>
                <td id = "tot_active_td" class="bold"></td>
                <td id = "change_active_td" class="bold"></td>
                <td id = "change_interval_active_td"></td>
                <td id = "sources_active_td">**</td>
            </tr>
            <tr>
                <td class="index">Tests</td>
                <td id = "tot_tests_td" class="bold"></td>
                <td id = "change_tests_td" class="bold"></td>
                <td id = "change_interval_tests_td"></td>
                <td id = "sources_tests_td"></td>
            </tr>
            <tr>
                <td class="index">Recoveries</td>
                <td id = "tot_recoveries_td" class="bold"></td>
                <td id = "change_recoveries_td" class="bold"></td>
                <td id = "change_interval_recoveries_td"></td>
                <td id = "sources_recoveries_td"></td>
            </tr>
            <tr>
                <td class="index">Deaths</td>
                <td id = "tot_deaths_td" class="bold"></td>
                <td id = "change_deaths_td" class="bold"></td>
                <td id = "change_interval_deaths_td"></td>
                <td id = "sources_deaths_td"></td>
            </tr>
        </tbody>
    </table>
</div>
\* Dates specifies the dates to which the data corresponds to, i.e. change is calculated using the difference of the 
values between the two dates and total corresponds to the latest date.
<br>
\** The sources used for calculating active cases is the same as that for cases, recoveries and deaths.

<!--<div>
<table class = "centred">
    <thead>
        <tr class="header">
            <th></th>
            <th>Cases</th>
            <th>Active Cases</th>
            <th>Tests</th>
            <th>Recoveries</th>
            <th>Deaths</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="index">Total</td>
            <td id = "tot_cases_td"></td>
            <td id = "tot_active_td"></td>
            <td id = "tot_tests_td"></td>
            <td id = "tot_recoveries_td"></td>
            <td id = "tot_deaths_td"></td>
        </tr>
        <tr>
            <td class="index">Change</td>
            <td id = "change_cases_td"></td>
            <td id = "change_active_td"></td>
            <td id = "change_tests_td"></td>
            <td id = "change_recoveries_td"></td>
            <td id = "change_deaths_td"></td>
        </tr>
    </tbody>
</table>
</div>-->

<!--
# Total Cases & Tests
**630 595 Cases (+2 336 change) | 3 726 721 Tested (+21 313 change)**
<br><br>

___

<br>

# Total Deaths & Recoveries
**14 389 Deaths (+126 change) | 553 456 Recoveries (+3 463 change)** 
<br><br>

___

### Total Deaths & Recoveries
<div class="iframeDiv" align="center">
    <iframe class="lazy pieChart" data-src="tot_recovered_deaths.html" scrolling="no" frameborder="0"></iframe>
</div>-->

# Testing & Cases Over Time
___
## Cumulative
### Date vs Cumulative No of Tests & Positive Cases 
<div id = "cumCasesTestsLineGraphDiv"></div>

### Date vs Cumulative No of Positive Cases
<div id = "cumCasesLineGraphDiv"></div>
[What “flattening the curve” means and why it’s so important.](https://sacoronavirus.co.za/2020/03/22/what-flattening-the-curve-means-and-why-its-so-important/) - COVID-19 Corona Virus South African Resource Portal

### Date vs Cumulative No of Active Cases
Active cases are cases where there has not yet been an outcome. I.e. confirmed cases - recoveries - deaths.
<div id = "cumActiveLineGraphDiv"></div>

### Date vs Ratio of Positive Cases To Test Conducted
i.e. positive cases divided by tests conducted. 
<div id = "cumCasesTestsRatioLineGraphDiv"></div>

## Daily Change
### Date vs Daily Change in Positive Cases & Tests
<div id = "dailyCasesTestsLineGraphDiv"></div>

### Date vs Daily Change in Positive Cases
<div id = "dailyCasesLineGraphDiv"></div>

### Date vs Daily Change in Active Cases
<div id = "dailyActiveLineGraphDiv"></div>

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
<div id = "cumRecoveriesDeathsLineGraphDiv"></div>

### Date vs Cumulative No of Deaths
<div id = "cumDeathsLineGraphDiv"></div>

### Date vs Ratio of Deaths & Recoveries To Confirmed Cases
i.e. deaths divided by confirmed cases and recoveries divided by confirmed cases. 
<div id = "cumDeathsRecoveriesCasesRatioLineGraphDiv"></div>

## Daily Change
### Date vs Daily Change in Recoveries & Deaths
<!--<div class="iframeDiv" align="center">
    <iframe class="lazy" data-src="daily_deaths_recovered.html" scrolling="no" frameborder="0"></iframe>
</div>-->
<div id = "dailyRecoveriesDeathsLineGraphDiv"></div>

### Date vs Daily Change in Deaths
<!--<div class="iframeDiv" align="center">
    <iframe class="lazy" data-src="daily_deaths.html" scrolling="no" frameborder="0"></iframe>
</div>-->
<div id = "dailyDeathsLineGraphDiv"></div>

<!--
<br>
**Data last updated: 10:56 03 September 2020**
-->

{% include_relative _includes/footer.md %}

<script src = "js/graphs.js"></script>
<script src = "js/home.js"></script>
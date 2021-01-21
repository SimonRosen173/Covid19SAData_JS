---
layout: default
title: Covid-19 SA Provincial Data
description: South African Provincial Covid-19 data & visualisations. <br>Contains data for confirmed cases, tests, recoveries and deaths by province.
author: Simon Rosen
last_updated: 10:56 03 September 2020
---

<center><a href="/" id = "home_page_btn" class="btn alt_btn_col">Home</a></center>

# Summary
___

<table>
<thead>
	<tr class="header">
		<th>Province</th>
		<th>Cases</th>
		<th>Cases <br> Change</th>
		<th>Recoveries</th>
		<th>Recoveries <br> Change</th>
		<th>Deaths</th>
		<th>Deaths <br> Change</th>
        <th>Active</th>
		<th>Active <br> Change</th>
	</tr>
</thead>
<tbody>
	<tr class="highlight-hover">
		<td class="index">Eastern Cape</td>
        <td id = "tot_confirmed_ec_td" class="bold">   ...   </td>
        <td id = "change_confirmed_ec_td" class="bold">   ...   </td>
        <td id = "tot_recoveries_ec_td" class="bold">   ...   </td>
        <td id = "change_recoveries_ec_td" class="bold">   ...   </td>
        <td id = "tot_deaths_ec_td" class="bold">   ...   </td>
        <td id = "change_deaths_ec_td" class="bold">   ...   </td>
        <td id = "tot_active_ec_td" class="bold">   ...   </td>
        <td id = "change_active_ec_td" class="bold">   ...   </td>
	</tr>
	<tr class="highlight-hover">
		<td class="index">Free State</td>
        <td id = "tot_confirmed_fs_td" class="bold">   ...   </td>
        <td id = "change_confirmed_fs_td" class="bold">   ...   </td>
        <td id = "tot_recoveries_fs_td" class="bold">   ...   </td>
        <td id = "change_recoveries_fs_td" class="bold">   ...   </td>
        <td id = "tot_deaths_fs_td" class="bold">   ...   </td>
        <td id = "change_deaths_fs_td" class="bold">   ...   </td>
        <td id = "tot_active_fs_td" class="bold">   ...   </td>
        <td id = "change_active_fs_td" class="bold">   ...   </td>
	</tr>
	<tr class="highlight-hover">
		<td class="index">Gauteng</td>
        <td id = "tot_confirmed_gp_td" class="bold">   ...   </td>
        <td id = "change_confirmed_gp_td" class="bold">   ...   </td>
        <td id = "tot_recoveries_gp_td" class="bold">   ...   </td>
        <td id = "change_recoveries_gp_td" class="bold">   ...   </td>
        <td id = "tot_deaths_gp_td" class="bold">   ...   </td>
        <td id = "change_deaths_gp_td" class="bold">   ...   </td>
        <td id = "tot_active_gp_td" class="bold">   ...   </td>
        <td id = "change_active_gp_td" class="bold">   ...   </td>
	</tr>
	<tr class="highlight-hover">
		<td class="index">KwaZulu-Natal</td>
        <td id = "tot_confirmed_kzn_td" class="bold">   ...   </td>
        <td id = "change_confirmed_kzn_td" class="bold">   ...   </td>
        <td id = "tot_recoveries_kzn_td" class="bold">   ...   </td>
        <td id = "change_recoveries_kzn_td" class="bold">   ...   </td>
        <td id = "tot_deaths_kzn_td" class="bold">   ...   </td>
        <td id = "change_deaths_kzn_td" class="bold">   ...   </td>
        <td id = "tot_active_kzn_td" class="bold">   ...   </td>
        <td id = "change_active_kzn_td" class="bold">   ...   </td>
	</tr>
	<tr class="highlight-hover">
		<td class="index">Limpopo</td>
        <td id = "tot_confirmed_lp_td" class="bold">   ...   </td>
        <td id = "change_confirmed_lp_td" class="bold">   ...   </td>
        <td id = "tot_recoveries_lp_td" class="bold">   ...   </td>
        <td id = "change_recoveries_lp_td" class="bold">   ...   </td>
        <td id = "tot_deaths_lp_td" class="bold">   ...   </td>
        <td id = "change_deaths_lp_td" class="bold">   ...   </td>
        <td id = "tot_active_lp_td" class="bold">   ...   </td>
        <td id = "change_active_lp_td" class="bold">   ...   </td>
	</tr>
	<tr class="highlight-hover">
		<td class="index">Mpumalanga</td>
        <td id = "tot_confirmed_mp_td" class="bold">   ...   </td>
        <td id = "change_confirmed_mp_td" class="bold">   ...   </td>
        <td id = "tot_recoveries_mp_td" class="bold">   ...   </td>
        <td id = "change_recoveries_mp_td" class="bold">   ...   </td>
        <td id = "tot_deaths_mp_td" class="bold">   ...   </td>
        <td id = "change_deaths_mp_td" class="bold">   ...   </td>
        <td id = "tot_active_mp_td" class="bold">   ...   </td>
        <td id = "change_active_mp_td" class="bold">   ...   </td>
	</tr>
	<tr class="highlight-hover">
		<td class="index">Northern Cape</td>
        <td id = "tot_confirmed_nc_td" class="bold">   ...   </td>
        <td id = "change_confirmed_nc_td" class="bold">   ...   </td>
        <td id = "tot_recoveries_nc_td" class="bold">   ...   </td>
        <td id = "change_recoveries_nc_td" class="bold">   ...   </td>
        <td id = "tot_deaths_nc_td" class="bold">   ...   </td>
        <td id = "change_deaths_nc_td" class="bold">   ...   </td>
        <td id = "tot_active_nc_td" class="bold">   ...   </td>
        <td id = "change_active_nc_td" class="bold">   ...   </td>
	</tr>
	<tr class="highlight-hover">
		<td class="index">North West</td>
        <td id = "tot_confirmed_nw_td" class="bold">   ...   </td>
        <td id = "change_confirmed_nw_td" class="bold">   ...   </td>
        <td id = "tot_recoveries_nw_td" class="bold">   ...   </td>
        <td id = "change_recoveries_nw_td" class="bold">   ...   </td>
        <td id = "tot_deaths_nw_td" class="bold">   ...   </td>
        <td id = "change_deaths_nw_td" class="bold">   ...   </td>
        <td id = "tot_active_nw_td" class="bold">   ...   </td>
        <td id = "change_active_nw_td" class="bold">   ...   </td>
	</tr>
	<tr class="highlight-hover">
		<td class="index">Western Cape</td>
        <td id = "tot_confirmed_wc_td" class="bold">   ...   </td>
        <td id = "change_confirmed_wc_td" class="bold">   ...   </td>
        <td id = "tot_recoveries_wc_td" class="bold">   ...   </td>
        <td id = "change_recoveries_wc_td" class="bold">   ...   </td>
        <td id = "tot_deaths_wc_td" class="bold">   ...   </td>
        <td id = "change_deaths_wc_td" class="bold">   ...   </td>
        <td id = "tot_active_wc_td" class="bold">   ...   </td>
        <td id = "change_active_wc_td" class="bold">   ...   </td>
	</tr>
	<tr class="highlight-hover">
		<td class="index">Unknown</td>
        <td id = "tot_confirmed_unk_td" class="bold">   ...   </td>
        <td id = "change_confirmed_unk_td" class="bold">   ...   </td>
        <td id = "tot_recoveries_unk_td" class="bold">   ...   </td>
        <td id = "change_recoveries_unk_td" class="bold">   ...   </td>
        <td id = "tot_deaths_unk_td" class="bold">   ...   </td>
        <td id = "change_deaths_unk_td" class="bold">   ...   </td>
        <td id = "tot_active_unk_td" class="bold">   ...   </td>
        <td id = "change_active_unk_td" class="bold">   ...   </td>
	</tr>
	<tr class="highlight-hover">
		<td class="index total">Total</td>
        <td id = "tot_confirmed_sa_td" class="bold total">   ...   </td>
        <td id = "change_confirmed_sa_td" class="bold total">   ...   </td>
        <td id = "tot_recoveries_sa_td" class="bold total">   ...   </td>
        <td id = "change_recoveries_sa_td" class="bold total">   ...   </td>
        <td id = "tot_deaths_sa_td" class="bold total">   ...   </td>
        <td id = "change_deaths_sa_td" class="bold total">   ...   </td>
        <td id = "tot_active_sa_td" class="bold total">   ...   </td>
        <td id = "change_active_sa_td" class="bold total">   ...   </td>
	</tr>
</tbody>
</table>

# Total & Latest Change in Cases

___

### Total Cases Per Province

<div class = "pie-chart" id = "totCasesPerProvPieChartDiv"></div>

### Latest Change in Cases Per Province

<div class = "pie-chart" id = "changeCasesPerProvPieChartDiv"></div>

<!--# Total Tests
___

### Total Tests Per Province
<div class="iframeDiv" align="center">
    <iframe class="lazy pieChart" data-src="tot_tests_per_province.html" scrolling="no" frameborder="0"></iframe>
</div>
Tests per province data is for **28 May 2020**. This is when the data was last released.
-->

# Total & Latest Change in Recoveries

___

### Total Recoveries Per Province
<div class = "pie-chart" id = "totRecoveriesPerProvPieChartDiv"></div>

### Latest Change in Recoveries Per Province
<div class = "pie-chart" id = "changeRecoveriesPerProvPieChartDiv"></div>

# Total & Latest Change in Deaths
___

### Total Deaths Per Province
<div class = "pie-chart" id = "totDeathsPerProvPieChartDiv"></div>

### Latest Change in Deaths Per Province
<div class = "pie-chart" id = "changeDeathsPerProvPieChartDiv"></div>

# Cases Over Time
___
Note: You can click on provinces in the legend to hide or show them on the graph.
### Date vs No of Positive Cases Per Province
<div class="iframeDiv" align="center">
    <iframe class="lazy" data-src="date_vs_cases_per_province.html" scrolling="no" frameborder="0"></iframe>
</div>

### Date vs Daily Change of Positive Cases Per Province
<div class="iframeDiv" align="center">
    <iframe class="lazy" data-src="date_vs_daily_cases_per_province.html" scrolling="no" frameborder="0"></iframe>
</div>

### Date vs No of Positive Cases Per Province As Percent of Province's Population
<div class="iframeDiv" align="center">
    <iframe class="lazy" data-src="date_vs_cases_perc_pop_per_province.html" scrolling="no" frameborder="0"></iframe>
</div>
**Populations per province are shown the bottom of this page**

# Recoveries Over Time
___
### Date vs No of Recoveries Per Province
<div class="iframeDiv" align="center">
    <iframe class="lazy" data-src="date_vs_recoveries_per_province.html" scrolling="no" frameborder="0"></iframe>
</div>

### Date vs Daily Change of Recoveries Per Province
<div class="iframeDiv" align="center">
    <iframe class="lazy" data-src="date_vs_daily_recoveries_per_province.html" scrolling="no" frameborder="0"></iframe>
</div>

### Date vs No of Recoveries Per Province As Percent of Province's Population
<div class="iframeDiv" align="center">
    <iframe class="lazy" data-src="date_vs_recoveries_perc_pop_per_province.html" scrolling="no" frameborder="0"></iframe>
</div>
**Populations per province are shown at the bottom of this page**

# Deaths Over Time
___
### Date vs No of Deaths Per Province
<div class="iframeDiv" align="center">
    <iframe class="lazy" data-src="date_vs_deaths_per_province.html" scrolling="no" frameborder="0"></iframe>
</div>

### Date vs Daily Change of Deaths Per Province
<div class="iframeDiv" align="center">
    <iframe class="lazy" data-src="date_vs_daily_deaths_per_province.html" scrolling="no" frameborder="0"></iframe>
</div>

### Date vs No of Deaths Per Province As Percent of Province's Population
<div class="iframeDiv" align="center">
    <iframe class="lazy" data-src="date_vs_deaths_perc_pop_per_province.html" scrolling="no" frameborder="0"></iframe>
</div>

## Population Per Province

___

<table>
<thead>
	<tr class="header">
		<th>Province</th>
		<th>Population</th>

	</tr>
</thead>
<tbody>
	<tr>
		<td class="index" markdown="span">Eastern Cape</td>
		<td  markdown="span">6 712 276</td>
	</tr>
	<tr>
		<td class="index" markdown="span">Free State</td>
		<td  markdown="span">2 887 465</td>
	</tr>
	<tr>
		<td class="index" markdown="span">Gauteng</td>
		<td  markdown="span">15 176 115</td>
	</tr>
	<tr>
		<td class="index" markdown="span">KwaZulu-Natal</td>
		<td  markdown="span">11 289 086</td>
	</tr>
	<tr>
		<td class="index" markdown="span">Limpopo</td>
		<td  markdown="span">5 982 584</td>
	</tr>
	<tr>
		<td class="index" markdown="span">Mpumalanga</td>
		<td  markdown="span">4 592 187</td>
	</tr>
	<tr>
		<td class="index" markdown="span">North West</td>
		<td  markdown="span">4 072 160</td>
	</tr>
	<tr>
		<td class="index" markdown="span">Northern Cape</td>
		<td  markdown="span">1 263 875</td>
	</tr>
	<tr>
		<td class="index" markdown="span">Western Cape</td>
		<td  markdown="span">6 844 272</td>
	</tr>
</tbody>
</table>

{% include_relative _includes/footer.md %}

<script src = "../js/graphs.js"></script>
<script src = "../js/provincial.js"></script>


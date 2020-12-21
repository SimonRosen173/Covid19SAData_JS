var data_base_url = 'https://raw.githubusercontent.com/SimonRosen173/Covid19SAData_Data/master/data/';

function get_summary_data(){
    var csv_name = 'gen_data.csv';
    Plotly.d3.csv(data_base_url + csv_name, function(data){set_summary_data_fields(data[0])});
}

function set_summary_data_fields(data){

    // for (data_key in data){
    //     console.log(data_key, data[data_key]);
    // }
    Object.entries(data).forEach(([key, value]) => {

        console.log(key, value);
    });
    // console.log(data);
}

get_summary_data();
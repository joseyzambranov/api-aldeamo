const axios = require('axios');
require('dotenv').config()
const url = `${process.env.URL}`
const header = { headers: { 'Authorization': `Basic ${process.env.TOKEN}` } }

let message = "prueba 8"
//let message1 = "prueba aldeamo 8"
let link = "https://www.freecodecamp.org/news/the-linux-commands-handbook/"
let data = {
        "country": "51",
        "message": message,
        "addresseeList": []
    }
/*
let number =[
    "953293108",  
    "949911603",  
    "942393266",  
    "987300897",  
    "917759014",  
    "961741567",   
    "949911693",
    "919596382",
    "931746561"


]
*/

let number = [

    '953293108',
    '949911603',
    '987300897',
    '917759014',
    '949911693',
    '919596382',
    '931746561',
    '953293108',
    '949911603',
    '987300897',
    '917759014',
    '949911693',
    '919596382',
    '931746561'

]

for(const property in number){

    data.addresseeList.push({
        "mobile": number[property],
        "url": link,
        "correlationLabel": `C${property}`
        })
}

//console.log(data)    

const sendPostRequest = async () => {
    try {
        const resp = await axios.post(url, data , header );
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

sendPostRequest();
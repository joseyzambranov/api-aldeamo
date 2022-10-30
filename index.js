const axios = require('axios');
require('dotenv').config()
const url = `${process.env.URL}`
const header = { headers: { 'Authorization': `Basic ${process.env.TOKEN}` } }

let message = "prueba aldeamo 4"

let data = {
        "country": "51",
        "message": message,
        "addresseeList": []
    }

let number =[
    "953293108",
    "949911603",
    "942393266",
    "987300897",
    "917759014",
    "961741567"
] 

for(let i of number){

    data.addresseeList.push({
        "mobile": i,
        "url":"https://www.freecodecamp.org/news/the-linux-commands-handbook/"
        })
}

console.log(data)    

const sendPostRequest = async () => {
    try {
        const resp = await axios.post(url, data , header );
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

//sendPostRequest();
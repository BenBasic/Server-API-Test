apiKey = "ae6d8ad7-7180-4d04-9a45-cdcf2e70eeff";

async function getUVIndex() {
    UVIndexURL = "https://ckan0.cf.opendata.inter.prod-toronto.ca/api/3/action/package_show?id=" + apiKey;
    fetch(UVIndexURL, {
        mode:'no-cors',
        method: "get",
        headers:{
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        }

    })
    .then( UVResponse => {
        return UVResponse.json();
    })
    .then( UVData => {
        console.log(UVData);

    })
}

getUVIndex();
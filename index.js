async function getCovidNumbers() {
    try {
      // API call to get the covid data for Belgium
      const data = fetch(
        `https://covid19-api.com/country?name=Belgium&format=json`
      )
      const response = await data
      const jsonResponse = await response.json()

      // Updating the covidNumbers state with the response from the API
      
        console.log(jsonResponse)
        const utcDate1 = moment(jsonResponse[0].lastUpdate).format('LL');
        
        const country= document.getElementById("country");
        const confirmed= document.getElementById("confirmed");
        const recovered= document.getElementById("recovered");
        const critical= document.getElementById("critical");
        const lastupdate= document.getElementById("lastupdate");


        country.innerHTML=`Country: ${jsonResponse[0].country}`;
        confirmed.innerHTML=`Confirmed COVID cases : ${jsonResponse[0].confirmed}`;
        recovered.innerHTML=`Confirmed COVID recovered: ${jsonResponse[0].recovered}`;
        critical.innerHTML=`Covid patients in crititical situation currently in Belgian hospitals: ${jsonResponse[0].critical}`;
        
        lastupdate.innerHTML=`Last updated: ${utcDate1}`;
      
    } catch (error) {
      console.error(
        error
      )
    }
  }
  getCovidNumbers()
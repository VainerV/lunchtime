//retreave API
function getDataAPI(search) {
  console.log({
    q: search,
      lat: parseFloat(STATE.location.places[0].latitude),
      lon: parseFloat(STATE.location.places[0].longitude),
    
  });
// retreave zomato API
  $.ajax({
    type: "GET",
    url: "https://developers.zomato.com/api/v2.1/search",
    headers: {
      "user-key": API_KEY
    },
    data: {
      q: search,
      lat: parseFloat(STATE.location.places[0].latitude),
      lon: parseFloat(STATE.location.places[0].longitude),
      
    },
    
    success: function(search_data) {
      // sending AJAX retrved data to sort and get reqired fields
      STATE.searchResult = search_data;
      processAPI_DATA();
      showSearchResult();
    },
    error: function(error) {
      console.log("some error");
    }
  });
}

// retrave zipcode API 

function getDataAPIformZIPCODE() {
  $.ajax({
    type: "GET",
    url: `https://api.zippopotam.us/us/${STATE.zipCode}`,
    success: function(search_data) {
      // sending AJAX retrved data to sort and get reqired fields
      STATE.location = search_data;
      console.log(STATE.location);
    },
    error: function(error) {
      console.log("some error");
    }
  });
}

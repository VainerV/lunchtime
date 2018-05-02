//retreave API
function getDataAPI(search) {
  
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
      console.log(search_data);
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


// retreave cuisine API
function cuisineAutoComlete(){
  $.ajax({
    type: "GET",
    url: "https://developers.zomato.com/api/v2.1/cuisines",
    headers: {
      "user-key": API_KEY
    },
    data: {
      lat: parseFloat(STATE.location.places[0].latitude),
      lon: parseFloat(STATE.location.places[0].longitude),
      
    },
    
    success: function(search_data) {
      //console.log(search_data);
      STATE.searchCuisine = search_data;
      cuisinListToString();
      showCuisineAutocomlete();
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
      //console.log(STATE.location);
      STATE.showCity = true;
      cuisineAutoComlete();

      render();
    },
    error: function(error) {
      console.log("some error");
    }
  });
}

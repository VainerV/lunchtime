//retreave API
function getDataAPI(search) {
  $.ajax({
    type: "POST",
    url: "https://developers.zomato.com/api/v2.1/search",
    headers: {
      "user-key": API_KEY
    },
    data: {
      q: search
    },
    success: function(search_data) {
      // sending AJAX retrved data to sort and get reqired fields
      STATE.searchResult = search_data;
      processAPI_DATA();
    },
    error: function(error) {
      console.log("some error");
    }
  });
}


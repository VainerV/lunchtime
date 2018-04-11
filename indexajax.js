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
     

      $("#show-search-result").html(String(search_data));

      //console.log(search_data);
    },
    error: function(error) {
      console.log("some error");
    }
  });
}

/*$('.js-search-form').on('submit', function(event){
        event.preventDefault();
        let searchRequest  = $(".search-text-field").val();
        let type  = $("#type-select").val();
        getDataFromApi(searchRequest, type, function (data){
            console.log(searchRequest);
            console.log(type);
        result = data;
        console.log(result);
       
       } )
      });

    function getDataFromApi(searchTerm, type, callback) {
        const query = {
           query: searchTerm,
           apikey: NAPSTER_QUERY,
           type: type,
        }
        
        $.getJSON(NAPSTER_BASE_URL, query, callback)
        .fail(showErr);
      } */

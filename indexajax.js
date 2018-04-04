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
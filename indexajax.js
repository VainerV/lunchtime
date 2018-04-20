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

      $("#show-search-result").html(processAPI_DATA(search_data));

      //console.log(search_data);
    },
    error: function(error) {
      console.log("some error");
    }
  });
}

// Pulling info from API
function processAPI_DATA(data) {
  let restaurantArray = data.restaurants.map(currentRestaurant => {
    let restaurant = currentRestaurant.restaurant;
    return {
      name: restaurant.name,
      address: restaurant.location.address,
      thumb: restaurant.thumb,
      priceRange: restaurant.price_range,
      ratings: restaurant.user_rating.aggregate_rating
    };
  });
  return outPutDATAtoHTML(restaurantArray);
}

function outPutDATAtoHTML(restaurantArray) {
  return restaurantArray.map(singleRest => {
    return `<div class="col-xs-auto col-sm-auto col-md-auto col-lg-auto">
    <img id="thumbnail" src="${singleRest.thumb}" alt="Restarant">
    </div>
   <div class="col-xs col-sm col-md col-lg text-color">
     Name: ${singleRest.name}
    <br> Address: ${singleRest.address}
    <br> Price Range <img class="raiting-size" src="images\dollar.png" alt="Price rating"> ${
      singleRest.priceRange
    }
<br> Rating  <img class="raiting-size" src="images\star.png" alt="Restaurant rating"> ${
      singleRest.ratings
    }

</div>`;
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

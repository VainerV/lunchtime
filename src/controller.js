// Enables all listeners (controler)
function enableListeners() {
    storeRestName();
    submitZipCode();
    randomResultUpdate();
    checkSearchCriteria();
  }

  function submitZipCode() {
    // enable restarant field and submit zipcode
    $("#submit-location-search").on("click", event => {
      event.preventDefault();
  
      updateZipCodeValue($("#zipcode-search").val());
      getDataAPIformZIPCODE();
      STATE.mainSearch = true;
      STATE.showZipCode = false;
      render();
    });
  }
  
  
  
  // Update STATE zipcode Value controller
  function updateZipCodeValue(zipCodeValue) {
    STATE.zipCode = zipCodeValue;
    render();
  }
  
  
  
  // function that checks is zipcode entered have numerical value controller
  function isNumberKey() {
    $("#zipcode-search").keypress(event => {
      let charCode = event.which ? event.which : event.keyCode;
      // console.log(event.which, event.keyCode);
      if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  
      return true;
    });
  }
  
  // Check search Criteria (controller)
  function checkSearchCriteria() {
    $("input[name='searchcriteria']").click(function() {
      let searchCriteria = $("input[name='searchcriteria']:checked").val();
      updateSearchCreteria(searchCriteria);
  
      render();
    });
  }

  // Stores entered restorantname(controller)
function storeRestName() {
    $("#submit-rest-search").on("click", event => {
      event.preventDefault();
      updateRestourantValue($("#single-search").val());
      getDataAPI($("#single-search").val());
    });
  }
  // Update STATE rest Value controller
  function updateRestourantValue(restaurantValue) {
    STATE.restaurantName = restaurantValue;
    render();
  }
  
  // update randome search choices (controller)
  function randomResultUpdate() {
    $("#submit-random-search").on("click", event => {
      event.preventDefault();
      updateRandomValue(
        $("#random-search1").val(),
        $("#random-search2").val(),
        $("#random-search3").val(),
        $("#random-search4").val()
      );
    });
  }
  
  // assignes values to STATe
  function updateRandomValue(
    randomValue1,
    randomValue2,
    randomValue3,
    randomValue4
  ) {
    STATE.choice1 = randomValue1;
    STATE.choice2 = randomValue2;
    STATE.choice3 = randomValue3;
    STATE.choice4 = randomValue4;
    render();
    //console.log(STATE)
  }
  
  // Pulling info from API controller
  function processAPI_DATA() {
    STATE.searchResult = STATE.searchResult.restaurants.map(currentRestaurant => {
      let restaurant = currentRestaurant.restaurant;
  
      return {
        name: restaurant.name,
        address: restaurant.location.address,
        thumb: restaurant.thumb,
        priceRange: restaurant.price_range,
        ratings: restaurant.user_rating.aggregate_rating
      };
    });
  
    render();
  }
  
  
  
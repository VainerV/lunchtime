// Main render function all view functions
function render() {
    showHideRandomSearchForm();
    outPutDATAtoHTML();
  
    zipCodeDisplay();
    mainSearchDisplay();
    showCity();
  }

function hideSearchResult() {
    $("#show-search-result").hide();
  }
  
  function showSearchResult() {
    $("#show-search-result").show();
  }
  
  // hide main search upon load (view)
  function hideMainSearch() {
    $("#main-search").hide();
    $("#rulette-search").hide();
  }
  
  // Show Hide random search form (view)
  function showHideRandomSearchForm() {
    if (STATE.searchOption !== 4) {
      $("#rulette-search").hide();
      $("#single-restaurant-search").show();
    } else {
      $("#rulette-search").show();
      $("#single-restaurant-search").hide();
    }
  }

  function zipCodeDisplay() {
    if (STATE.showZipCode) {
      $("#location").show();
    } else {
      $("#location").hide();
    }
  }
  
  function mainSearchDisplay() {
    if (STATE.mainSearch) {
      $("#main-search").show();
    } else {
      $("#main-search").hide();
    }
  }

  function showCity() {
    console.log(STATE.location);
  
    if (STATE.showCity) {
      let city = ` <div class="col text-color"> City: ${
        STATE.location.places[0]["place name"]
      }</div>`;
      $("#city-display").html(city);
    }
  }

  // output data to the PAge
function outPutDATAtoHTML() {
    let displayResult = STATE.searchResult.map(singleRest => {
      return `<div class="col-12">
    
      <div class="col text-color">
       <p>Name: ${singleRest.name} </p>
       <p>Address: ${singleRest.address}</p>
       <p> Price Range <img class="raiting-size" src="images/dollar.png" alt="Price rating"> ${
         singleRest.priceRange
       } </p>
       <p>Rating  <img class="raiting-size" src="images/star.png" alt="Restaurant rating"> ${
         singleRest.ratings
       }</p>
      </div>
      <hr>
  </div>`;
    });
    $("#show-search-result").html(displayResult);
  }
  
// Main render function all view functions
function render() {
    showHideRandomSearchForm();
    outPutDATAtoHTML();
    zipCodeDisplay();
    mainSearchDisplay();
    showCity();
   //noResultFound();
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
    
    if (STATE.showCity) {
      let city = ` <div class="col text-color"> City: ${
        STATE.location.places[0]["place name"]
      } <a href src="index.html">Change the City</a></div>`;
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
  
  
function  clearTextFields(){
  $("#single-search").val("");
  $("#random-search1").val("");
  $("#random-search2").val("");
  $("#random-search3").val("");
  $("#random-search4").val("");
}

/*function noResultFound(){
  if(STATE.searchResult.length == 0){
    let = warrningMessage = `<div>No reslts are found, please enter a different cuisine!</div>`
    //clearOutPutDataToHTML();
    $("#show-search-result").html(warrningMessage);
  }
 }*/
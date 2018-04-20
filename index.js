
const STATE = {
  enableField: true,
  zipCode: "",
  byName: "",
  byCuisine: "",
  random: "",
  roulette: "",
  restaurantName: "",
  choice1: "",
  choice2: "",
  choice3: "",
  choice4: "",
  searchResult: [],
  searchOption: 1,
};

const searchOpt = {
  1: "byName",
  2: "byCuisine",
  3: "random",
  4: "roulette",
}


$(document).ready(function () {
  enableListeners();
  isNumberKey();
  render();
});

// Main render function all view functions
function render() {
  onOffSearchField();
  onOffSearchButton();
  showHideRandomSearchForm();
  //console.log("my state", STATE);
}

// Enables all listeners (controler)
function enableListeners() {
  storeRestName();
  submitZipCode();
  randomResultUpdate();
  checkSearchCriteria();
}

// Show Hide random search form (view)
function showHideRandomSearchForm() {
  if (STATE.searchOption !== 4) {
    $("#rulette-search").hide();
    $("#single-restaurant-search").show();
  } 
  else {
    $("#rulette-search").show();
    $("#single-restaurant-search").hide();
  }
}

// Enable search fields (view)
function onOffSearchField() {
  $("#single-search").prop("disabled", STATE.enableField);
  $("#random-search1").prop("disabled", STATE.enableField);
  $("#random-search2").prop("disabled", STATE.enableField);
  $("#random-search3").prop("disabled", STATE.enableField);
  $("#random-search4").prop("disabled", STATE.enableField);
}

// Enable search button (view) !!!!!check on multiple clicks!!!
function onOffSearchButton() {
  $("#submit-rest-search").prop("disabled", STATE.enableField);
  $("#submit-random-search").prop("disabled", STATE.enableField);
}


// Changing State Enable fiels from false to true and oposite (controler);
function toggleSearchField() {
  STATE.enableField = !STATE.enableField;
  render();
}


function submitZipCode() {
  // enable restarant field and submit zipcode
  $("#submit-location-search").on("click", event => {
    event.preventDefault();
    toggleSearchField();
    //call zipcodaupdate to STATE
    updateZipCodeValue($("#zipcode-search").val())

  });
}

// Update STATE zipcode Value
function updateZipCodeValue(zipCodeValue) {
  STATE.zipCode = zipCodeValue;
  render();
}


// function that checks is zipcode entered have numerical value
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
  $("input[name='searchcriteria']").click(function () {
    let searchCriteria = $("input[name='searchcriteria']:checked").val();
    updateSearchCreteria(searchCriteria);
    
    render();

  });
}

// Update and store search criteria STATE (model)
function updateSearchCreteria(searchCriteria) {
  if (searchCriteria == "byname") {
    STATE.searchOption = 1;
  } else if (searchCriteria == "cuisine") {
    STATE.searchOption = 2;
  } else if (searchCriteria == "random") {
    STATE.searchOption = 3;
  } else if (searchCriteria == "roulette") {
    STATE.searchOption = 4;
  }

}

// converts option number to string name will aid to filter API (model)
function convertSearchToString() {
  return (searchOpt[STATE.searchOption]);
}



// Stores entered restorantname(controller)
function storeRestName() {
  $("#submit-rest-search").on("click", event => {
    event.preventDefault();
    updateRestourantValue($("#single-search").val());
    getDataAPI($("#single-search").val());
  });

}
// Update STATE zipcode Value
function updateRestourantValue(restaurantValue) {
  STATE.restaurantName = restaurantValue;
  render();
}


// update randome search choices (controller)
function randomResultUpdate() {
  $("#submit-random-search").on("click", event => {
    event.preventDefault();
    updateRandomValue($("#random-search1").val(), $("#random-search2").val(), $("#random-search3").val(), $("#random-search4").val())
  })

}

// assignes values to STATe
function updateRandomValue(randomValue1, randomValue2, randomValue3, randomValue4) {
  STATE.choice1 = randomValue1;
  STATE.choice2 = randomValue2;
  STATE.choice3 = randomValue3;
  STATE.choice4 = randomValue4;
  render();
  //console.log(STATE)
}

function submitSingleRestSearch(){

}
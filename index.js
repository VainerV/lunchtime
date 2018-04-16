const STATE = {
  enableField: true,
  zipCode: "",
  byName: true,
  byCuisine: false,
  random: false,
  restaurantName: "",
  choice1: "",
  choice2: "",
  choice3: "",
  choice4: "",
  searchResult: "",
};

$(document).ready(function () {
  enableListeners();
  isNumberKey();
  render();
});

// Main render function
function render() {
  onOffSearchField();
  onOffSearchButton();
  checkSearchCriteria();
  //console.log("my state", STATE);
}

// Enables all listeners (controler)
function enableListeners() {
  storeZipCode();
  submitZipCode();
  randomResultUpdate();
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


/*// Stores entered zipcode(controller)
  function storeZipCode() {
    $("#zipcode-search").change(event => {
      updateZipCodeValue(event.target.value);
         });

      }*/

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
  $('#search-creteria').change(function () {
    let searchCriteria = $("input[name='searchcriteria']:checked").val();
    updateSearchCreteria(searchCriteria);
    render();

  });
}

// Update and store search criteria (value)
function updateSearchCreteria(searchCriteria) {
  let searchResult = "";
  if (searchCriteria == "byname") {
    STATE.byName = true;
    STATE.byCuizine = false;
    STATE.random = false;
  } else if (searchCriteria == "cuisine") {
    STATE.byName = false;
    STATE.byCuisine = true;
    STATE.random = false;
  }
  if (searchCriteria == "random") {
    STATE.byName = false;
    STATE.byCuisine = false;
    STATE.random = true;
  }
}


// Stores entered restorantname(controller)
function storeZipCode() {
  $("#submit-rest-search").on("click", event => {
    event.preventDefault();
    updateRestourantValue($("#single-search").val());
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


// value
function updateRandomValue(randomValue1, randomValue2, randomValue3, randomValue4) {
  STATE.choice1 = randomValue1;
  STATE.choice2 = randomValue2;
  STATE.choice3 = randomValue3;
  STATE.choice4 = randomValue4;
  render();
  console.log(STATE)
}
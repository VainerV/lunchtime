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
  searchResult: ""
};

$(document).ready(function() {
  enableListeners();

  isNumberKey();
  render();
});

// Main render function
function render() {
  onOffSearchField();
  onOffSearchButton();
  //console.log("my state", STATE);
}

// Enables all listeners (controler)
function enableListeners() {
  storeZipCode();
  submitZipCode();
}

// Enable search fields (view)
function onOffSearchField() {
  $("#single-search").prop("disabled", STATE.enableField);
  $("#random-search1").prop("disabled", STATE.enableField);
  $("#random-search2").prop("disabled", STATE.enableField);
  $("#random-search3").prop("disabled", STATE.enableField);
  $("#random-search4").prop("disabled", STATE.enableField);
}

// Enable search button (view)
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
  });
}

// Stores entered zipcode(controller)
function storeZipCode() {
  $("#zipcode-search").change(event => {
    updateZipCodeValue(event.target.value);
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
    console.log(event.which, event.keyCode);
    if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;

    return true;
  });
}

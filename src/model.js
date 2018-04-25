const STATE = {
  enableField: true,
  showZipCode: true,
  showCity: false,
  mainSearch: false,
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
  searchResult: [
    {
      name: "",
      address: "",
      thumb: "",
      priceRange: "",
      ratings: ""
    }
  ],
  location: {
    lat: "",
    lon: ""
  },
  searchOption: 1
};

const searchOpt = {
  1: "byName",
  2: "byCuisine",
  3: "random",
  4: "roulette"
};

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
  return searchOpt[STATE.searchOption];
}

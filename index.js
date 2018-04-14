const STATE = {
  enableField: true,
  zipCode: ""
};


 
$(document).ready(function(){
    enableListeners();
    render();
});


// Main render function
function render() {
    onOffSearchField();
    console.log("my state" , STATE);
  }

// Enables all listeners (controler)
function enableListeners(){
    storeZipCode();
    submitZipCode();
    
}


// Enable search fields (view)
function onOffSearchField() {
  $("#single-search").prop("disabled", STATE.enableField);
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
function storeZipCode(){ 
    $("#zipcode-search").change( (event) => {
     updateZipCodeValue(event.target.value);
  });
}

// Update STATE zipcode Value
function updateZipCodeValue(zipCodeValue){
    STATE.zipCode = zipCodeValue;
    render();
}




/*$(document).ready(function(){

    $("#submit-location-search").on("click",(event) => {
        event.preventDefault();
        $(".rest-search").prop("disabled", false);
     })

     restaurantSearch();

});


function restaurantSearch(){
    $("#submit-rest-search").on("click",(event) => {
        event.preventDefault();
        let name = $("single-search").val();
        getDataAPI(name);

     })


}

/*function showResult(data){
    let fakeHTML = `<p> ${Name}: Belagios Pizza /n ${address}: 123 Main St. Portland</p>`
    return ()
}*/

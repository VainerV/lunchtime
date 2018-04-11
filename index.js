$(document).ready(function(){

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

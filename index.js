$(document).ready(function(){

    $("#submit-location-search").on("click",(event) => {
        event.preventDefault();
        $(".rest-search").prop("disabled", false);
     })

});


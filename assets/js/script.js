

//display current date with moment in header


//event listener for add button
$(".addButton").on("click", function(){
    $(".modal-bg").css("display","flex");
});
$(".close").on("click", function(event){
    event.preventDefault();
       $(".modal-bg").css("display", "none");
})
//header date
//$(".currentDate").text(moment().format('MMMM Do YYYY'));
//each click prompts to add time selector and text area
//each prompt comes with button to submit values to localStorage
//for each entry add create <div> element
//      create <p> with the text content getting input text from localStorage
//      with button toggle for completion 
//eventListener on completion toggle
//animate tag, to change whether current TODO or not
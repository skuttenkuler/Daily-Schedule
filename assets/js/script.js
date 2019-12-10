
$(document).ready(function(){


//display current date with moment in header
//header date
$(".currentDate").text(moment().format('MMMM Do YYYY'));

//event listener for add button
//each click prompts to add time selector and text area


function buildTodo(){
    const buildData = JSON.parse(localStorage.getItem("TODO"))
    console.log(buildData)
    todoTable = $("<table>");
    todoRow = $("<tr>");
    todoData = $("<td>");
    todoData.attr("id", "todo-data")
    seperator = $("<hr>")
    completeButton = $("<button>").text("Complete");
    completeButton.attr("id", "complete")
    todoData.text(buildData.start + " - " + buildData.end + " " + buildData.todo);
    todoRow.append(todoData, completeButton);

    todoTable.append(todoRow);
    $(".todoContainer").append(todoTable, seperator);
    $(".todoContainer").DataTable();
    

}    

//function to add activity to local storage

$(".addButton").on("click", function(){
    $(".modal-bg").css("display","flex");
});
$(".close").on("click", function(){
    
    $(".modal-bg").css("display", "none");
})
//each prompt comes with button to submit values to localStorage
$(".addActivityButton").on("click", function(event){
    event.preventDefault();
    $(".modal-bg").css("display", "none");
    let start = $("#startTime").val()
    //console.log(start)
    let end = $("#endTime").val()
    //console.log(end)
    let todo = $("#todo").val()

    //console.log(todo)
    let data = {
        "start":start,
        "end":end,
        "todo":todo}

    localStorage.setItem("TODO", JSON.stringify(data));
    buildTodo();
})

//eventListener on completion toggle
//animate tag, to change whether current TODO or not

$(function(){     
    var d = new Date(),        
        h = d.getHours(),
        m = d.getMinutes();
        minTime = '9:00am';
        maxTime = '5:00pm';
    if(h < 10) h = '0' + h; 
    if(m < 10) m = '0' + m; 
    $('input[type="time"][value=""]').each(function(){ 
      $(this).attr({'value': h + ':' + m});
    });
  });


});
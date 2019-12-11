
$(document).ready(function(){


//display current date with moment in header
//header date
// variables for time constraints
const minHour = 9;
const maxHour = 17;

//object to store all entries;
const activities = {};
let currentDate = getDate();
let hour = Hour();

renderTODOS();

function rederTODOS(){
    renderActivity();
    buildTodo();
    
}
function renderActivity(){
    if(Activity()){
        listItem = renderActivity();
    }
    if(!listItem[tody]) {
        listItem[today] = renderActivity();
        storeActivity();
    }
}
function renderHours(){
    const hours = {};
    for(let i = minHour; i <= maxHour; i++){
        hours[i] = "";
    }
    return hours;
}
//event listener for add button
//each click prompts to add time selector and text area


function buildTodo(){
    $(".todoContainer").empty();
    for(let i = minHour; i <= maxHour; i++){
        
        todoRow = $("<div>");
            todoRow.addClass("todo-row" + ppf);
            todoRow.attr("id", i);
        todoHour = $("<div>");
            todoHour.addClass("hour");
        todoSpan = $("<span>").text(formatHour(i));
        todoHour.append(todoSpan);



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
    
    
}    

// time function for past present and future in comparison to current hour
function ppf(i){
    if(i < hour){
        return "past";
    } else if(i == hour){
        return "present";
    } else if( i>hour){
        return "future"
    }
}
function getDate() {    
    return moment().format('YYYYMMDD');
}
function Hour(){
    return moment().format('h')
}
function formatHour(h){
    return moment(h, 'H').format('ha')
}
//localStorage
function storeLocal(){
    return localStorage.setItem("TODO" , JSON.stringify(data));
}
function getTODO(){
    return JSON.parse(localStorage.getItem("TODO"))
}

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

//////////  LISTENERS  //////////
//get current date and display
$(".currentDate").text(moment().format('MMMM Do YYYY'));
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
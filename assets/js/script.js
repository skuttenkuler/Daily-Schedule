
$(document).ready(function(){


//display current date with moment in header
//header date

//object to store all entries;
var activities = {};
let currentDate = presentDate();
let hour = Hour();

renderList();

function renderList(){
    renderTodo();
    buildTodo();
    
}
function renderTodo(){
    if(getTodo()){
        activities = getTodo();
    }
    if(!activities[currentDate]) {
        activities[currentDate] = renderHours();
        storeLocal();
    }
}
function renderHours(){
    let hours = {};
    for(let i = 9; i <= 17; i++){
        hours[i] = "";
    }
    return hours;
}
//event listener for add button
//each click prompts to add time selector and text area


function buildTodo(){
    //reset
    //$(".todoContainer").empty();
    //for loop for each entry
    for(let i = 9; i <= 17; i++){
        //create <div> for each row
        var input = $(".activity").val()
        todoRow = $("<div>");
            //add function and return value of past preset or future
            todoRow.addClass("todo-row");
            todoRow.attr("data-tense", ppf)
            //add index id to keep track of index textarea
            todoRow.attr("id", i);
        //create div for time(hour) associates with row
        todoHour = $("<div>");
            todoHour.addClass("hour");
            // add the displayed hour to the div
            todoSpan = $("<span>").text(formatHour(i));
            todoHour.append(todoSpan);
        //create textarea for activities
        todoText = $("<textarea>");
            //add cleass
            todoText.addClass("activity");
            //add index associated with time index
            todoText.attr("data-hour", i);
            todoText.attr("value", "");
            todoText.val(activities[currentDate][i]);
        saveButton = $("<button>").text("Add Activity");
        saveButton.attr("id", "add")
        
        todoRow.append(todoHour, todoText, saveButton);
        $(".todoContainer").append(todoRow);
        console.log(input)
        
    }
    
    
}   
function addActivity(){
    var hour = $(this).data().hour;
    activities[currentDate][hour] = $(".activity").val()
    //console.log(activities)
    storeLocal();
}

// time function for past present and future in comparison to current hour
function ppf(i){
    if(i < hour){
        return "past";
    } else if(i == hour){
        return "present";
    } else if(i > hour){
        return "future"
    }
}

function presentDate() {    
    return moment().format('YYYYMMDD');
}
function Hour(){
    return moment().format('k')
}
function formatHour(h){
    return moment(h, 'H').format('ha')
}
//////////  localStorage  //////////
function storeLocal(){
    return localStorage.setItem("TODO" , JSON.stringify(activities));
}
function getTodo(){
    return JSON.parse(localStorage.getItem("TODO"))
}

//get current date and display
$(".currentDate").text("Your Todo List for   " + moment().format('MMMM Do YYYY'));

/////////  Listeners /////////
$("#add").on("click", addActivity);
});

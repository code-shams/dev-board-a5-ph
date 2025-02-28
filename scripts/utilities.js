// *Current Date
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = months[new Date().getMonth()]; 
const day = days[new Date().getDay()];
const date = new Date().getDate();
const year = new Date().getFullYear();
// * Navbar Rightside buttons
const completedTasksCounter = document.getElementById("completed-tasks-counter");
const themeBtn = document.getElementById("theme-btn");
// * Task Information
const taskDecrement = document.getElementById("task-decrement");
const discoverBlog = document.getElementById("discover-blog");
const taskInformationDay = document.getElementById("task-information-day");
const taskInformationDate = document.getElementById("task-information-date");
taskInformationDay.innerText = day;
taskInformationDate.innerText = `${month} ${date} ${year}`;
// * Activity Log
const clearHistoryBtn = document.getElementById('clear-history-btn');
const activityLogBody = document.getElementById("activity-log-body")
// * Pending Tasks Container
const taskCompletedButtons = document.getElementsByClassName("task-btn");

// *For Adding Task History to Task Body Section
function addTaskHistory(taskId){
    const time = new Date();
    let hour = time.getHours();
    let amPm = "";
    if (hour >= 12){
        amPm = "PM";
        if (hour !== 12){
            hour = hour - 12;
        }
    }
    else{
        amPm = "AM";
        if (hour === 0) hour = 12;
    }
    const minute = time.getMinutes();
    let second = new Date().getSeconds();
    const currentTime = `${hour}:${minute}:${second} ${amPm}`;
    taskId = taskId.replace("btn", "task");
    const taskName = document.getElementById(taskId).innerText;
    const taskHistory = document.createElement('div');
    taskHistory.innerHTML = `
    <div class="bg-violet-50 p-2 rounded-lg mb-3">
        <p class="text-xs">You have Complete The Task ${taskName} at ${currentTime}</p>
    </div>
    `
    activityLogBody.appendChild(taskHistory);
    
}
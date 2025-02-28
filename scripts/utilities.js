// * Navbar Rightside buttons
const completedTasksCounter = document.getElementById("completed-tasks-counter");
const themeBtn = document.getElementById("theme-btn");
// * Task Information
const taskDecrement = document.getElementById("task-decrement");
const discoverBlog = document.getElementById("discover-blog");
const taskInformationDay = document.getElementById("task-information-day");
const taskInformationDate = document.getElementById("task-information-date");
// * Activity Log
const clearHistoryBtn = document.getElementById('clear-history-btn');
const activityLogBody = document.getElementById("activity-log-body")
// * Pending Tasks Container
const taskCompletedButtons = document.getElementsByClassName("task-btn");

// *For Adding Task History to Task Body Section
function addTaskHistory(taskId, time){
    taskId = taskId.replace("btn", "task");
    const taskName = document.getElementById(taskId).innerText;
    const taskHistory = document.createElement('div');
    taskHistory.innerHTML = `
    <div class="bg-violet-50 p-2 rounded-lg mb-3">
        <p class="text-xs">You have Complete The Task ${taskName} at ${time}</p>
    </div>
    `
    activityLogBody.appendChild(taskHistory);
    
}
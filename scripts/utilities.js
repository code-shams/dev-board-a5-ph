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
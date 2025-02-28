for (const taskBtn of taskCompletedButtons) {
    taskBtn.addEventListener("click", function(event){
        alert("Board Updated Successfully");
        taskDecrement.innerText = Math.max(0, +taskDecrement.innerText - 1);
        completedTasksCounter.innerText = +completedTasksCounter.innerText + 1;
        addTaskHistory(event.target.id);
        event.target.disabled = "true";
        if (taskDecrement.innerText === "0"){
            alert("Congrates!!! You have completed all the current tasks");
        }
        })
}
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
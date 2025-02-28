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
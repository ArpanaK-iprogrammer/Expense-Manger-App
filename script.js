const add_button = document.getElementById("add-button");
// const input_task = document.getElementById("newTask input").value;
// const added_task = document.getElementById("tasks");

//Step1 - Add Task functionality
add_button.addEventListener("click", () => {
    console.log("Add-btn clicked");
    const newTaskInput = document.querySelector("#newTask input").value;
    if (newTaskInput.length === 0) {
        alert("Please Enter Task");
    } else {

        //Pending tasks lists functionality
        document.querySelector("#tasks").style.display = "block";
        document.querySelector("#tasks").innerHTML += 
            `<div class="task">
                <span class="taskName" draggable="true">
                    ${newTaskInput}
                    ${document.querySelector("#newTask input").value = ""}
                </span>
                <button class="done-button">Done</button>
            </div>`;

        var current_tasks = document.querySelectorAll(".done-button");
        for (let i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                console.log("Done Button clicked");
                const taskName = this.parentNode.querySelector(".taskName").textContent;
                this.parentNode.remove();

                //Completed task functionality
                document.querySelector("#completed-task").style.display = "block";
                document.querySelector("#completed-task").innerHTML += 
                    `<div class="task">
                        <span class="taskName1" draggable="true">
                            ${taskName}
                        </span>
                        <button class="delete-button">Delete</button>
                    </div>`;
                var completed = document.querySelectorAll(".delete-button");
                for (let j = 0; j < completed.length; j++) {
                    completed[j].onclick = function() {
                        console.log("delete Button clicked");
                        this.parentNode.remove();
                    };
                }
            };
        }  
    }
});

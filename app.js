let btn = document.querySelector("button");
let inputText = document.querySelector("input");
let output = document.querySelector(".activities");
let boxes2 = document.querySelector(".box2");
let totalCount = 0;
let done = 0;

function updateCount() {
    boxes2.innerText = done + "/" + totalCount;
}

btn.addEventListener("click", () => {
    const task = inputText.value.trim(); 
    if (task === "") {
        alert("Task cannot be empty!");
        return;
    }

    let containers = document.createElement("div");
    let radio = document.createElement("input");
    radio.type = "checkbox";

    let label = document.createElement("label");
    let btnn = document.createElement("button");
    btnn.innerText = "Delete";
    btnn.classList.add("btnnn");

    label.innerText = task;
    label.classList.add("labell");

    containers.appendChild(radio);
    containers.appendChild(label);
    containers.appendChild(btnn);
    containers.classList.add("decorate");

    output.appendChild(containers);

    totalCount += 1;
    updateCount();

    inputText.value = "";

    btnn.addEventListener("click", () => {
        if (radio.checked) {
            done -= 1;
        }
        containers.remove();
        totalCount -= 1;
        updateCount();
    });

    radio.addEventListener("change", () => {
        if (radio.checked) {
            done += 1;
            label.style.textDecoration = "line-through";
        } else {
            done -= 1;
            label.style.textDecoration = "none";
        }
        updateCount();
    });
});

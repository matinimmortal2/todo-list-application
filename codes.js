document.addEventListener("DOMContentLoaded", () => {
    const sub = document.getElementById("sub");
    const del = document.getElementById("del");
    const task = document.getElementById("task");
    const inp = document.getElementById("inp");

    if (!task) {
        console.error("Task element not found!");
        return;
    }

    function saveTasks(tasks) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function loadTasks() {
        const stored = localStorage.getItem("tasks");
        return stored ? JSON.parse(stored) : [];
    }

    let tasksArr = loadTasks();

    let currentBackgroundSrc = null;

    function renderTasks() {
        task.innerHTML = "";

        const isAlt2Background = currentBackgroundSrc === './bacground/vecteezy_vector-abstract-background-with-soft-gradient-color-and_6107730.jpg';

        tasksArr.forEach((t, index) => {
            const newline = document.createElement("div");
            newline.className = "fader"
            const check = document.createElement("input");
            check.type = "checkbox";
            check.checked = !!t.done;
            check.addEventListener("change", () => {
                tasksArr[index].done = check.checked;
                saveTasks(tasksArr);

                span.style.textDecoration = check.checked ? "line-through" : "none";
            });

            const span = document.createElement("span");
            span.innerText = t.text;
            if (t.done) {
                span.style.textDecoration = "line-through";
            }
            if (isAlt2Background) {
                span.style.color = "white";
            }

            const delBtn = document.createElement("button");
            delBtn.className ="delbtn"
            delBtn.innerText = "Delete";
            delBtn.addEventListener("click", () => {
                tasksArr.splice(index, 1);
                saveTasks(tasksArr);
                renderTasks();
            });

            newline.appendChild(check);
            newline.appendChild(span);
            newline.appendChild(delBtn);
            task.appendChild(newline);
        });
    }

    sub.addEventListener("click", () => {
        const val = inp.value.trim();
        if (val === "") return;

        tasksArr.push({ text: val, done: false });
        saveTasks(tasksArr);
        renderTasks();

        inp.value = "";
    });

    inp.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            sub.click();
        }
    });

    del.addEventListener("click", () => {
        tasksArr = tasksArr.filter(t => !t.done);
        saveTasks(tasksArr);
        renderTasks();
    });
    
    const picsContainer = document.querySelector('.pics');
    const body = document.body;

    const backgroundImages = [
        './background.jpeg',
        './bacground/vecteezy_abstract-background_260881.jpg',
        './bacground/vecteezy_vector-abstract-background-with-soft-gradient-color-and_6107730.jpg',
        './bacground/vecteezy_white-background-with-blue-geometric-and-white-line-pattern_7677104-1.jpg'
    ];


    let savedBackgroundSrc = localStorage.getItem('selectedBackground');
    if (!savedBackgroundSrc || !backgroundImages.includes(savedBackgroundSrc)) {
        savedBackgroundSrc = './background.jpeg';
    }

    body.style.backgroundImage = "url('" + savedBackgroundSrc + "')";

    currentBackgroundSrc = savedBackgroundSrc;

    const currentPicThumb = picsContainer.querySelector('img[src="' + currentBackgroundSrc + '"]');
    if (currentPicThumb) {
        currentPicThumb.remove();
    }

    renderTasks();

    picsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('pic')) {
            const clickedPic = e.target;
            const picSrc = clickedPic.getAttribute('src');
            const picIndex = backgroundImages.findIndex(img => img === picSrc);
            if (picIndex !== -1) {
                if (currentBackgroundSrc) {
                    const previousPic = document.createElement('img');
                    previousPic.src = currentBackgroundSrc;
                    previousPic.alt = backgroundImages.findIndex(img => img === currentBackgroundSrc).toString();
                    previousPic.className = 'pic';
                    picsContainer.appendChild(previousPic);
                }

                body.style.backgroundImage = "url('" + picSrc + "')";
                clickedPic.remove();
                currentBackgroundSrc = picSrc;
                localStorage.setItem('selectedBackground', currentBackgroundSrc);
                renderTasks();
            }
        }
    });
});
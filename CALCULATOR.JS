document.addEventListener("DOMContentLoaded", function () {
    let display = document.getElementById("display");
    let buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let value = this.innerText;

            if (value === "AC") {
                display.value = "";
            } else if (value === "DEL") {
                display.value = display.value.slice(0, -1);
            } else if (value === "=") {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = "Error";
                }
            } else {
                display.value += value;
            }
        });
    });
});

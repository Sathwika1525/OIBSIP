const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentValue = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "C") {
            currentValue = "";
            display.value = "";
        }

        else if (value === "DEL") {
            currentValue = currentValue.slice(0, -1);
            display.value = currentValue;
        }

        else if (value === "=") {
            try {
                currentValue = eval(currentValue);
                display.value = currentValue;
            } catch {
                display.value = "Error";
                currentValue = "";
            }
        }

        else {
            currentValue += value;
            display.value = currentValue;
        }
    });
});

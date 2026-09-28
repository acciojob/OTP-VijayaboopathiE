const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {

    input.addEventListener("input", function () {
        if (input.value !== "" && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener("keydown", function (event) {
        if (event.key === "Backspace") {

            if (index > 0) {
                inputs[index - 1].value = "";
                inputs[index - 1].focus();
            } else {
                input.value = "";
            }
        }
    });

});
//your JS code here. If required.
const body = document.body;

body.innerHTML = `
    <h1 id="verification_heading">Verify Your Account</h1>

    <p id="verification_subtext">
        Enter the 6-digit code sent to your email or phone.
    </p>

    <div class="code-container">
        <input type="text" class="code" maxlength="1" inputmode="numeric">
        <input type="text" class="code" maxlength="1" inputmode="numeric">
        <input type="text" class="code" maxlength="1" inputmode="numeric">
        <input type="text" class="code" maxlength="1" inputmode="numeric">
        <input type="text" class="code" maxlength="1" inputmode="numeric">
        <input type="text" class="code" maxlength="1" inputmode="numeric">
    </div>
`;

const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {

    input.addEventListener("input", function () {
        if (input.value !== "" && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener("keydown", function (event) {
        if (event.key === "Backspace") {

            if (input.value === "" && index > 0) {
                inputs[index - 1].focus();
                inputs[index - 1].value = "";
            }
        }
    });
});
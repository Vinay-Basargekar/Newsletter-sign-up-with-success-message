let emailInput = document.getElementById("email");
let error = document.getElementById("error");

function validateEmail() {
	let email = emailInput.value;
	if (!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
		error.innerHTML = "Valid email required";
		emailInput.style.backgroundColor = "rgba(247, 162, 156, 0.643)";
		emailInput.style.color = "red";
		emailInput.style.border = "1px solid hsl(4, 100%, 67%)";
		return false;
	} else {
		error.innerHTML = "";
		emailInput.style.color = "";
		emailInput.style.border = "1px solid green";
		emailInput.style.backgroundColor = "";
		return true;
	}
}

function validateForm() {
	if (!validateEmail()) {
		error.innerHTML = "Please enter email";
		return false;
	} else {
		let form = document.querySelector("form");
		form.action = "./Success-folder/success.html";
		return true;
	}
}
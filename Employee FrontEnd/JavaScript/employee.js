const form = document.getElementById('va');
const Firstname = document.getElementById('firstName');
const Lastname = document.getElementById('lastName');
const email = document.getElementById('email');
const dept = document.getElementById('dept');
const phone = document.getElementById('phone');
const password = document.getElementById('password');



 function Validations() {
	
	const FirstnameValue = Firstname.value.trim();
	const LastnameValue = Lastname.value.trim();
	const emailValue = email.value.trim();
	const deptValue = dept.value.trim();
	const phoneValue = phone.value.trim();
	const passwordValue = password.value.trim();


	if (FirstnameValue === '') {
		setErrorFor(firstName, "Please enter your firstname");
	}
	else {
		setSuccessFor(firstName);
	}


	if (LastnameValue === '') {
		setErrorFor(lastName, "Please enter your lastname");
	} 
	else {
		setSuccessFor(lastName);
	}


	if (emailValue === '') {
		setErrorFor(email, "Please enter your email address");
	} 
	else {
		setSuccessFor(email);
	}


	if (deptValue === '') {
		setErrorFor(dept, "Please enter your name");
	} 
	else {
		setSuccessFor(dept);
	}


	if (phoneValue === '') {
		setErrorFor(phone, "Please enter your mobile number");
	}
	else {
		setSuccessFor(phone);

	}

	if (passwordValue === '') {
		setErrorFor(password, "Please give a password");
	}
	else{
		setSuccessFor(password);
	}
}


function setErrorFor(input, message) {
	const form = input.parentElement;
	const small = form.querySelector('small');
	form.className = 'form error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const form = input.parentElement;
	form.className = 'form success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


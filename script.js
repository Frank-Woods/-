const login = document.getElementsByName('login')[0];
const password = document.getElementsByName('password')[0];
const firstName = document.getElementsByName('firstName')[0];
const lastName = document.getElementsByName('lastName')[0];
const date = document.getElementsByName('Birth')[0];
const save = document.getElementById('save');

login.onchange = enable;
password.onchange = enable;
firstName.onchange = enable;
lastName.onchange = enable;

function enable () {
	if (login.value.length && password.value.length && firstName.value.length && lastName.value.length) 
		{
			save.removeAttribute('disabled');
		}
}

function load () {
	login.value = localStorage.getItem('login')
	firstName.value = localStorage.getItem('firstName')
	lastName.value = localStorage.getItem('lastName')
	date.value = localStorage.getItem('date')
}

load();

save.onclick = () => {
	localStorage.setItem('login', login.value);
	localStorage.setItem('password', password.value);
	localStorage.setItem('firstName', firstName.value);
	localStorage.setItem('lastName', lastName.value);
	localStorage.setItem('date', date.value);
	window.location.replace('index.html');
}
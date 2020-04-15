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

const inpOninput = document.getElementById('inpOninput');
const inpOnchange = document.getElementById('inpOnchange');
const background = document.getElementById('background');
const btnOnfocusOnblur = document.getElementById('btnOnfocusOnblur');
const inpOnkeydown = document.getElementById('inpOnkeydown');

background.onclick = () => {
	if (document.body.style.backgroundColor == "") {
		document.body.style.backgroundColor = "red";
	}
	else {
		document.body.style.backgroundColor = "white";
	}
}

inpOnchange.onchange = () => {
	login.value = " ";
	password.value = " ";
	firstName.value = " ";
	lastName.value = " ";
	date.value = " ";
}

btnOnfocusOnblur.onfocus = () => {
	var img = document.getElementById('img');
	img.style.transform = "rotate(15deg)";
}

btnOnfocusOnblur.onblur = () => {
	var img = document.getElementById('img');
	img.style.transform = "rotate(0deg)";
}

inpOninput.oninput = () => {
    input.textContent = inpOninput.value;
}

inpOnkeydown.onkeydown = (e) => {
    inpOnkeydown.value = '';
    keyEvent.textContent = e.code;
    keyName.textContent = 'Вы нажали клавишу: ';
}

inpOnkeydown.onkeyup = () => {
    inpOnkeydown.value = '';
    keyEvent.textContent = '';
    keyName.textContent = 'Вы нажали клавишу: ';
}
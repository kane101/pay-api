// A $( document ).ready() block.
$(document).ready(function () {
	let scroll;
	window.addEventListener('scroll', function () {
		let headerHeight = document.querySelector('header').offsetHeight;

		if (window.scrollY > headerHeight) {
			document.querySelector('header').classList.add('scroll');
			if (window.scrollY > headerHeight + 20) {
				document.querySelector('header').classList.add('active');
			}
		} else {
			document.querySelector('header').classList.remove('scroll');
			document.querySelector('header').classList.remove('active');
		}

		scroll = window.scrollY;
		headerHeight = document.querySelector('header').offsetHeight;
	});

	const form = document.getElementById('form');
	const name = document.getElementById('name');
	const email = document.getElementById('email');
	const company = document.getElementById('company');
	const title = document.getElementById('title');

	form.querySelectorAll('input').forEach((input) => {
		input.addEventListener('input', (e) => {
			const { parentElement } = e.target;
			if (parentElement.classList.contains('form__control--error')) {
				parentElement.classList.remove('form__control--error');
			}
		});
	});

	form.addEventListener('submit', (e) => {
		checkInputs(e);
	});

	const checkInputs = (e) => {
		const nameValue = document.getElementById('name').value.trim();
		const emailValue = document.getElementById('email').value.trim();
		const companyValue = document.getElementById('company').value.trim();
		const titleValue = document.getElementById('title').value.trim();

		if (nameValue == '') {
			setErrorFor(name, 'Name cannot be blank', e);
		}
		if (emailValue == '') {
			setErrorFor(email, 'Email cannot be blank', e);
		} else if (!isEmail(emailValue)) {
			setErrorFor(email, 'Please enter a valid email', e);
		}
		if (companyValue == '') {
			setErrorFor(company, 'Company cannot be blank', e);
		}
		if (titleValue == '') {
			setErrorFor(title, 'Title cannot be blank', e);
		}
	};

	function setErrorFor(input, message, e) {
		e.preventDefault();
		const formControl = input.parentElement;
		const small = formControl.querySelector('small');
		formControl.classList.add('form__control--error');
		small.innerText = message;
	}

	function isEmail(email) {
		return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			email
		);
	}
});

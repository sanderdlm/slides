const sections = document.querySelectorAll('section');
const last = sections.length;
let current = 0;
let target = null;

document.addEventListener('keydown', (event) => {
	if (event.keyCode === 38) {
		event.preventDefault();

		//scroll up
		if (current > 0) {
			current--;
		}	
	}

	if (event.keyCode === 40) {
		event.preventDefault();

		//scroll down
		if (current < last - 1) {
			current++;
		}
	}

	target = sections[current];

	if (target) {
		target.scrollIntoView();
	}
});
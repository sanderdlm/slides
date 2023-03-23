class Slide  {
	constructor () {
		this.sections = document.querySelectorAll('section')
		this.last = this.sections.length - 1
		this.current = 0
		this.target = null

		this.onKeyDown()
	}

	onKeyDown() {
		document.addEventListener('keydown', (event) => {
			if (
				event.code === 'ArrowLeft' ||
				event.code === 'ArrowUp'
			) {
				event.preventDefault();
				this.#goToPreviousSlide()
			}

			if (
				event.code === 'ArrowRight' ||
				event.code === 'ArrowDown' ||
				event.code === 'Space'
			) {
				event.preventDefault();
				this.#goToNextSlide()
			}

			if (event.code.includes('Digit')) {
				event.preventDefault();
				this.#goToSlide(event.key)
			}
		})
	}

	#goToPreviousSlide() {
		if (this.current > 0) {
			this.current--;
		}

		this.#scroll()
	}

	#goToNextSlide() {
		if (this.current < this.last) {
			this.current++;
		}

		this.#scroll()
	}

	#goToSlide(key) {
		this.current = key - 1
		this.#scroll()
	}

	#scroll() {
		this.target = this.sections[this.current];

		if (this.target) {
			this.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	}
}

new Slide()
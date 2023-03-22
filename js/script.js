const text = document.querySelector('#text');
const count = document.querySelector('#count');


text.addEventListener('input', () => {
	count.textContent = text.value.length;

	if(text.value.length > 500) {
		count.classList.add('alert');
	} else {
		count.classList.remove('alert');
	}
});
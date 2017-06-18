function calculateSize () {
	var clientWidth = window.innerWidth || document.documentElement.clientWidth;

	var htmlSize = clientWidth/3.75;

	document.documentElement.style.fontSize = htmlSize + 'px';
}

calculateSize();

window.addEventListener('resize', calculateSize);
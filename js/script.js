window.addEventListener('scroll', reveal);

function reveal(){
	const reveals = document.querySelectorAll('.reveal');

	for(var i = 0; i < reveals.length; i++) {
		const windowheight = window.innerHeight;
		const revealTop = reveals[i].getBoundingClientRect().top;
		const revealpoint = 150;

		if(revealTop < windowheight - revealpoint) {
			reveals[i].classList.add('active');
		} else {
			reveals[i].classList.remove('active');
		}
		// console.log("windowheight" + " = " + windowheight);
		// console.log("revealTop" + " = " + revealTop);
		// console.log("revealPoint" + " = " + revealpoint);
	}
	
}





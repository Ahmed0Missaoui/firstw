
document.addEventListener('DOMContentLoaded', function () {
	const navLinks = document.querySelectorAll('.nav-links a');
	const sections = document.querySelectorAll('section');
  
	
	navLinks.forEach(link => {
	  link.addEventListener('click', function (e) {
		e.preventDefault();
  
		
		sections.forEach(section => section.classList.remove('active'));
		navLinks.forEach(link => link.classList.remove('active'));
  
		
		const target = this.getAttribute('href');
		document.querySelector(target).classList.add('active');
		this.classList.add('active');
	  });
	});
  
	
	document.querySelector('#github').classList.add('active');
	document.querySelector('.nav-links a[href="#github"]').classList.add('active');
  });
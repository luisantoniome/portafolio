function showHide(id) {
	var menu = document.getElementById(id);
	menu.style.display = (menu.style.display == 'none') ? 'block' : 'none' ;
}

window.onload = function() {
	showHide('menu');
}
window.onload = function() {
	showHideMenu();
}

function showHideMenu() {
	var menu = document.getElementById('menu');
	menu.style.display = (menu.style.display == 'none') ? 'block' : 'none' ;
}

var hamburger = document.querySelector('#hamburger span');

hamburger.onclick = function() {
	showHideMenu();
}
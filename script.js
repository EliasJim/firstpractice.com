const menu = document.getElementById('menu-resp');

menu.addEventListener("click", () => {
	if(menu.checked) {
		let result = document.getElementById('list_menu').style.display = "flex";
	}
	else if (screen.width > 1020) {
		let auto = location.reload(); 
	}
	else {
		let result = document.getElementById('list_menu').style.display = "none";
	}
});
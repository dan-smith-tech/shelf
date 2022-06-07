const searchForm = document.querySelector("#search");
const searchBar = searchForm.childNodes[0];
const searchQuery = "google.com/search?q=";

searchBar.focus();
searchForm.onsubmit = (e) => {
	e.preventDefault();
	window.location.href = "https://" + searchQuery + searchBar.value.replace(/ /g, "+");
};

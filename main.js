const searchForm = document.querySelector("#search");
const searchBar = searchForm[0];
const searchEngine = "https://google.com/search?q=";
searchBar.focus();
searchForm.onsubmit = (e) => {
	e.preventDefault();
	const query = searchBar.value.replace(/ /g, "+");
	if (validURL(query)) return (window.location.href = query);
	else return (window.location.href = "" + searchEngine + query);
};
function validURL(str) {
	var pattern = new RegExp(
		"^(https?:\\/\\/)?" +
			"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
			"((\\d{1,3}\\.){3}\\d{1,3}))" +
			"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
			"(\\?[;&a-z\\d%_.~+=-]*)?" +
			"(\\#[-a-z\\d_]*)?$",
		"i"
	);
	return !!pattern.test(str);
}

const timeElement = document.querySelector("#time");
function updateTime() {
	const date = new Date();
	var hour = date.getHours().toString();
	if (hour.length === 1) hour = "0" + hour;
	var minute = date.getMinutes().toString();
	if (minute.length === 1) minute = "0" + minute;
	const seconds = date.getSeconds();

	timeElement.textContent = hour + ":" + minute;
	setTimeout(updateTime, 1 - seconds);
}
updateTime();

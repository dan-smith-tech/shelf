<div align="center">
  <img alt="Logo" src="favicon.svg" width="100"/>
</div>
<h1 align="center"><strong>Shelf</strong></h1>
<p align="center"> A fully customisable, open-source browser startpage.</p>

<br>
<br>
<br>

# Content

-  [Motivation](#motivation)
-  [Getting Started](#getting-started)
-  [Documentation](#documentation)
   -  [Colour](#colour)
   -  [Clock](#clock)
   -  [Searchbar](#searchbar)
   -  [Layout](#layout)
   -  [Content](#content)
      -  [Links](#links)
      -  [Icons](#icons)
      -  [Names](#names)
-  [Contributing](#contributing)
-  [Forking Guidelines & License Notice](#forking-guidelines--license-notice)

<br>
<br>
<br>

# Motivation

I created _Shelf_ because I couldn't find a fully-customisable browser startpage that allowed me to document my most important bookmarks the way I wanted (also, I just wanted to experiment with some cool gradient designs). I also wanted my searchbar to be focused on when my browser loads, and made sure to implement this into _Shelf_, so as soon as your browser opens you can start searching without having to select any searchbars or click on any input fields (becasue after all, if you're not clicking on a bookmark, you're probably opening your browser to search something up!).

I like to use _Shelf_ by keeping my most visited and important bookmarks as the largest link elements (for ease of access and to represent importance), whilst having the clock and searchbar right above them, for quick access.

<br>
<br>
<br>

# Getting Started

In order to customise _Shelf_ for your own browser, you will need to fork this repo so you can add your own content and change the layout. You can refer to [GitHub's forking documentation](https://docs.github.com/en/get-started/quickstart/fork-a-repo) if you need.

Once you have _Shelf_ downloaded locally on your machine, you will need to set it as your homepage for new windows in your browser. In order to accomplish this, you will need to head to your browser settings and set the startpage for new windows and tabs to be the location of the 'index.html' file in the _Shelf_ folder (e.g., if you are on Windows this may be 'file:///C:/Users/[your-name]/projects/shelf/index.html'). Below is a list of how to accomplish this on some of the most popular browsers.

-  [Setting your homepage in Chrome](https://www.hellotech.com/guide/for/how-to-change-homepage-on-chrome)
-  [Setting your homepage in Firefox](https://support.mozilla.org/en-US/kb/how-to-set-the-home-page)
-  [Setting your homepage in Safari](https://support.apple.com/en-gb/guide/safari/ibrw1020/mac)
-  [Setting your homepage in Opera](https://browserhow.com/how-to-change-homepage-url-on-opera-browser/)
-  [Setting your homepage in Brave](https://browserpulse.com/how-to-change-brave-browser-default-homepage/)

<br>
<br>
<br>

# Documentation

The following sections detail how you can customise every part of _Shelf_ to create your very own browser startpage. However, if you are famailiar with HTML, CSS, and JavaScript, you should of course experiment with more complicated customisations.

<br>
<br>

## Colour

By default, _Shelf_ uses its colour scheme of purples and reds.

If you want to use your own colours within _Shelf_, you simply need to change the values of the following variables (found at the top of the 'main.css' file). You can use [this](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Color_picker_tool) colour picker tool to find the colour codes, and [this](https://cssgradient.io/) tool to create your own gradients.

```css
:root {
	--color-text: white;
	--color-primary: #a81759; /* Used for highlights */
	--color-secondary: #171633; /* Used for backdrops of elements */
	--color-tertiary: #111025; /* Used for the backdrop of the entire page */
	--gradient-primary: linear-gradient(
		45deg,
		var(--color-primary) 0%,
		#a81796 35%,
		#6c17a8 65%,
		#3917a8 100%
	); /* Used for highlights */
	--gradient-secondary: linear-gradient(
		45deg,
		var(--color-secondary) 0%,
		#251633 35%,
		#2c1633 65%,
		#421531 100%
	); /* Used for backdrops of elements */
}
```

You can also change the color of icons, by using [this](https://codepen.io/sosuke/pen/Pjoqqp) tool to convert a colour from HEX to a CSS filter property, which you can copy and replace in the following CSS class (found in the 'main.css' file).

```css
.grid-element svg {
	filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(128deg) brightness(
			103%
		) contrast(101%);
}
```

<br>
<br>

## Clock

By default, _Shelf_ has a clock at the top of the page.

If you want to remove the clock, you can delete the following HTML (found towards the top of the 'index.html' file).

```html
<section>
	<div id="time">12:00</div>
</section>
```

You will also need to remove the following JavaScript (found at the bottom of the 'main.js' file).

```javascript
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
```

<br>
<br>

## Searchbar

By default, _Shelf_ has a searchbar at the top of the page, that searches with Google.

<br>

### Change Search Engine

If you want to change the search engine used, then you will need to change the value of the following JavaScript variable (found at the top of the 'main.js' file), to the query link of your desired search engine. For example, if you wanted to use DuckDuckGo, it would be 'https://duckduckgo.com/?q='.

```javascript
const searchEngine = "https://google.com/search?q=";
```

If you change the search engine, then you will also want to change the placeholder text in the search bar to reflect your choice. You can do this by replaceing the 'placeholder' property in the following HTML (found towards the top of the 'index.html' file).

```html
<input class="grid-element" type="search" placeholder="Search with Google or enter an address..."></input>
```

<br>

### Change Layout

If you want the searchbar to fit with the rest of the grid, then you will need to delete the following CSS properties (found in the 'main.css' file). You may also want to refer to the [Layout](#layout) section, for more information on how elements of arranged in _Shelf_.

```css
#search {
	width: 65em;
	margin: 0 auto calc(2.85rem + var(--gap)) auto;
}
```

<br>

### Delete

If you want to remove the searchbar, you can delete the following HTML (found towards the top of the 'index.html' file).

```html
<section>
  <form id="search">
    <input class="grid-element" type="search" placeholder="Search with Google or enter an address..."></input>
  </form>
</section>
```

You will also need to remove the following JavaScript (found at the top of the 'main.js' file).

```javascript
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
```

<br>
<br>

## Layout

Elements in _Shelf_ are arranged using CSS Grid.

<br>

### Change Links to Be The Same Height

In order to make all of the links have the same height (as opposed to filling the available space), change the 'grid-template-rows' property in the following CSS class (found in the 'main.css' file). Set the value to 'repear(x, 1fr)', where x is the largest number of links you have (vertically) in any column.

```css
.grid-rows {
	display: grid;
	grid-template-rows: repeat(4, 1fr);
}
```

<br>
<br>

## Content

By default, _Shelf_ comes with a few demo bookmarks (such as YouTube, Spotify, and Gmail). However, you will of course want to change these in order to document your own links.

<br>

### Links

A link consits of the following HTML (found in the 'index.html' file).

```html
<a href="[INSERT-LINK-URL]" class="grid-element">
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
		[INSERT-LINK-ICON-SVG-PATH]
	</svg>
	<h3>[INSERT-LINK-NAME]</h3>
</a>
```

In order to create a new link, place one of these HTML elements in any of the 'grid-rows' HTML containers (found in the 'index.html' file), such as the following.

```html
<section class="grid-columns">
	<div class="grid-rows">
		<a href="https://youtube.com" class="grid-element">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
				...
			</svg>
			<h3>YouTube</h3>
		</a>
		<a href="[INSERT-LINK-URL]" class="grid-element">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
				[INSERT-LINK-ICON-SVG-PATH]
			</svg>
			<h3>[INSERT-LINK-NAME]</h3>
		</a>
	</div>
</section>
```

Then fill in the URL and name fields. In order to find an icon for the link, you can use a range of websites that provide SVG icons. For the demo, I sourced all of the icons from [Boxicons](https://boxicons.com/). In order to do this, select the icon you want in Boxicons, and press the 'SVG CODE' button in the pop-up menu. The SVG will be copied to your clipboard.

When you copy an SVG from Boxicons, it looks like the following.

```html
<svg
	xmlns="http://www.w3.org/2000/svg"
	width="24"
	height="24"
	style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
>
	<path
		d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"
	></path>
</svg>
```

Delete the 'style' attribute, and place it in your link element so that it looks like the following.

```html
<a href="https://youtube.com" class="grid-element">
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
		<path
			d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"
		></path>
	</svg>
	<h3>YouTube</h3>
</a>
```

You can repeat this process as many times as you want, in order to create as many links as you want!

<br>

### Headings

If you want to add headings to each of the columns, you can add the following HTML nested as the first element under a 'grid-rows' container (found in the 'index.html' file).

```html
<div class="grid-heading">
	<h2>[INSERT-HEADING-NAME]</h2>
</div>
```

For example, a column could look like the following.

```html
<div class="grid-rows">
	<div class="grid-heading">
		<h2>Entertainment</h2>
	</div>
	<a href="https://youtube.com" class="grid-element">...</a>
	<a href="https://twitch.tv" class="grid-element">...</a>
	<a href="https://open.spotify.com" class="grid-element">...</a>
</div>
```

If you make this change, you will also need to update the 'grid-rows' CSS class (found in the 'main.css' file) in order to structure the rows in each column correctly. All you have to do for this to work is add '6.5rem' (or, wahtever height you have set your link elements to be - if you changed them) before the value already set for 'grid-template-rows'.

This means, if you have your link elements set to auto size (this is the default setting), your updated property value should look like the following.

```css
.grid-rows {
	grid-template-rows: 6.5rem auto;
}
```

Or, if you changed your link elements to be the same height (in the [layout](#layout) section), your updated property value should look like the following (just apply the same rules to the 'repeat' function as detailed in the (layout)[#layout] section, when setting the link elements to be the same size).

```css
.grid-rows {
	grid-template-rows: 6.5rem repeat(4, 1fr);
}
```

<br>
<br>
<br>

# Contributing

If you think _Shelf_ is lacking in any way (whether that be the project itself, or the documentation), feel free to open a pull request with your changes or new features.

<br>
<br>
<br>

# Forking Guidelines & License Notice

I encourage everyone to fork this project and modify it to their needs, or to take pieces and incorporate those into their own projects (no credit is required).

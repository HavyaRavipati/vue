# vue.js-workshop


## About Us
* Vennela Cheekoti
* Venkata Sai Krishna Dasari
* Zachary Haider
* Suresh Chandra Peddinti
* Havya Ravipati


## Workshop Topic
VueJS is a progressive JavaScript framework used to develop interactive web interfaces. Focus is more on the view part, which is the front end. It is very easy to integrate with other projects and libraries.

## Process
### Step 1
Create a new folder and add an empty index.html and index.js-workshop.
### Step 2 
In the index.html add the basic tags that you would add to any basic page.

	<!DOCTYPE html>

	<html>

		<head>

		</head>

		<body>

		</body>

	</html>

### Step 3
Include the Vue pacakage and link to the index.js. Optionaly at this poit you can add your stylesheet.
	<!DOCTYPE html>

	<html>

		<head>

			<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

		</head>

		<body>

			<script scr="index.js"></script>

		</body>

	</html>

### Step 4
Add your first DOM vue object to the index.html.

	<!DOCTYPE html>

	<html>

		<head>

			<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

		</head>

		<body>

			<div id="element">

				{{ variable }}

			</div>

			<script scr="index.js"></script>

		</body>

	</html>

### Step 5
Open your index.js and add your code that controls the vue DOM object you add in the last step.

	let app = new Vue({ 
  
		el: '#element',

		data: {

			variable: 'Hello World'
		
		}

	});

Note that "element" is the id of the DOM object and is not a reserved word.

### Step 6

From here you have the basic starting point to most vue object and conform it to your needs. 

Resources
------

+ <https://vuejs.org/v2/guide/>

+ <https://www.tutorialspoint.com/vuejs/index.htm>



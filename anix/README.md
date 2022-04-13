

<!-- Repository Information & Links-->
<br />

![GitHub repo size](https://img.shields.io/github/repo-size/Tsebo200/AniX)
![GitHub watchers](https://img.shields.io/github/watchers/Tsebo200/AniX)
![GitHub language count](https://img.shields.io/github/languages/count/Tsebo200/AniX)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Tsebo200/AniX)
![Github Language](https://img.shields.io/github/languages/top/Tsebo200/AniX)
![Github Downloads](https://img.shields.io/github/downloads/Tsebo200/AniX/total)
<!-- ![Github node Version](https://img.shields.io/node/v/anix) -->


<!-- HEADER SECTION -->
<h5 align="center" style="padding:0;margin:0;">Tsebo Ramonyalioa</h5>
<h5 align="center" style="padding:0;margin:0;">200200</h5>
<h6 align="center">DV200 - Term 1 | 2022</h6>
</br>
<p align="center">

  <a href="https://github.com/Tsebo200/AniX">
    <img src="src/Assets/Logo\ 2.png" alt="src/Assets/Hover\ Logo.png" width="140" height="140">
  </a>
  
  <h3 align="center">AniX</h3>

  <p align="center">
    A react project using the Jikan Api to demonstrate data visualisation using charts js  <br>
    
   <br />
   <br />
   <a href="path/to/demonstration/video">View Demo</a>
    ·
    <a href="https://github.com/Tsebo200/AniX/issues">Report Bug</a>
    ·
    <a href="https://github.com/Tsebo200/AniX/issues">Request Feature</a>
</p>
<!-- TABLE OF CONTENTS -->

## Table of Contents

* [About the Project](#about-the-project)
  * [Project Description](#project-description)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [How to install](#how-to-install)
* [Features and Functionality](#features-and-functionality)
* [Concept Process](#concept-process)
   * [Ideation](#ideation)
   * [Wireframes](#wireframes)
   * [Custom UI](#user-flow)
* [Development Process](#development-process)
   * [Implementation Process](#implementation-process)
        * [Highlights](#highlights)
        * [Challenges](#challenges)
   * [Future Implementation](#peer-reviews)
* [Final Outcome](#final-outcome)
    * [Mockups](#mockups)
    * [Video Demonstration](#video-demonstration)
* [Conclusion](#conclusion)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

<!--PROJECT DESCRIPTION-->
## About the Project
<!-- header image of project -->
![image1][image1]

### Project Description

My Project is about the comparison of animes data in charts js. It is a solution for weebs that are unable to find data comparison about Anime.

### Built With

* [React](https://reactjs.org/)
* [Charts JS](https://www.chartjs.org/)


<!-- GETTING STARTED -->
<!-- Make sure to add appropriate information about what prerequesite technologies the user would need and also the steps to install your project on their own mashines -->
## Getting Started

The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure that you have the latest version of [NPM](https://www.npmjs.com/) installed on your machine. The [GitHub Desktop](https://desktop.github.com/) program will also be required. You will also need a typeface called Avenir on your local machine for the best experience.

### How to install

### Installation
Here are a couple of ways to clone this repo:

1. GitHub Desktop </br>
Enter `https://github.com/Tsebo200/AniX.git` into the URL field and press the `Clone` button.

2. Clone Repository </br>
Run the following in the command-line to clone the project:
   ```sh
   git clone https://github.com/Tsebo200/AniX.git
   ```
    Open `Software` and select `File | Open...` from the menu. Select cloned directory and press `Open` button

3. Install Dependencies </br>
Run the following in the command-line to install all the required dependencies:
   ```sh
   npm install
   ```

4. An API key is not required


<!-- FEATURES AND FUNCTIONALITY-->
<!-- You can add the links to all of your imagery at the bottom of the file as references -->
## Features and Functionality

<!-- note how you can use your gitHub link. Just make a path to your assets folder -->
![image2](https://raw.githubusercontent.com/Tsebo200/AniX/src/assets/mockup.jpg)

### All The Latest Anime Data! 

Using the Jikan API, we have collected and collated all the most relevant Anime data into once seemless react experience!

![image3][image3]
### Feature 1

This dropdown dynamically loads the data of the selected anime in the charts.

![image4][image4]
### Feature 2

The functionality of the information pills and anime poster updates randomly every session. 

![image5][image5]


<!-- CONCEPT PROCESS -->
<!-- Briefly explain your concept ideation process -->
<!-- here you will add things like wireframing, data structure planning, anything that shows your process. You need to include images-->
## Concept Process

The `Conceptual Process` is the set of actions, activities and research that was done when starting this project. As part of my conceptual process I have sketched wireframes in Figma, I looked at Pinterest for inspiration. I planned out the data structure for my project in a word processor.

### Ideation

![image5](https://raw.githubusercontent.com/Tsebo200/AniX/main/src/Assets/ReadMe/FeatureOne.jpg)
<br>
![image6][image6]

### Wireframes

![image7][image]

### Custom UI

![image8][image8]

<!-- DEVELOPMENT PROCESS -->
## Development Process

The `Development Process` is the technical implementations and functionality done in the frontend and backend of the application. 
In my frontend I implemented a Google Font called Nunito, a box shadow on my info pills (in Home Page) as well as my graph containers (in the comparison page), I added Hover States for my info pills, my navigational buttons and my logo.
In my backend I utilised React js including the react hooks such as useState, useRef and useEffect. I used the useEffect to retrieve all the anime when the page renders, useRef was used to store a variable (the selectedAnime) and the useState was used to change the anime name when it was selected in the dropdown. I utilised axios to make an HTTP request for my API (this allows me to fetch data from the API easily). I implemented charts js to create dynamic charts.

### Implementation Process
<!-- stipulate all of the functionality you included in the project -->
<!-- This is your time to shine, explain the technical nuances of your project, how did you achieve the final outcome!-->

* Utilized React `Charts.JS` dependency for Data visualization
* Implemented Routing with `React-Router v6`.
* API End Point: https://api.jikan.moe/v4/anime.
* Used React Hooks to write less code

#### Highlights
<!-- stipulated the highlight you experienced with the project -->
* I enjoyed this brief as it forces you to be  creative in presenting your data with charts js. I learnt about React and React hooks. 
* I mostly enjoyed the API implementation with Charts js, I found it satisfying when the data was loading through the charts.

#### Challenges
<!-- stipulated the challenges you faced with the project and why you think you faced it or how you think you'll solve it (if not solved) -->
* When the anime shows the an anime movie in the home page, the API does not have information about the year and the season it was released (this leaving the last two info pills empty), thus, I would make an if statement that removes the last two pills if an anime movie loads. 


#### Above And Beyond

What aspects of this final build contribute to the `Above And Beyond` Component of your brief?
<!-- what did you learn outside of the classroom and implement into your project-->
* Name of Skill Explored.
* Explain your understanding and execution of above skill.

### Future Implementation
<!-- stipulate functionality and improvements that can be implemented in the future. -->

* Future 1.
* Future 2.

<!-- MOCKUPS -->
## Final Outcome

### Mockups

![image9][image9]
<br>
![image10][image10]

<!-- VIDEO DEMONSTRATION -->
### Video Demonstration

To see a run through of the application, click below:

[View Demonstration](path/to/video/demonstration)


See the [open issues](https://github.com/Tsebo200/AniX/issues) for a list of proposed features (and known issues).

<!-- AUTHORS -->
## Authors

* **Your Name & Surname** - [Tsebo200](https://github.com/Tsebo200)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.\

<!-- LICENSE -->
## Contact

* **Your Name & Surname** - [email@address](mailto:email@address) - [@instagram_handle](https://www.instagram.com/instagram_handle/) 
* **Project Link** - https://github.com/Tsebo200/AniX

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
<!-- all resources that you used and Acknowledgements here -->
* [Resource Name](path/to/resource)
* [Resource Name](path/to/resource)
* [Resource Name](path/to/resource)
* [Resource Name](path/to/resource)
* [Resource Name](path/to/resource)



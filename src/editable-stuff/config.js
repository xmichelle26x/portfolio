// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Mishell",
  middleName: "",
  lastName: "Angulo",
  message: "Developer and tech lover. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/xmichelle26x",
    },  
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/mishell-angulo-villacis/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/xmichelle26x/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/mishell.jpg"),
  imageSize: 375,
  message:
    "My name is Mishell Angulo, a graduate from Escuela Superior Politécnica del Litoral at Ecuador. I am a Computer science engineer with experience in academic, personal and professional experience. I love learning new tools everyday and to ensure software performance.",
  resume: "https://drive.google.com/file/d/1D3j9K3WMt3QN4mslrcI3T_wOwJpYWbrF/view?usp=sharing",
};


const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "xmichelle26x",
  reposLength: 6,
  specificRepos: [],
};



// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 40 },
    { name: "SQL", value: 70 },
    { name: "JavaScript", value: 70 },
    { name: "React", value: 60 },
    { name: "HTML/CSS", value: 75 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Team worker", value: 90 },
    { name: "Communication", value: 70 },
    { name: "Adaptability", value: 70 },
    { name: "Research", value: 75 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Frontend Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "mishell_angulo@hotmail.com",
};



export { navBar, mainBody, about, repos, skills, getInTouch };

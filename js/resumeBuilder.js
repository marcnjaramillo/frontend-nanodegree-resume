
//TODO: add work experience and add projects

var work = {
  "jobs" : [
    {
      "employer" : "Deaf Community Services of San Diego",
      "title" : "Community Interpreter",
      "location" : "San Diego, CA",
      "dates" : "October 2015 - Present",
      "description" : "Interpret between ASL and English for various community assignments, including medical appointments, mental health appointments, job interviews and trainings, and education. Knowledge of Deaf culture and diverse signing styles (including language fluency and competence) is necessary to ensure full access to communication."
    }
  ]
}

var projects = {
  "projects" : [
    {
      "title" : "Animal Trading Cards",
      "dates" : "April 2016",
      "description" : "This project focused on using CSS to style a sample HTML to resemble a design mock-up.",
      "images" : [
        "images/trading-card-project.jpg"
      ]
    }
  ]
}

//I do not have twitter, so it will be removed later on

var bio = {
  "name" : "Marc Jaramillo",
  "role" : "Web Developer",
  "contacts" : {
      "mobile" : "(858) 472-8559",
      "email" : "marcn.jaramillo@gmail.com",
      "github" : "marc.jaramillo",
      "twitter" : "@mjaramillo",
      "location" : "La Mesa, CA"
  },
  "welcomeMessage" : "Thank you for visiting my online resume!",
  "skills" : [
    "HTML", "CSS", "JavaScript", "Excel"
  ],
  "bioPic" : 'images/grad-pic.jpg'
}

var education = {
  "schools" : [
    {
      "name" : "University of Northern Colorado",
      "location" : "Greeley, CO",
      "degree" : "BA",
      "major" : "ASL-English Interpreting",
      "dates" : "August 2014"
    },
    {
    "name" : "Mesa College",
    "location" : "San Diego, CA",
    "degree" : "No degree",
    "major" : "None",
    "dates" : "August 2011 - June 2012"
    },
    {
      "name" : "Imperial Valley College",
      "location" : "Imperial, CA",
      "degree" : "No degree",
      "major" : "None",
      "dates" : "February 2009 - June 2011"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Front-End Web Developer Nanodegree",
      "school" : "Udacity",
      "dates" : "Present",
      "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ]
}

//I was having trouble getting the information to display properly.
//The location altered my file such that the browser could not find it.
//I saw how one of the coaches in the "Tools" webcast video set up the bio section
//(e.g., bio.contacts.location) and I used that to resolve my issue.

bio.display = function() {

var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").prepend(formattedPic);

var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").prepend(formattedMessage);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
$("#footerContacts").append(formattedGithub);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
$("#footerContacts").append(formattedTwitter);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedLocation);

$("#header").append(HTMLskillsStart);

//Another example of something I used from the "Tools" webcast video.
//I found that without using the code below my skills did not line up
//like the sample.

for (i = 0; i < bio.skills.length; i++) {

var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
$("#skills").append(formattedSkills);
  }
}

bio.display();


work.display = function() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

work.display();


projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

projects.display();

education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);

  var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
  var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
  var formattedNameDegree = formattedName + formattedDegree;
  $(".education-entry:last").append(formattedNameDegree);

  var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
  $(".education-entry:last").append(formattedLocation);

  var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
  $(".education-entry:last").append(formattedDates);

  var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
  $(".education-entry:last").append(formattedMajor);
}

$("#education").append(HTMLonlineClasses);
for (onlineCourse in education.onlineCourses) {

$("#education").append(HTMLschoolStart);

var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
var formattedTitleSchool = formattedTitle + formattedSchool;
$(".education-entry:last").append(formattedTitleSchool);

var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
$(".education-entry:last").append(formattedDates);

var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
$(".education-entry:last").append(formattedURL);

}
}

education.display();

$("#mapDiv").append(googleMap);
$("#collapseFour").on('shown.bs.collapse', function(e) {
    initializeMap();
    map.fitBounds(mapBounds);
});

//function inName(name) {
//  name = name.trim().split(" ");
//  console.log(name);
//  name[1] = name[1].toUpperCase();
//  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

//  return name[0] +" "+ name[1];
//}
//$("#main").append(internationalizeButton);

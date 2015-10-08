/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*$("#main").append(["左璇"]);
var awesomeThoughts = "I am zuoxuan and I am AWESOME!"
console.log(awesomeThoughts);
*/
/*var email = "cameron@udacity.com";
var newEmail = email.replace("udacity","gmail");
console.log(email);
console.log(newEmail);*/
/*var awesomeThoughts = "I am zuoxuan and I am AWESOME!"
var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
console.log(funThoughts);
$("#main").append(funThoughts);
*/
var formattedName = HTMLheaderName.replace("%data%","zouxuan");
var formattedRole = HTMLheaderRole.replace("%data%","Web developer");
$("#header").prepend(formattedName);
$("#header").append(formattedRole);

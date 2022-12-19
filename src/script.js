/*
- Project: JS Form using the Get method
- Description: Two page site, where one page user inputs information in form, and second page displays that information
- Name: Dominic Martinez
- Date 12/19/22
*/

// Creates a new URLSearchParam object to parse through search URL 
const PARAMS = new URLSearchParams(window.location.search);

// Assigns all output HTML elements to its appropriate search parameter
document.getElementById('firstname').innerHTML = PARAMS.get('firstname');
document.getElementById('lastname').innerHTML = PARAMS.get('lastname');
document.getElementById('email').innerHTML = PARAMS.get('email');
document.getElementById('streetaddress').innerHTML = PARAMS.get('streetaddress');
document.getElementById('city').innerHTML = PARAMS.get('city');
document.getElementById('state').innerHTML = PARAMS.get('state');
document.getElementById('zipcode').innerHTML = PARAMS.get('zipcode');
document.getElementById('phonenumber').innerHTML = PARAMS.get('phonenumber');


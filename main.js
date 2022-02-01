// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction()
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function clearName() {
  if (document.getElementById('nameField').value == 'First and Last Name') {
    document.getElementById('nameField').value = '';
  }
}
//clears number on click
function clearPhone() {
  if (document.getElementById('phoneField').value == 'example: 732-770-7795') {
    document.getElementById('phoneField').value = '';
  }
}
//brings back default text if namefield is empty
function resetName() {
  if (document.getElementById('nameField').value == '') {
    document.getElementById('nameField').value = 'First and Last Name';
  }
}
//brings back default text if phonefield is empty
function resetPhone() {
  if (document.getElementById('phoneField').value == '') {
    document.getElementById('phoneField').value = 'example: 732-770-7795';
  }
}
//clears number on click
function clearEmail() {
  if (document.getElementById('emailField').value == 'example: example.gmail.com') {
    document.getElementById('emailField').value = '';
  }
}
//brings back default text if namefield is empty
function resetEmail() {
  if (document.getElementById('emailField').value == '') {
    document.getElementById('emailField').value = 'example: example.gmail.com';
  }
}

document.getElementById('comingUpContent').style.display = 'none';
document.getElementById('pastEventsContent').style.display = 'none';

//Hides all panels
function hidePanels() {
  document.getElementById('pastEventsContent').style.display = 'none';
  document.getElementById('eventsWeekContent').style.display = 'none';
  document.getElementById('comingUpContent').style.display = 'none';
}

//Opens coming up and hides all other panels
function showComingUp() {
  hidePanels();
  document.getElementById('comingUpContent').style.display = 'block';
}

//Opens past events and hides all other panels
function showPastEvents() {
  hidePanels();
  document.getElementById('pastEventsContent').style.display = 'block';
}

//Opens events week and hides all other panels
function showEventsWeek() {
  hidePanels();
  document.getElementById('eventsWeekContent').style.display = 'block';
}

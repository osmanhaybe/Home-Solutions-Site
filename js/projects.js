const allProjects = document.getElementById('all-projects');
const oldProjects = document.getElementById('old-projects');
const newProjects = document.getElementById('new-projects');

const projects = document.querySelectorAll('.projects');


function displayAll() {
  displayTotal.innerHTML = "";
  projects.forEach(function(project) {
  if (project.classList.contains('hide')){
    project.classList.remove('hide');
  }
})
}

function displayOld(){
  displayTotal.innerHTML = "";
  projects.forEach(function(project) {
    if (project.classList.contains('pending')){
      project.classList.add('hide');
    }else {
      project.classList.remove('hide');
    }
  })
  }

function displayNew(){
  displayTotal.innerHTML = "";
  projects.forEach(function(project) {
    if (project.classList.contains('completed')){
      project.classList.add('hide');
    }else {
      project.classList.remove('hide');
    }
  })
  }


// Event Listeners

allProjects.addEventListener('click', displayAll);
oldProjects.addEventListener('click', displayOld);
newProjects.addEventListener('click', displayNew);
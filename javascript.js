// Query selectors and global values
let myClass = [];
let registerButton = document.querySelector('.register-button');
let overlay = document.querySelector('.overlay');
let registerButtonTrue = document.querySelector('.register');

// Input query selectors
let username = document.querySelector('#username');
let userstream = document.querySelector('#userstream');
let usersection = document.querySelector('#usersection');
let usergrade = document.querySelector('#usergrade');
let userroll = document.querySelector('#userroll');
let usercontact = document.querySelector('#usercontact');
let userpfp = document.querySelector('#userpfp');

// Toggle overlay and modal
overlay.addEventListener("click", (e) => {
    if (e.target.classList.contains('overlay')) {
        toggleModal();
    };
})

registerButton.addEventListener("click", toggleModal);

function toggleModal () {
    // resetForm();
    if (overlay.style.visibility == 'visible') {
        overlay.style.visibility = 'hidden';
    }
    else {
        overlay.style.visibility = 'visible';
    }
}

// Student constructor function
function Student (username, stream, section, grade, roll, contact, photo) {
    this.username = username;
    this.stream = stream;
    this.section = section;
    this.grade = grade;
    this.roll = roll,
    this.contact = contact;
    this.photo = photo;
    this.paid = `No`;
}

function addStudentToClass(student) {
    myClass.push(student);
}

// render students 
function renderStudents () {
    let studentsDOM = document.querySelector('.students');
    studentsDOM.innerHTML = ``;
    for (person of myClass) {
       
        studentsDOM.innerHTML += `
        <div class="student">
                <div class="userphoto">
                    <div class="pfp"></div>
                </div>
                <div class="username">
                    <span class="general">Name:</span>
                    <span class="personal">${person.username}</span>
                </div>
                <div class="userstream">
                    <span class="general">Stream:</span>
                    <span class="personal">${person.stream}</span>
                </div>
                <div class="usersection">
                    <span class="general">Section:</span>
                    <span class="personal">${person.section}</span>
                </div>
                <div class="usergrade">
                    <span class="general">Grade:</span>
                    <span class="personal">${person.grade}</span>
                </div>
                <div class="userroll">
                    <span class="general">Roll.no:</span>
                    <span class="personal">${person.roll}</span>
                </div>
                <div class="usercontact">
                    <span class="general">Contact:</span>
                    <span class="personal">${person.contact}</span>
                </div>
                <div class="userpaid">
                    <span class="general">Paid:</span>
                    <span class="personal">${person.paid}</span>
                </div>
        </div>`;
    }
}

// Register button event listener
registerButtonTrue.addEventListener("click", (e) => {
    e.preventDefault();

    let studentobj = new Student (username.value, userstream.value, usersection.value, usergrade.value, userroll.value, usercontact.value,userpfp.value);
    addStudentToClass(studentobj);
    renderStudents();
    toggleModal();
});

// reset form 
function resetForm () {
    username.value = ``;
    userstream.value = ``;
    usersection.value = ``;
    usergrade.value = ``;
    userroll.value = ``;
    usercontact.value = ``;
    userpfp.value = ``;
}   
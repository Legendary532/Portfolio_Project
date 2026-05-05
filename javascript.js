const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    const dots = parseInt(elem.getAttribute("data-dots"));
    const marked = parseInt(elem.getAttribute("data-percent"));
    const percent = Math.floor(dots * marked / 100);
    let points = "";
    const rotate = 360 / dots;

    // Create the points as div elements
    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --root:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');

    // Mark the specified percentage of points
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
});

const mixer = mixitup('.portfolio-gallery');

// Active menu on scroll
const menuLi = document.querySelectorAll('header ul li a');
const section = document.querySelectorAll('section');
function activeMenu() {
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) {}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
};
activeMenu();
window.addEventListener("scroll", activeMenu);

// Sticky header on scroll
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 50);
});

// Menu Icon Toggle
const menuIcon = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");
menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
};

// Close menu when scrolling
window.addEventListener("scroll", () => {
    menuIcon.classList.remove("bx-menu");
    navlist.classList.remove("open");
});

// Intersection observer to reveal elements on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    });
});

// Observe scroll-based animations
const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));

//add,remove
$(document).ready(function(){
    $('.row-separator.repeater').repeater({
        initEmpty: false, 
        defaultValues: {
        'text-input': ""
        },
        show:function(){
            $(this).slideDown();
        },
        hide: function(deleteElement){
            $(this).slideUp(500, function(){
                $(this).remove();
            });
        },        
        isFirstItemUndeleteable: true
    });
});
  
const strRegex = /^[a-zA-Z\s]+$/;
const digitRegex = /\d+$/; 
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  
const phoneRegex = /^[0-9]{10}$/;  

const mainform = document.getElementById('cv-form');
const validType = {
    TEXT: 'text',
    TEXT_EMP: 'text_emp',
    EMAIL: 'email',
    DIGIT: 'digit',
    PHONENO: 'phoneno',
    ANY: 'any',
};

let firstnameElem = mainform.firstname,
middlenameElem = mainform.middlename,
lastnameElem = mainform.lastname,
designationElem = mainform.designation,
addressElem = mainform.address,
emailElem = mainform.email,
phonenoElem = mainform.phoneno,
summaryElem = mainform.summary;

let nameDsp = document.getElementById('fullname_dsp');
let phonenoDsp = document.getElementById('phoneno_dsp');
let emailDsp = document.getElementById('email_dsp');
let addressDsp = document.getElementById('address_dsp');
let designationDsp = document.getElementById('designation_dsp');
let summaryDsp = document.getElementById('summary_dsp');
let projectsDsp = document.getElementById('projects_dsp');
let achievementsDsp = document.getElementById('achievements_dsp');
let skillsDsp = document.getElementById('skills_dsp');
let educationsDsp = document.getElementById('educations_dsp');
let experiencesDsp = document.getElementById('experiences_dsp');

// Fetch values for multiple input elements
const fetchValues = (attrs, ...nodeLists) => {
    let elemsAttrsCount = nodeLists.length;
    let elemsDataCount = nodeLists[0].length;
    let tempDataArr = [];

    for (let i = 0; i < elemsDataCount; i++) {
        let dataObj = {};
        for (let j = 0; j < elemsAttrsCount; j++) {
            dataObj[`${attrs[j]}`] = nodeLists[j][i].value;
        }
        tempDataArr.push(dataObj);
    }
    return tempDataArr;
}

const getUserInputs = () =>{
    let achievementsTitleElem = document.querySelectorAll('.achieve_title'),
    achievementsDescriptionElem = document.querySelectorAll('.achieve_description');
    //exp
    let expTitleElem = document.querySelectorAll('.exp_title'),
    expOrganizationElem = document.querySelectorAll('.exp_organization'),
    expLocationElem = document.querySelectorAll('.exp_location'),
    expStartDateElem = document.querySelectorAll('.exp_start_date'),
    expEndDateElem = document.querySelectorAll('.exp_end_date'),
    expDescriptionElem = document.querySelectorAll('.exp_description');
    //edu
    let eduSchoolElem = document.querySelectorAll('.edu_school'),
    eduDegreeElem = document.querySelectorAll('.edu_degree'),
    eduCityElem = document.querySelectorAll('.edu_city'),
    eduStartDateElem = document.querySelectorAll('.edu_start_date'),
    eduGraduationDateElem = document.querySelectorAll('.edu_graduation_date'),
    eduDescriptionElem = document.querySelectorAll('.edu_description');
 
    console.log(eduSchoolElem, eduDegreeElem, eduCityElem, eduStartDateElem, eduGraduationDateElem, eduDescriptionElem);

    let projTitleElem = document.querySelectorAll('.proj_title'),
    projLinkElem = document.querySelectorAll('.proj_link'),
    projDescriptionElem = document.querySelectorAll('.proj_description');

    let skillElem = document.querySelectorAll('.skill');

    firstnameElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.TEXT, 'First Name'));
    middlenameElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.TEXT_EMP, 'Middle Name'));
    lastnameElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.TEXT, 'last Name'));
    phonenoElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.PHONENO, 'Phone Number'));
    emailElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.EMAIL, 'Email'));
    addressElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Address'));
    designationElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.TEXT, 'Designation'));
    
    achievementsTitleElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Title')));
    achievementsDescriptionElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Description')));
    
    expTitleElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Title')));
    expOrganizationElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Organization')));
    expLocationElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Location')));
    expStartDateElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Start Date')));
    expEndDateElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'End Date')));
    expDescriptionElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Description')));
    
    eduSchoolElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'School')));
    eduDegreeElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Degree')));
    eduCityElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'City')));
    eduStartDateElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Start Date')));
    eduGraduationDateElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Graduation Date')));
    eduDescriptionElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Description')));
    
    projTitleElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Title')));
    projLinkElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Link')));
    projDescriptionElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Description')));
    
    skillElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'skill')));

    return {
        firstname: firstnameElem.value,
        middlename: middlenameElem.value,
        lastname: lastnameElem.value,
        designation: designationElem.value,
        address: addressElem.value,
        email: emailElem.value,
        phoneno: phonenoElem.value,
        summary: summaryElem.value,
        achievements: fetchValues(['achieve_title', 'achieve_description'],
        achievementsTitleElem, achievementsDescriptionElem),
        experiences: fetchValues(['exp_title', 'exp_organization','exp_location', 'exp_start_date','exp_end_date', 'exp_description'], expTitleElem, expOrganizationElem, expLocationElem, expStartDateElem, expEndDateElem, expDescriptionElem),
        educations: fetchValues(['edu_school', 'edu_degree','edu_city', 'edu_start_date','edu_graduation_date', 'edu_description'], eduSchoolElem, eduDegreeElem, eduCityElem, eduStartDateElem, eduGraduationDateElem, eduDescriptionElem),
        projects: fetchValues(['proj_title', 'proj_link', 'proj_description'], projTitleElem, projLinkElem,expDescriptionElem),
        skills: fetchValues(['skill'], skillElem)

    }
};

function validateFormData(elem, elemType, elemName) {
    if (elemType == validType.TEXT) {
        if (!strRegex.test(elem.value) || elem.value.trim().length == 0) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    }

    if (elemType == validType.TEXT_EMP) {
        if (!strRegex.test(elem.value)) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    }

    if (elemType == validType.EMAIL) {
        if (!emailRegex.test(elem.value) || elem.value.trim().length == 0) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    }

    if (elemType == validType.PHONENO) {
        if (!phoneRegex.test(elem.value) || elem.value.trim().length == 0) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    }

    if (elemType == validType.ANY) {
        if (elem.value.trim().length == 0) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    }
}

// Add error message to invalid fields
function addErrMsg(formElem, formElemName) {
    formElem.nextElementSibling.innerHTML = `${formElemName} is invalid`;
}

// Remove error message
function removeErrMsg(formElem) {
    formElem.nextElementSibling.innerHTML = "";
}

// Show list of data in preview
const showListData = (listData, listContainer) => {
    listContainer.innerHTML = "";
    listData.forEach(listItem => {
        let itemElem = document.createElement('div');
        itemElem.classList.add('preview-item');

        for(const key in listItem){
            let subItemElem = document.createElement('span');
            subItemElem.classList.add('preview-item-val');
            subItemElem.innerHTML = `${listItem[key]}`;
            itemElem.appendChild(subItemElem);
        }
        listContainer.appendChild(itemElem);
    })
}

const displayCV = (userData) => {
    // Personal Details
    nameDsp.innerHTML = `${userData.firstname} ${userData.middlename} ${userData.lastname}`;
    phonenoDsp.innerHTML = userData.phoneno;
    emailDsp.innerHTML = userData.email;
    addressDsp.innerHTML = userData.address;
    designationDsp.innerHTML = userData.designation;
    summaryDsp.innerHTML = userData.summary;

    // Display List Data (Handling Multiple Inputs)
    showListData(userData.projects, projectsDsp);
    showListData(userData.achievements, achievementsDsp);
    showListData(userData.skills, skillsDsp);
    showListData(userData.educations, educationsDsp);
    showListData(userData.experiences, experiencesDsp);
};

// Function to Populate Lists
   showListData = (dataArray, targetElement) => {
    if (!Array.isArray(dataArray)) return;

    targetElement.innerHTML = ""; // Clear previous data

    dataArray.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        targetElement.appendChild(li);
    });
};

// Call displayCV function on input event
mainform.addEventListener("input", () => {
    const userData = getUserInputs();
    displayCV(userData);
});

  

function generateCV() {
    let userData = getUserInputs();
    displayCV(userData);
    console.log(userData);
    const descriptionValue = document.querySelector('.achieve_description').value;
    console.log("Description entered: ", descriptionValue);
  }
  
  // Attach the event listener
  document.addEventListener('DOMContentLoaded', function() {
    const inputFields = document.querySelectorAll('input');
    inputFields.forEach(function(field) {
      field.addEventListener('keyup', generateCV);
    });
  });
  
  
function previewImage() {
    let imageElem = document.getElementById('image-input');
    let imageDsp = document.getElementById('image-display');
  
    if (imageElem.files && imageElem.files[0]) {
      let ofReader = new FileReader();
      ofReader.readAsDataURL(imageElem.files[0]);
      ofReader.onload = function (ofEvent) {
        imageDsp.src = ofEvent.target.result;
      }   } 
}  

function printCV() {
    window.print();
}


function validation() {
    const name = document.getElementById("name").value;
    const namePattern = /^[a-zA-Z\s]+$/;
    if (!namePattern.test(name)) {
        alert("Please enter a valid name (only alphabets allowed).");
        return false;
    }
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    const address = document.getElementById("address").value;
    const addressPattern = /^[a-zA-Z0-9\s-]+$/;
    if (!addressPattern.test(address)) {
        alert("Please enter a valid address (e.g., street 23-village).");
        return false;
    }
    const phone = document.getElementById("phone").value;
    const phonePattern = /^[0-9]{11}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number (11 digits).");
        return false;
    }
    const message = document.getElementById("message").value;
    const messagePattern = /^[a-zA-Z\s]+$/;
    if (!messagePattern.test(message)) {
        alert("Please enter a valid message (only alphabets and spaces allowed).");
        return false;
    }
    sendEmail(name, email, address, phone, message);
    return true;
}
function sendEmail(name, email, address, phone, message) {
    const subject = "New Message from Contact Form";
    const body = `Name: ${name}\nEmail: ${email}\nAddress: ${address}\nPhone: ${phone}\nMessage: ${message}`;
    const mailtoLink = `mailto:youremail@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    alert("Your message has been sent!");
}

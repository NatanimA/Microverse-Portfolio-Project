const hamburger = document.querySelector('#hamb');
const navBar = document.querySelector('#mobile-navbar');
const body = document.querySelector('body');
const headline = document.querySelector('#headline');
const popup = document.querySelector('#popup');
const bg = document.querySelector('#popbg');
const work = document.querySelector('#work');
const close = document.querySelector('.close-btn');
const content = document.querySelector('#content h2');
const popImg = document.querySelector('#pop-img');
const popupProjType = document.querySelector('#content .proj-info .proj-type');
const popupProjCompany = document.querySelector(
  '#content .proj-info .proj-company',
);
const popupProjYear = document.querySelector('#content .proj-info .proj-year');
const popupDescription = document.querySelector('#pop-description');
const liveLink = document.querySelector('.live-link');
const sourceLink = document.querySelector('.source-link');
const skillsList = document.querySelector('#popup-skills-buttons');
const form = document.getElementById('form-wrapper');
const errorMsg = document.getElementById('error-msg');
const email = document.querySelector('#email');
const personName = document.querySelector('#name');
const message = document.querySelector('#form-message-input');
const storage = window.localStorage;

const projects = [
  {
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projtype: 'Back End Developer',
    projYear: '2015',
    projCompany: 'Tonic',
    image: './assets/SnapshootPortfolio.png',
    technologies: ['html', 'css', 'javaScript', 'github'],
    'live link': 'https://natanima.github.io/Microverse-Portfolio-Project/',
    'source link': 'https://github.com/NatanimA/Microverse-Portfolio-Project',
  },
  {
    name: 'Multi-Post Stories',
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    projtype: 'Full Stack Dev',
    projYear: '2015',
    projCompany: 'Facebook',
    image: './assets/SnapshootPortfolio2.png',
    technologies: ['html', 'ruby on rails', 'css', 'javascript'],
    'live link': 'https://natanima.github.io/Microverse-Portfolio-Project/',
    'source link': 'https://github.com/NatanimA/Microverse-Portfolio-Project',
  },
  {
    name: 'Facebook-360',
    description:
      'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    projtype: 'Full Stack Dev',
    projYear: '2015',
    projCompany: 'Facebook',
    image: './assets/SnapshootPortfolio3.png',
    technologies: ['html', 'ruby on rails', 'css', 'javascript'],
    'live link': 'https://natanima.github.io/Microverse-Portfolio-Project/',
    'source link': 'https://github.com/NatanimA/Microverse-Portfolio-Project',
  },
  {
    name: 'Uber Navigations',
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    projtype: 'Lead Developer',
    projYear: '2018',
    projCompany: 'Uber',
    image: './assets/SnapshootPortfolio4.png',
    technologies: ['html', 'ruby on rails', 'css', 'javascript'],
    'live link': 'https://natanima.github.io/Microverse-Portfolio-Project/',
    'source link': 'https://github.com/NatanimA/Microverse-Portfolio-Project',
  },
];

projects.forEach((project) => {
  const projectContainer = document.createElement('div');
  projectContainer.className = 'project';
  projectContainer.innerHTML = `<img class="project-picture" src="${
    project.image
  }" alt="project screenshot"> <div class="proj-div"> <h2 class="proj-title">${
    project.name
  }</h2> <p class="proj-info"> <span class="proj-company">${
    project.projCompany
  }</span> <span><img src="./assets/Counter.png" alt=" "></span> <span class="proj-type">${
    project.projtype
  }</span> <span><img src="./assets/Counter.png" alt=" "></span> <span class="proj-year">${
    project.projYear
  }</span> </p> <p class="proj-description">${
    project.description
  }</p> <ul class="proj-lang">${project.technologies
    .map((tech) => `<li class='lang'>${tech}</li>`)
    .join('')}</ul> <button class="enabled-btn">See Project</button> </div>`;
  work.appendChild(projectContainer);
});

const ul = document.createElement('ul');
ul.className = 'proj-lang';
skillsList.prepend(ul);

function popupDetailsWindow(index) {
  ul.innerHTML = '';
  content.innerText = projects[index].name;
  popImg.src = projects[index].image;
  popupDescription.innerText = projects[index].description;
  popupProjType.innerText = projects[index].projtype;
  popupProjCompany.innerText = projects[index].projCompany;
  popupProjYear.innerText = projects[index].projYear;
  projects[index].technologies.forEach((skill) => {
    const li = document.createElement('li');
    li.className = 'lang';
    li.innerText = skill;
    ul.appendChild(li);
  });
  liveLink.href = projects[index]['live link'];
  sourceLink.href = projects[index]['source link'];
}

const projectBtn = document.querySelectorAll('.project .enabled-btn');
projectBtn.forEach((btn) =>
  btn.addEventListener('click', () => {
    popup.classList.add('active');
    body.classList.add('active');
    bg.classList.add('active');
    popupDetailsWindow(Array.prototype.indexOf.call(projectBtn, btn));
  }),
);

close.addEventListener('click', () => {
  popup.classList.remove('active');
  body.classList.remove('active');
  bg.classList.remove('active');
});

hamburger.addEventListener('click', () => {
  headline.classList.toggle('active');
  hamburger.classList.toggle('active');
  navBar.classList.toggle('active');
  body.classList.toggle('active');
});

document.querySelectorAll('.mobile-nav-link').forEach((link) =>
  link.addEventListener('click', () => {
    headline.classList.remove('active');
    hamburger.classList.remove('active');
    navBar.classList.remove('active');
    body.classList.remove('active');
  }),
);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (event.target[1].value === event.target[1].value.toLowerCase()) {
    form.submit();
  } else {
    email.classList.add('active');
    errorMsg.innerText =
      "Please Enter E-mail with lowercase like 'abcd@gmail.com'";
  }
});

const inputData = {
  personName: '',
  email: '',
  message: '',
};

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    const { code, name } = e;
    return (
      e instanceof DOMException
        && (code === 22
          || code === 1014
          || name === 'QuotaExceededError'
          || name === 'NS_ERROR_DOM_QUOTA_REACHED')
        && storage.length !== 0
    );
  }
}

personName.addEventListener('change', () => {
  inputData.personName = personName.value;
  inputData.email = email.value;
  inputData.message = message.value;
  storage.setItem('formData', JSON.stringify(inputData));
});

email.addEventListener('change', () => {
  inputData.email = email.value;
  inputData.message = message.value;
  storage.setItem('formData', JSON.stringify(inputData));
});

message.addEventListener('change', () => {
  inputData.personName = personName.value;
  inputData.email = email.value;
  inputData.message = message.value;
  storage.setItem('formData', JSON.stringify(inputData));
});

function retrieveForm() {
  if (storageAvailable('localStorage')) {
    const formDataInput = storage.getItem('formData');
    const formData = JSON.parse(formDataInput);
    return formData;
  }
}

function populateFormData() {
  const formData = retrieveForm();
  if (formData) {
    if (formData.personName) {
      personName.value = formData.personName;
    }
    if (formData.email) {
      email.value = formData.email;
    }
    if (formData.message) {
      message.value = formData.message;
    }
  }
}

populateFormData();

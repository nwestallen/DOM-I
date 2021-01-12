const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM <br> Is <br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street <br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let links = document.querySelectorAll('nav a');
links[0].textContent = siteContent["nav"]["nav-item-1"];
links[1].textContent = siteContent["nav"]["nav-item-2"];
links[2].textContent = siteContent["nav"]["nav-item-3"];
links[3].textContent = siteContent["nav"]["nav-item-4"];
links[4].textContent = siteContent["nav"]["nav-item-5"];
links[5].textContent = siteContent["nav"]["nav-item-6"];

let h1 = document.querySelector('h1');
h1.innerHTML = siteContent["cta"]["h1"];

let button = document.querySelector('button');
button.textContent = siteContent["cta"]["button"];

let ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent["cta"]["img-src"];

let topContent = document.querySelectorAll('.top-content .text-content');
topContent[0].querySelector('h4').textContent = siteContent["main-content"]["features-h4"];
topContent[0].querySelector('p').textContent = siteContent["main-content"]["features-content"];
topContent[1].querySelector('h4').textContent = siteContent["main-content"]["about-h4"];
topContent[1].querySelector('p').textContent = siteContent["main-content"]["about-content"];

document.querySelector('#middle-img').src = siteContent["main-content"]["middle-img-src"];

let bottomContent = document.querySelectorAll('.bottom-content .text-content');
bottomContent[0].querySelector('h4').textContent = siteContent["main-content"]["services-h4"];
bottomContent[0].querySelector('p').textContent = siteContent["main-content"]["services-content"];
bottomContent[1].querySelector('h4').textContent = siteContent["main-content"]["product-h4"];
bottomContent[1].querySelector('p').textContent = siteContent["main-content"]["product-content"];
bottomContent[2].querySelector('h4').textContent = siteContent["main-content"]["vision-h4"];
bottomContent[2].querySelector('p').textContent = siteContent["main-content"]["vision-content"];

document.querySelector('.contact h4').textContent = siteContent["contact"]["contact-h4"];
let contactLines = document.querySelectorAll('.contact p');
contactLines[0].innerHTML = siteContent["contact"]["address"];
contactLines[1].textContent = siteContent["contact"]["phone"];
contactLines[2].textContent = siteContent["contact"]["email"];

let footer = document.querySelector('footer');
footer.querySelector('p').textContent = siteContent["footer"]["copyright"];

links.forEach(link => link.style.color = 'green');

let linkBegin = document.createElement("a");
linkBegin.textContent = 'Beginning';
linkBegin.style.color = 'green';
document.querySelector('nav').prepend(linkBegin);

let linkEnd = document.createElement("a");
linkEnd.textContent = 'End';
linkEnd.style.color = 'green';
document.querySelector('nav').appendChild(linkEnd);
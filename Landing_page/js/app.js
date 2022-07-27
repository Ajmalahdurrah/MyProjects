/*
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
*/

// Define global Variables to target DOM elements...
const navMenu = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

// Define document 'fragment' --virtual container for 'newNavItem(s)'...
const fragment = document.createDocumentFragment();


/* Iterate over 'sections' Array and collect values of 'id' and 'data-nav' for every instanceof HTML 'section'... */

for (let section of sections) {
  
  // Create newNavItem...
  let newNavItem = document.createElement('li');
  
  // Collect section data...
  const sectionId = section.id;
  const sectionName = section.dataset.nav;
  
  // Bind section data to 'newNavItem'...
  newNavItem.innerHTML = `<a class='menu__link' href='#${sectionId}'>${sectionName}</a>`;
  
  // Append 'newNavItem' instance to document 'fragment'...
  fragment.appendChild(newNavItem);

}


// Update document view...
navMenu.appendChild(fragment);


/* Function to determine 'element' visibility -- to return 'true' if 'element' 'isInViewport'... */

function isInViewport(element) {

    const rect = element.getBoundingClientRect();
    return ( rect.top < 250 && rect.bottom >250 );

};


/* Function to remove or add active class to 'sections'... */

function sectionActivation() {

  for (let section of sections) {
    const isVisible = isInViewport(section);
    
    const sectionId = section.id;
    let sectionIndex = sectionId - 1;

    // Remove active class from section -- default state...
    section.classList.remove('your-active-class');
    section.style.background = '';
      navMenu.childNodes[sectionIndex].style.background = '';

    // Add active class to section -- if section 'isInViewport'...
    if (isVisible) {
      section.classList.add('your-active-class');
      section.style.background = 'linear-gradient(0deg, rgba(255,255,255,.1) 20%, purple 200%)';
      navMenu.childNodes[sectionIndex].style.background = 'purple'

    }

  }

}

/* scrollEvent listener to call sectionActivation function...*/

window.addEventListener('scroll', sectionActivation);


/*
- sets up clickEvent listeners forEach navLink and parses a 'clickHandler' function.

- 'clickHandler' function to 'prevenDefault' click response, and then uses a '.scroll' method to scroll to 'targetSection'.
...*/
  

const links = document.querySelectorAll('.navbar__menu .menu__link');

links.forEach(function(link){
  link.addEventListener('click', (event)=>{
    event.preventDefault();
    const href = link.getAttribute("href");
    const targetId = href.slice(1,2);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({behavior:'smooth'}); 

  });

});
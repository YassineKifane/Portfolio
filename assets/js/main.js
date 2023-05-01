/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById('sidebar'),
	  navToggle = document.getElementById('nav-toggle'),
	  navClose = document.getElementById('nav-close');

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if(navToggle){
	navToggle.addEventListener("click", () =>{
		navMenu.classList.add('show-sidebar')
	})
}

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */

if(navClose){
	navClose.addEventListener("click", () =>{
		navMenu.classList.remove('show-sidebar')
	})
}
	
/*=============== Qualification Tabs ===============*/
    tabs=document.querySelectorAll(".qualification__but");
	tabContents = document.querySelectorAll(".qualification__info");

tabs.forEach(tab=>{
	tab.addEventListener('click', () =>{
		const target = document.querySelector(tab.dataset.target)
		
	tabContents.forEach(tabContent =>{
		tabContent.classList.remove('qualification__active')
		})
		target.classList.add('qualification__active')

		tabs.forEach( tab =>{
			tab.classList.remove('qualification__active')
		})
		tab.classList.add('qualification__active')
	})
})

/*=============== SKILLS TABS ===============*/

	tabs=document.querySelectorAll('.skills__header');

	tabCont = document.querySelectorAll('.skills__group')

	tabs.forEach(tabb=>{
		tabb.addEventListener('click', () => {
			const target = document.querySelector(tabb.dataset.target)

			tabCont.forEach(tabConts => {

				tabConts.classList.remove('skills__active')
			})

			target.classList.add('skills__active')

			tabs.forEach( tabb =>{
				tabb.classList.remove('skills__active')
			})

			tabb.classList.add('skills__active')
			
		})
	})

/*=============== PORTFOLIO ===============*/

	let swiper = new Swiper('.portfolio__container', {
        cssMode: true,
        loop: false,

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        pagination: {
          el: '.swiper-pagination',
          clickable:true,
        },

     });



/*=============== INPUT ANIMATION ===============*/

const inputs=document.querySelectorAll(".input");

function focusFunc(){
	let parent = this.parentNode;
	parent.classList.add("focus");
}

function blurFunc(){
	let parent = this.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus")	
	}
}

inputs.forEach((input)=>{
	input.addEventListener("focus",focusFunc);
	input.addEventListener("blur",blurFunc);
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// get all sections that have an id defined
const sections = document.querySelectorAll("section[id]");

// add an event listener listening for scroll
window.addEventListener("scroll",navHighlighter);

function navHighlighter(){
	// get current scroll position
	let scrollY = window.pageYOffset;
	// Now we loop through sections to get height,top and ID values for each
	sections.forEach(current=>{
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute("id");
		/* - If our current scroll position enters the space where current section on screen is, odd active class to
		   corresponding navigation Link, else remove it 
		   - To know which Link needs an active class, we use sectionId variable we are getting while looping 
		   through sections as an selector */
		   if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
		   	document.querySelector('.nav__menu a[href*='+ sectionId + ']').classList.add("active-link");
		   }
		   else{
		   	document.querySelector('.nav__menu a[href*='+ sectionId + ']').classList.remove("active-link");
		   }
	})
}
/*=============== SHOW SCROLL UP ===============*/

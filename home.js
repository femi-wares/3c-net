//menu
//Global call
const hamburger_menu = document.getElementById("hamburger_menu");
const mobileNav = document.getElementById("navigation");

function displayMobileNav() {
    hamburger_menu.addEventListener("click", showNav); // pops out the hidden menu
}

function showNav() {
    mobileNav.classList.add("nav_visible"); //add the class visible
}
displayMobileNav(); //call the function

function addRemoveIcon() {
    const remove_nav = document.getElementById("remove_nav");
    console.log(remove_nav);
    if (displayMobileNav) {
        remove_nav.addEventListener("click", () => {
            mobileNav.classList.remove("nav_visible");
        });
    } else {
        return;
    }
}
addRemoveIcon();

// estimate buttons
const app = document.getElementById("app");
const website = document.getElementById("website");
const product = document.getElementById("Product");
const estimate_body = document.getElementById("estimate_body");
const body = document.querySelector("body");
console.log(body);

// update the content
function updateContent() {
    showWebContent(); //show webcontent as the default
    //add other functionalities
    website.addEventListener("click", showWebContent);
    app.addEventListener("click", showAppContent);
    product.addEventListener("click", showProductContent);
}

// enlisted html classnames 
const hosting = document.querySelector('.hosting');
const webType = document.querySelector('.webType');
const devType = document.querySelector('.devType');
const webContent = document.querySelector('.webContent');
const blog = document.querySelector('.blog');
const registration = document.querySelector('.registration');
const pages = document.querySelector('.pages');
const checkCost = document.querySelector('.checkCost');

const appType = document.querySelector('.appType');
const devType2 = document.querySelector('.devType2');
const appContent = document.querySelector('.appContent');


function showWebContent() {

    //trransition the display at the first insight
    estimate_body.style.transition = `all ease 0.3s`; //transition all
    estimate_body.innerHTML = `
    <section class='wrapper' style='height:100%; width:100%; display:flex; padding:1rem; flex-direction:column; gap:1rem;'>
        <h3 style="color:var(--home-background); text-align:center;"> Website development and design </h3>
        <div class='type_wrapper' style="display:flex; flex-direction:column; gap:.5rem; width:100%;"> 
          <p class="${webType}">Type of website </p>
          <select class='select' style="padding:.5rem; border-radius:.3rem" border:0; outline:none >
            <option class="">Select an option</option>
            <option id="">Personal</option>
            <option id="">Business</option>
            <option id="">E-commerce</option>
            <option id="">School management</option>
            <option id="">Hospital management</option>
            <option id="">Fintech</option>
            <option id="">Hotel</option>
            <option id="">NGO</option>
            <option id="">E-learning</option>
            <option id="">Investment Platform</option>
          </select>
        </div>
         
        <div class='type_wrapper' style="display:flex; flex-direction:column; gap:.5rem; width:100%;"> 
            <p class="${devType}">Type of development </p>
            <select class='select' style="padding:.5rem; border-radius:.3rem" border:0; outline:none;>
               <option id="">Select an option</option>
               <option id="">Custom(customized codes you can own)</option>
               <option id='template'>Templates(Use Pre-designed templates)</option>
               <option id="">Clone a website</option>
            </select>
        </div>

        <div class='type_wrapper' style="display:flex; flex-direction:column; gap:.5rem; width:100%;"> 
            <p class="${webContent}">Content Publishing </p>
            <select class='select' style="padding:.5rem; border-radius:.3rem" border:0; outline:none;>
               <option>Select an option</option>
               <option>Dynamic(Upload your contents from special admin panel)</option>
               <option>Static(contents will be created during development)</option>
            </select>
        </div>

        <div class='type_wrapper' style="display:flex; flex-direction:column; gap:.5rem; width:100%;"> 
            <p class="${registration}">Users Registration </p>
            <select class='select' style="padding:.5rem; border-radius:.3rem" border:0; outline:none;>
               <option>Select an option</option>
               <option>Allow(Users can create account , login and perform tasks)</option>
               <option>No</option>
            </select>
        </div>

        <div class='type_wrapper' style="display:flex; flex-direction:column; gap:.5rem; width:100%;"> 
            <p class="${hosting}">Domain and Hosting</p>
            <select class='select' style="padding:.5rem; border-radius:.3rem" border:0; outline:none;>
               <option>Select an option</option>
               <option>I have domain and hosting</option>
               <option>I do not have domain and hosting</option>
            </select>
        </div>

        <div class='type_wrapper' style="display:flex; flex-direction:column; gap:.5rem; width:100%;"> 
            <p class="${blog}">Blog System</p>
            <select class='select' style="padding:.5rem; border-radius:.3rem" border:0; outline:none;>
               <option>Select an option</option>
               <option>I like to have a blog system</option>
               <option>I do not want a blog system</option>
            </select>
        </div>

        <div class='type_wrapper' style="display:flex; flex-direction:column; gap:.5rem; width:100%;"> 
            <p class="${pages}">Number of pages</p>
            <input class="pages_input" placeholder="Number of pages" id="pages_input" style="padding:.5rem; border: 1px solid var(--text-color); outline: 0rem;" />
        </div>

        <button class="${checkCost}" style="padding:1rem; border:none; outline: 0rem; background: var(--home-background); width:50%;  margin:0 auto; border-radius:.4rem;  font-weight:600; color:var(--background-color);">
        <a style="color:white;" href="https://wa.me/message/7D34MCPGA6PAF1">
                        Check Cost
                    </a>
        </button>
    </section>
    `;
    estimate_body.style.cssText = `
      border-radius:1rem;
      border:1px solid var(--home-background);
    `;
    return;
}
function showAppContent() {
    const appWrapper = document.querySelector('.appwrapper');
    estimate_body.innerHTML = `
    <section class="${appWrapper}" style=" height:100%; padding:.5rem; width:100%; display:flex; flex-direction:column; gap:1rem;"> 
       <h3 style="color:var(--home-background); text-align:
       center;">App Development and Maintenance</h3>
        <div class='type_wrapper' style="display:flex; flex-direction:column; gap:.5rem; width:100%;"> 
          <p class="${appType}">Type of app </p>
          <select class='select' style="padding:.5rem; border-radius:.3rem" border:0; outline:none;>
            <option>Select an option</option>
            <option>Crypto</option>
            <option>Business</option>
            <option>E-commerce</option>
            <option>School management</option>
            <option>Hospital management</option>
            <option>Fintech</option>
            <option>Hotel</option>
            <option>NGO</option>
            <option>E-learning</option>
            <option>Investment Platform</option>
            <option>Delivery App</option>
          </select>
        </div>

        <div class='type_wrapper' style="display:flex; flex-direction:column; gap:.5rem; width:100%;"> 
            <p class="${devType2}">Type of development </p>
            <select class='select' style="padding:.5rem; border-radius:.3rem" border:0; outline:none;>
               <option>Select an option</option>
               <option>Conveyed Idea</option>
               <option id='template'>Templates(UI Designs)</option>
               <option>Clone an APP</option>
            </select>
        </div>

        <div class='type_wrapper' style="display:flex; flex-direction:column; gap:.5rem; width:100%;"> 
            <p class="${appContent}">Content Publishing </p>
            <select class='select' style="padding:.5rem; border-radius:.3rem" border:0; outline:none;>
               <option>Select an option</option>
               <option>Dynamic(Upload your contents from special admin ends)</option>
               <option>Static(contents will be created during development)</option>
            </select>
        </div>

        <div class='type_wrapper' style="display:flex; flex-direction:column; gap:.5rem; width:100%;">
            <p class="${registration}">Users Registration </p>
            <select class='select' style="padding:.5rem; border-radius:.3rem" border:0; outline:none;>
               <option>Select an option</option>
               <option>Allow(Users can create account , login and perform tasks)</option>
               <option>No</option>
            </select>
        </div>

         <button class="Getquotenow" style="padding:1rem; border:none; outline: 0rem; background: var(--home-background); width:50%;  margin:0 auto; border-radius:.4rem;  font-weight:600; color:var(--background-color);"><a style="color:white;" href="https://wa.me/message/7D34MCPGA6PAF1">
                        Get Quote Now
                    </a>
        </button>

    </section>
    `;
}
function showProductContent() {
    estimate_body.innerHTML = `
     <h3>Under Re-development. </h3>
     <h5>Check back in a while or use the Get quote button to re-direct to whatsapp. </h5>
    `;
}
updateContent();

//header onscroll event
window.addEventListener('scroll', () => {
    const header = document.getElementById("header");
    // log into the console for debugging
    // console.log(header);

    if (window.scrollY >= 100) {
        setTimeout(() => {
            header.classList.add('headerremove');
            mobileNav.style.top = "80px";
        }, 0); // runs 5 seconds after the scrolling starts
    } else {
        if (window.scrollY <= 0) {
            header.classList.remove('headerremove');
            mobileNav.style.top = "0px";
        }
    }
});

// embedd the intersection observer api here
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('action');
        }
    });
}, {
    threshold: 0.25,
    rootMargin: '0px 0px -50px 0px'
});
//observe the element
revealElements.forEach(el => observer.observe(el));

function hideMobileNav() {
    const navlinks = document.querySelectorAll('.navlinks');
    //login to the console for debugging
    console.log('${navlinks} is logged into the console');
    navlinks.forEach(navlink => {
        navlink.addEventListener('click', () => {
            mobileNav.classList.remove("nav_visible");
        })
    });
}
hideMobileNav();

// Smooth scroll for navigation .This is the name of the section 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// expertise modals each for easy faxing
const expertiseModalOne = document.getElementById('expertise-modal-one');
const seeExpertiseDetailsOne = document.getElementById('see-expertise-details-one');
const expertiseModalTwo = document.getElementById('expertise-modal-two');
const seeExpertiseDetailsTwo = document.getElementById('see-expertise-details-two');
const expertiseModalThree = document.getElementById('expertise-modal-three');
const seeExpertiseDetailsThree = document.getElementById('see-expertise-details-three');
const expertiseModalFour = document.getElementById('expertise-modal-four');
const seeExpertiseDetailsFour = document.getElementById('see-expertise-details-four');
const expertiseModalFive = document.getElementById('expertise-modal-five');
const seeExpertiseDetailsFive = document.getElementById('see-expertise-details-five');
const expertiseModalSix = document.getElementById('expertise-modal-six');
const seeExpertiseDetailsSix = document.getElementById('see-expertise-details-six');

seeExpertiseDetailsOne.addEventListener('click', () => {
    expertiseModalOne.style.display = "flex";
})

if (expertiseModalOne && seeExpertiseDetailsOne) {
    expertiseModalOne.addEventListener('click', function (e) {
        if (e.target === expertiseModalOne) {
            expertiseModalOne.style.display = 'none';
        }
    })
};

seeExpertiseDetailsTwo.addEventListener('click', () => {
    expertiseModalTwo.style.display = "flex";
})

if (expertiseModalTwo && seeExpertiseDetailsTwo) {
    expertiseModalTwo.addEventListener('click', function (e) {
        if (e.target === expertiseModalTwo) {
            expertiseModalTwo.style.display = 'none';
        }
    })
};

seeExpertiseDetailsThree.addEventListener('click', () => {
    expertiseModalThree.style.display = "flex";
})

if (expertiseModalThree && seeExpertiseDetailsThree) {
    expertiseModalThree.addEventListener('click', function (e) {
        if (e.target === expertiseModalThree) {
            expertiseModalThree.style.display = 'none';
        }
    })
};

seeExpertiseDetailsFour.addEventListener('click', () => {
    expertiseModalFour.style.display = "flex";
})

if (expertiseModalFour && seeExpertiseDetailsFour) {
    expertiseModalFour.addEventListener('click', function (e) {
        if (e.target === expertiseModalFour) {
            expertiseModalFour.style.display = 'none';
        }
    })
};

seeExpertiseDetailsFive.addEventListener('click', () => {
    expertiseModalFive.style.display = "flex";
})

if (expertiseModalFive && seeExpertiseDetailsThree) {
    expertiseModalFive.addEventListener('click', function (e) {
        if (e.target === expertiseModalFive) {
            expertiseModalFive.style.display = 'none';
        }
    })
};

seeExpertiseDetailsSix.addEventListener('click', () => {
    expertiseModalSix.style.display = "flex";
})

if (expertiseModalSix && seeExpertiseDetailsSix) {
    expertiseModalSix.addEventListener('click', function (e) {
        if (e.target === expertiseModalSix) {
            expertiseModalSix.style.display = 'none';
        }
    })
};

// call each pop up modal from the ration
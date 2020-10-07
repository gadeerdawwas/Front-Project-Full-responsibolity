//////////////// root color ///////////////
var colorOption = localStorage.getItem('color-option')
// console.log(colorOption);
if (colorOption !== null) {
    document.documentElement.style.setProperty('--main-color', colorOption);
    document.querySelectorAll(".color-list li").forEach(element => {
        element.classList.remove('active')

        if (element.dataset.color === colorOption) {
            element.classList.add('active')
        }

    })
}

//////////////   move the page    //////////////
let alllinks = document.querySelectorAll('.lists a');

let allbullet = document.querySelectorAll('.navbullets .bullet')
function scrolLToSomeWhere(element) {
    element.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(e.target.dataset.section);
            let el = document.querySelector(e.target.dataset.section)
            // el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});

            el.scrollIntoView();

        });
    });

}
scrolLToSomeWhere(allbullet);
scrolLToSomeWhere(alllinks);

////////////// setting icon //////////////
var settingBox = document.querySelector('.setting_box'),
    toggleSetting = document.querySelector('.toggle-setting .fa-gear');
document.querySelector(".toggle-setting .fa-gear").onclick = function () {
    this.classList.toggle("fa-spin");
    settingBox.classList.toggle("open");
    // settingBox.style.left=0;
}
/////////////// switch color////////////////
var colorlist = document.querySelectorAll('.color-list li');

colorlist.forEach(li => {
    li.addEventListener("click", (e) => {
        // e.target.dataset.color
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color)
        localStorage.setItem('color-option', e.target.dataset.color)
        // e.target.parentElement.querySelectorAll(".active").forEach(element => {
        //     element.classList.remove('active')
        // })
        // e.target.classList.add('active')
        activeElement(e)
    })

})
/////////////// switch random backgrond color ////////////////
var backgroundOption = true,
    backgroundInterval;
var randomBack = document.querySelectorAll('.random-Background span');

var backgrondLocalItem = localStorage.getItem('background-option');

if (backgrondLocalItem !== null) {

    if (backgrondLocalItem === 'true') {
        backgroundOption = true
        ramdomImage()
        // console.log(backgroundOption);
    } else {
        backgroundOption = false
        // console.log(backgroundOption);
    }
    document.querySelectorAll('.random-Background span').forEach(e => {
        e.classList.remove('active');
    })

    if (backgrondLocalItem === 'true') {
        document.querySelector('.random-Background .yes').classList.add('active');
    }
    else { document.querySelector('.random-Background .no').classList.add('active'); }
}



randomBack.forEach(span => {
    span.addEventListener("click", (e) => {
        // e.target.parentElement.querySelectorAll(".active").forEach(element => {
        //     element.classList.remove('active')
        // })
        // e.target.classList.add('active')
        activeElement(e)
        if (e.target.dataset.background === 'yes') {
            backgroundOption = true
            ramdomImage()
            localStorage.setItem('background-option', true)

        } else {
            backgroundOption = false
            clearInterval(backgroundInterval)
            localStorage.setItem('background-option', false)

        }
    })

})
/////////////////// images  //////////////////////
var landingPages = document.getElementById('landing-page');
let arrayimages = ['44.jpg', '3.jpg', '33.jpg', '11.jpg'];

function ramdomImage() {
    if (backgroundOption === true) {
        backgroundInterval = setInterval(() => {
            randomnumber = Math.floor(Math.random() * arrayimages.length);
            landingPages.style.backgroundImage = 'url("imag/' + arrayimages[randomnumber] + '")'
        }, 1000)
    }

}


/////////////// skills scroll //////////////////

let ourSkills = document.querySelector('.skills');

window.onscroll = function () {

    skillOffsetTop = ourSkills.offsetTop;
    skillOffsetHeight = ourSkills.offsetHeight;
    skillinnerHeight = this.innerHeight;
    // console.log(skillOffsetTop, skillOffsetHeight, skillinnerHeight);
    windscrolltop = this.pageYOffset;
    if (windscrolltop > (skillOffsetTop + skillOffsetHeight - skillinnerHeight)) {
        let allskill = document.querySelectorAll('.skill-box .skill-progress span');
        allskill.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        })
    }
}
////////////// gallery image ////////////
let ourgallery = document.querySelectorAll('.gallery img')

ourgallery.forEach(img => {

    img.addEventListener('click', (e) => {
        let overlay = document.createElement("div")
        // console.log(overlay);
        overlay.className = "overlay-popup";
        document.body.appendChild(overlay);

        let popupBox = document.createElement("div");
        popupBox.className = 'popup-box';

        if (img.alt !== null) {
            let alt = document.createElement('h3');
            let textalt = document.createTextNode(img.alt);
            console.log(textalt);
            alt.appendChild(textalt)
            popupBox.appendChild(alt)

        }

        popupTImage = document.createElement('img');
        popupTImage.src = img.src;

        console.log(img.src);
        popupBox.appendChild(popupTImage)
        document.body.appendChild(popupBox)

        let closeButton = document.createElement('span');
        let closeButtonText = document.createTextNode("X")
        closeButton.className = "closeButton";
        closeButton.appendChild(closeButtonText)
        popupBox.appendChild(closeButton)

    });
});
//////////
var Bulletsoption=document.querySelectorAll('.Bullets-option span')
var navbullets=document.querySelector('.navbullets')
var bulletOption = localStorage.getItem('bullet-option')

if(bulletOption !== null){
    // console.log('not')
    Bulletsoption.forEach(span =>{
        span.classList.remove('active');
    })
    if(bulletOption === 'block'){
        console.log('block');
        navbullets.style.display ='block';
        document.querySelector('.Bullets-option .yes').classList.add('active');

    }else{
        navbullets.style.display ='none';
        document.querySelector('.Bullets-option .no').classList.add('active');

    }

}

Bulletsoption.forEach(span =>{
    span.addEventListener('click' ,(e)=>{
        if(span.dataset.display === 'show'){
            navbullets.style.display ='block';
            localStorage.setItem('bullet-option','block')
        }else{
            navbullets.style.display ='none';
            localStorage.setItem('bullet-option','none')

        }
        activeElement(e)
    })
})
//// close pupo

document.addEventListener('click', (e) => {
    if (e.target.className == 'closeButton') {
        e.target.parentNode.remove()
        document.querySelector('.overlay-popup').remove()
    }
})
/////// buttlet

function activeElement(ev) {

    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove('active')
    })
    ev.target.classList.add('active')
}


document.querySelector('.reset-option').onclick =function () {
    // localStorage.clear();

    // or
    localStorage.removeItem('color-option');
    localStorage.removeItem('background-option');
    localStorage.removeItem('bullet-option');

    window.location.reload();
    
}


//////  responsive menu //////////////
var tagglemenu=document.querySelector('.taggle-menu')
var links=document.querySelector('.lists')

tagglemenu.onclick=function (e) {
    e.stopPropagation()

    this.classList.toggle('menu-active')
    links.classList.toggle('open')
    
}
links.onclick=function (e) {
    e.stopPropagation()
}
document.addEventListener('click',(e)=>{
    if(e.target !==tagglemenu && e.target !==links){
        console.log('This is not Button and link');
        if(links.classList.contains('open')){
            tagglemenu.classList.toggle('menu-active')
            links.classList.toggle('open')
        }
    }
})
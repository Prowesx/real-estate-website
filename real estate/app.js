const navbarr = document.getElementById(`menu`)
const tog =document.querySelector(`.navbar`)

navbarr.addEventListener(`click`, () =>{
 tog.classList.toggle(`active`);
 navbarr.classList.toggle(`fa-times`);
});

window.onscroll = () =>{
tog.classList.remove(`active`);
navbarr.classList.remove(`fa-times`);
}

//  common reveal options
        ScrollReveal({ 
         //   reset: true,
           distance:`60px`,
           duration:2500,
           delay:400,
            }); 

            // to target elements and animations delay
            ScrollReveal().reveal(`.head`, { delay: 150, origin:`top` });

ScrollReveal().reveal(`.box`, {
  delay: 200,
  origin: `bottom`,
});


ScrollReveal().reveal(`.btn`, {
  delay: 250,
  origin: `right`,
});

ScrollReveal().reveal(`.image-con`, {
  delay: 300,
  origin: `bottom`,
});

ScrollReveal().reveal(`.icon`, {
  delay: 350,
  origin: `right`,
});

ScrollReveal().reveal(`.location`, { delay: 300, origin: `right`, });

ScrollReveal().reveal(`.share`, { delay: 500, origin: `bottom` ,});

ScrollReveal().reveal(`icons-container`, { delay: 500, origin: `bottom` });

ScrollReveal().reveal(`.icons`, { delay: 500, origin: `left` });

ScrollReveal().reveal(`.inputbox`, {
  delay: 200,
  origin: `bottom`,
});

ScrollReveal().reveal(`.map`, {
  delay: 250,
  origin: `right`,
});


ScrollReveal().reveal(`.credit`, { delay: 500, origin: `right` });

ScrollReveal().reveal(`.footer-container`, { delay: 200, origin: `left` });

ScrollReveal().reveal(`.footer p`, { delay: 200, origin: `left` });

ScrollReveal().reveal(`.footer a`, { delay: 200, origin: `bottom` });


const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}



const btn = document.querySelector('#btn');        

const radioButtons = document.querySelectorAll('input[name="radio"]');

btn.addEventListener("click", () => {

    let selectedSize;

    for (const radioButton of radioButtons) {

        if (radioButton.checked) {

            selectedSize = radioButton.value;

            break;

        }

    }

    // show the output:

    output.innerText = selectedSize ? `You selected ${selectedSize}` : `Du har inte valt något`;

})

//skriv functionen som chaneimg ska ha i img

//skapa en variable img = gedelementby id och ange id för img (myImg)

//och sedan anger img.classList.add(den reglen som vi har skapat i css )

function changeImg(){

var img = document.getElementById("myImg");

img.classList.add("touched");

}

function changeImge(){

var img = document.getElementById("myImge");

img.classList.add("touched");

}

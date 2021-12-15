
$(window).on('load', function () {
    $('.preloader').fadeOut(6000);
    $('.preload').delay(1100).fadeOut(1100);
});



const big_imgs = document.querySelectorAll(".big-img");
const small_cons = document.querySelectorAll(".small-con");

const big_img_btn_left = document.querySelector('.big-img-btn.left');
const big_img_btn_right = document.querySelector('.big-img-btn.right');


let increaseimg = 0;

big_imgs[increaseimg].classList.add('active');

big_img_btn_right.addEventListener("click", function () {

    increaseimg++;

    if (increaseimg === big_imgs.length) {
        increaseimg = 0;
    }

    clearfunction();
    big_imgs[increaseimg].classList.add('active');

    clearforsmallcon();
    forsmallcon(increaseimg);
});


big_img_btn_left.addEventListener("click", function () {

    increaseimg--;

    if (increaseimg < 0) {
        increaseimg = big_imgs.length - 1;
    }

    clearfunction();
    big_imgs[increaseimg].classList.add('active');


    clearforsmallcon();
    forsmallcon(increaseimg);

});



function clearfunction() {
    big_imgs.forEach(big_img => {
        big_img.classList.remove('active');
    })
}


function forsmallcon(number) {

    if (number > small_cons.length - 1) {
        number = 0;
    }

    clearforsmallcon();
    small_cons[number].classList.add('active');
}

forsmallcon(increaseimg);

function clearforsmallcon() {
    small_cons.forEach(small_con => {
        small_con.classList.remove('active');
    })
}


small_cons.forEach((small_con, index) => {
    small_con.addEventListener("click", (e) => {
        e.preventDefault();

        clearfunction();
        big_imgs[index].classList.add('active');

        clearforsmallcon();
        small_cons[index].classList.add('active');
    })
})



const decreasebtn = document.querySelector('.s-first');
const increasebtn = document.querySelector('.s-third');
const price = document.querySelector('.s-second');
const atcbtn = document.querySelector('.atc-btn');

const multiple = document.querySelector(".multiple");
const result = document.querySelector(".result");

const cartset = document.querySelector(".cart-set");


let increaseCount = 0;

price.innerText = +increaseCount;

increasebtn.addEventListener('click', function () {
    increaseCount++;

    if (increaseCount > 10) {
        alert("This is only 10 instock for limited edition");
        increaseCount = 10;
    }

    price.innerText = +increaseCount;
});



decreasebtn.addEventListener('click', function () {
    increaseCount--;

    if (increaseCount < 0) {
        alert("Please order as you want");
        increaseCount = 0;
    }

    price.innerText = +increaseCount;
});


atcbtn.addEventListener('click', function () {
    alert("Your order is added to cart");

    atcbtn.classList.add('active');

    resultFun();
});


cartset.addEventListener('click', function () {
    cartSet();
});

function cartSet() {

    if (!atcbtn.classList.contains('active')) {
        alert("Please Click Add to Cart");
    } else {
        cartset.setAttribute('data-bs-toggle', 'modal');
        cartset.click();
    }
};



function resultFun() {
    let getprice = price.innerText
    multiple.innerText = getprice;
    result.innerHTML = ` =  $${125 * getprice}.00`;
}
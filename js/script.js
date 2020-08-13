const hamburger = document.getElementById('hamburger'); 
const navList = document.getElementById('navlist');
const navbarLink = document.querySelectorAll('.navlist li a' );


hamburger.addEventListener('click' , () => {
    navList.classList.toggle('show')
});

navbarLink.forEach(elem => 
    elem.addEventListener('click', (event) => {

        smoothScroll(event); //memanggil function smoothScroll

        if(navList.classList.contains('show'))
            hamburger.click();
    })
);


// smoothScroll

const smoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    console.log(targetId);
    
    window.scrollTo({
        top: targetId==="#" ? 0 : document.querySelector(targetId).offsetTop,
        behavior: 'smooth'
    });
};
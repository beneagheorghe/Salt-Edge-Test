const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5 ease forwards ${index / 7 + 1.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
};

const hoverBlock = () => {
    const img = document.querySelector(".image");
    const imgContainer = document.querySelector(".image-container");
    const blocks = document.querySelectorAll("#block div");

    blocks.forEach((block, index) => {
        block.addEventListener("mouseover", () => {
            img.src = `images/image_${index + 1}.png`;
            img.style.opacity = "1";
            imgContainer.classList.add("light-container");
        });
        block.addEventListener("mouseout", () => {
            img.style.opacity = "0";
            img.src = `images/image_${index + 1}.png`;
            imgContainer.classList.remove("light-container");
        });
    });
};

navSlide();
hoverBlock();

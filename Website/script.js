const menu_icon = document.querySelector(".menu-icon");
const nav_links = document.querySelector(".nav-links");
const images =  document.querySelector(".images");
const plus = document.querySelector(".plus")
const second =  document.querySelector(".second")
const contact = document.querySelector(".contact")

const isvisible = false;
const cross = document.querySelector(".cross");
if (menu_icon) {
    menu_icon.addEventListener("click", ()=>{
        nav_links.classList.add("active");
    })
}

if (cross) {
    cross.addEventListener("click", ()=>{
        nav_links.classList.remove("active");
    })
}

plus.addEventListener("click", ()=>{
    const icon = plus.querySelector("i");
   
    if (icon.classList.contains("fa-plus")) {
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
        images.style.display = "block";

        
    }
    else{
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus")
        images.style.display = "none";
    }
})

second.addEventListener("click", ()=>{
    let newicons = second.querySelector("i");

    if (newicons.classList.contains("fa-plus")) {
        newicons.classList.remove("fa-plus");
        newicons.classList.add("fa-minus");
        contact.style.display = "block";
    }
    else{
        newicons.classList.remove("fa-minus");
        newicons.classList.add("fa-plus");
        contact.style.display = "none";
    }
})

//carts

const carts =  document.getElementById("carts");
const cart =  document.querySelector(".cart");
const heading = document.getElementById("heading")
const button = document.querySelector(".button")
const inputbox = document.querySelector(".inputbox")
const headings = document.getElementById("headings")
const bottomcart = document.getElementById("bottomcarts")
const crossright =  document.getElementById("crossright")
const searchbar = document.getElementById("searchbar")

if (carts) {
    
    carts.addEventListener("click", ()=>{
        cart.classList.add("right");
        headings.style.display = "block";
        heading.style.display = "none"
        inputbox.style.display = "none"
        button.style.display = "flex"
       
    });

    bottomcart.addEventListener("click", ()=>{
        cart.classList.add("right");
        headings.style.display = "block"
        heading.style.display = "none"
        inputbox.style.display = "none"
        button.style.display = "flex"
    });

    

}

if(searchbar)
{
    searchbar.addEventListener("click",()=>{
        cart.classList.add("right")
        headings.style.display = "none"
        heading.style.display = "block"
        inputbox.style.display = "flex"
        button.style.display = "none"

    })
}

if (crossright) {
    
    crossright.addEventListener("click", ()=>{
        cart.classList.remove("right");
       
    })
}




//shop filter

const filter = document.getElementById("filter");
const shop = document.getElementById("shops")

shop.addEventListener("click", ()=>{


    
    const newshop = shop.querySelector("i");

    if (newshop.classList.contains("fa-filter")) {
        newshop.classList.remove("fa-filter");
        newshop.classList.add("fa-x");
        filter.style.display  ="flex";

    }
    else{
        newshop.classList.remove("fa-x");
        newshop.classList.add("fa-filter");
        filter.style.display = "none";
       
    }
    
})



//details




// const imagesource = Array.from(smallimg).map(img => img.src);

// const changeimage = (index)=>{
//     mainimg.src = imagesource[index];
// };

// smallimg.forEach((smallimg,index)=>{
//     smallimg.addEventListener("click", ()=>{
//         changeimage(index);
//     })
// })


const quantity = document.querySelector(".quantity-input");
const increase = document.querySelector(".increase");
const decraese = document.querySelector(".decrease");

decraese.addEventListener("click", ()=>{
    const currentvalue = parseInt(quantity.value);
    if (currentvalue > 1) {
        quantity.value = currentvalue - 1
    
        }   
});

increase.addEventListener("click", ()=>{
    const currentvalue = parseInt(quantity.value);
   quantity.value = currentvalue + 1;
    
         
});




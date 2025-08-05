class MobileNavbar{
    constructor(burguer, itensList, itensLinks){
        this.burguer = document.querySelector(burguer)
        this.itensList = document.querySelector(itensList)
        this.itensLinks = document.querySelectorAll(itensLinks)
        this.activeClass = "active"

        this.handleClick = this.handleClick.bind(this)
    }

        animateLinks(){
            this.itensLinks.forEach((link, index) => {
                link.style.animation
                    ? (link.style.animation = "")
                    : (link.style.animation =`itensLinkFade 0.5 ease forwards ${index / 3 + .5}s`);
            });
    }


    handleClick() {
        this.itensList.classList.toggle(this.activeClass)
        this.burguer.classList.toggle(this.activeClass)
        this.animateLinks()
        
    }
    


    addClickEvent(){
        this.burguer.addEventListener("click", this.handleClick)
    }
    init() {
        if(this.burguer){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".burguer",
    ".itens-list",
    ".itens-list li",
);
mobileNavbar.init();
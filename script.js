document.addEventListener("DOMContentLoaded", function ()) {
    let sections = document.querySelectorAll(".intro_text");

}
const observer= new UnsertsectionObserver((entries)=> {
   entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
   }); 
});

const Aelements = document.querySelectorAll('.A');
hideenElements.forEach(el) => observer.observe(el);



//aqui adicionamos um evento de escutar o click do mouse sobre o icone. 
hamburgerButton.addEventListener("click", function(){
    mobileMenu.classList.add("flex");
    //criamos uma funçao que a ouvir o click do mouse, ele adicione uma class, que esta fazendo nossa caixa(div) aparecer, ou seja, ficar visivel.
});

//criamos uma funçao que a ouvir o click do mouse, ele REMOVE uma class, que esta fazendo nossa caixa(DIv)desaparecer,ou seja, ficar invisivel.
closeButton.addEventListener("click", function(){
    mobileMenu.classList.remove("flex");
});
window.revelar = ScrollReveal({reset:true});


revelar.reveal('.efeito-img-topo', {
    duration: 2000,
    distance: '90px'
})


revelar.reveal('.clientes-efeito', {
    duration: 2000,
    distance: '120px'
})



revelar.reveal('.principais-produtos', {
    duration: 2000,
    distance: '200px'
})
revelar.reveal('.sobre-nos-js', {
    duration: 2000,
    distance: '200px',
    origin: 'left'
})
revelar.reveal('.pagina-produtos', {
    duration: 2000,
    distance: '200px',
    origin: 'left'
})


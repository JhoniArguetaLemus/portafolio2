

let btnCerrar=document.getElementById("btnCerrar");

btnCerrar.addEventListener("click", ()=>{
    let lista=document.getElementById("lista");
    if(lista.style.display=="block"){

        lista.style.display="none";
        let imagen=document.getElementById("btnImagen");
        imagen.src='menu.png';
    }else{
        lista.style.display="block";
        let imagen=document.getElementById("btnImagen");
        imagen.src='close.png';
    }
    
    


})

function selectColor(event)
{
    let colorBox = event.target;
    let color = colorBox.style.backgroundColor;

    sessionStorage.setItem("selectedColor", color);
}

function getSelectedColor()
{
    if(sessionStorage.getItem("selectedColor"))
    {
        return sessionStorage.getItem("selectedColor");
    }

    return null;
}

function loadPalette(palette)
{
    let colors = palette;

    // le code de l'étape 1 se passe ici
    //Complétez la fonction loadPalette pour que chacune des couleurs du tableau colors devienne la couleur de fond d'une des <div> du <header>.
    let headerDiv = document.querySelectorAll("header > div");
    
    for (let i = 0; i < colors.length; i++){
        headerDiv[i].style.backgroundColor = colors[i];
    }
    
}


window.addEventListener("DOMContentLoaded", function(){
    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80"]);

    // le code de l'étape 2 se passe ici
    // Créez un event listener qui à chaque fois que l'on clique sur une <div> du header (n'importe laquelle) la fonction selectColor sans parenthèses est appelée.
    
    let headerDiv = document.querySelectorAll("header > div");
    
    window.addEventListener("click", function(){
        for (let i = 0; i< headerDiv.length; i++){
             selectColor(event);
            console.log(getSelectedColor());
        }
        
        
        
    // le code de l'étape 3 se passe ici
    // Créez un event listener qui quand on clique sur une div du main va appliqer la dernière couleur cliquée dans le header comme couleur de fond de la div.
    
       
    window.addEventListener("click", function() {
        let mainDiv = document.querySelectorAll("main > div"); 
        console.log("click");
        })
        
    })
  
    
    
    
    

});
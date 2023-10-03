
const secaoCores = document.getElementById('color-palette');
    function criaH2 (){
        const newColorGreen = document.createElement('h2'); 
        newColorGreen.className = 'color';
        newColorGreen.innerText = 'Verde';
        secaoCores.appendChild(newColorGreen);
        const newColorRed = document.createElement('h2');
        newColorRed.className = 'color';
        newColorRed.innerText = 'Vermelho';
        secaoCores.appendChild(newColorRed)
        const newColorBlue = document.createElement('h2');
        newColorBlue.className = 'color';
        newColorBlue.innerText = 'Azul';
        secaoCores.appendChild(newColorBlue)
        const newColorPink = document.createElement('h2');
        newColorPink.className = 'color';
        newColorPink.innerText = 'Rosa';
        secaoCores.appendChild(newColorPink);
    }
    
    function mudaCorH2 (){
        const colorGreen = document.getElementsByClassName('color')[0]
        colorGreen.style.color = 'green'; 
        const colorRed = document.getElementsByClassName('color')[1]
        colorRed.style.color = 'red'
        const colorBlue = document.getElementsByClassName('color')[2]
        colorBlue.style.color = 'blue'
        const colorPink = document.getElementsByClassName('color')[3]
        colorPink.style.color = 'pink'
    }
    
    criaH2();
    mudaCorH2();



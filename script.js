window.onload = () => {
const secaoCores = document.getElementById('color-palette');
    
    function criaH2 (){
        const newColorGreen = document.createElement('div'); 
        newColorGreen.className = 'color';
        newColorGreen.id = 'corVerde'
        newColorGreen.innerText = 'Verde'
        secaoCores.appendChild(newColorGreen);
        const newColorRed = document.createElement('div');
        newColorRed.className = 'color';
        newColorRed.id = 'corVermelha'
        newColorRed.innerText = 'Vermelho'
        secaoCores.appendChild(newColorRed)
        const newColorBlue = document.createElement('div');
        newColorBlue.className = 'color';
        newColorBlue.id = 'corAzul'
        newColorBlue.innerText = 'Azul'
        secaoCores.appendChild(newColorBlue)
        const newColorPurple = document.createElement('div');
        newColorPurple.className = 'color';
        newColorPurple.id = 'corRoxa'
        newColorPurple.innerText = 'Roxo';
        secaoCores.appendChild(newColorPurple);

    }
    function mudaCorH2 (){
        const colorGreen = document.getElementById('corVerde'); 
        colorGreen.style.backgroundColor = '#006400'; 
        const colorRed = document.getElementById('corVermelha');
        colorRed.style.backgroundColor = '#8b0000';
        const colorBlue = document.getElementById('corAzul');
        colorBlue.style.backgroundColor = '#000066';
        const colorPurple = document.getElementById('corRoxa');
        colorPurple.style.backgroundColor = '#66004d'; 
        
    }
    criaH2();
    mudaCorH2();
}


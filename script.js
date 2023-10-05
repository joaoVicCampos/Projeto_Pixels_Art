
const secaoCores = document.getElementById('color-palette');
const paleta = document.getElementById('color-palette');
const cadaPixel = document.getElementsByClassName('pixel'); 
         
    function criaH2 (){
        const newColorGreen = document.createElement('div'); 
        newColorGreen.className = 'color';
        newColorGreen.id = 'corVerde'
        newColorGreen.innerText = 'Verde'
        secaoCores.appendChild(newColorGreen);
        const newColorRed = document.createElement('div');
        newColorRed.className = 'color';
        newColorRed.id = 'corVermelha'
        newColorRed.innerText = 'Red'
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
        colorGreen.style.color = '#006400'
        const colorRed = document.getElementById('corVermelha');
        colorRed.style.backgroundColor = '#8b0000';
        colorRed.style.color = '#8b0000'
        const colorBlue = document.getElementById('corAzul');
        colorBlue.style.backgroundColor = '#000066';
        colorBlue.style.color ='#000066'
        const colorPurple = document.getElementById('corRoxa');
        colorPurple.style.color = '#66004d'
        colorPurple.style.backgroundColor = '#66004d'; 
        
}

    function criaQuadro (){       
         
            const sectionQuadro = document.getElementById('pixel-board');           
               const tamanhoQuadro = 5;
            
            for (let index = 0; index < tamanhoQuadro; index += 1) {
                const linha = document.createElement('div');
                linha.classList.add('linha'); 
                
                for (let j = 0; j < tamanhoQuadro; j += 1) {
                    const pixel = document.createElement('div');
                    pixel.classList.add('pixel');
                    linha.appendChild(pixel);
                }
                
                sectionQuadro.appendChild(linha);
            } 
}     
    
    function criaSelected(){ 
    paleta.addEventListener('click', (event) =>{
        const corSelecionada = document.querySelector('.selected')
        if(corSelecionada){
            corSelecionada.classList.remove('selected')
        }


        event.target.classList.add('selected')
    })
} 

    function selecionaPixel(){
        for(elemento of cadaPixel){
            elemento.addEventListener('click', (event) => {
                const pixelSelecionado = document.querySelector('.selected')
                if(pixelSelecionado){
                    event.target.style.backgroundColor = pixelSelecionado.style.backgroundColor;    
                
                }
            })
        }
        
    }


    criaH2();   
    mudaCorH2();
    criaQuadro();
    criaSelected();
    selecionaPixel();
    

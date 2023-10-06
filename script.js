
const secaoCores = document.getElementById('color-palette');
const paleta = document.getElementById('color-palette');
const cadaPixel = document.getElementsByClassName('pixel'); 
         
    function criaDiv (){
        const newColorGreen = document.createElement('div'); 
        newColorGreen.className = 'color';
        newColorGreen.id = 'corVerde'
        secaoCores.appendChild(newColorGreen);
        const newColorRed = document.createElement('div');
        newColorRed.className = 'color';
        newColorRed.id = 'corVermelha'  
        secaoCores.appendChild(newColorRed)
        const newColorBlue = document.createElement('div');
        newColorBlue.className = 'color';
        newColorBlue.id = 'corAzul'  
        secaoCores.appendChild(newColorBlue)
        const newColorPurple = document.createElement('div');
        newColorPurple.className = 'color';
        newColorPurple.id = 'corRoxa'
        
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
                salvarEstadoQuadro();
                }
            })
        }
        
}

    function criaBotao(){
        const divBtn = document.getElementById('botao');
        const botao = document.createElement('button');
        botao.id = 'clear-board';
        botao.innerText = 'Limpar';
        divBtn.appendChild(botao);
        const todosPixels = document.querySelectorAll('.pixel')
        botao.addEventListener('click', () => {
            for(elemento of todosPixels){
            elemento.style.backgroundColor = 'white'
            }
        })


    }

    function criaBotaoAleatorio(){
        const coresPaleta = document.querySelectorAll('.color')
        const letras = '0123456789ABCDEF'
        const botaoRandom = document.getElementById('botao-random');
        const newBtn = document.createElement('button');
        newBtn.id = 'button-random-color';
        newBtn.innerText = 'Cores aleatórias';
        botaoRandom.appendChild(newBtn);
        newBtn.addEventListener('click', () => {
            for(const elemento of coresPaleta){
                let corAletoria = '#';
                for(let index = 0; index < 6; index += 1){
              corAletoria += letras[Math.floor(Math.random() * 16)];                   
            }
            elemento.style.backgroundColor = corAletoria;
        }
        });
    } 

    function salvarEstadoQuadro() {
        const pixelBoard = [];
      
        for (const pixel of cadaPixel) {
            pixelBoard.push(pixel.style.backgroundColor || 'white');
        }
      
        localStorage.setItem('pixelBoard', JSON.stringify(pixelBoard));
      }
      function carregarEstadoQuadro() {
        const estadoQuadroString = localStorage.getItem('pixelBoard');
      
        if (estadoQuadroString) {
          const pixelBoard= JSON.parse(estadoQuadroString);
      
          for (let index = 0; index < pixelBoard.length; index += 1) {
            cadaPixel[index].style.backgroundColor = pixelBoard[i];
          }
        }
      }

    criaDiv();   
    mudaCorH2();
    criaQuadro();
    carregarEstadoQuadro();
    criaSelected();
    selecionaPixel();
    criaBotao();
    criaBotaoAleatorio();

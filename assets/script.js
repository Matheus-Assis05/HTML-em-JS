/*
* IREI RECEBER A DIV DE CLASSE POPUP, QUE POR PADRAO POSSUI DISPLAY: NONE E ATRAVEZ DO JS FAZER COM QUE AO APERTAR O BOTAO O DISPLAY SE TORNE INLINE
* TAMBEM QUERO FAZER COM QUE O POPUP FECHE AO APERTAR O X VERMELHO
*/

//event listener de clicar no botao e abrir o popup
const botao = document.querySelector('#botaoPag');
    
    botao.addEventListener('click', e =>{
        const box = document.querySelector('.popup')
        box.style.display = "inline";
    })

//botao de fechar
const btnX = document.querySelector('.botaofechar')

    btnX.addEventListener('click', e =>{
        const box = document.querySelector('.popup')
        box.style.display = "none";
    })
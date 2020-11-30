import NextPage from './scrapbook';

const nextpage = new NextPage();

document.getElementsByClassName('btn-add')[0].addEventListener("click", function(event){
    event.preventDefault()
    nextpage.trocarTela();
   
})

document.getElementsByClassName('btn-back')[0].addEventListener("click", function(event){
    event.preventDefault()
    nextpage.trocarTela();
   
})

document.getElementsByClassName('btn-salvar')[0].addEventListener("click", function(event){
    event.preventDefault()
    nextpage.salvar();
   
})


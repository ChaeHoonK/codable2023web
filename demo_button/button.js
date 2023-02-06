console.log('hello')

const text = document.getElementById('textfield');
const button = document.getElementsByTagName('button')


button[0].addEventListener('click', ()=> {
    //console.log('button clicked')
   text.innerText = "babo";
   text.style.color = "pink"
})

button[1].addEventListener('click', ()=> {
    //console.log('button clicked')
   text.innerText = "ddong";
   text.style.color = 'grey';
   text.style.fontSize = 30;
   text.style.opacity = 1;
})
const p = document.querySelector('p');
const button = document.querySelector('button');
const span = document.querySelector('span')
button.addEventListener('click', ()=>{
  showAdvice()

})

const showAdvice = async function getData(){
  try{
    // let response = await fetch("https://api.adviceslip.com/advice");
    let response = await fetch(`https://api.adviceslip.com/advice?timestamp=${Date.now()}`);

    let data = await response.json();
    // console.log(data)
     p.innerHTML= data.slip.advice;
     span.innerHTML = data.slip.id;
  }catch(error) {
    console.log('error:', error);
  }
}

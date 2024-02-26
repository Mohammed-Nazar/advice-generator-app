const btn = document.getElementById("btn")
const adviceId = document.getElementById("adviceId");
const adviceText = document.getElementById("adviceText");



const adivceApi = "https://api.adviceslip.com/advice";

async function getAdvice(){
    const response = await fetch(adivceApi);
    const data = await response.json();
     showAdvice(data);
}

getAdvice();



const showAdvice = (adivceObj)=>{
    const {id , advice} = adivceObj["slip"];
    adviceId.innerText = "#"+id;
    adviceText.innerHTML = `<p id="adviceText" class="font-medium text-white mb-2 w-14 text-center px-3">
    <sup
      class="fa-solid fa-quote-left text-[10px] text-center "
    ></sup>
    ${advice} <sup class="fa-solid fa-quote-right text-[10px]"></sup>
  </p>`;
}




btn.addEventListener("click", ()=>{
    getAdvice();
})
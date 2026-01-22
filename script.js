const btn_control = document.getElementById("btn_control");
const incrementbtn = document.getElementById("incrementbtn");
const decrementbtn = document.getElementById("decrementbtn");
const resetbtn = document.getElementById("resetbtn");
 let count = 0;
  function updateCounter(){
    counter.textContent = count;
  }
  incrementbtn.addEventListener('click',()=>{
    count++;
    updateCounter()
  })
  decrementbtn.addEventListener('click',()=>{
    count--;
    updateCounter()
  })
  resetbtn.addEventListener('click',()=>{
    count = 0;
    updateCounter()
  })

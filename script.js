let count = 0;
const valueElement = document.getElementById("#value");
const btn = document.querySelectorAll(".btn");

btn.forEach(btn=>{
    btn.addEventListener("click",e=>{
        let elementId = e.currentTarget.id;

        if(elementId == 'minus'){
            count--;
        }else if(elementId == 'reset'){
            count = 0;
        }else{
            count++;
        }

        value.textContent = count;
        value.style.color = count > 0 ? "green" : count < 0 ? "red" : "#007bff"
    })
})
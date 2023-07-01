const inputval=document.getElementById("input-val")
let btn=document.getElementById("btn")
let result=document.getElementById("result")
let radio1=document.getElementById("radio1")
let radio2=document.getElementById("radio2")
radio1.addEventListener("click",()=>{
    btn.addEventListener("click",()=>{
        let fahrenheit=(Number(inputval.value)*9/5)+32
            result.textContent=fahrenheit+" deg F"
    })
})
radio2.addEventListener("click",()=>{
    btn.addEventListener("click",()=>{
        let celsius=(Number(inputval.value)-32)*5/9
        result.textContent=celsius.toFixed(2)+" deg C"
    })
})
radio1.addEventListener("click",()=>{
    btn.addEventListener("click",()=>{
        if(inputval.value==="")
        {
            result.textContent="Enter the Temperature "
        }
        })
        
})
radio2.addEventListener("click",()=>{
    btn.addEventListener("click",()=>{
        if(inputval.value==="")
        {
            result.textContent="Enter the Temperature "
        }
        })
        
})

    



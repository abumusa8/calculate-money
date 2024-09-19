document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault()
    const inputmoney = document.getElementById('input-money').value;
    const inputpinnumber = document.getElementById('input-pin-number').value;
     

    if(inputpinnumber === '123'){
    console.log('login confrom')
        const blance = document.getElementById('blance').innerText
        const addmoneynumber =parseFloat(inputmoney)
        const addomneyblace =parseFloat(blance)
        
        const newblance =addmoneynumber-addomneyblace
        document.getElementById('blance').innerText =newblance

    }
else{
    alert('faild to add money..!')
}

})
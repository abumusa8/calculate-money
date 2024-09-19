document.getElementById('btn-cashout-money').addEventListener('click',function(value){
    value.preventDefault()
    
    const cashoutinput = document.getElementById('cashout-input').value;
    const cashoutin =parseFloat(cashoutinput)
    const inputcashoutpin = document.getElementById('input-cashout-pin').value;
    if(inputcashoutpin === '123'){
        
      const blance = document.getElementById('blance').innerText
      const blanceinput =parseFloat(blance)
      const cashoutin =parseFloat(cashoutinput)
      const newblance =blanceinput-cashoutin
      document.getElementById('blance').innerText = newblance
    
        
    }

    else{
        alert ('invalid issu')
    }
})
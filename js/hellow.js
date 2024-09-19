document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault()// loding problem solvd
    const phonenumber =document.getElementById('phone-number').value;
    const pinnumber=document.getElementById('pin-number').value;

    if(phonenumber === '1' && pinnumber === '1'){
        window.location.href='/home.html'
      

    }

    else{
        alert('invalid input')
    }
   console.log(phonenumber)
   console.log(pinnumber)
})
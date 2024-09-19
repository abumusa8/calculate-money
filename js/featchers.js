document.getElementById('cashout-btn').addEventListener('click', function(){
    const cashoutfrom =document.getElementById('cash-out-from').classList.remove('hidden')
    const addmony =document.getElementById('add-mony').classList.add('hidden')
})
const addmonybtn =document.getElementById('add-mony-btn').addEventListener('click',function(){

    document.getElementById('cash-out-from').classList.add('hidden')
    document.getElementById('add-mony').classList.remove('hidden')
})
// handle deposite button    
document.getElementById('deposite-button').addEventListener('click', function() {
    const depositeInput= document.getElementById('deposite-input')
    const depositeAmount= depositeInput.value

    // updating deposite
    const depositeTotal= document.getElementById('deposite-total')
    depositeTotal.innerText= parseInt(depositeTotal.innerText)+ parseInt(depositeAmount)

    // updating total balance
    const balanceTotal= document.getElementById('balance-total')
    balanceTotal.innerText= parseInt(balanceTotal.innerText)+ parseInt(depositeAmount)

    // clear input field
    depositeInput.value=''
})

document.getElementById('withdraw-button').addEventListener('click', function() {
    const withdrawInput= document.getElementById('withdraw-input')
    const withdrawAmount= withdrawInput.value

    // updating withdraw
    const withdrawTotal= document.getElementById('withdraw-total')
    withdrawTotal.innerText= parseInt(withdrawTotal.innerText)+ parseInt(withdrawAmount)

    // updating total balance
    const balanceTotal= document.getElementById('balance-total')
    balanceTotal.innerText= parseInt(balanceTotal.innerText)- parseInt(withdrawAmount)

    // clear input field
    depositeInput.value=''
})    

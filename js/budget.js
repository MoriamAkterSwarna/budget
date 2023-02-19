// onclick function

// function handleKitkat(){
//     console.log('kitkat')
// }

document.getElementById("btn-kitkat").addEventListener('click',function(){
    // console.log('clicked');

    // const quantity = document.getElementById("kitkat-quantity").value;
    const quantity = getInputValue("kitkat-quantity");
    const costOfKitkat =  quantity * 200;
    // console.log(cost);
    // document.getElementById("chocolate").innerText = costOfKitkat;

    setInnerText("chocolate",costOfKitkat);
    total();
});
document.getElementById("btn-rose").addEventListener('click',function(){
    // console.log('clicked');

    // const quantity = document.getElementById("rose-quantity").value;
    const quantity = getInputValue("rose-quantity");
    const costOfRose =  quantity * 100;
    // console.log(cost);
    // document.getElementById("rose").innerText = costOfRose;

    setInnerText("rose",costOfRose);
    total();
});
document.getElementById("btn-diary").addEventListener('click',function(){
    // console.log('clicked');

    // const quantity = document.getElementById("diary-quantity").value;
    const quantity = getInputValue("diary-quantity");
    const costOfDiary =  quantity * 100;
    // console.log(cost);
    // document.getElementById("diary").innerText = costOfDiary;

    setInnerText("diary",costOfDiary);
    total();

});

// common function for set text
function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}
function getInputValue (id){
    const value = document.getElementById(id).value;
    return parseInt(value);
}

function total(){
    const chocolate = document.getElementById("chocolate").innerText;
    const rose = document.getElementById("rose").innerText;
    const diary = document.getElementById("diary").innerText;

    const total = parseInt(chocolate) + parseInt(rose) + parseInt(diary);
    // console.log(total);
    // document.getElementById("total").innerText = total;
    
    setInnerText("total", total);
}

document.getElementById("promo-btn").addEventListener("click", function(){
    const promoCode = getInputValue("promo-code");
    if(promoCode === 101){
        const total = document.getElementById("total").innerText;
        const sum = total - parseInt(total) * 0.1;
        // console.log(sum);
        setInnerText("all-total",sum);
    }
    else{
        alert("Enter a valid promo code")
    }
})
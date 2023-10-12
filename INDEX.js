function phoneNumberPlusMinus(isIncrease) {

    const minusPhoneNumberField = document.getElementById('input-phone-field')
    const minusPhoneNumberString = minusPhoneNumberField.value;
    const minusCurrentPhoneNumber = parseInt(minusPhoneNumberString);
    let newPhoneNumber;

    if (isIncrease === true) {
        newPhoneNumber = minusCurrentPhoneNumber + 1;
    }
    else {
        newPhoneNumber = minusCurrentPhoneNumber - 1;
    }

    const PhoneNumberField = minusPhoneNumberField.value = newPhoneNumber;
    if (PhoneNumberField < 1) {
        minusPhoneNumberField.value = 0;
    }

    return newPhoneNumber;

}

function phonePricePlusMinus(newPhoneNumber) {

    const phoneNumberElement = document.getElementById('total-phone-price');
    const totalPhonePrice = newPhoneNumber * 1219;
    const totalPhonePriceString = parseInt(totalPhonePrice)
    const phoneElement = phoneNumberElement.innerText = totalPhonePriceString;
    if (phoneElement < 0) {
        phoneNumberElement.innerText = 0;
    }
    subTotalTaxPricePlusMinus()
}


document.getElementById('remove-phone-price').addEventListener('click', function () {

    const phoneNumberElement = document.getElementById('total-phone-price');
    phoneNumberElement.innerText = 0;

    const phoneInputFieldZero = document.getElementById('input-phone-field');
    phoneInputFieldZero.value = 0

    subTotalTaxPricePlusMinus();

    purchaseConfirmationButton();

});


document.getElementById('btn-phone-plus').addEventListener('click', function () {

    const newPhoneNumber = phoneNumberPlusMinus(true);

    phonePricePlusMinus(newPhoneNumber);

    purchaseConfirmationButton()

})

document.getElementById('btn-phone-minus').addEventListener('click', function () {

    const newPhoneNumber = phoneNumberPlusMinus(false);

    phonePricePlusMinus(newPhoneNumber);

    purchaseConfirmationButton()

})





function caseNumberPlusMinus(isIncrease) {
    const minusCaseNumberInputField = document.getElementById('input-case-field');
    const minusCaseNumberString = minusCaseNumberInputField.value;
    const minusCurrentCaseNumber = parseInt(minusCaseNumberString);
    let nweCaseNumber;

    if (isIncrease === true) {
        nweCaseNumber = minusCurrentCaseNumber + 1;
    }
    else {
        nweCaseNumber = minusCurrentCaseNumber - 1;
    }

    const CaseNumberField = minusCaseNumberInputField.value = nweCaseNumber;

    if (CaseNumberField < 0) {
        minusCaseNumberInputField.value = 0;
    }

    return nweCaseNumber

}

function casePricePlusMinus(newCaseNumber) {

    const caseNumberElement = document.getElementById('total-case-price')
    const caseNumberPrice = newCaseNumber * 59;
    const caseNumberString = parseInt(caseNumberPrice);
    const caseElement = caseNumberElement.innerText = caseNumberString;
    if (caseElement < 0) {
        caseNumberElement.innerText = 0;
    }

    subTotalTaxPricePlusMinus()

}


document.getElementById('remove-case-price').addEventListener('click', function () {
    const minusCaseNumberInputField = document.getElementById('input-case-field');
    minusCaseNumberInputField.value = 0;

    const caseNumberElement = document.getElementById('total-case-price');
    caseNumberElement.innerText = 0;

    subTotalTaxPricePlusMinus();

    purchaseConfirmationButton();
    
})


document.getElementById('btn-case-plus').addEventListener('click', function () {

    const newCaseNumber = caseNumberPlusMinus(true);

    casePricePlusMinus(newCaseNumber);

    purchaseConfirmationButton()

})

document.getElementById('btn-case-minus').addEventListener('click', function () {

    const nweCaseNumber = caseNumberPlusMinus(false);

    casePricePlusMinus(nweCaseNumber);

    purchaseConfirmationButton()

})


function subTotalTaxPricePlusMinus() {

    const totalPhonePriceString = parseInt(document.getElementById('total-phone-price').innerText);
    const caseNumberString = parseInt(document.getElementById('total-case-price').innerText);


    const subTotalPriceElement = document.getElementById('subtotal-price');
    const subTotalPrice = totalPhonePriceString + caseNumberString;
    const SubTotalPrice = subTotalPriceElement.innerText = subTotalPrice;
    if (SubTotalPrice < 0) {
        subTotalPriceElement.innerText = 0;
    }

    const taxMoneyElement = document.getElementById('tax-money');
    const taxMoneyAmmount = subTotalPrice * 0.05;
    const taxMoneyString = parseInt(taxMoneyAmmount);
    const TaxMoney = taxMoneyElement.innerText = taxMoneyString;
    if (TaxMoney < 0) {
        taxMoneyElement.innerText = 0;
    }

    const totalPriceElement = document.getElementById('total-price');
    const totalPrice = subTotalPrice + taxMoneyAmmount;
    const totalPhoneString = parseInt(totalPrice);
    const TotalPrice = totalPriceElement.innerText = totalPhoneString;
    if (TotalPrice < 0) {
        totalPriceElement.innerText = 0;
    }


}


function purchaseConfirmation() {

    const minusPhoneNumberField = document.getElementById('input-phone-field')
    const minusPhoneNumberString = minusPhoneNumberField.value;
    const minusCurrentPhoneNumber = parseInt(minusPhoneNumberString);
    const phoneNumberElement = document.getElementById('total-phone-price').innerText;

    const minusCaseNumberInputField = document.getElementById('input-case-field');
    const minusCaseNumberString = minusCaseNumberInputField.value;
    const minusCurrentCaseNumber = parseInt(minusCaseNumberString);
    const caseNumberElement = document.getElementById('total-case-price').innerText;

    const totalPriceElement = document.getElementById('total-price').innerText;

    const totalPirceView = document.getElementById('modal-body')
    totalPirceView.innerHTML = '';
    totalPirceView.innerHTML = `

<div class="d-flex justify-content-center"> 
<div class="card w-50">
  <div class="card-body text-center">
    <p class="card-text">You are about to purchaseing 
    </br> <hr> </br>
     <b>${minusCurrentPhoneNumber} iPhone 11 128GB Phone whith the total price of  ${phoneNumberElement}$</b>
     </br> </br> <hr> </br>
     <b>${minusCurrentCaseNumber} iPhone 11 Silicone Case whith the total price of  ${caseNumberElement}$</b>
     </br> <hr> </br>
     so you have to pay total <b> ${totalPriceElement}$ </b> include tax . Do you want to procide the purchase ?
     </br> </br>
     <h5> <b> Please Confirm Your Purchase </b> </h5>
     </p>
    </div>
  </div>
</div>

`
}

document.getElementById('cheack-out-button').addEventListener('click', function () {
    purchaseConfirmation()
})


function purchaseConfirmationButton() {
    const phoneNumberElement = parseInt(document.getElementById('total-phone-price').innerText);
    const caseNumberElement = parseInt(document.getElementById('total-case-price').innerText);

    const buttonDisabaleOrEnable = document.getElementById('cheack-out-button');
    if (phoneNumberElement > 0 || caseNumberElement > 0) {
        buttonDisabaleOrEnable.removeAttribute('disabled');
    } else {
        buttonDisabaleOrEnable.setAttribute('disabled', 'true');
    }
}



document.getElementById('Confirm-Purchase-btn').addEventListener('click', function () {
    // Display the second modal
    $('#secondModal').modal('show');
});

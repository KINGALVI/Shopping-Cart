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

document.getElementById('btn-phone-plus').addEventListener('click', function () {

    const newPhoneNumber = phoneNumberPlusMinus(true);

    phonePricePlusMinus(newPhoneNumber);

})


document.getElementById('btn-phone-minus').addEventListener('click', function () {

    const newPhoneNumber = phoneNumberPlusMinus(false);

    phonePricePlusMinus(newPhoneNumber);

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

document.getElementById('btn-case-plus').addEventListener('click', function () {

    const newCaseNumber = caseNumberPlusMinus(true);
    casePricePlusMinus(newCaseNumber);

})

document.getElementById('btn-case-minus').addEventListener('click', function () {

    const nweCaseNumber = caseNumberPlusMinus(false);
    casePricePlusMinus(nweCaseNumber);

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
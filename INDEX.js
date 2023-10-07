function phoneNumberPlusMinus(isIncrease) {

    const minusPhoneNumberField = document.getElementById('input-phone-field')
    const minusPhoneNumberString = minusPhoneNumberField.value;
    const minusCurrentPhoneNumber = parseInt(minusPhoneNumberString);
    let newPhoneNumber;

    if (isIncrease) {
        newPhoneNumber = minusCurrentPhoneNumber + 1;
    }
    else {
        newPhoneNumber = minusCurrentPhoneNumber - 1;
    }

    const PhoneNumberField = minusPhoneNumberField.value = newPhoneNumber;
    if (PhoneNumberField < 0) {
        minusPhoneNumberField.value = 0;
    }

}


document.getElementById('btn-phone-plus').addEventListener('click', function () {

    phoneNumberPlusMinus(true)

})


document.getElementById('btn-phone-minus').addEventListener('click', function () {

    phoneNumberPlusMinus(false)

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

}

document.getElementById('btn-case-plus').addEventListener('click', function () {

    caseNumberPlusMinus(true)

})

document.getElementById('btn-case-minus').addEventListener('click', function () {

    caseNumberPlusMinus(false)

})
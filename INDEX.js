document.getElementById('btn-phone-minus').addEventListener('click', function () {

    const minusPhoneNumberField = document.getElementById('input-phone-field')
    const minusPhoneNumberString = minusPhoneNumberField.value;
    const minusCurrentPhoneNumber = parseInt(minusPhoneNumberString);
    const minusPhoneNumber = minusCurrentPhoneNumber - 1;
    const phoneNumberField = minusPhoneNumberField.value = minusPhoneNumber;
    if (phoneNumberField < 0) {
        minusPhoneNumberField.value = 0;
    }
})

document.getElementById('btn-phone-plus').addEventListener('click', function () {

    const plusPhoneNumberField = document.getElementById('input-phone-field')
    const plusPhoneNumberString = plusPhoneNumberField.value;
    const plusPriviousPhoneNumber = parseInt(plusPhoneNumberString);
    const plusNewPhoneNumber = plusPriviousPhoneNumber + 1;
    plusPhoneNumberField.value = plusNewPhoneNumber;

})

document.getElementById('btn-case-minus').addEventListener('click', function () {

    const minusCaseNumberInputField = document.getElementById('input-case-field');
    const minusCaseNumberString = minusCaseNumberInputField.value;
    const minusCurrentCaseNumber = parseInt(minusCaseNumberString);
    const minusCaseNumber = minusCurrentCaseNumber - 1;
    const CaseNumberField = minusCaseNumberInputField.value = minusCaseNumber;
    if (CaseNumberField < 0) {
        minusCaseNumberInputField.value = 0;
    }
})

document.getElementById('btn-case-plus').addEventListener('click', function () {

    const plusCaseNumberField = document.getElementById('input-case-field');
    const plusCaseNumberFieldString = plusCaseNumberField.value;
    const plusPriviousCaseNumber = parseInt(plusCaseNumberFieldString);
    const plusNewCaseNumber = plusPriviousCaseNumber + 1;
    plusCaseNumberField.value = plusNewCaseNumber;

})
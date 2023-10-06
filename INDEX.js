document.getElementById('btn-phone-minus').addEventListener('click', function () {

    const minusPhoneNumberField = document.getElementById('input-phone-field')
    const minusPhoneNumberString = minusPhoneNumberField.value;
    const minusCurentPhoneNumber = parseInt(minusPhoneNumberString);
    const minusPhoneNumber = minusCurentPhoneNumber - 1;
    const phoneNumberField = minusPhoneNumberField.value = minusPhoneNumber;
    if(phoneNumberField < 0){
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

})

document.getElementById('btn-case-plus').addEventListener('click', function () {

})
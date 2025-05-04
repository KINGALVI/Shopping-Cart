// Function to increment or decrement the phone quantity
function phoneNumberPlusMinus(isIncrease) {
    const minusPhoneNumberField = document.getElementById('input-phone-field');
    const minusCurrentPhoneNumber = parseInt(minusPhoneNumberField.value);
    let newPhoneNumber;

    // Increase or decrease based on user interaction
    if (isIncrease) {
        newPhoneNumber = minusCurrentPhoneNumber + 1;
    } else {
        newPhoneNumber = minusCurrentPhoneNumber - 1;
    }

    // Ensure the value does not go below zero
    minusPhoneNumberField.value = newPhoneNumber < 1 ? 0 : newPhoneNumber;

    return newPhoneNumber;
}

// Function to update phone price based on quantity
function phonePricePlusMinus(newPhoneNumber) {
    const phoneNumberElement = document.getElementById('total-phone-price');
    const totalPhonePrice = newPhoneNumber * 1219;

    // Ensure the total price does not go below zero
    phoneNumberElement.innerText = totalPhonePrice < 0 ? 0 : totalPhonePrice;

    subTotalTaxPricePlusMinus();
}

// Event listener for removing phone item
document.getElementById('remove-phone-price').addEventListener('click', function () {
    document.getElementById('total-phone-price').innerText = 0;
    document.getElementById('input-phone-field').value = 0;
    subTotalTaxPricePlusMinus();
    purchaseConfirmationButton();
});

// Event listener for increasing phone quantity
document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = phoneNumberPlusMinus(true);
    phonePricePlusMinus(newPhoneNumber);
    purchaseConfirmationButton();
});

// Event listener for decreasing phone quantity
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = phoneNumberPlusMinus(false);
    phonePricePlusMinus(newPhoneNumber);
    purchaseConfirmationButton();
});

// Function to increment or decrement the case quantity
function caseNumberPlusMinus(isIncrease) {
    const minusCaseNumberInputField = document.getElementById('input-case-field');
    const minusCurrentCaseNumber = parseInt(minusCaseNumberInputField.value);
    let newCaseNumber;

    newCaseNumber = isIncrease ? minusCurrentCaseNumber + 1 : minusCurrentCaseNumber - 1;

    // Ensure the value does not go below zero
    minusCaseNumberInputField.value = newCaseNumber < 0 ? 0 : newCaseNumber;

    return newCaseNumber;
}

// Function to update case price based on quantity
function casePricePlusMinus(newCaseNumber) {
    const caseNumberElement = document.getElementById('total-case-price');
    const caseNumberPrice = newCaseNumber * 59;

    // Ensure the total price does not go below zero
    caseNumberElement.innerText = caseNumberPrice < 0 ? 0 : caseNumberPrice;

    subTotalTaxPricePlusMinus();
}

// Event listener for removing case item
document.getElementById('remove-case-price').addEventListener('click', function () {
    document.getElementById('input-case-field').value = 0;
    document.getElementById('total-case-price').innerText = 0;
    subTotalTaxPricePlusMinus();
    purchaseConfirmationButton();
});

// Event listener for increasing case quantity
document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = caseNumberPlusMinus(true);
    casePricePlusMinus(newCaseNumber);
    purchaseConfirmationButton();
});

// Event listener for decreasing case quantity
document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = caseNumberPlusMinus(false);
    casePricePlusMinus(newCaseNumber);
    purchaseConfirmationButton();
});

// Function to update subtotal, tax, and total price dynamically
function subTotalTaxPricePlusMinus() {
    const totalPhonePrice = parseInt(document.getElementById('total-phone-price').innerText);
    const totalCasePrice = parseInt(document.getElementById('total-case-price').innerText);

    // Calculate subtotal price
    const subTotalPrice = totalPhonePrice + totalCasePrice;
    document.getElementById('subtotal-price').innerText = subTotalPrice < 0 ? 0 : subTotalPrice;

    // Calculate tax (5% of subtotal)
    const taxMoneyAmount = subTotalPrice * 0.05;
    document.getElementById('tax-money').innerText = taxMoneyAmount < 0 ? 0 : Math.floor(taxMoneyAmount);

    // Calculate total price including tax
    const totalPrice = subTotalPrice + taxMoneyAmount;
    document.getElementById('total-price').innerText = totalPrice < 0 ? 0 : Math.floor(totalPrice);
}

// Function to display purchase confirmation modal with calculated details
function purchaseConfirmation() {
    const phoneQuantity = document.getElementById('input-phone-field').value;
    const phonePrice = document.getElementById('total-phone-price').innerText;

    const caseQuantity = document.getElementById('input-case-field').value;
    const casePrice = document.getElementById('total-case-price').innerText;

    const totalPrice = document.getElementById('total-price').innerText;

    const totalPirceView = document.getElementById('modal-body');
    totalPirceView.innerHTML = `
    <div class="d-flex justify-content-center">
        <div class="card w-50">
            <div class="card-body text-center">
                <p class="card-text">
                    You are about to purchase:
                    <hr>
                    <b>${phoneQuantity} iPhone 11 128GB Phone for ${phonePrice}$</b>
                    <hr>
                    <b>${caseQuantity} iPhone 11 Silicone Case for ${casePrice}$</b>
                    <hr>
                    Total cost (including tax): <b>${totalPrice}$</b>
                    <br><br>
                    <h5><b>Please confirm your purchase</b></h5>
                </p>
            </div>
        </div>
    </div>`;
}

// Event listener for showing purchase confirmation modal
document.getElementById('cheack-out-button').addEventListener('click', function () {
    purchaseConfirmation();
});

// Function to enable or disable the checkout button based on item quantity
function purchaseConfirmationButton() {
    const phoneNumberElement = parseInt(document.getElementById('total-phone-price').innerText);
    const caseNumberElement = parseInt(document.getElementById('total-case-price').innerText);

    const checkoutButton = document.getElementById('cheack-out-button');

    if (phoneNumberElement > 0 || caseNumberElement > 0) {
        checkoutButton.removeAttribute('disabled');
    } else {
        checkoutButton.setAttribute('disabled', 'true');
    }
}

// Event listener for confirming purchase
document.getElementById('Confirm-Purchase-btn').addEventListener('click', function () {
    // Display success confirmation modal
    $('#secondModal').modal('show');
});
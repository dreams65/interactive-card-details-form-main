// UI
const form = document.querySelector('.cardholder__form');
const cardNumber = document.querySelector('.front-cc__number');
const cardName = document.querySelector('.front-cc__info_name');
const cardExpMounth = document.querySelector('.mounth');
const cardExpYear = document.querySelector('.year');
const cardCvc = document.querySelector('.back-cc__cvc');

// TEMPLATE
const divBodyInfo = document.querySelector('.card-info__body');
const template = document.querySelector('#template-complete');

//FORM
const ccHolderName = form.querySelector('.cardholder__name');
const ccHolderNumber = form.querySelector('.cardholder__card-number');
const ccHolderExpMM = form.querySelector('.cardholder__card-exp_mouth');
const ccHolderExpYY = form.querySelector('.cardholder__card-exp_year');
const ccHolderCVC = form.querySelector('.cardholder__card-cvc');
const numberRegExp = /^[0-9]*$/;

// VALIDATE SUBMIT
form.addEventListener('submit', (e) => {
    e.preventDefault();
    valiadteCCName();
    valiadteCCNumber();
    validateCCExpMM();
    validateCCExpYY();
    validateCvc();

    if (
        valiadteCCName() == true
        && valiadteCCNumber() == true
        && validateCCExpMM() == true
        && validateCCExpYY() == true
        && validateCvc() == true
    ) {
        let inputs = form.querySelectorAll('input');
        inputs.forEach(element => {
            element.value = '';
        });
        form.style.display = 'none';
        const clone = template.content.cloneNode(true);
        divBodyInfo.appendChild(clone);
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('complete__btn')) {
                e.target.parentElement.remove();
                form.style.display = 'flex';
            }
        })
    }
});

//VALIDATE CHANGE INPUT
form.addEventListener('change', (e) => {
    if (e.target.classList.contains('cardholder__name')) {
        valiadteCCName();
    }
    if (e.target.classList.contains('cardholder__card-number')) {
        valiadteCCNumber();
    }
    if (e.target.classList.contains('cardholder__card-exp_mouth')) {
        validateCCExpMM();
    }
    if (e.target.classList.contains('cardholder__card-exp_year')) {
        validateCCExpYY();
    }
    if (e.target.classList.contains('cardholder__card-cvc')) {
        validateCvc();
    }
})

function valiadteCCName() {
    let errorEl = document.querySelector('.validate-name');
    if (ccHolderName.value == '') {
        ccHolderName.classList.add('invalid');
        ccHolderName.focus();
        errorEl.textContent = 'Can\'t be blank';
        return false
    } else {
        ccHolderName.classList.remove('invalid');
        errorEl.textContent = '';
        return true;
    }
};

function valiadteCCNumber() {
    let errorEl = document.querySelector('.validate-number');
    if (ccHolderNumber.value == '') {
        ccHolderNumber.classList.add('invalid');
        ccHolderNumber.focus();
        errorEl.textContent = 'Can\'t be blank';
        return false;
    } else if (!numberRegExp.test(ccHolderNumber.value)) {
        errorEl.textContent = 'Wrong format, number only';
        ccHolderNumber.focus();
        return false;
    } else if (ccHolderNumber.value.length < 16) {
        errorEl.textContent = 'Invalid format, minimum 16 characters';
        ccHolderNumber.focus();
        return false;
    }
    else {
        errorEl.textContent = '';
        ccHolderNumber.classList.remove('invalid');
        return true;
    }
}

function validateCCExpMM() {
    let errorEl = document.querySelector('.validate-exp');
    if (ccHolderExpMM.value == '') {
        ccHolderExpMM.classList.add('invalid');
        ccHolderExpMM.focus();
        errorEl.textContent = 'Can\'t be blank';
        return false;
    } else if (!numberRegExp.test(ccHolderExpMM.value)) {
        errorEl.textContent = 'Wrong format, number only';
        ccHolderExpMM.focus();
        return false;
    } else if (ccHolderExpMM.value.length < 2) {
        errorEl.textContent = 'Minimum 2 characters';
        ccHolderExpMM.focus();
        return false;
    } else {
        ccHolderExpMM.classList.remove('invalid');
        errorEl.textContent = '';
        return true;
    }
}

function validateCCExpYY() {
    let errorEl = document.querySelector('.validate-exp');
    if (ccHolderExpYY.value == '') {
        ccHolderExpYY.classList.add('invalid');
        ccHolderExpYY.focus();
        errorEl.textContent = 'Can\'t be blank';
        return false;
    } else if (!numberRegExp.test(ccHolderExpYY.value)) {
        errorEl.textContent = 'Wrong format, number only';
        ccHolderExpYY.focus();
        return false;
    } else if (ccHolderExpYY.value.length < 2) {
        errorEl.textContent = 'Minimum 2 characters';
        ccHolderExpYY.focus();
        return false;
    } else {
        ccHolderExpYY.classList.remove('invalid');
        errorEl.textContent = '';
        return true;
    }
}

function validateCvc() {
    let errorEl = document.querySelector('.validate-cvc');
    if (ccHolderCVC.value == '') {
        ccHolderCVC.classList.add('invalid');
        ccHolderCVC.focus();
        errorEl.textContent = 'Can\'t be blank';
        return false;
    } else if (!numberRegExp.test(ccHolderCVC.value)) {
        errorEl.textContent = 'Wrong format, number only';
        ccHolderCVC.focus();
        return false;
    } else if (ccHolderCVC.value.length < 3) {
        errorEl.textContent = 'Minimum 3 characters';
        ccHolderExpYY.focus();
        return false;
    } else {
        ccHolderCVC.classList.remove('invalid');
        errorEl.textContent = '';
        return true;
    }
}


function renderInfoCC() {
    form.addEventListener('input', (e) => {
        if (e.target.classList.contains('cardholder__name')) {
            cardName.textContent = e.target.value;
        }

        if (e.target.classList.contains('cardholder__card-number')) {
            cardNumber.textContent = e.target.value.replace(/(.{4})/g, "$1 ");
        }

        if (e.target.classList.contains('cardholder__card-exp_mouth')) {
            cardExpMounth.textContent = e.target.value;
        }

        if (e.target.classList.contains('cardholder__card-exp_year')) {
            cardExpYear.textContent = e.target.value;
        }

        if (e.target.classList.contains('cardholder__card-cvc')) {
            cardCvc.textContent = e.target.value;
        }
    });
}
window.addEventListener('DOMContentLoaded', () => {
    renderInfoCC();
});
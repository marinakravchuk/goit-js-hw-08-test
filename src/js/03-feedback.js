import throttle from'lodash.throttle';

const getFormValue = document.querySelector('.feedback-form')
const getButton = document.querySelector('button');
const getInputValue = document.querySelector('input');
const getTextareaValue = document.querySelector('textarea');

const FEEDBACKKEYS = 'feedback-form-state';

getFormValue.addEventListener('input', throttle(onInputValue, 500));
getButton.addEventListener('click', onSendFormInput);

//=======================================================================
function onInputValue () {
    const arr = {email: getInputValue.value, message: getTextareaValue.value};
    const feedback = JSON.stringify(arr);
    localStorage.setItem(FEEDBACKKEYS, feedback);
};
//=======================================================================
function onSavedInputValue () {
    const savedInput = JSON.parse(localStorage.getItem(FEEDBACKKEYS));
    if (savedInput) {
        getInputValue.value = savedInput.email;
        getTextareaValue.value = savedInput.message;
    };
};
onSavedInputValue()
//=======================================================================
function onSendFormInput (event) {
    const arr = {email: getInputValue.value, message: getTextareaValue.value};
    event.preventDefault ();
    getFormValue.reset();
    localStorage.removeItem(FEEDBACKKEYS);
    console.log(arr)
};

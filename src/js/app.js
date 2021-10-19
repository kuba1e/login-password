import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import UI from './config/uiConfig';
import { validate } from './helpers/validate';
import { showInputError, removeInputError } from './views/form';
import { login } from './services/auth.service';
import { notify } from './views/notifications';
import { getNews } from './services/news.service';
import { sendRegData } from './services/reg.service';
import getInputsValue from './helpers/inputsValue';
import formUI from './views/form'; 
import 'bootstrap'





const {form, inputEmail, inputPassword, regForm, inputRegEmail, inputRegPassword, inputNickname, inputPhone,inputFirstName, inputLastName, inputGender, inputCity, inputCountry, inputsDateOfBirthDay,inputsDateOfBirthMonth,inputsDateOfBirthYear } = UI;

const regInputs = [inputRegEmail, inputRegPassword, inputNickname, inputPhone,inputFirstName, inputLastName, inputGender, inputCity, inputCountry, inputsDateOfBirthDay,inputsDateOfBirthMonth,inputsDateOfBirthYear]

const  inputs = [inputEmail, inputPassword];

//Events

form.addEventListener('submit',(e)=>{
e.preventDefault()
onSubmit(inputs)

})

regForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  onRegSubmit(regInputs)

})

function removesErrors(el){
  el.addEventListener('focus',()=> removeInputError(el));
}

inputs.forEach(el =>{
  removesErrors(el)
})

regInputs.forEach(el=>{
  removesErrors(el)
})


function checkValidation(inputs){
  const isValidForm = inputs.every(el =>{
    const isValidInput = validate(el)
    if(!isValidInput){
      showInputError(el)
    } else {
    return isValidInput;
    }
  })

  return isValidForm;
}

//Handlers
async function onRegSubmit(inputs){
  if(!checkValidation(inputs))return
  try{
    await sendRegData(getInputsValue(inputs))
      //show success notify
      notify({msg: 'Login success', className:'alert-success', timeOut:1000})
  
    } catch(err){
      // show error
      notify({msg: 'Login failed', className:'alert-danger', timeOut:2000})
  
    }
}


async function onSubmit(inputs){
  if(!checkValidation(inputs))return
  try{
  await login(inputEmail.value, inputPassword.value)
  await getNews()
    //show success notify
    notify({msg: 'Login success', className:'alert-success', timeOut:1000})

  } catch(err){
    // show error
    notify({msg: 'Login failed', className:'alert-danger', timeOut:2000})

  }
}



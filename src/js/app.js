import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import UI from './config/uiConfig';
import { validate } from './helpers/validate';
import { showInputError, removeInputError } from './views/form';
import { login } from './services/auth.service';
import { notify } from './views/notifications';

const {form, inputEmail, inputPassword} = UI;

const  inputs = [inputEmail, inputPassword];

//Events

form.addEventListener('submit',(e)=>{
e.preventDefault()
onSubmit()

})

inputs.forEach(el =>{
  el.addEventListener('focus',()=> removeInputError(el))
})


//Handlers

async function onSubmit(){
  const isValidForm = inputs.every(el =>{
    const isValidInput = validate(el)
    if(!isValidInput){
      showInputError(el)
    } else {
    return isValidInput;
    }
  })
  if(!isValidForm)return
  
  try{
  await login(inputEmail.value, inputPassword.value)
    //show success notify
    notify({msg: 'Login success', className:'alert-success', timeOut:1000})

  } catch(err){
    // show error
    notify({msg: 'Login failed', className:'alert-danger', timeOut:2000})

  }
  console.log(isValidForm)
}


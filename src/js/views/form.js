import { getAutoCompleteInstance } from "../plugins/materialize";


/*
/**
 * Function inputErrorTemplate. Genrate HTML template for appear error on the page
 * @param {String} msg 
 */
/*
class FormUI {
  constructor(getInstance){
    this.country = document.getElementById('country'),
    this.cityAutocomplete = getInstance(this.country)
  }

  setAutoCompleteData(data){
    this.cityAutocomplete.updateData(data)
  }
}

const formUI = new FormUI(getAutoCompleteInstance)

*/
function inputErrorTemplate(msg){
  return `
  <div class="invalid-feedback">${msg}</div>
  `
}



/**
 * Function showInputError. Add input error
 * @param {HTMLInputElement} el 
 */
/*
export default formUI;
*/
export function showInputError(el){
  const parent = el.parentElement;
  const msg = el.dataset.invalidMessage || 'Invalid input'
  const template = inputErrorTemplate(msg)
  el.classList.add('is-invalid');
  parent.insertAdjacentHTML('beforeend', template)
}

/**
 * Function removeInputError. Remove input error
 * @param {HTMLInputElement} el 
 */

export function removeInputError(el){
  const parent = el.parentElement;
  const err = parent.querySelector('.invalid-feedback')
  if(!err) return
  el.classList.remove('is-invalid');
  parent.removeChild(err)

}
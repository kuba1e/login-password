const regExpDic = {
  email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
  password: /^[0-9a-zA-Z]{4,}$/,
  nickname: /[0-9a-zA-Z]/,
  first_name: /[a-zA-Z]/,
  last_name: /[a-zA-Z]/,
  phone: /[0–9]/,
  gender_orientation: /[a-zA-Z]/,
  city: /[a-zA-Z]/,
  country: /[a-zA-Z]/,
  date_of_birth_day: /[0–9]/,
  date_of_birth_month: /[0–9]/,
  date_of_birth_year:/[0–9]/,
}


/**
 * Function validate Check Input on RegExp provided in regExpDic by input data-required type
 * @param {HTMLInputElement} el
 * @returns {Boolean} - return true if input valid or doesn't have data-required attr
 * 
 * 
 * 
 * 
 * 
 */


export function validate(el){
  const regExpName = el.dataset.required;
  if(!regExpDic[regExpName])return true;
  return regExpDic[regExpName].test(el.value)
}
export default function getInputsValue(arr){


  const inputsValueObj = arr.reduce((acc,el)=>{
    acc[el.id] = el.value;
    return acc
  }, {})
  console.log(inputsValueObj)

  return inputsValueObj;
}
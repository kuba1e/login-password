import axios from "../plugins/axios";

/**
 * Function login. Make login request to API
 * @param {String} email 
 * @param {String} password 
 */


export async function login(email,password){
  try{
    const response = await axios.post(`/auth/login`, 
    JSON.stringify({email,password}), 
    )
    return response
  }
  catch(err){
    return Promise.reject(err);
  }
}



async function getCountryList(){

  try{
    const response = await axios.get('/location/get-countries')

    console.log(response.data)
  } catch(err){
    return Promise.reject(err)
  }
}

 getCountryList()
import axios from '../plugins/axios'

/**
 * Function send post reguest for singing up
 * @param {Object} data 
 */

export async function sendRegData(data ={}){
  try{
    const response = await axios.post('/auth/signup', JSON.stringify(data))
  }
  catch(err){
    return Promise.reject(err)
  }


}
import axios from '../plugins/axios'

async function getCountryList(){

  try{
    const response = await axios.get('/location/get-countries')

    console.log(response.data)
  } catch(err){
    return Promise.reject(err)
  }




}

export default  getCountryList()
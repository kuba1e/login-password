

const isTokenKey = 'my_app_token'

function setToken(req){
  const isAuthUrl = req.url.includes('auth')
  if(!isAuthUrl){
    const token = localStorage.getItem(isTokenKey)
    req.headers['x-access-token']= token;
  }


  return req
}

function onError(err){
  console.dir(err)
  return Promise.reject(err)
}


function setTokenOnLogin(res){
  const isLoginURL = res.config.url.includes('login');

  if(isLoginURL){
    const token = res.data.token;
    localStorage.setItem(isTokenKey, token)
  }
  return res
}

function getClearResponse(res){


  return res.data;
}


export default function (axios){
  //
  axios.interceptors.request.use(setToken)
  axios.interceptors.response.use(setTokenOnLogin)
  axios.interceptors.response.use(getClearResponse, onError)


}
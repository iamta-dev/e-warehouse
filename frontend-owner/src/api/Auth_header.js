/* eslint-disable */
export default function authHeader(){
  let token = localStorage.getItem('e-ware-house-auth-token')
  //console.log(token)
  let user = null
  try{
    user = JSON.parse(token)
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken };
    } else {
      return {};
    }
  }catch(e){
    //console.log(e)
    localStorage.removeItem('e-ware-house-auth-token');
  }
  
}
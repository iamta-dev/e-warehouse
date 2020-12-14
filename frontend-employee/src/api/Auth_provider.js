
import HttpRequest from './http_request'

class AuthProvider extends HttpRequest {

  getPlayerDetail(){
    return this.fetch('/auth/me')
  }
  checkTokenExpired(){
    return this.fetch('/token/isExpired')
  }
  login (username,password) {
    return this.create('/auth/signin',{
      "username": username,
      "password": password
    })
  }
}

export default AuthProvider

import ShopProvider from './Shop_provider'
import AuthProvider from './Auth_provider'

// Give arg to provider to start endpoint with specific path for example = xxx.com/api/person
export const ShopService = new ShopProvider()
export const AuthService = new AuthProvider("auth")
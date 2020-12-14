
import HttpRequest from './http_request'

//  api/flight-booking
class ShopProvider extends HttpRequest {

  getAllItems () {
    return this.fetch('/item/all','')
  }
  checkout (coupon,subItemsId) {
    // coupon is String coupon's code
    // subItemsId ex. 3,12,13 (id of subItems)
    return this.create('/transaction/buy-sub-items?coupon='+coupon+'&cart='+subItemsId)
  }
  getAllCategory(){
    return this.fetch("/category")
  }
  getServerStatus() {
    return this.fetch('/rcon/status')
  }

}

export default ShopProvider

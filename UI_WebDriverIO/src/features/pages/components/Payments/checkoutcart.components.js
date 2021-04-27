class CheckOutCart {
    get reviewCartITem () { return $('div[class="lc-cart__items"]')}
    get adultQty () { return $('div.lc-cart__items > div:nth-child(2) > div.lc-cart__item > div.lc-cart__item-amount-wrapper > div > div')}
    get childQty(){ return $('div.lc-cart__items > div:nth-child(3) > div.lc-cart__item > div.lc-cart__item-amount-wrapper > div > div')}

    isCartVisible(){
        browser.waitUntil(() => {
            return this.reviewCartITem.isDisplayed();
        },
        {
            timeout: 10000,
            timeoutMsg: "Pass component not displayed",
            interval: 500,
        });
        this.reviewCartITem.scrollIntoView();
    }



    
    reviewAdultQty() {
        return this.adultQty.getText();
    }

    reviewChildQty() {
        return this.childQty.getText();
    }
}
export default new CheckOutCart();
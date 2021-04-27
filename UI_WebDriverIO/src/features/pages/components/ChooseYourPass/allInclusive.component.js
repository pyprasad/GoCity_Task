class AllInclusiveComponent{
    get component () { return $('div[class*="cart-product-stack cart-product-stack--dropdown"]')}
    get addAdult() { return $('div[class*="lc-cart__items"] > div:nth-child(3) > div:nth-child(2) > div > div:nth-child(3)')};
    get addChild() { return $('div[class*="lc-cart__items"] > div:nth-child(4) > div:nth-child(2) > div > div:nth-child(3)')}
    get totalPrice() {return $('div[class="lc-cart__prices-box"] > div:nth-child(1) > span:nth-child(2)')};
    get checkOut() {return $('a[class*="lc-cart__purchase lc-font__regular"]')};
    
    /**
     * Wait Until Pass Component Displayed
     */
    isComponentVisible() {
        browser.waitUntil(() => {
            return this.component.isDisplayed();
        },
        {
            timeout: 10000,
            timeoutMsg: "Pass component not displayed",
            interval: 500,
        });
        this.component.scrollIntoView();
    }

    addAdultPass(maxCount) {
        browser.waitUntil(() => {
            return this.addAdult.isClickable() && this.totalPrice.getText().includes('$');
        }, {
            timeout: 10000,
            timeoutMsg: "Wait Until Total Price shown",
            interval: 500,
        });
        for (let i = 0;i<maxCount;i++) {
            this.addAdult.click();
        }
        browser.waitUntil(() => {
            return this.addAdult.isClickable() && this.totalPrice.getText().includes('$');
        }, {
            timeout: 10000,
            timeoutMsg: "Wait Until Total Price updated",
            interval: 500,
        });
        browser.pause(3000);
    }

    addChildPass(maxCount) {
        browser.waitUntil(() => {
            return this.addChild.isClickable() && this.totalPrice.getText().includes('$');
        }, {
            timeout: 10000,
            timeoutMsg: "Wait Until Total Price shown",
            interval: 500,
        });
        for (let i = 0;i<maxCount;i++) {
            this.addChild.click();
        }
        browser.waitUntil(() => {
            return this.addAdult.isClickable() && this.totalPrice.getText().includes('$');
        }, {
            timeout: 10000,
            timeoutMsg: "Wait Until Total Price updated",
            interval: 500,
        });
        browser.pause(3000);
    }

    checkOutPasses() {
        this.checkOut.click();
    }
}
export default new AllInclusiveComponent();
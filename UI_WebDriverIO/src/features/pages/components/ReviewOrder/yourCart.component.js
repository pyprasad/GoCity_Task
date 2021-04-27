class YourCartComponent {
    get reviewOrdercomponent () { return $('div[class*="lc-cart lc-cart--review-order"]')};
    get adultPasses() { return $('div[class*="lc-cart lc-cart--review-order"] > div > div:nth-child(2) > div:nth-child(2) >div:nth-child(1) > div > div:nth-child(2)')};
    get childPasses() {return $('div[class*="lc-cart lc-cart--review-order"] > div > div:nth-child(3)  > div:nth-child(2) >div:nth-child(1) > div > div:nth-child(2)')};
    get orderTotal() { return $('div[class*="lc-cart__prices lc-cart__loader"]  > div:nth-child(2) > span:nth-child(2)')};
    get calendar () { return $('div[class="travel-date--datepicker"]')}
    get continuePayment () { return $('section.block.block-go-commerce.block-react-checkout-payment-segue.clearfix.block-wrapper > div > div > div > div > div > div > a')}
    get todayDate() { return $('#ui-datepicker-div > table > tbody > tr:nth-child(5) > td:nth-child(5)')}

    /**
     * Wait Until Pass Component Displayed
     */
     reviewComponentVisible() {
        browser.waitUntil(() => {
            return this.reviewOrdercomponent.isDisplayed();
        },
        {
            timeout: 10000,
            timeoutMsg: "Review order component not displayed",
            interval: 500,
        });
    }

    selectCalendar() {
        browser.waitUntil(() => {
            return this.calendar.isClickable() ;
        }, {
            timeout: 10000,
            timeoutMsg: "Wait Until calendarIcon is shown",
            interval: 500,
        });
        
        this.calendar.click();
        browser.pause(3000);
    }
    
    clickOnContinuePayments(){
        browser.waitUntil(() => {
            return this.continuePayment.isClickable() ;
        }, {
            timeout: 10000,
            timeoutMsg: "Wait Until continuePayment is shown",
            interval: 500,
        });
        
        this.continuePayment.click();
        browser.pause(3000);
    }


selectTodaysDate(){
    browser.waitUntil(() => {
        return this.todayDate.isDisplayed();
    },
    {
        timeout: 10000,
        timeoutMsg: "Date component is not displayed",
        interval: 500,
    });
    this.todayDate.click();
    browser.pause(3000);
}
    
    reviewAdultPasses() {
        return this.adultPasses.getText();
    }

    reviewChildPasses() {
        return this.childPasses.getText();
    }
}
export default new YourCartComponent();
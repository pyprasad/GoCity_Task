import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from "chai";
import * as helpers from "../utils/test-helper";
import yourCartComponent from '../pages/components/ReviewOrder/yourCart.component';
import CheckOutCart from '../pages/components/Payments/checkoutcart.components';


When(/^I click on calendar button$/, function () {
    yourCartComponent.selectCalendar();
});

When(/^select todays date$/, function (){
    yourCartComponent.selectTodaysDate();
})

When(/^click on continue payment button$/, function (){
       yourCartComponent.clickOnContinuePayments();
});

When(/^I will be presented with payment page$/, function (){
    CheckOutCart.isCartVisible();
});

Then(/^I should see "(.*)" adult and "(.*)" child pass in the cart$/, function(adultQty , ChildQty){
    expect(CheckOutCart.reviewAdultQty()).to.equal(adultQty);
    expect(CheckOutCart.reviewChildQty()).to.equal(ChildQty);
});
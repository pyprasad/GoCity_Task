import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from "chai";
import * as helpers from "../utils/test-helper";
import allInclusiveComponent from '../pages/components/ChooseYourPass/allInclusive.component';
import yourCartComponent from '../pages/components/ReviewOrder/yourCart.component';

Given(/^I am on "(.*)" page$/, function (page) {
    switch(page){
        case 'All inclusive':
            helpers.launchHomePage('all-inclusive');
        case 'Review Your Order':
            helpers.launchHomePage('all-inclusive/review-your-order');
    }
});

When(/^I add "(.*)" "(.*)" passes$/, function (maxCount, type) {
    allInclusiveComponent.isComponentVisible();
    if (type === 'Adult') {
        allInclusiveComponent.addAdultPass(maxCount);
    } else {
        allInclusiveComponent.addChildPass(maxCount);
    }
});

Then(/^I checkout my basket$/, function () {
    allInclusiveComponent.checkOutPasses();
});

When(/^I will be presented with review page$/, function () {
    yourCartComponent.reviewComponentVisible();
});

Then(/^I should match "(.*)" adult and "(.*)" child pass in the cart$/, 
    function (adultPasses, childPasses) {
        expect(yourCartComponent.reviewAdultPasses()).to.equal(adultPasses);
        expect(yourCartComponent.reviewChildPasses()).to.equal(childPasses);
    }
);

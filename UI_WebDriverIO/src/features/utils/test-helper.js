export const launchHomePage = (page) => {
    browser.deleteAllCookies();
    browser.url('boston/en-us/products/'+page);
}

const BasePage = require('../pages/basePage');

const urls = require("../constants/urls.json");

const { I } = inject();

Given("I am on the {string} page", async (page) => {
    if (Object.prototype.hasOwnProperty.call(urls, page)) {
        I.amOnPage(urls[page]);
    } else {
        throw new Error(`URL for page "${page}" not found in urls.json`);
    }
});

When('I am using a Mobile view', () => {
    BasePage.resizeToMobile(); // Use helper to resize
});

When('I am using a Desktop view', () => {
    BasePage.resizeToDesktop(); // Use helper to resize
});
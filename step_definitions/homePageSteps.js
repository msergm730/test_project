const homePage = require('../pages/homePage');
const browserUtils = require('../pages/browserUtils');
const generalHelpers = require('../helpers/helpers');

const { I } = inject();

Given('I am on the homepage', () => {
  I.amOnPage('/');
});

When('I am using a Desktop view', () => {
  browserUtils.resizeToDesktop(); // Use helper to resize
});

When('I am using a Mobile view', () => {
  browserUtils.resizeToMobile(); // Use helper to resize
});

Then('the "Most Read" section should be visible', async () => {
  homePage.isMostReadSectionVisible()
});

Then('the "Most Read" section should contain 10 posts', async () => {
  const postCount = await homePage.countMostReadPosts();
  generalHelpers.assertEqual(postCount, 10, 'Expected "Most Read" section to contain 10 posts');
});

Then('the "Most Read" section should not be visible', async () => {
 homePage.isMostReadSectionHidden()
});

When('I click the "Bypass Block" menu item for "Most Read"', () => {
  homePage.clickBypassLink();
});

Then('I should be taken directly to the "Most Read" section', async () => {
  homePage.checkElementPosition();
});
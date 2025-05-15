const HomePage = require('../pages/homePage');
const BasePage = require('../pages/basePage');
const GeneralHelpers = require('../helpers/generalHelpers');

const { I } = inject();

When('I am using a Desktop view', () => {
  BasePage.resizeToDesktop(); // Use helper to resize
});

Then('the "Most Read" section should be visible', async () => {
  HomePage.isMostReadSectionVisible()
});

Then('the "Most Read" section should contain 10 posts', async () => {
  const postCount = await HomePage.countMostReadPosts();
  GeneralHelpers.assertEqual(postCount, 10, 'Expected "Most Read" section to contain 10 posts');
});

Then('the "Most Read" section should not be visible', async () => {
 HomePage.isMostReadSectionHidden()
});

When('I click the "Bypass Block" menu item for "Most Read"', () => {
  HomePage.clickBypassLink();
});

Then('I should be taken directly to the "Most Read" section', async () => {
  HomePage.checkElementPosition();
});
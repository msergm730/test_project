const livestreamPage = require('../pages/live');
const { I } = inject();

Given('I am on the Livestream page', async () => {
  I.amOnPage('/live'); // Navigate to the Livestream page
});

Then('I should see the Player in the Livestream section', async () => {
  await livestreamPage.checkPlayerVisible();
});

Then('I should see the Switch Player button in the Livestream section', async () => {
  await livestreamPage.checkSwichPlayerVisible();
});
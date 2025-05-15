const LivestreamPage = require('../pages/liveStreamPage');
const { I } = inject();

Then('I should see the Player in the Livestream section', async () => {
  await LivestreamPage.checkPlayerVisible();
});

Then('I should see the Switch Player button in the Livestream section', async () => {
  await LivestreamPage.checkSwichPlayerVisible();
});
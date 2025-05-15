const { I } = inject();

const LivePageSelectors = {
  ButtonSwitchPlayer: ".live-stream__player-switcher  > span > button",
  Player: "[class$=\"-player\"]",
}

class LiveStreamPage {

  async checkPlayerVisible() {
    I.seeElement(LivePageSelectors.Player); 
  }

  async checkSwichPlayerVisible() {
    I.seeElement(LivePageSelectors.ButtonSwitchPlayer); 
  }
}

module.exports = new LiveStreamPage();
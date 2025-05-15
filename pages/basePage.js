const { I } = inject();

class BasePage {
  // Resize to Desktop View
  resizeToDesktop() {
    I.resizeWindow(1440, 900); // Desktop resolution
  }

  // Resize to Mobile View
  resizeToMobile() {
    I.resizeWindow(375, 667); // Mobile resolution (iPhone X resolution)
  }
}

module.exports = new BasePage();
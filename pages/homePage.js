const browserUtils = require('./browserUtils'); // Import browser utilities
const { I } = inject();

const HomePageSelectors = {
  MostReadContainer: ".trending-articles",
  MostReadArticleList: ".trending-articles__list",
  MostReadArticleItem: ".trending-articles__list > li",
  ByPassLink: "[href=\"#most-read-container\"]",
  Hidder: ".header-menu.site-header"
}


class HomePage {
  async isMostReadSectionVisible() {
    I.seeElement(HomePageSelectors.MostReadContainer); 
  }

  async isMostReadSectionHidden() {
    I.dontSeeElement(HomePageSelectors.MostReadContainer); 
  }

  async countMostReadPosts() {
    return await I.grabNumberOfVisibleElements(HomePageSelectors.MostReadArticleItem);
  }

  async clickBypassLink() {
     I.forceClick(HomePageSelectors.ByPassLink);
  }
  async checkElementPosition(){
    const scrollPosition = await I.executeScript(() => {
      const targetElement = document.querySelector(".trending-articles"); 
      if (!targetElement) {
        return { error: 'Element not found!' };
      }
      const elementTop = targetElement.getBoundingClientRect().top; // Distance from top of viewport
      const pageYOffset = window.pageYOffset; // Current vertical scroll position
      return {
        elementTop: elementTop + pageYOffset, // Calculate element's absolute position
        currentScroll: pageYOffset, // Current scroll position
      };
    });
  
    I.say(`Element Top: ${scrollPosition.elementTop}, Current Scroll: ${scrollPosition.currentScroll}`);
    I.assertEqual(scrollPosition.elementTop, scrollPosition.currentScroll, 'The element is not properly scrolled to!');
  
  }
}

module.exports = new HomePage();
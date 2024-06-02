class DashboardPage {
    get logoImage() {
      return $('//div[@class="logo d-none d-sm-flex align-items-center justify-content-evenly"]/img[@src="./assets/appImages/logo.png"]');
    }
    get userName() {
      return $("//span[@class='userName']");
    }
    get dailyGoalStatus() {
      return $("//div[@class='dailyGoalStatus']");
    }
    get homeMenuButton() {
      return $("//button[contains(@class, 'menu-button') and contains(@class, 'menu-button-active')]");
    }
    get awardsMenuButton() {
      return $("(//button[contains(@class, 'menu-button') and contains(@class, 'menu-button-v1')])[1]");
    }
    get leaderBoardButton() {
      return $("(//button[contains(@class, 'menu-button') and contains(@class, 'menu-button-v1')])[2]");
    }
    get profileMenuButton() {
      return $("(//button[contains(@class, 'menu-button') and contains(@class, 'menu-button-v1')])[3]");
    }
    get topics() {
      return $("//div[@id='dashboard']//div[contains(@class, 'col')]//div[contains(@class, 'd-flex') and contains(@class, 'flex-column')]");
    }
    get streaks() {
      return $('//div[@id="root"]//button[contains(@class, "menu-button")][3]');
    }
    get streakValue() {
      return $("(//div[@class='achievementValue d-flex align-items-center justify-content-center'][normalize-space()='0'])[2]");
    }
    get coins() {
      return $("div[class='rightPanel d-block order-1 d-sm-block order-sm-2'] div:nth-child(2) div:nth-child(1) div:nth-child(2)");
    }
    get dailyChallenge() {
      return $("(//button[@class='d-flex flex-column main-button main-button-v3'])[1]");
    }
    get skillsActivated() {
      return $("//div[@class='skill-title skill-title-active']");
    }
  
    async open() {
      await browser.maximizeWindow();
      await browser.url('https://student-stage.mathbuddyonline.com/dashboard');
    }
  }
  
  module.exports = new DashboardPage();
  
const LoginPage = require('../../pageObjects/mb/Login.page');
const DashboardPage = require('../../pageObjects/mb/Dashboard.page');

describe("UI Automation", () => {

  describe('Login Tests', () => {
    beforeEach(async () => {
      await LoginPage.open();
    });

    it("Unsuccessful validation", async () => {
      await LoginPage.usernameInput.setValue('vedantxyz');
      await LoginPage.passwordInput.setValue('1234567');
      await LoginPage.loginButton.click();
      await browser.pause(2000);
      const loginError = await $('.notificationMessage');
      await expect(loginError).toHaveText("Invalid username or password");
      await browser.pause(5000);
    });

    it("Successful validation", async () => {
      await LoginPage.usernameInput.setValue('vedant5052');
      await LoginPage.passwordInput.setValue('123456');
      await LoginPage.loginButton.click();
      await DashboardPage.logoImage.waitForExist({ timeout: 50000 });
      await DashboardPage.logoImage.waitForDisplayed({ timeout: 50000 });
      await browser.pause(5000);
    });
  });

  describe('Dashboard Tests', () => {
    beforeEach(async () => {
      await DashboardPage.open();
    });

    it('Logo', async () => {
      await DashboardPage.logoImage.waitForExist({ timeout: 5000 });
      await DashboardPage.logoImage.waitForDisplayed({ timeout: 5000 });
    });

    it('Username', async () => {
      await DashboardPage.userName.waitForExist({timeout: 5000})
      await DashboardPage.userName.waitForDisplayed({ timeout: 5000 });
      // expect(await DashboardPage.userName.getText()).to.equal('Vedanth');
    });

    it('daily goal status', async () => {
      await DashboardPage.dailyGoalStatus.waitForExist({timeout: 5000})
      await DashboardPage.dailyGoalStatus.waitForDisplayed({ timeout: 5000 });
    });

    it('Menu items', async () => {
      await DashboardPage.homeMenuButton.waitForExist({ timeout: 5000 });
      await DashboardPage.homeMenuButton.waitForDisplayed({ timeout: 5000 });
      await DashboardPage.awardsMenuButton.waitForExist({ timeout: 5000 });
      await DashboardPage.awardsMenuButton.waitForDisplayed({ timeout: 5000 });
      await DashboardPage.leaderBoardButton.waitForExist({ timeout: 5000 });
      await DashboardPage.leaderBoardButton.waitForDisplayed({ timeout: 5000 });
      await DashboardPage.profileMenuButton.waitForExist({ timeout: 5000 });
      await DashboardPage.profileMenuButton.waitForDisplayed({ timeout: 5000 });
    });

    it('Topic, Streaks, Coins, Dailychallenge', async () => {
      await DashboardPage.topics.waitForExist({ timeout: 5000 });
      await DashboardPage.topics.waitForDisplayed({ timeout: 5000 });
      await DashboardPage.streaks.waitForExist({ timeout: 5000 });
      await DashboardPage.streaks.waitForDisplayed({ timeout: 5000 });
      await DashboardPage.streakValue.waitForExist({ timeout: 5000 });
      await DashboardPage.streakValue.waitForDisplayed({ timeout: 5000 });

      const coinsValueText = await DashboardPage.coins.getText();
      console.log("Retrieved coins value:", coinsValueText);
      const coinsValueCheck = parseInt(coinsValueText.trim(), 10);
      if (isNaN(coinsValueCheck)) {
        throw new Error(`Retrieved coins value is not a number: ${coinsValueText}`);
      }
      expect(coinsValueCheck).toBeGreaterThanOrEqual(0);

      // const coinsValueText = await DashboardPage.coins.getText();
      // console.log(coinsValueText);
      // const coinsValueCheck = parseInt(coinsValueText.trim(), 10);
      // expect(coinsValueCheck).toBeGreaterThanOrEqual(0);

      await DashboardPage.dailyChallenge.waitForExist({ timeout: 50000 });
      await DashboardPage.dailyChallenge.waitForDisplayed({ timeout: 50000 });
    });

    it('Skills', async () => {
      await DashboardPage.skillsActivated.waitForExist({ timeout: 5000 });
      await DashboardPage.skillsActivated.waitForDisplayed({ timeout: 5000 });
    });
  });
});

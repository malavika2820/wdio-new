describe("UI Automation", () => {

  describe('Login Tests', () => {
      beforeEach(async () => {
         
      });

      it.skip("Unsuccessful validation", async () => {
        await browser.maximizeWindow();
        await browser.url("https://containers.mathbuddyonline.com/login.html");
          const username = await $('.inputBox[name="username"]');
          await username.setValue('vedantxyz');
          const pass = await $('.inputBox[name="password"]');
          await pass.setValue("1234567");
          const signin = await $("#loginButton");
          await signin.click();
          await browser.pause(2000);
          const loginError = await $('.notificationMessage');
          await expect(loginError).toHaveText("Invalid username or password");
          await browser.pause(5000);
      });

      it("Successful validation", async () => {
        await browser.maximizeWindow();
        await browser.url("https://containers.mathbuddyonline.com/login.html");
          const username = await $('.inputBox[name="username"]');
          await username.setValue("vedant5052");
          const pass = await $('.inputBox[name="password"]');
          await pass.setValue("123456");
          const signin = await $("#loginButton");
          await signin.click();
          const home = await $('.text.col-12.d-flex.align-items-center');
          await home.waitForExist({ timeout: 50000 });
          await home.waitForDisplayed({ timeout: 50000 });
          await browser.pause(5000);
      });
  });

  describe('Dashboard Tests', () => {
      beforeEach(async () => {
        await browser.maximizeWindow();
        await browser.url('https://student-stage.mathbuddyonline.com/dashboard');
      });
      
      it.skip('Topic,Streaks,Coins,Dailychallenge', async () => {
        const topics=await $('//*[@id="dashboard"]/div[3]/div[1]/div[2]/div/div');
        await topics.waitForExist({ timeout: 5000 });
        await topics.waitForDisplayed({ timeout: 5000 });

        const streaks = await $('//*[@id="root"]/div/div[1]/div[2]/div[2]/button[3]')
        await streaks.waitForExist({ timeout: 5000 });
        await streaks.waitForDisplayed({ timeout: 5000 });

        const coins = await $('//*[@id="dashboard"]/div[4]/div/div[1]/div/div[2]/div/div[1]/span')
        await coins.waitForExist({ timeout: 5000 });
        await coins.waitForDisplayed({ timeout: 5000 }); 
       
        const dailyChallenge = await $('//*[@id="dashboard"]/div[4]/div/div[2]/button')
        await dailyChallenge.waitForExist({ timeout: 5000 });
        await dailyChallenge.waitForDisplayed({ timeout: 5000 }); 

      });

      it('Awards', async () => {
          const awardsButton = await $('button.menu-button-v1 img[alt="Awards"]');
          await awardsButton.waitForExist({ timeout: 5000 });
          await awardsButton.waitForDisplayed({ timeout: 5000 });
          await awardsButton.click();

          const dailystreak=await $('//*[@id="root"]/div/div[2]/div[3]/div[1]/div[1]');
          await dailystreak.waitForDisplayed({ timeout: 5000 });

          const Longeststreak=await $('//*[@id="root"]/div/div[2]/div[3]/div[1]/div[2]');
          await Longeststreak.waitForDisplayed({ timeout: 5000 });

          const MentalMath=await $('//*[@id="root"]/div/div[2]/div[3]/div[1]/div[3]');
          await MentalMath.waitForDisplayed({ timeout: 5000 });

          const Perfectskill=await $('//*[@id="root"]/div/div[2]/div[3]/div[1]/div[4]');
          await Perfectskill.waitForDisplayed({ timeout: 5000 });


          const info = await $('.badgeInfoBtn');
          await info.click();
          const upcomingBadges=await $('//*[@id="root"]/div/div[2]/div[1]');
          upcomingBadges.waitForDisplayed();
          const badges=await $('//*[@id="root"]/div/div[2]/div[2]');
          badges.waitForDisplayed();

          
          await browser.pause(3000);
      });

      it.skip('LeaderBoard', async () => {
          const leaderboardButton = await $('//*[@id="root"]/div/div[1]/div[2]/div[2]/button[3]')
          await leaderboardButton.waitForExist({ timeout: 5000 });
          await leaderboardButton.waitForDisplayed({ timeout: 5000 });
          await leaderboardButton.click();
          await browser.pause(3000);
      });
      it.skip('Profile', async () => {
        const profileButton= await $('//*[@id="root"]/div/div[1]/div[2]/div[2]/button[4]')
        await profileButton.waitForExist({ timeout: 5000 });
        await profileButton.waitForDisplayed({ timeout: 5000 });
        await profileButton.click();
        await driver.pause(3000);
    });
    

  });

});

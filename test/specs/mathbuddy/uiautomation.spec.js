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

      it('Logo', async() => {
        const logoImage = await $('//div[@class="logo d-none d-sm-flex align-items-center justify-content-evenly"]/img[@src="./assets/appImages/logo.png"]');
        await logoImage.waitForExist({ timeout: 5000 });
        await logoImage.waitForDisplayed({ timeout: 5000 });
      });
      it('Username', async() => {
        const name=await $("//span[@class='userName']");
        await name.waitForDisplayed({ timeout: 5000 });
        //expect(name).to.equal('Vedanth');
      });
     
      it('daily goal status', async() => {
        const dailyGoal=await $("//div[@class='dailyGoalStatus']");
        await dailyGoal.waitForExist({timeout:50000});
        await dailyGoal.waitForDisplayed({ timeout: 5000 });
      });

      it('Menu items', async() => {
        const homeMenuButton=await $("//button[contains(@class, 'menu-button') and contains(@class, 'menu-button-active')]");
        await homeMenuButton.waitForExist({ timeout: 5000 });
        await homeMenuButton.waitForDisplayed({ timeout: 5000 });
        const AwardsMenuButton=await $("(//button[contains(@class, 'menu-button') and contains(@class, 'menu-button-v1')])[1]");
        await AwardsMenuButton.waitForExist({ timeout: 5000 });
        await AwardsMenuButton.waitForDisplayed({ timeout: 5000 });
        const LeaderBoardButton=await $("(//button[contains(@class, 'menu-button') and contains(@class, 'menu-button-v1')])[2]");
        await LeaderBoardButton.waitForExist({ timeout: 5000 });
        await LeaderBoardButton.waitForDisplayed({ timeout: 5000 });
        const ProfileMenuButton=await $("(//button[contains(@class, 'menu-button') and contains(@class, 'menu-button-v1')])[3] ");
        await ProfileMenuButton.waitForExist({ timeout: 5000 });
        await ProfileMenuButton.waitForDisplayed({ timeout: 5000 });

      });
      
      it('Topic,Streaks,Coins,Dailychallenge', async () => {
        const topics=await $("//div[@id='dashboard']//div[contains(@class, 'col')]//div[contains(@class, 'd-flex') and contains(@class, 'flex-column')]");
        await topics.waitForExist({ timeout: 5000 });
        await topics.waitForDisplayed({ timeout: 5000 });

        const streaks = await $('//div[@id="root"]//button[contains(@class, "menu-button")][3]');
        await streaks.waitForExist({ timeout: 5000 });
        await streaks.waitForDisplayed({ timeout: 5000 });

        // const streakValue=await $("//div[contains(@class, 'achievementValue')])[3]");
        // await streakValue.waitForExist({ timeout: 5000 });
        // await streakValue.waitForDisplayed({ timeout: 5000 });
       
        const coins = await $("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > span:nth-child(2)");
        await coins.waitForExist({ timeout: 5000 });
        await coins.waitForDisplayed({ timeout: 5000 }); 

        const coinsValue=await $("div[class='rightPanel d-block order-1 d-sm-block order-sm-2'] div:nth-child(2) div:nth-child(1) div:nth-child(2)");
        await coinsValue.waitForExist({ timeout: 5000 });
        await coinsValue.waitForDisplayed({ timeout: 5000 });
        const coinsValueText = await coinsValue.getText();
        console.log(coinsValueText)
        const coinsValueCheck = parseInt(coinsValueText.trim(), 10);
        expect(coinsValueCheck).toBeGreaterThanOrEqual(0);

       
        const dailyChallenge = await $("(//button[@class='d-flex flex-column main-button main-button-v3'])[1]");
        await dailyChallenge.waitForExist({ timeout: 5000 });
        await dailyChallenge.waitForDisplayed({ timeout: 5000 }); 

      });

   
  });

});

 //   it.skip('Awards', async () => {
    //       const awardsButton = await $('button.menu-button-v1 img[alt="Awards"]');
    //       await awardsButton.waitForExist({ timeout: 5000 });
    //       await awardsButton.waitForDisplayed({ timeout: 5000 });
    //       await awardsButton.click();

    //       const dailystreak=await $('//*[@id="root"]/div/div[2]/div[3]/div[1]/div[1]');
    //       await dailystreak.waitForDisplayed({ timeout: 5000 });

    //       const Longeststreak=await $('//*[@id="root"]/div/div[2]/div[3]/div[1]/div[2]');
    //       await Longeststreak.waitForDisplayed({ timeout: 5000 });

    //       const MentalMath=await $('//*[@id="root"]/div/div[2]/div[3]/div[1]/div[3]');
    //       await MentalMath.waitForDisplayed({ timeout: 5000 });

    //       const Perfectskill=await $('//*[@id="root"]/div/div[2]/div[3]/div[1]/div[4]');
    //       await Perfectskill.waitForDisplayed({ timeout: 5000 });


    //       const info = await $('.badgeInfoBtn');
    //       await info.click();
    //       const upcomingBadges=await $('//*[@id="root"]/div/div[2]/div[1]');
    //       upcomingBadges.waitForDisplayed();
    //       const badges=await $('//*[@id="root"]/div/div[2]/div[2]');
    //       badges.waitForDisplayed();

          
    //       await browser.pause(3000);
    //   });

    //   it.skip('LeaderBoard', async () => {
    //       const leaderboardButton = await $('//*[@id="root"]/div/div[1]/div[2]/div[2]/button[3]')
    //       await leaderboardButton.waitForExist({ timeout: 5000 });
    //       await leaderboardButton.waitForDisplayed({ timeout: 5000 });
    //       await leaderboardButton.click();
    //       await browser.pause(3000);

    //       const quarterlyLeaderBoard=await $('//*[@id="root"]/div/div[2]/div[2]');
    //       await quarterlyLeaderBoard.waitForDisplayed({timeout:5000});


    //   });
    //   it.skip('Profile', async () => {
    //     const profileButton= await $('//*[@id="root"]/div/div[1]/div[2]/div[2]/button[4]')
    //     await profileButton.waitForExist({ timeout: 5000 });
    //     await profileButton.waitForDisplayed({ timeout: 5000 });
    //     await profileButton.click();
    //     await browser.pause(3000);

    //     const avatar = await $('//*[@id="root"]/div/div[2]/div[1]/div');
    //     await avatar.waitForDisplayed({ timeout: 5000 });

    //     const achievementStatus=await $('//*[@id="root"]/div/div[2]/div[2]/div[1]');
    //     await achievementStatus.waitForDisplayed({ timeout: 5000 });

    // });
    

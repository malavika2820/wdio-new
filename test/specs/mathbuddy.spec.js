describe.skip('Mathbuddy login page', () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await browser.url("https://ui-adaptive-practice-rm4liovrja-ue.a.run.app/");
      });

    it('Successfull validation', async() => {
        const username= await $('#mUsername');
        await username.setValue('rashmi1679');
        const pass=await $('#mPassword');
        await pass.setValue('Admin@123');
        const signin = await $('.sign-in-btn-obs');
        await signin.click();
        await browser.pause(10000);
        const dropd= await $('#navbarDropdown');
        await dropd.click();
        await browser.pause(5000);
        const logoutopt=await $('.dropdown-menu > li:nth-child(2)> .dropdown-item ');
        await logoutopt.click();
        await browser.pause(5000);

    }); 
    it('Unsuccessfull validation', async() => {
        const username= await $('#mUsername');
        await username.setValue('rashmi1678');
        const pass=await $('#mPassword');
        await pass.setValue('Admin@1234');
        const signin = await $('.sign-in-btn-obs');
        await signin.click(); 
        const loginerror=await $('#loginWarn');
        await expect(loginerror).toHaveText('Invalid username or password');
        await browser.pause(7000);
    });

});
describe('wait commands - examples', () => {
    beforeEach(async() =>  {
        await browser.maximizeWindow();
        await browser.url("/Ajax-Loader/index.html");
    });
    it('pause command', async() => {
        const clickMeButton=await $('//*[text()="CLICK ME!"]/..');
        await browser.pause(5000);
        await clickMeButton.click();
        await browser.pause(1500);
    });
    it('waitForClickable', async() => {
        const clickMeButton=await $('#button1');
        // await clickMeButton.waitForClickable({timeout:3000});
        await clickMeButton.waitForClickable();
        await clickMeButton.click();
        await browser.pause(1500);
    });
    it('waitForDisplayed', async() => {
        const clickMeButton=await $('#button1');
        await clickMeButton.waitForDisplayed();
    }); 
    it('waitForExists', async() => {
        const clickMeButton=await $('#button1');
        await clickMeButton.waitForExist();
    });
    it.only('waitUntil', async() => {
        await browser.url("/Accordion/index.html");
        const loadingStatus=await $('#text-appear-box');
        await loadingStatus.waitUntil(async function(){
            return(await this.getText()) === 'LOADING COMPLETE.'
        },
        {
            timeout:15000,
            timeoutMsg:'expected text to be different after 15 seconds'
        }
        )
    });

});
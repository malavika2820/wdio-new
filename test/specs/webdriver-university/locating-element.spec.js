describe('locating elements', () => {
    beforeEach(async() => {
        await browser.maximizeWindow();
        await browser.url("https://selectors.webdriveruniversity.com/");
    });
    it('$-locate element', async() => {
        
        await browser.$("//a[@href='#portfolio']").click();
        await browser.pause(3000);
        const webdriveriobutton=await $('[data-target="#portfolioModal1"]');
        await webdriveriobutton.click();
        await browser.pause(3000);
    });
    it('$$-locate multiple elements', async() => {
        const expectedTitles=[
            "#",
            "First",
            "Last",
            "Handle",
            "1",
            "2",
            "3",
            "Firstname",
            "Lastname",
            "Age"
        ];
        const actualtitle=[];
        const tableHeaderTitles = await $$('//table//th');
        for(const title of tableHeaderTitles){
            //console.log(await title.getText());
            actualtitle.push(await title.getText());
        }
        expect(expectedTitles).toEqual(actualtitle);
    });
});
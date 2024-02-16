describe('advance elements', () => {
    beforeEach(async() => {
       await browser.maximizeWindow();
    });
    it('inputs', async() => {
            await browser.url("Contact-Us/contactus.html");
            const firstNameText=$("[name='first_name']");
            await firstNameText.addValue("Add your text");
            await firstNameText.addValue("Malavika");
            await browser.pause(2000);
            await firstNameText.setValue("Hello how are you?");
            await browser.pause(2000);
            await firstNameText.clearValue();
            await browser.pause(2000);


    });
    it('dropdowns', async() => {
        await browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
        const programLang_dropdown=await $('#dropdowm-menu-1');
        await programLang_dropdown.selectByAttribute('value','python');
        await expect(programLang_dropdown).toHaveValueContaining('python');
        await browser.pause(2000); 

        const techDropDown=await $('#dropdowm-menu-2');
        await techDropDown.selectByIndex(2);
        await expect(techDropDown).toHaveValueContaining('TestNG',{ignoreCase:true});
        await browser.pause(2000);  

        const frontendlangDropDown=await $('#dropdowm-menu-3');
        await frontendlangDropDown.selectByVisibleText('CSS');
        await expect(frontendlangDropDown).toHaveValueContaining('CSS',{ignoreCase:true});
        await browser.pause(2000);
    }); 
    it.only('State commands', async() => {
        await browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
        const lettuceRadioButton=await $('[value="lettuce"]');
        const lettuceRadioButton_isDisplayed=await lettuceRadioButton.isDisplayed();
        expect(lettuceRadioButton_isDisplayed).toEqual(true);
        await expect(lettuceRadioButton).toBeEnabled();
       

        const lettuceRadioButton_isClickable=await lettuceRadioButton.isClickable();
        await expect(lettuceRadioButton_isClickable).toEqual(true);
        await browser.pause(2000); 


        const cabbageRadioButton = await $('[value="cabbage"]');
        const cabbageRadioButton_isEnabled = await cabbageRadioButton.isEnabled();
        await expect(cabbageRadioButton_isEnabled).toEqual(false);
        await expect(cabbageRadioButton).toBeDisabled();

    });
});
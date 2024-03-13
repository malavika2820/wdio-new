describe("advance elements", () => {
  beforeEach(async () => {
    await browser.maximizeWindow();
  });
  it("inputs", async () => {
    await browser.url("Contact-Us/contactus.html");
    const firstNameText = $("[name='first_name']");
    await firstNameText.addValue("Add your text");
    await firstNameText.addValue("Malavika");
    await browser.pause(2000);
    await firstNameText.setValue("Hello how are you?");
    await browser.pause(2000);
    await firstNameText.clearValue();
    await browser.pause(2000);
  });
  it("dropdowns", async () => {
    await browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
    const programLang_dropdown = await $("#dropdowm-menu-1");
    await programLang_dropdown.selectByAttribute("value", "python");
    await expect(programLang_dropdown).toHaveValueContaining("python");
    await browser.pause(2000);

    const techDropDown = await $("#dropdowm-menu-2");
    await techDropDown.selectByIndex(2);
    await expect(techDropDown).toHaveValueContaining("TestNG", {
      ignoreCase: true,
    });
    await browser.pause(2000);

    const frontendlangDropDown = await $("#dropdowm-menu-3");
    await frontendlangDropDown.selectByVisibleText("CSS");
    await expect(frontendlangDropDown).toHaveValueContaining("CSS", {
      ignoreCase: true,
    });
    await browser.pause(2000);
  });
  it("State commands", async () => {
    await browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
    const lettuceRadioButton = await $('[value="lettuce"]');
    const lettuceRadioButton_isDisplayed =
      await lettuceRadioButton.isDisplayed();
    expect(lettuceRadioButton_isDisplayed).toEqual(true);
    await expect(lettuceRadioButton).toBeEnabled();

    const lettuceRadioButton_isClickable =
      await lettuceRadioButton.isClickable();
    await expect(lettuceRadioButton_isClickable).toEqual(true);
    await browser.pause(2000);

    const cabbageRadioButton = await $('[value="cabbage"]');
    const cabbageRadioButton_isEnabled = await cabbageRadioButton.isEnabled();
    await expect(cabbageRadioButton_isEnabled).toEqual(false);
    await expect(cabbageRadioButton).toBeDisabled();
  });
  it("Action", async () => {
    await browser.url("/Actions/index.html");
    const elem = await $("#draggable");
    const target = await $("#droppable");
    await browser.pause(2000);
    await elem.dragAndDrop(target);
    await browser.pause(2000);
    //double click
    const doubleClick = await $("#double-click");
    await doubleClick.doubleClick();
    await browser.pause(3000);

    //mouse over
    (await $("//button[text()='Hover Over Me First!']")).moveTo();
    const firstLink = await $("(//*[text()='Link 1'])[1]");
    await firstLink.waitForClickable();
    await firstLink.click();
    await browser.pause(3000);
  });
  it("handling windows", async () => {
    await browser.url("https://www.webdriveruniversity.com/");
    await browser.newWindow("https://www.automationteststore.com/");
    let currentWindow_title = await browser.getTitle();
    console.log(`>>Current window title:${currentWindow_title}`);
    await expect(browser).toHaveUrlContaining("automationteststore");
    await browser.pause(3000);

    await browser.switchWindow("webdriveruniversity.com");
    let parentWindow_Title = await browser.getTitle();
    console.log(`>>Parent Window Title: ${parentWindow_Title}`);
    await expect(browser).toHaveUrlContaining("webdriveruniversity.com");

    await $("#contact-us").click();
    await browser.switchWindow("automationteststore");
    await browser.closeWindow();

    await browser.switchWindow("contactus");
    await browser.closeWindow();

    await browser.switchWindow("webdriveruni");
    console.log(await browser.getTitle());
    await browser.pause(3000);
  });
  it("IFrames", async () => {
    await browser.url("/IFrame/index.html");
    const iframe = await $("#frame");
    await browser.switchToFrame(iframe);
    await $("//a[text()='Our Products']").click();
    await browser.pause(3000);
    await browser.switchToParentFrame();
    await browser.pause(3000);
  });
  it("Alerts", async () => {
    await browser.url("/Popup-Alerts/index.html");
    await $("#button1").click();
    await browser.pause(3000);
    await browser.acceptAlert();

    await $("#button4").click();
    const alertText = await browser.getAlertText();
    await browser.pause(3000);
    await expect(alertText).toEqual("Press a button!");

    await browser.acceptAlert();
    await browser.pause(3000);
    await expect($("#confirm-alert-text")).toHaveText("You pressed OK!");

    await $("#button4").click();
    await browser.dismissAlert();
    await browser.pause(3000);
    await expect($("#confirm-alert-text")).toHaveText("You pressed Cancel!");
  }); 
it('File Upload', async () => {
    await browser.url("/File-Upload/index.html");
    await browser.pause(3000);
    await $('#myFile').addValue(`${process.cwd()}\\data\\dummy_file.txt`);
    await browser.pause(3000);
    await $('#submit-button').click();
    await browser.pause(3000);
});

it.only('JS Execute', async() => {
    await browser.url("/Hidden-Elements/index.html");
    await browser.execute(() => {
        return document.getElementById("not-displayed").setAttribute("id", "");
    });
    await browser.pause(3000);
    await browser.execute(() => {
        return document.body.style.backgroundColor = "tomato";
    })
});
});

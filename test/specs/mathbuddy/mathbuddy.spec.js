describe("Mathbuddy login page", () => {
  beforeEach(async () => {
    await browser.maximizeWindow();
    await browser.url("https://ui-adaptive-practice-rm4liovrja-ue.a.run.app/");
  });

  it("Successfull validation", async () => {
    const username = await $("#mUsername");
    await username.setValue("rashmi1679");
    const pass = await $("#mPassword");
    await pass.setValue("Admin@123");
    const signin = await $(".sign-in-btn-obs");
    await signin.click();
    await browser.pause(2000);
 
    const grade1 = await $(
      "#accordionPanel > .accordion-item:nth-of-type(1) > .accordion-header:nth-of-type(1) [type]"
    );
    await grade1.click(); 
    const modulename = await $(
      "#accordionPanel .accordion-item:nth-of-type(1) [class='w-100 accordion-item']:nth-of-type(1) [type]"
    );
    await modulename.click();

    const skillname = await $("#accordion-child000");
    await skillname.click();

    await browser.pause(5000);
    const spanElement = await $("span[style='color: rgb(55, 10, 82);']");

    const innerText = await spanElement.getText();

    const number = innerText.split("/")[1].trim();

    for (let i = 1; i <= number; i++) {
      await browser.pause(3000);
      const next = await $("button#nextBtn > svg[role='img']");
      await next.click();
    }
    const close = await $("//*[@class='close-skill']");
    await close.click();
    const dropd = await $("#navbarDropdown");
    await dropd.click();
    await browser.pause(3000);
    const logoutopt = await $(
      ".dropdown-menu > li:nth-child(2)> .dropdown-item "
    );
    await logoutopt.click();
    await browser.pause(5000);
  });
  it.skip("Unsuccessfull validation", async () => {
    const username = await $("#mUsername");
    await username.setValue("rashmi1678");
    const pass = await $("#mPassword");
    await pass.setValue("Admin@1234");
    const signin = await $(".sign-in-btn-obs");
    await signin.click();
    const loginerror = await $("#loginWarn");
    await expect(loginerror).toHaveText("Invalid username or password");
    await browser.pause(7000);
  });
});

describe.skip("webdriver university-contact us page", () => {
  beforeEach(async () => {
    await browser.maximizeWindow();
    await browser.url("/Contact-Us/contactus.html");
  });
  it("valid submission-submit all information", async () => {
    const firstName = await $('//*[@name="first_name"]');
    await firstName.setValue("Malavika");

    const lastName = await $('//*[@name="last_name"]');
    await lastName.setValue("Natarajan");

    const mail = await $('//*[@name="email"]');
    await mail.setValue("malavika@mail.com");

    const message = await $('//*[@name="message"]');
    await message.setValue("good");

    const submit = await $('//input[@value="SUBMIT"]');
    await submit.click();

    const successfulSubmissionHeader = $("#contact_reply > h1");
    await expect(successfulSubmissionHeader).toHaveText(
      "Thank You for your Message!"
    );
    await browser.pause(7000);
  });
  it("invalid submission-when all fields are not given", async () => {
    const firstName = await $('//*[@name="first_name"]');
    await firstName.setValue("Malavika");

    const lastName = await $('//*[@name="last_name"]');
    await lastName.setValue("Natarajan");

    const message = await $('//*[@name="message"]');
    await message.setValue("good");

    const submit = await $('//input[@value="SUBMIT"]');
    await submit.click();

    const emailError = $("body");
    await expect(emailError).toHaveTextContaining([
      "Error: all fields are required",
      "Error: Invalid email address",
    ]);
    await browser.pause(7000);
  });
});

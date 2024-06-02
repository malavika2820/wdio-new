class LoginPage {
    get usernameInput() { return $('.inputBox[name="username"]'); }
    get passwordInput() { return $('.inputBox[name="password"]'); }
    get loginButton() { return $('#loginButton'); }
  
    async open() {
      await browser.maximizeWindow();
      await browser.url("https://containers.mathbuddyonline.com/login.html");
    }
  
    async login(username, password) {
      await this.usernameInput.setValue(username);
      await this.passwordInput.setValue(password);
      await this.loginButton.click();
    }
  }
  
  module.exports = new LoginPage();
  
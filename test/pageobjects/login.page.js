import {browser, $} from '@wdio/globals'

class Login{
    // element locators
    get usernameField() {return $('#user-name')}
    get passwordField() {return $('#password')}
    get loginButton() {return $('#login-button')}

    // page action
    async openPage(){
        await browser.url('https://www.saucedemo.com/')
    }

    async inputUsername(text){
        await this.usernameField.setValue(text)
    }

    async inputPassword(text){
        await this.passwordField.setValue(text)
    }

    async clickButton(){
        await this.loginButton.click()
    }
}

export default new Login
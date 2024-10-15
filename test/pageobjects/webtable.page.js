import {browser, $} from '@wdio/globals'

class WebTable{
    // element locators
    get tableHeader() {return $('[role=columnheader]')}
    get tableValues() {return $('[role=rowgroup]')}
    get newRecordButton() {return $('#addNewRecordButton')}

    // page action
    async openPage(){
        await browser.url('https://demoqa.com/webtables')
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

export default new WebTable
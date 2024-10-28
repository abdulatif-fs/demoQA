import {browser, $} from '@wdio/globals'

class WebTable{
    // element locators
    get tableHeader() {return $$('[role=columnheader]')}
    get tableValues() {return $$('[role=rowgroup]')}
    get newRecordButton() {return $('#addNewRecordButton')}
    get firstName() {return $('#firstName')}
    get lasName() {return $('#lastName')}
    get usernameField() {return $('#userEmail')}
    get age() {return $('#age')}
    get salary() {return $('#salary')}
    get department() {return $('#department')}

    get submitButton(){return $('#submit')}

    // page action
    async openPage(){
        await browser.url('https://demoqa.com/webtables')
    }

    async clickNewRecord(){
        await this.newRecordButton.click()
    }

    async fillData(firstName, lasName, username, age, salary, department){
        await this.firstName.setValue(firstName)
        await this.lasName.setValue(lasName)
        await this.usernameField.setValue(username)
        await this.age.setValue(age)
        await this.salary.setValue(salary)
        await this.department.setValue(department)
    }
    
    async clickSubmit(){
        await this.submitButton.click()
    }

    async getTableHeader(){
        const allTableName = []
        const tableName = await this.tableHeader
        for(const name of tableName){
            const tableName = await name.getText()
            allTableName.push(tableName)
            // console.log('Header Table',allTableName)
        }
    
        return allTableName
    }

    async getValues(){
        const allValues = []
        const AllTableValue = await this.tableValues
        for(let tableValue of AllTableValue){
            let value = await tableValue.getText()
            allValues.push(value)
        }
        return allValues
    }
}

export default new WebTable
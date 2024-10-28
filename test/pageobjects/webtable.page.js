import {browser, $} from '@wdio/globals'

class WebTable{
    // element locators
    get tableHeader() {return $$('[role=columnheader]')}
    get tableValues() {return $$('[role=rowgroup]')}

    get newRecordButton() {return $('#addNewRecordButton')}
    get RegForm() {return $('#registration-form-modal')}
    get firstName() {return $('#firstName')}
    get lasName() {return $('#lastName')}
    get usernameField() {return $('#userEmail')}
    get age() {return $('#age')}
    get salary() {return $('#salary')}
    get department() {return $('#department')}
    get actionButton() {return $('#edit-record-1')}
    get submitButton(){return $('#submit')}
    get cancelButton() {return $('.close')}

    get editButton(){return $('#edit-record-1')}
    get deleteButton() {return $('#delete-record-1')}

    // page action
    async openPage(){
        await browser.url('https://demoqa.com/webtables')
    }

    async clickDeleteButton() {
        await this.deleteButton.click()
    }

    async clickEditRecord() {
        await this.editButton.click()
    }

    async editFirstName() {
        await this.firstName.setValue('Cierra2')
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

    async clickCancelButton(){
        await this.cancelButton.click()
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
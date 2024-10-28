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

    get dataPerPage() {return $('[aria-label="rows per page"]')}
    get fiveDataPage() {return this.dataPerPage.$('[value="5"]')}
    get twentyDataPage() {return this.dataPerPage.$('[value="20"]')}
    get twentyFiveDataPage() {return this.dataPerPage.$('[value="25"]')}
    get fivtyDataPage() {return this.dataPerPage.$('[value="50"]')}
    get hundredDataPage() {return this.dataPerPage.$('[value="100"]')}
    get tenDataPage() {return this.dataPerPage.$('[value="10"]')}

    // page action
    async openPage(){
        await browser.url('https://demoqa.com/webtables')
    }

    async get5DataPerPage() {
        await this.dataPerPage.click()
        await this.fiveDataPage.click()
    }

    async get10DataPerPage() {
        await this.dataPerPage.click()
        await this.tenDataPage.click()
    }

    async get20DataPerPage() {
        await this.dataPerPage.click()
        await this.twentyDataPage.click()
    }

    async get25DataPerPage() {
        await this.dataPerPage.click()
        await this.twentyFiveDataPage.click()
    }

    async get50DataPerPage() {
        await this.dataPerPage.click()
        await this.fivtyDataPage.click()
    }

    async get100DataPerPage() {
        await this.dataPerPage.click()
        await this.hundredDataPage.click()
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
import {browser, $, expect} from '@wdio/globals'
import WebTable from '../pageobjects/webtable.page'

describe('EndtoEnd Testing Demo QA', function(){
    describe('WebTables DemoQA', function(){
        before(async function(){
            await WebTable.openPage()
            await expect(browser).toHaveUrl('https://demoqa.com/webtables')
        })
        it('Read data', async function(){
            // await browser.url('https://demoqa.com/webtables')
            // await expect(browser).toHaveUrl('https://demoqa.com/webtables')

            const tableHeader = await $$('[role=columnheader]')
            const allTableName = []
            for(const name of tableHeader){
                const tableName = await name.getText()
                allTableName.push(tableName)
                // console.log('Header Table',allTableName)
            }
            await expect(tableHeader).toBeElementsArrayOfSize(7)
            await expect(tableHeader).toHaveText("['First Name', 'Last Name', 'Age', 'Email', 'Salary', 'Department', 'Action']")
            

            const tableValues = await $$('[role=rowgroup]')
            const allValues = []
            for(let tableValue of tableValues){
                let value = await tableValue.getText()
                allValues.push(value)
            }
            await expect(tableValues).toBeElementsArrayOfSize(10)
            await expect(allValues.includes('Cierra\nVega\n39\ncierra@example.com\n10000\nInsurance')).toBe(true)

            // console.log('Header Table',allTableName)
            // console.log('Value table', allValues)
        })
        it('Create Data', async function(){
            // await browser.url('https://demoqa.com/webtables')
            // await expect(browser).toHaveUrl('https://demoqa.com/webtables')

            await $('#addNewRecordButton').click()
            expect(browser).toHaveId('registration-form-modal')
            const firstName = 'Abdulatif', lasName = 'Sidiq', email = 'fajar@test.com', age = 17, salary = 12000, department = 'IT'
            await $('#firstName').setValue(firstName)
            await $('#lastName').setValue(lasName)
            await $('#userEmail').setValue(email)
            await $('#age').setValue(age)
            await $('#salary').setValue(salary)
            await $('#department').setValue(department)

            await $('#submit').click()

            const tableValues = await $$('[role=rowgroup]')
            const allValues = []
            for(let tableValue of tableValues){
                let value = await tableValue.getText()
                allValues.push(value)
            }
            // console.log('data baru', allValues)
            let newData = 'Abdulatif\nSidiq\n17\nfajar@test.com\n12000\nIT'
            // console.log('new data', newData)

            await expect(tableValues).toBeElementsArrayOfSize(10)
            await expect(allValues.includes(newData)).toBe(true)

        })
    })
})
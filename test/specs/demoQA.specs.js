import {browser, $, expect} from '@wdio/globals'
import WebTable from '../pageobjects/webtable.page'
import { isHeaderTrue, isHeaderLengthTrue } from '../../helper/cekheader'
import webtablePage from '../pageobjects/webtable.page'

describe('EndtoEnd Testing Demo QA', function(){
    describe('WebTables DemoQA', function(){
        before(async function(){
            await WebTable.openPage()
            await expect(browser).toHaveUrl('https://demoqa.com/webtables')
        })
        it('Read data', async function(){
            // await browser.url('https://demoqa.com/webtables')
            // await expect(browser).toHaveUrl('https://demoqa.com/webtables')

            const tableHeader = await WebTable.getTableHeader()
            const headerValue = ['First Name', 'Last Name', 'Age', 'Email', 'Salary', 'Department', 'Action']
            const cekHeader = isHeaderTrue(headerValue, tableHeader)
            const headerLength = isHeaderLengthTrue(tableHeader, 7)
            
            await expect(headerLength).toBe(true)
            await expect(cekHeader).toBe(true)
            

            const tableValues = await WebTable.getValues()
            
            await expect(isHeaderLengthTrue(tableValues, 10)).toBe(true)
            await expect(tableValues.includes('Cierra\nVega\n39\ncierra@example.com\n10000\nInsurance')).toBe(true)
        })
        it.only('Create Data', async function(){
            const firstName = 'Abdulatif', lasName = 'Sidiq', email = 'fajar@test.com', age = 17, salary = 12000, department = 'IT'
    
            await WebTable.clickNewRecord()
            // await expect(browser).toHaveId('registration-form-modal')

            await WebTable.fillData(firstName, lasName, email, age, salary, department)
            await WebTable.clickSubmit()

            const tableHeader = await WebTable.getTableHeader()
            const headerValue = ['First Name', 'Last Name', 'Age', 'Email', 'Salary', 'Department', 'Action']
            const cekHeader = isHeaderTrue(headerValue, tableHeader)
            const headerLength = isHeaderLengthTrue(tableHeader, 7)
            
            await expect(headerLength).toBe(true)
            await expect(cekHeader).toBe(true)
            

            const tableValues = await WebTable.getValues()
            
            await expect(isHeaderLengthTrue(tableValues, 10)).toBe(true)
            await expect(tableValues.includes('Abdulatif\nSidiq\n17\nfajar@test.com\n12000\nIT')).toBe(true)

        })
    })
})
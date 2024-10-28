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
        describe('Read data', function(){
            it('Read all data', async function(){
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
        })

        describe("Create Data", function(){
            it('Create Data with all Empty Field', async () => {
                const firstName = '', lasName = '', email = '', age = '', salary = '', department = ''
        
                await WebTable.clickNewRecord()
                await expect(WebTable.RegForm).toExist()
    
                await WebTable.fillData(firstName, lasName, email, age, salary, department)
                await WebTable.clickSubmit()
                await expect(WebTable.RegForm).toExist()
            })
            it('Create Data with and fill all field', async function(){
                const firstName = 'Abdulatif', lasName = 'Sidiq', email = 'fajar@test.com', age = 17, salary = 12000, department = 'IT'
        
                // await WebTable.clickNewRecord()
                // await expect(WebTable.RegForm).toExist()
    
                await WebTable.fillData(firstName, lasName, email, age, salary, department)
                await WebTable.clickSubmit()
                await expect(WebTable.RegForm).not.toExist()
    
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
        
        describe('Edit Data', function() {
            it('Edit Data username Cierra', async () => {
                // const firstName = 'Abdulatif', lasName = 'Sidiq', email = 'fajar@test.com', age = 17, salary = 12000, department = 'IT'
        
                // await WebTable.clickNewRecord()
                // await expect(browser).toHaveId('registration-form-modal')
    
                // await WebTable.fillData(firstName, lasName, email, age, salary, department)
                // await WebTable.clickSubmit()
    
                await WebTable.clickEditRecord()
                await WebTable.editFirstName()
                await WebTable.clickSubmit()
    
                const tableHeader = await WebTable.getTableHeader()
                const headerValue = ['First Name', 'Last Name', 'Age', 'Email', 'Salary', 'Department', 'Action']
                const cekHeader = isHeaderTrue(headerValue, tableHeader)
                const headerLength = isHeaderLengthTrue(tableHeader, 7)
                
                await expect(headerLength).toBe(true)
                await expect(cekHeader).toBe(true)
                
    
                const tableValues = await WebTable.getValues()
                
                await expect(isHeaderLengthTrue(tableValues, 10)).toBe(true)
                await expect(tableValues.includes('Cierra2\nVega\n39\ncierra@example.com\n10000\nInsurance')).toBe(true)
            })
        })
        
        describe('delete data', function(){
            it('delete data Cierra', async() => {
                await WebTable.clickDeleteButton()
    
                const tableValues = await WebTable.getValues()
                
                await expect(isHeaderLengthTrue(tableValues, 10)).toBe(true)
                await expect(tableValues.includes('Cierra2\nVega\n39\ncierra@example.com\n10000\nInsurance')).toBe(false)
            })
        })
    })
})
const { chromium } = require('playwright');
(async () => {
    const browser = await chromium.launch({
        headless: false
    });

    const context = await browser.newContext()
    const page = await context.newPage()

    const navigationPromise = page.waitForNavigation()

    await page.goto('https://demo.changetocomm.nl/ac/api/system/login.html?event=login&type=3&to=https%3A%2F%2Fdemo.changetocomm.nl%2Fauditcase%2Fauditcasestart.nsf')

    await page.setViewportSize({ width: 2560, height: 1298 })

    await navigationPromise

    await navigationPromise

    await page.waitForSelector('.auth-body > #ac > .panel > .panel__body')
    await page.click('.auth-body > #ac > .panel > .panel__body')

    await page.type('#ac_dojo_widget_authentication_LoginPage_0 #Username', 'Jan Bakker')

    // Fill input[name="Password"]
    await page.fill('input[name="Password"]', 'Auditcase2016');

    await page.waitForSelector('#ac_dojo_widget_authentication_LoginPage_0 #Login')
    await page.click('#ac_dojo_widget_authentication_LoginPage_0 #Login')

    await navigationPromise

    await navigationPromise

    await page.waitForSelector('.panel > .actionbar > .formactionbar > .btn-defaultcolor > span')
    await page.click('.panel > .actionbar > .formactionbar > .btn-defaultcolor > span')

    await page.waitForSelector('.actabcontainer > .ac-tabcontainer > .ac-tabtitle:nth-child(3) > .ac-tabtitle-container > .title')
    await page.click('.actabcontainer > .ac-tabcontainer > .ac-tabtitle:nth-child(3) > .ac-tabtitle-container > .title')

    await page.waitForSelector('.row > .form-control-ac > .form-control-static:nth-child(2) > .form-control-ac > .ac-textbox')
    await page.click('.row > .form-control-ac > .form-control-static:nth-child(2) > .form-control-ac > .ac-textbox')

    await page.waitForSelector('span > .v-select > #vs2__combobox > .vs__selected-options > .vs__search')
    await page.click('span > .v-select > #vs2__combobox > .vs__selected-options > .vs__search')

    await page.waitForSelector('#vs2__listbox > #vs2__option-1 > .vs--result-table > .option > .option-item')
    await page.click('#vs2__listbox > #vs2__option-1 > .vs--result-table > .option > .option-item')

    await page.waitForSelector('.active > div > div > .panel > .panel__body')
    await page.click('.active > div > div > .panel > .panel__body')

    await page.waitForSelector('.panel > .actionbar > .formactionbar > .btn-defaultcolor > span')
    await page.click('.panel > .actionbar > .formactionbar > .btn-defaultcolor > span')

    await browser.close()
})()
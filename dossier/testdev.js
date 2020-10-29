const { chromium } = require('playwright');
const login = require('../system/login.js');
const CONFIG = require('../system/config.js');
const fetch = require("node-fetch");

(async () => {
    const browser = await chromium.launch({
        headless: CONFIG.HEADLESS
    });
    const context = await browser.newContext()
    const page = await context.newPage()
    const navigationPromise = page.waitForNavigation()


    // login with jwt token
    await login(page);




    // test dossierstuk
    await page.goto(`${CONFIG.SERVERURL}${CONFIG.API}/page/doc.html?dbpath=Dev%2FAuditCase%2Fdossierdevelopment.nsf&documentid=9A81CE8E7044D4E2C125859F00393CD7&form=DO01f`)

    await navigationPromise;

    await page.setViewportSize({ width: 2560, height: 1241 })

    await navigationPromise

    await page.waitForSelector('.panel > .actionbar > .formactionbar > .btn-defaultcolor > span')
    await page.click('.panel > .actionbar > .formactionbar > .btn-defaultcolor > span')


    await page.waitForSelector('.panel > .actionbar > .formactionbar > .btn-ac--block:nth-child(2) > span')
    await page.click('.panel > .actionbar > .formactionbar > .btn-ac--block:nth-child(2) > span')

    await page.waitForSelector('.actabcontainer > .ac-tabcontainer > .ac-tabtitle:nth-child(2) > .ac-tabtitle-container > .title')
    await page.click('.actabcontainer > .ac-tabcontainer > .ac-tabtitle:nth-child(2) > .ac-tabtitle-container > .title')

    await page.waitForSelector('.row > .form-control-ac > .form-control-static > .form-control-ac > [data-ac-fieldid="shortdescriptiondo"]')
    await page.click('.row > .form-control-ac > .form-control-static > .form-control-ac > [data-ac-fieldid="shortdescriptiondo"]')

    await page.waitForSelector('span > [data-ac-fieldid="labelchoices"] > #vs2__combobox > .vs__selected-options > .vs__search')
    await page.click('span > [data-ac-fieldid="labelchoices"] > #vs2__combobox > .vs__selected-options > .vs__search')

    await page.waitForSelector('#vs2__listbox > #vs2__option-3 > .vs--result-table > .option > .option-item')
    await page.click('#vs2__listbox > #vs2__option-3 > .vs--result-table > .option > .option-item')

    await page.waitForSelector('div:nth-child(2) > .panel > .panel__body > .container:nth-child(4) > .row > .columnLayoutField > .row > .control-label')
    await page.click('div:nth-child(2) > .panel > .panel__body > .container:nth-child(4) > .row > .columnLayoutField > .row > .control-label')

    await page.waitForSelector('[data-ac-fieldid="authorizeddossierdo"] > .ac-yesno-container > .ac-yesno > .ac-yesno-root > .ac-yesno-switchbase > .ac-yesno-label > .ac-yesno-thumb')
    await page.click('[data-ac-fieldid="authorizeddossierdo"] > .ac-yesno-container > .ac-yesno > .ac-yesno-root > .ac-yesno-switchbase > .ac-yesno-label > .ac-yesno-thumb')

    await page.waitForSelector('[data-ac-fieldid="portalnotificationdo"] > .ac-yesno-container > .ac-yesno > .ac-yesno-root > .ac-yesno-track')
    await page.click('[data-ac-fieldid="portalnotificationdo"] > .ac-yesno-container > .ac-yesno > .ac-yesno-root > .ac-yesno-track')

    await page.waitForSelector('.form-control-ac #vs13__combobox')
    await page.click('.form-control-ac #vs13__combobox')

    await page.waitForSelector('span > [data-ac-fieldid="sharefile.sharedfiles"] > #vs3__combobox > .vs__selected-options > .vs__search')
    await page.click('span > [data-ac-fieldid="sharefile.sharedfiles"] > #vs3__combobox > .vs__selected-options > .vs__search')

    await page.waitForSelector('[data-ac-fieldid="publicdossierdo"] > .ac-yesno-container > .ac-yesno > .ac-yesno-root > .ac-yesno-switchbase > .ac-yesno-label > .ac-yesno-thumb')
    await page.click('[data-ac-fieldid="publicdossierdo"] > .ac-yesno-container > .ac-yesno > .ac-yesno-root > .ac-yesno-switchbase > .ac-yesno-label > .ac-yesno-thumb')

    await page.waitForSelector('[data-ac-fieldid="vssend"] > .ac-yesno-container > .ac-yesno > .ac-yesno-root > .ac-yesno-track')
    await page.click('[data-ac-fieldid="vssend"] > .ac-yesno-container > .ac-yesno > .ac-yesno-root > .ac-yesno-track')

    await page.waitForSelector('.ac-yesno > .ac-yesno-root > .active > .ac-yesno-label > .ac-yesno-thumb')
    await page.click('.ac-yesno > .ac-yesno-root > .active > .ac-yesno-label > .ac-yesno-thumb')

    await page.waitForSelector('[data-ac-fieldid="publicdossierdo"] > .ac-yesno-container > .ac-yesno > .ac-yesno-root > .ac-yesno-track')
    await page.click('[data-ac-fieldid="publicdossierdo"] > .ac-yesno-container > .ac-yesno > .ac-yesno-root > .ac-yesno-track')

    await page.waitForSelector('span > [data-ac-fieldid="sharefile.sharedfiles"] > #vs21__combobox > .vs__selected-options > .vs__search')
    await page.click('span > [data-ac-fieldid="sharefile.sharedfiles"] > #vs21__combobox > .vs__selected-options > .vs__search')

    await page.waitForSelector('.form-control-ac #vs22__combobox')
    await page.click('.form-control-ac #vs22__combobox')

    await page.waitForSelector('.panel > .actionbar > .formactionbar > .btn-defaultcolor > span')
    await page.click('.panel > .actionbar > .formactionbar > .btn-defaultcolor > span')

    await browser.close()
})()


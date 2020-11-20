
const CONFIG = require('../system/config.js');

const PageObjects = require("../system/util.js");
const Modules = require('../system/ac.js');


const { chromium } = require('playwright');

jest.setTimeout(30000);

describe("AuditCase", () => {
    let util;
    let ac;
    let browser;
    let browserContext;
    let page;

    beforeAll(async () => {
        browser = await chromium.launch({ headless: CONFIG.HEADLESS });  //launch chrome
        browserContext = await browser.newContext();
        page = await browserContext.newPage();
        util = new PageObjects(page, page);
        ac = new Modules(page);
    });

    afterAll(async () => {
        await browser.close();
    });

    test("Relatie van klant", async () => {
        // login with jwt token
        await ac.login(CONFIG);

        // test if we have a session
        expect(await util.getMainPage().title()).toBe('AuditCase');

        // open relatie
        await ac.openRelatie(util);

        // open actie relatie van klant
        await util.clickByTestId("AC_ACTIONBUTTON_DROPDOWN");
        await util.clickByTestId("Relatie van klant");

        // switch naar frame 
        util = await util.switchToDefaultFrame();

        await util.getPage().waitForNavigation();

        // window title should be changed
        expect(await util.getMainPage().title()).toBe('| Relatie van klant');

        // fill combobox
        await util.fillCombobox("CompanyDocIdRE", "slagerij");
        await util.fillCombobox("CompanyDocIdRE_1", "relatie 08-07-2019");
        await util.fillCombobox("SubjectRE", "anders");

        // save document
        await util.clickByTestId("SAVE_BUTTON");

        // wait for saving
        await util.getPage().waitForNavigation();

        // click on 'back buton'
        await util.clickByTestId("BACK_BUTTON");

        // wait until popup is closed (100ms)
        await util.getMainPage().waitForTimeout(100);

        // window title should be back to 'AuditCase'
        expect(await util.getMainPage().title()).toBe('Relatie');

    });
});





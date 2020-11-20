
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
        util = new PageObjects(page);
        ac = new Modules(page);
    });

    afterAll(async () => {
        //   await browser.close();
    });

    test("Relatie van klant", async () => {
        // login with jwt token
        await ac.login(CONFIG);

        // test if we have a session
        expect(await util.getPage().title()).toBe('AuditCase');

        // open relatie
        await ac.openRelatie(util);

        // open actie relatie van klant
        await util.clickByTestId("AC_ACTIONBUTTON_DROPDOWN");
        await util.clickByTestId("Relatie van klant");

        // switch naar frame 
        util = await util.switchToDefaultFrame();

        // test if we have a session
        expect(await util.getPage().title()).toBe('| Relatie van klant');
    });
});





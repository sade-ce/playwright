const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();

    // Open new page
    const page = await context.newPage();

    // Go to https://demo.changetocomm.nl/auditcase/auditcasestart.nsf
    await page.goto('https://demo.changetocomm.nl/auditcase/auditcasestart.nsf');

    // Go to https://demo.changetocomm.nl/ac/api/system/login.html?event=login&type=0&to=https://demo.changetocomm.nl/auditcase/auditcasestart.nsf
    await page.goto('https://demo.changetocomm.nl/ac/api/system/login.html?event=login&type=0&to=https://demo.changetocomm.nl/auditcase/auditcasestart.nsf');

    // Click input[name="Username"]
    await page.click('input[name="Username"]');

    // Fill input[name="Username"]
    await page.fill('input[name="Username"]', 'Jan Bakker');

    // Press Tab
    await page.press('input[name="Username"]', 'Tab');

    // Fill input[name="Password"]
    await page.fill('input[name="Password"]', 'Auditcase2016');

    // Click text=/.*Inloggen\.\.\..*/
    await Promise.all([
        page.waitForNavigation(/*{ url: 'https://demo.changetocomm.nl/ac/api/page/home.html' }*/),
        page.click('text=/.*Inloggen\.\.\..*/')
    ]);

    // Go naar het dossierstuk
    await page.goto('https://demo.changetocomm.nl/ac/api/page/doc.html?&documentid=2F1981E1142F1A52C12579D60057A141&dbpath=AuditCaseDossiers/D200260.NSF&action=openDocument&form=DO01f');

    await Promise.all([
        page.waitForNavigation(),
        page.click('text="Wijzigen"')
    ]);

    // Click text="Algemeen"
    await page.click('text="Algemeen"');

    // Click //span/span[2]
    await page.click('//span/span[2]');

    // Click input[placeholder="Type hier om te zoeken..."]
    await page.click('input[placeholder="Type hier om te zoeken..."]');

    // Click li[role="option"] >> text="10323041.gif"
    await page.click('li[role="option"] >> text="10323041.gif"');

    // Click //span[normalize-space(.)='Concept']/span[1]/span/span[2]
    await page.click('//span[normalize-space(.)=\'Concept\']/span[1]/span/span[2]');


    // Click text="Bewaren"
    await Promise.all([
        page.waitForNavigation(),
        page.click('text="Bewaren"')
    ]);


    // Click text="Wijzigen"
    await Promise.all([
        page.waitForNavigation(),
        page.click('text="Wijzigen"')
    ]);

    // Click //span[normalize-space(.)='Ja']/span[1]/span/span[1]/span/span
    await page.click('//span[normalize-space(.)=\'Ja\']/span[1]/span/span[1]/span/span');


    // Click text="Bewaren"
    await Promise.all([
        page.waitForNavigation(),
        page.click('text="Bewaren"')
    ]);

    // Close page
    await page.close();

    // ---------------------
    await context.close();
    await browser.close();
})();
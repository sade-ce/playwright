const CONFIG = require('./config.js');
const fetch = require("node-fetch");

module.exports = (async (page) => {


    const navigationPromise = page.waitForNavigation()

    await page.goto('https://dev07.changetocomm.net')

    await navigationPromise

    await page.waitForSelector('#ac_dojo_widget_authentication_LoginPage_0 #Username')
    await page.click('#ac_dojo_widget_authentication_LoginPage_0 #Username')

    await page.type('#ac_dojo_widget_authentication_LoginPage_0 #Username', 'ferry')

    await page.click('#ac_dojo_widget_authentication_LoginPage_0 #Password')
    await page.type('#ac_dojo_widget_authentication_LoginPage_0 #Password', 'lotusnotes')

    await page.click('#ac_dojo_widget_authentication_LoginPage_0 #Login')

    await navigationPromise

    // // to prevent CORS issues, we need to redirect to main page first
    // await page.goto(`${CONFIG.SERVERURL}`);
    // await page.waitForNavigation();

    // return await page.evaluate(async ([cfg]) => {
    //     const res = await fetch(`${cfg.SERVERURL}${cfg.API}`, {
    //         method: "get",
    //         headers: {
    //             "Authorization": `Bearer ${cfg.JWTKEY}`,
    //             // "generateLtpaToken": "1"
    //         },
    //     })
    //     const result = await res.json();
    //     console.log(result);
    // }, [CONFIG])
})
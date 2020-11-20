const CONFIG = require('./config.js');
const fetch = require("node-fetch");


module.exports = class Modules {

    constructor(page) {
        this.page = page;
    }



    async login(config) {
        const navigationPromise = this.page.waitForNavigation()

        await this.page.goto(config.SERVERURL);

        await navigationPromise

        await this.page.waitForSelector('#Username')
        await this.page.click('#Username')

        await this.page.type('#Username', 'ferry')

        await this.page.click('#Password')
        await this.page.type('#Password', 'lotusnotes')

        await this.page.click('#Login')

        await navigationPromise
    }

    async openRelatie(util) {
        const navigationPromise = this.page.waitForNavigation()
        return await Promise.all([

            util.clickByTestId("AC_HOOFDMENU"),
            util.clickByTitle("AuditCase"),
            util.clickByTitle("Relatie"),

            navigationPromise
        ]);
    }

}

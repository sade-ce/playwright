//const CONFIG = require('./config.js');
//const fetch = require("node-fetch");


module.exports = class Modules {

    private page: any;
    constructor(page: any) {
        this.page = page;
    }



    async login(config: any) {
        const navigationPromise = this.page.waitForNavigation()

        await this.page.goto(config.baseUrl);

        await navigationPromise

        await this.page.waitForSelector('#Username')
        await this.page.click('#Username')

        await this.page.type('#Username', 'ferry')

        await this.page.click('#Password')
        await this.page.type('#Password', 'lotusnotes')

        await this.page.click('#Login')

        await navigationPromise
    }

    async openRelatie(util: any) {
        const navigationPromise = this.page.waitForNavigation()
        return await Promise.all([

            util.clickByTestId("AC_HOOFDMENU"),
            util.clickByTitle("AuditCase"),
            util.clickByTitle("Relatie"),

            this.page.waitForTimeout(300),  //wait for views to build

            navigationPromise
        ]);
    }

}

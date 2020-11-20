module.exports = class PageObjects {

    constructor(page) {
        this.page = page;
    }

    getPage() {
        return this.page;
    }

    /**
     * Clicks on an element by given testid.
     * 
     * @param {*} testid  test id to find
     */
    async clickByTestId(testid) {
        await this.page.waitForSelector(`[data-test-id='${testid}']`);
        await this.page.click(`[data-test-id='${testid}']`);
    }

    /**
     * Finds an element that has this title and clicks it
     * 
     * @param {
     * } tekst 
     */
    async clickByTitle(tekst) {
        await this.page.waitForSelector(`//a[contains(text(),'${tekst}')]`);
        await this.page.click(`//a[contains(text(),'${tekst}')]`);
    }

    /**
     * Switches to default action frame (iframe)
     * 
     * returns new PageObjects object
     */
    async switchToDefaultFrame() {
        await this.page.waitForSelector("#ac_dojo_widget_actions_ActionsDialog_0_iFrame");
        const elementHandle = await this.page.frames().find((el) => el.id() == "ac_dojo_widget_actions_ActionsDialog_0_iFrame");
        const frame = await elementHandle.contentFrame()

        expect(frame).not.toBeNull();

        return new PageObjects(frame);
    }
}
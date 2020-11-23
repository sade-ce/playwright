module.exports = class PageObjects {

    private mainpage: any;
    private page: any;
    constructor(mainpage: any, page: any) {
        this.mainpage = mainpage;  //special for keyboard events
        this.page = page;
    }

    getPage() {
        return this.page;
    }

    getMainPage() {
        return this.mainpage;
    }

    /**
     * Clicks on an element by given testid.
     * 
     * @param {*} testid  test id to find
     */
    async clickByTestId(testid: string) {
        await this.page.waitForSelector(`[data-test-id='${testid}']`);
        await this.page.waitForTimeout(100);  //small wait needed (sometimes javascript need to run)
        await this.page.click(`[data-test-id='${testid}']`);
    }

    /**
     * Finds an element that has this title and clicks it
     * 
     * @param {
     * } tekst 
     */
    async clickByTitle(tekst: string) {
        await this.page.waitForSelector(`//a[contains(text(),'${tekst}')]`);
        await this.page.waitForTimeout(100);  //small wait needed (sometimes javascript need to run)
        await this.page.click(`//a[contains(text(),'${tekst}')]`);
    }

    /**
     * Waits for the overlay to be gone
     * 
     */
    async wachtOpOverlay() {

        // wacht op het opbouwen van de overlay
        await this.page.waitForTimeout(25);

        await this.page.waitForSelector(".blockUI.blockOverlay", {
            state: "hidden"
        })
    }


    /**
     * Helper functie to invoke a Select2 combobox
     * 
     *   e.g. fillCombobox("CompanyDocIdRE", "slagerij");
     * 
     * @param {*} name  technical name of field
     * @param {*} theValue 
     */
    async fillCombobox(name: string, theValue: string) {
        await this.wachtOpOverlay();

        // This is needed
        await this.page.waitForTimeout(300);

        // click open dropdown
        await this.page.waitForSelector(`[data-ac-dropdown-fieldid='${name}'] .select2-container-multi`);
        await this.page.click(`[data-ac-dropdown-fieldid='${name}'] .select2-container-multi`);

        await this.wachtOpOverlay();

        await this.page.waitForSelector(`[data-ac-dropdown-fieldid='${name}']`);
        await this.page.type(`[data-ac-dropdown-fieldid='${name}']`, theValue);

        // wait until class 'select2-result' is found
        await this.page.waitForSelector(`.select2-result`);

        // select the value
        await this.mainpage.keyboard.press('Enter');  //enter event only works from mainpage
    }

    /**
     * Switches to default action frame (iframe)
     * 
     * returns new PageObjects object
     */
    async switchToDefaultFrame() {
        await this.page.waitForSelector("#ac_dojo_widget_actions_ActionsDialog_0_iFrame");
        const elementHandle = await this.page.$("#ac_dojo_widget_actions_ActionsDialog_0_iFrame");
        const frame = await elementHandle.contentFrame()

        expect(frame).not.toBeNull();

        return new PageObjects(this.page, frame);
    }
}
import Common from '../functions/Common'

class HomePage {

    constructor() {
        this.obj = new Common();

    }

    validate_StaticText(expectedText) {
        this.obj.assertText("[class='text-center']", expectedText);
    }

    click_Link(linkName) {
        this.obj.click("[data-test='" + linkName.toLowerCase() + "']");
    }
}
export default HomePage;
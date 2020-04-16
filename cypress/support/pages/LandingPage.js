import Common from "../functions/Common";

class LandingPage extends Common {




    constructor() {
        super();
        this.obj = new Common();
    }

    click_Item(itemName) {
        this.obj.click("[data-test='" + itemName.toLowerCase() + "']");
    }


}
export default LandingPage;
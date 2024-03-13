import BasePage from "./base.page";
import categoryMenuComp from "../../specs/automation-test-store/components/category-menu.comp";
class HomePage extends BasePage{
    open(){
        return super.open("");
    }
    get CategoryMenuComponent() {
        return categoryMenuComp ;
    }

    

}
export default new HomePage();
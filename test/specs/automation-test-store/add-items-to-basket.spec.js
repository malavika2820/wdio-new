import homePage from "../../pageObjects/automation-test-store/home.page";
describe('add items to basket', () => {
    

    it("add specific 'skincare products' to basket & validate cart total", async () => {
       await homePage.open();
        //const skincareLinks = await $$("//a[contains(text(), 'Skincare')]");
        //await skincareLinks[1].click();
        await homePage.CategoryMenuComponent.categoryMenuLink('Skincare')[1].click();

        const skincareProducts_Header_Links = await $$('.fixed_wrapper .prdocutname');

        const itemPrices = []; 

        for(const header of skincareProducts_Header_Links) {
            const tempHeaderText = await header.getText();

            if(tempHeaderText.toLowerCase() == "creme precieuse nuit 50ml" || 
            tempHeaderText.toLowerCase() == "total moisture facial cream") {
                const attr = await header.getAttribute("href");
                //https://automationteststore.com/index.php?rt=product/product&path=43&product_id=93
                //https://automationteststore.com/index.php?rt=product/product&path=43&product_id=66

                const itemId = attr.split("id=").pop();
                console.log(itemId); //93 66

                await $('//a[@data-id="' + itemId + '"]').click();
                itemPrices.push(
                    await $("//a[@data-id='" + itemId + "']/following-sibling::div/div[@class='pricenew']"
                    + "| //a[@data-id='" + itemId + "']/following-sibling::div/div[@class='oneprice']").getText()
                )
            }
            const formattedItemPrices = [];
            itemPrices.forEach((price) => {
                formattedItemPrices.push(price.replace("$", ""));
            });
            var itemsTotal = 0;
            formattedItemPrices.forEach(price => itemsTotal += parseFloat(price));
            console.log("Items Total: " + itemsTotal); 
        }
        await $("//span[text()='Cart']").click();
        await expect(browser).toHaveUrlContaining("checkout");

        var tempShippingRate = await $("//span[text()='Flat Shipping Rate:']/../following-sibling::td").getText();
        var shippingRate = tempShippingRate.replace('$', '');
        itemsTotal = itemsTotal + parseFloat(shippingRate);
        console.log("Items Total + Shipping Rate: " + itemsTotal); 
        
        var cartTotal = await (await $("//span[text()='Total:']/../following-sibling::td")).getText();
        cartTotal = cartTotal.replace('$', ''); 
        expect(itemsTotal).toEqual(parseFloat(cartTotal));
    }); 
});
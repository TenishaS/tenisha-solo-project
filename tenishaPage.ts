import { BasePage } from "./basePage";
import { By } from "selenium-webdriver";

export class soloProject extends BasePage{
    //test1
    eyeglasses: By=By.id('eyeglasses')
    sunglasses: By=By.id('sunglasses')
    contacts: By=By.id('contact-lenses')
    lenses: By=By.id('lenses')
    brands: By=By.id('brands')
    eyeExam: By=By.id('eye-exam')
    sync: By=By.id('sync-insurance')
    //test2
insureClick: By = By.xpath('(//*[@class="icon"])[22]')
    eyemed: By=By.xpath('(//input)[54]')
    firstName: By=By.id('firstname')
    lastName: By=By.id('lastname')
    DOB: By=By.id('date-of-birth2')
    zip: By=By.id('zipcode')
    //test3
    findaStore: By=By.id('findStoreFLContainer')
    zipCode: By=By.xpath('(//input)[31]')
    //test4
    shoppingBag: By=By.xpath('//a[@id="orderCalculateUrlMob"]')
    shopSunglasses: By=By.xpath('(//a[@class="button-medium-black-fill"])[2]')
    versace: By=By.xpath('(//img[@class="slider-image default-image"])[1]')
    addTobag: By=By.css('#addToCartMainBtn')
    //test5
    language: By=By.css('.selected-language')
    UnitedStatesEspanol: By=By.css('.selected-language')

    constructor(){
        super({url: "https://www.lenscrafters.com/lc-us"})
    }
}
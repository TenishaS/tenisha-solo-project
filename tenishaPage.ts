import { BasePage } from "./basePage";
import { By } from "selenium-webdriver";

export class soloProject extends BasePage{
    //test1
    eyeglasses: By=By.id('eyeglasses')
    sunglasses: By=By.xpath('(//a[@class="nav-button"])[2]')
    contacts: By=By.xpath('(//a[@class="nav-button"])[3]')
    lenses: By=By.xpath('(//a[@class="nav-button"])[4]')
    brands: By=By.xpath('(//a[@class="nav-button"])[5]')
    eyeExam: By=By.id('eye-exam')
    sync: By=By.xpath('(//a[@class="nav-button"])[7]')
    //test2
    insurance: By=By.id('header_shield_link')
    eyemed: By=By.xpath('(//div[@class="selectize-input items has-options ng-valid ng-dirty full has-items"])')
    firstName: By=By.id('firstname')
    lastName: By=By.id('lastname')
    DOB: By=By.id('date-of-birth2')
    zip: By=By.id('zipcode')
    //test3

    constructor(){
        super({url: "https://www.lenscrafters.com/lc-us"})
    }
}
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
    eyemed: By=By.xpath('(//input)[54]')
    firstName: By=By.id('firstname')
    lastName: By=By.id('lastname')
    DOB: By=By.id('date-of-birth2')
    zip: By=By.id('zipcode')
    //test3
    findaStore: By=By.xpath('(//a[@class="ct_Link_Default_Medium"])[1]')
    zipCode: By=By.xpath('(//input[@name="locationEntry"])[2]')
    //test4
    search: By=By.xpath('(//svg[@class="icon"])[19]')
    prada: By=By.css('.ais-SearchBox-input')
    //test5
    language: By=By.css('.selected-language')
    selectEspanol: By=By.css('.selected-language')

    constructor(){
        super({url: "https://www.lenscrafters.com/lc-us"})
    }
}
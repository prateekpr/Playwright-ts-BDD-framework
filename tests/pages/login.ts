import { Page } from "@playwright/test";
import {loc} from '../locators/login'

export class Login{
    page:Page
    constructor( page: Page) {
        this.page=page
    }
   async  credentials(){
    await this.page.locator(loc.username).fill(process.env.userid as string)
    await this.page.locator(loc.password).fill(process.env.pass as string)
    await this.page.locator(loc.submit).click()
   
   }
}
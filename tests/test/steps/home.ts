import {Given,When,Then, BeforeAll, AfterAll } from "@cucumber/cucumber"
import {Browser,BrowserContext,Page, chromium,} from "@playwright/test"
import { setTimeout } from "timers";
import dotenv from "dotenv"
import {Login} from '../../pages/login'
import {loc} from '../../locators/login'

let browser: Browser;  
let browsercontext:BrowserContext
let page:Page
let login: Login;
dotenv.config()
BeforeAll ({ timeout: 5000},async function() {
    browser=await chromium.launch({headless:false,channel:'chrome'})
    browsercontext=await browser.newContext()
    page=await browsercontext.newPage()
})

Given('user navigates to the application', async function () {
  await page.goto(process.env.url as string)
  
});
When('user enters the credentials', async function () {
    login = new Login(page)
    login.credentials()
    
    
  });
AfterAll(async function () {
    await page.waitForTimeout(5000); 
    await page.close(); 
    await browser.close();
    
})
import {chromium,test } from '@playwright/test';

test('Launching Browser Test',async()=>{

    // Launch the browser //create contex for the browser//create new page to launch our application
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();  
    const page = await context.newPage();  
    await page.goto('https://you.yash.com/SitePages/Home.aspx');  
    await browser.close();  

})
import {chromium,firefox,test } from '@playwright/test';

test('Cross Browser Testing ',async()=>{
    const context = await browser.newContext();  
    const page = await context.newPage();  
    await page.goto('https://you.yash.com/SitePages/Home.aspx');  
    await browser.close();  

})
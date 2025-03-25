//Use pertinent waits to validate title of the page and heading

import {test,expect } from '@playwright/test';

test('Launching Browser Test',async({page})=>{

//directly we are using page fixer 
    await page.goto('https://account.box.com/login');  

// get the title of the page and validate it 
       const titleodthePage = await page.title();  
       expect(titleodthePage).toBe('Box | Login'); 
       //this is pertinent where we are waiting to be have correct condition before proceed ahead
       await page.waitForSelector('h1',{state:'visible'})

       const headingname = await page.textContent('h1')
       //validate heading of the page
       expect(headingname).toBe('Sign In to Your Account'); 
       console.log("heading "+headingname)
       await page.close()
})
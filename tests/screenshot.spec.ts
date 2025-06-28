import {test, expect} from '@playwright/test';

test('screenshot validation', async({page})=>{
    await page.goto("https://rahulshettyacademy.com/client")
    await page.screenshot({path: 'screenshot/fullpage.png'});
    await page.screenshot({path:'screenshot/completepage.jpeg',fullPage:true})
    await page.getByPlaceholder("email@example.com").screenshot({path:'screenshot/username.png'})
}
)
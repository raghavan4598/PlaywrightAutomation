import{test, expect} from '@playwright/test';

// test('window handling', async({page})=>{

//     await page.goto("https://demo.automationtesting.in/Windows.html");
//     await page.getByRole('button',{name:'click'}).click();
//     const newpage=await page.waitForEvent('popup');
//     await newpage.getByText("Downloads").click();
//     await expect(newpage.locator("h2#bindings")).toContainText("Selenium Clients and WebDriver Language Bindings");
//    //await await newpage.close();
//     await page.getByText("Home").click();
//     await page.locator("input#email").fill("raghavmaddali.1357@gmail.com");

// })
test('window handling', async({page})=>{

    await page.goto("https://demo.automationtesting.in/Windows.html");
    await page.getByText("Open New Seperate Windows").click();
    await page.locator("button[class='btn btn-primary']").click();
    const newpage=await page.waitForEvent('popup');
    await newpage.getByText("Downloads").click();
    await expect(newpage.locator("h2#bindings")).toContainText("Selenium Clients and WebDriver Language Bindings");
    await page.getByText("Home").click();
    await page.locator("input#email").fill("raghavmaddali.1357@gmail.com");

})

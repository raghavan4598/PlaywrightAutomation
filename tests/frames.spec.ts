import{test, expect} from '@playwright/test';

test('frames', async({page})=>{

    await page.goto("https://demo.automationtesting.in/Frames.html")
    const frame_handle= await page.frameLocator("#singleframe")
    await frame_handle.locator("input[type='text']").first().fill("Hello World")
    await expect(frame_handle.locator("input[type='text']").first()).toHaveValue("Hello World")

// await page.locator("a[href='#Multiple']").click();
// const frame1=await page.frameLocator("Nested iFrames");
// const frame2=await page.frameLocator("iFrame Demo")
// await frame2.locator('//h5[text()="iFrame Demo"]/following::input[1]').fill("Hello World")
// await expect(frame2.locator('//h5[text()="iFrame Demo"]/following::input[1]')).toHaveValue("Hello World")
})

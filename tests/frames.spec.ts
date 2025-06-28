import{test, expect} from '@playwright/test';

test('frames', async({page})=>{

    await page.goto("https://demo.automationtesting.in/Frames.html")
    // const frame_handle= await page.frameLocator("#singleframe")
    // await frame_handle.locator("input[type='text']").first().fill("Hello World")
    // await expect(frame_handle.locator("input[type='text']").first()).toHaveValue("Hello World")

await page.locator("li[class='active'] a[class='analystic']").click();
const frame1=await page.frameLocator("Nested iFrames");
const frame2=await page.frameLocator("iFrame Demo")
await frame2.locator("input[type='text']").last().fill("Hello Raghavan")
await page.waitForTimeout(5000);
})

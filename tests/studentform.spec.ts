import{test, expect} from '@playwright/test';

test("Submit the student registartion form", async({page})=>{

   
await page.goto("https://demoqa.com/automation-practice-form")
await page.waitForURL("https://demoqa.com/automation-practice-form")
const form= await page.locator("//h5[contains(text(),'Student Registration Form')]").textContent()
console.log(form);
await expect(page.locator("//h5[contains(text(),'Student Registration Form')]")).toBeVisible();
await page.waitForTimeout(1000);
await page.locator("input#firstName").fill("Raghavendar");
await page.locator("input#lastName").fill("Maddali");
await page.getByPlaceholder("name@example.com").fill("raghavmaddali.1357@gmail.com");
await page.locator(`label[for="gender-radio-1"]`).scrollIntoViewIfNeeded();
await page.waitForTimeout(2000);
await page.pause();
await page.locator(`label[for="gender-radio-1"]`).click({force:true});
await page.waitForTimeout(2000);
await expect(page.locator(`label[for="gender-radio-1"]`)).toBeChecked();
await page.locator("input#userNumber").fill("7993380351");
await page.locator("input#dateOfBirthInput").fill("25 June 1995");
await page.locator("input#dateOfBirthInput").press("Enter");
await page.locator('#subjectsInput').fill('English');
await page.keyboard.press('Enter');
await page.locator(`//*[@id="hobbies-checkbox-1"]`).click({force:true});
await expect(page.locator(`//*[@id="hobbies-checkbox-1"]`)).toBeChecked();
await page.locator("textarea#currentAddress").fill("Hyderabad, Telangana, India");
await page.getByText("Select State").click();
await page.getByText("Uttar Pradesh").click();
await page.getByText("Select City").click();
await page.getByText("Lucknow").click();
await page.locator("button#submit").click();
await page.waitForTimeout(2000);

})


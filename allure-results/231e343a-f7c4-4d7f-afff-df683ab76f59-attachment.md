# Test info

- Name: Submit the student registartion form
- Location: /Users/mraghavendar/Downloads/playwrightwithtypescript/tests/studentform.spec.ts:3:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeChecked()

Locator: locator('label[for="gender-radio-1"]')
Expected: checked
Received: unchecked
Call log:
  - expect.toBeChecked with timeout 5000ms
  - waiting for locator('label[for="gender-radio-1"]')
    9 × locator resolved to <label title="" for="gender-radio-1" class="custom-control-label">Male</label>
      - unexpected value "unchecked"

    at /Users/mraghavendar/Downloads/playwrightwithtypescript/tests/studentform.spec.ts:20:59
```

# Page snapshot

```yaml
- img "adplus-dvertising"
- iframe
- banner:
  - link:
    - /url: https://demoqa.com
    - img
- img
- text: Elements
- img
- img
- text: Forms
- img
- list:
  - listitem:
    - img
    - text: Practice Form
- img
- text: Alerts, Frame & Windows
- img
- img
- text: Widgets
- img
- img
- text: Interactions
- img
- img
- text: Book Store Application
- img
- iframe
- heading "Practice Form" [level=1]
- heading "Student Registration Form" [level=5]
- text: Name
- textbox "First Name": Raghavendar
- textbox "Last Name": Maddali
- text: Email
- textbox "name@example.com": raghavmaddali.1357@gmail.com
- text: Gender
- radio "Male"
- text: Male
- radio "Female"
- text: Female
- radio "Other"
- text: Other Mobile(10 Digits)
- textbox "Mobile Number"
- text: Date of Birth
- textbox: 25 Jun 2025
- text: Subjects
- textbox
- text: Hobbies
- checkbox "Sports"
- text: Sports
- checkbox "Reading"
- text: Reading
- checkbox "Music"
- text: Music Picture Select picture
- button "Select picture"
- text: Current Address
- textbox "Current Address"
- text: State and City Select State
- textbox
- text: Select City
- textbox [disabled]
- button "Submit"
- img "Build PlayWright tests with AI"
- iframe
- contentinfo: © 2013-2020 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
   1 | import{test, expect} from '@playwright/test';
   2 |
   3 | test("Submit the student registartion form", async({page})=>{
   4 |
   5 |    
   6 | await page.goto("https://demoqa.com/automation-practice-form")
   7 | await page.waitForURL("https://demoqa.com/automation-practice-form")
   8 | const form= await page.locator("//h5[contains(text(),'Student Registration Form')]").textContent()
   9 | console.log(form);
  10 | await expect(page.locator("//h5[contains(text(),'Student Registration Form')]")).toBeVisible();
  11 | await page.waitForTimeout(1000);
  12 | await page.locator("input#firstName").fill("Raghavendar");
  13 | await page.locator("input#lastName").fill("Maddali");
  14 | await page.getByPlaceholder("name@example.com").fill("raghavmaddali.1357@gmail.com");
  15 | await page.locator(`label[for="gender-radio-1"]`).scrollIntoViewIfNeeded();
  16 | await page.waitForTimeout(2000);
  17 | await page.pause();
  18 | await page.locator(`label[for="gender-radio-1"]`).click({force:true});
  19 | await page.waitForTimeout(2000);
> 20 | await expect(page.locator(`label[for="gender-radio-1"]`)).toBeChecked();
     |                                                           ^ Error: Timed out 5000ms waiting for expect(locator).toBeChecked()
  21 | await page.locator("input#userNumber").fill("7993380351");
  22 | await page.locator("input#dateOfBirthInput").fill("25 June 1995");
  23 | await page.locator("input#dateOfBirthInput").press("Enter");
  24 | await page.locator('#subjectsInput').fill('English');
  25 | await page.keyboard.press('Enter');
  26 | await page.locator(`//*[@id="hobbies-checkbox-1"]`).click({force:true});
  27 | await expect(page.locator(`//*[@id="hobbies-checkbox-1"]`)).toBeChecked();
  28 | await page.locator("textarea#currentAddress").fill("Hyderabad, Telangana, India");
  29 | await page.getByText("Select State").click();
  30 | await page.getByText("Uttar Pradesh").click();
  31 | await page.getByText("Select City").click();
  32 | await page.getByText("Lucknow").click();
  33 | await page.locator("button#submit").click();
  34 | await page.waitForTimeout(2000);
  35 |
  36 | })
  37 |
  38 |
```
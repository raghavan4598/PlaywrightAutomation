import{test, expect} from '@playwright/test';

test("Submit the student registartion form", async({page})=>{

    await page.goto('https://demoqa.com/automation-practice-form');
 // Fill basic details
  await page.getByPlaceholder('First Name').fill('John');
  await page.getByPlaceholder('Last Name').fill('Doe');
  await page.getByPlaceholder('name@example.com').fill('john.doe@example.com');
  await page.locator('label[for="gender-radio-1"]').click(); // Select Male
  await page.getByPlaceholder('Mobile Number').fill('1234567890');

  // Date of Birth
  await page.locator('#dateOfBirthInput').click();
  await page.locator('.react-datepicker__month-select').selectOption('4'); // May
  await page.locator('.react-datepicker__year-select').selectOption('1995');
  await page.locator('.react-datepicker__day--015:not(.react-datepicker__day--outside-month)').click();

  // Subjects
  await page.locator('#subjectsInput').fill('English');
  await page.keyboard.press('Enter');

  // Hobbies
  await page.locator('label[for="hobbies-checkbox-1"]').check(); // Sports
  //await page.locator('label[for="hobbies-checkbox-2"]').click(); // Reading

  // Address
  await page.getByPlaceholder('Current Address').fill('123 Test Lane');

  // Select State and City (uses dynamic dropdowns)
  await page.locator('#state').click();
  await page.locator('#react-select-3-option-0').click(); // NCR
  await page.locator('#city').click();
  await page.locator('#react-select-4-option-0').click(); // Delhi

  // Submit
  await page.locator('#submit').click();

})
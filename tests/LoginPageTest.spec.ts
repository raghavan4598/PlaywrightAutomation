import {test, expect} from '@playwright/test';

import {LoginPage} from '../pages/LoginPage';

const url = "https://rahulshettyacademy.com/client"
const email = "raghavmaddali.1357@gmail.com"
const password = "1357@Raghav"
const Incorrectpassword="1357@raghav"


test("Valid Login Test", async ({page}) => {

const loginPage=new LoginPage(page);
await loginPage.launchURL(url);
await loginPage.validLogin(email, password);
await expect(loginPage.homePageIdentifier).toBeVisible();



})
test("InValid Login Test", async ({page}) => {

const loginPage=new LoginPage(page);
await loginPage.launchURL(url);
await loginPage.validLogin(email, Incorrectpassword);
await expect(loginPage.errorMessage).toContainText("Incorrect email or password.");




})

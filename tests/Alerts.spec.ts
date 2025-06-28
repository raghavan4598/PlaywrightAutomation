import{test, expect} from '@playwright/test';

test('alerts', async({page})=>{

    await page.goto("https://demo.automationtesting.in/Alerts.html");

    page.on('dialog', function(testDialog){
        
   testDialog.accept();
        

    })
await page.locator("button[class='btn btn-danger']").click();

}

)
// test('alerts', async({page})=>{
//     await page.goto("https://demo.automationtesting.in/Alerts.html");
//     await page.getByText("Alert with OK & Cancel ").click();
//   const text="raghavendar"
// page.on('dialog', function(test){

// test.dismiss();

// }

// )
//   await page.locator("button[class='btn btn-primary']").click();
//   await page.waitForTimeout(5000);
// await expect(page.locator("p#demo")).toContainText("You Pressed Cancel")



// }
// )

// test('alerts', async({page})=>{
//      await page.goto("https://demo.automationtesting.in/Alerts.html");
//      await page.locator("li[class='active'] a[class='analystic']").click();

// await page.waitForTimeout(3000);
// page.on('dialogs', function(alertwithtextbox){

// alertwithtextbox.accept(text);
// }
// )

// await page.locator("button[class='btn btn-info']").click();
// })
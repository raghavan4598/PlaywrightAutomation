import{test, expect} from '@playwright/test';

test('fileupload', async({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    await page.locator("#filesToUpload").setInputFiles();
    
})
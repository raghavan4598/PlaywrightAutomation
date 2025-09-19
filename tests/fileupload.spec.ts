import{test, expect} from '@playwright/test';

test('fileupload', async({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
 //to upload the file.
    await page.locator("#filesToUpload").setInputFiles(['/Users/mraghavendar/Downloads/Manual Testing.pdf']);
    // to upload multiple files
    await page.locator("#filesToUpload").setInputFiles(['/Users/mraghavendar/Downloads/Manual Testing.pdf', '/Users/mraghavendar/Downloads/AnotherFile.pdf' ]);
    
    
})
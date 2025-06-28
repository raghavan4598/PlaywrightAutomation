# Test info

- Name: frames
- Location: /Users/mraghavendar/Downloads/playwrightwithtypescript/tests/frames.spec.ts:3:5

# Error details

```
Error: locator.fill: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('iFrame Demo').contentFrame().locator('input[type=\'text\']').last()

    at /Users/mraghavendar/Downloads/playwrightwithtypescript/tests/frames.spec.ts:13:51
```

# Page snapshot

```yaml
- banner:
  - link "image not displaying":
    - /url: http://www.automationtesting.in
    - img "image not displaying"
  - heading "Automation Demo Site" [level=1]
  - navigation:
    - list:
      - listitem:
        - link "Home":
          - /url: Index.html
      - listitem:
        - link "Register":
          - /url: Register.html
      - listitem:
        - link "WebTable":
          - /url: WebTable.html
      - listitem:
        - link "SwitchTo":
          - /url: SwitchTo.html
        - text: 
      - listitem:
        - link "Widgets":
          - /url: Widgets.html
        - text: 
      - listitem:
        - link "Interactions":
          - /url: Interactions.html
        - text: 
      - listitem:
        - link "Video":
          - /url: SwitchTo.html
        - text: 
      - listitem:
        - link "WYSIWYG":
          - /url: WYSIWYG.html
        - text: 
      - listitem:
        - link "More":
          - /url: "#"
        - text: 
      - listitem:
        - link "Practice Site":
          - /url: http://practice.automationtesting.in/
- list:
  - listitem:
    - link "Single Iframe":
      - /url: "#Single"
  - listitem:
    - link "Iframe with in an Iframe":
      - /url: "#Multiple"
- iframe: <p>Your browser does not support iframes.</p>
- insertion:
  - iframe
- insertion:
  - iframe
- insertion:
  - iframe
- insertion:
  - iframe
- text: "\"@ 2016\""
- link "Automation Testing":
  - /url: "#"
- text: "\"All Rights Reserved.\""
- link "":
  - /url: https://www.facebook.com/automationtesting2016/
- link "":
  - /url: https://twitter.com/krishnasakinala
- link "":
  - /url: https://www.linkedin.com/nhome/?trk=hb_signin
- link "":
  - /url: https://plus.google.com/105286300926085335367
- link "":
  - /url: https://www.youtube.com/channel/UCmQRa3pWM9zsB474URz8ESg
```

# Test source

```ts
   1 | import{test, expect} from '@playwright/test';
   2 |
   3 | test('frames', async({page})=>{
   4 |
   5 |     await page.goto("https://demo.automationtesting.in/Frames.html")
   6 |     // const frame_handle= await page.frameLocator("#singleframe")
   7 |     // await frame_handle.locator("input[type='text']").first().fill("Hello World")
   8 |     // await expect(frame_handle.locator("input[type='text']").first()).toHaveValue("Hello World")
   9 |
  10 | await page.locator("li[class='active'] a[class='analystic']").click();
  11 | const frame1=await page.frameLocator("Nested iFrames");
  12 | const frame2=await page.frameLocator("iFrame Demo")
> 13 | await frame2.locator("input[type='text']").last().fill("Hello Raghavan")
     |                                                   ^ Error: locator.fill: Test timeout of 60000ms exceeded.
  14 | await page.waitForTimeout(5000);
  15 | })
  16 |
```
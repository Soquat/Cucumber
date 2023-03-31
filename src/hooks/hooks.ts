import { BeforeAll, AfterAll, Before, After, BeforeStep, AfterStep, Status } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext } from "@playwright/test";
import { pageFixture } from "./pageFixtures";

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    browser = await chromium.launch({ headless: true });
});

Before(async function () {
    context = await browser.newContext();
    const page = await context.newPage();
    pageFixture.page = page;
});

AfterStep(async function ({ pickle, result }) {
    console.log(result?.status);
    console.log(result?.status == Status.UNDEFINED)
    if (result?.status == Status.UNDEFINED || Status.FAILED) {
        const img = await pageFixture.page.screenshot({ path: `./screenshots/${pickle.name}.png`, type: "png" });
        await this.attach(img, "image/png");
    }
    await pageFixture.page.close();
    await context.close();
});


AfterAll(async function () {
    await browser.close();
})
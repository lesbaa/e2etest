import { expect, test } from "@playwright/test";

import loadFixtureAndGetMapHandle from "./helpers/loadFixtureAndGetMapHandle";

test("does stuff with the page", async ({ page }) => {
   loadFixtureAndGetMapHandle({
    fixture: "basic",
    page,
   });

   await expect(page.locator('h1')).toHaveText('Hello, world!');
   await expect(page).toHaveScreenshot('basic.png');
});


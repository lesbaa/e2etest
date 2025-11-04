import { expect, test } from "@playwright/test";

import loadFixtureAndGetMapHandle from "./helpers/loadFixtureAndGetMapHandle";

test("does stuff with the page", async ({ page }) => {
   await loadFixtureAndGetMapHandle({
    fixture: "basic",
    page,
   });

   await expect(page).toHaveScreenshot('basic.png');
});


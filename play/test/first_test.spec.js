const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
});


test('test oops', async ({ page }) => {
    await page.goto('https://myplanet.green/')
    await page.click("#link_text-93-17")
  });
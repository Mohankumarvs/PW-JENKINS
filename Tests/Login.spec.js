const { test, expect } = require('@playwright/test');

test('Sauce Demo Login Test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Perform login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Verify successful login
  await expect(page).toHaveURL('/inventory.html');

  // Take a screenshot
  await page.screenshot({ path: 'screenshots/login_success.png' });
});

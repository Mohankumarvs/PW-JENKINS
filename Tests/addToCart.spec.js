const { chromium } = require('playwright');

async function addToCart() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to the website
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Add item to cart
  await page.click('text=Add to cart');

  // Optionally, add more items to the cart

  // View the cart
  await page.click('.shopping_cart_link');

  // Optionally, perform additional actions on the cart

  // Close the browser
  await browser.close();
}

// Run the function
addToCart().catch(console.error);

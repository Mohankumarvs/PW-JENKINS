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

  // Add items to cart
  await page.click('text=Add to cart');

  // Optionally, add more items to the cart

  // Checkout
  await page.click('.shopping_cart_link');
  await page.click('#checkout');

  // Fill checkout information
  await page.fill('#first-name', 'John');
  await page.fill('#last-name', 'Doe');
  await page.fill('#postal-code', '12345');
  await page.click('#continue');

  // Complete the checkout process
  // You can customize this based on the website's flow and requirements

  // Close the browser
  await browser.close();
}

// Run the function
addToCart().catch(console.error);

import { expect, test } from '@playwright/test';
const baseUrl = 'https://angular.realworld.io/';


test.beforeEach( async ({ page }) => {
    await page.route('')
    
    
    await page.goto(baseUrl);
});


test('has title', async ({ page }) => {
    await expect(page.locator('.navbar-brand')).toHaveText('conduit');
});
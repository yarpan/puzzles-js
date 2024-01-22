import { expect, test } from '@playwright/test';
const baseUrl = 'https://angular.realworld.io/';


test.beforeEach( async ({ page }) => {
    await page.goto(baseUrl);
});


test('has title', async ({ page }) => {
    await expect(page.locator('.navbar-brand')).toHaveText('conduit');
});

test('delete user post', async ({ request }) => {
    const response = await request.delete('/posts/1')
    expect(response.ok()).toBeTruthy()
    expect(response.status()).toBe(200)
    expect(await response.text()).toContain("{}")
})
import { test, expect } from '@playwright/test';

test('should navigate to a cam page and see the video player', async ({ page }) => {
  // Start from the home page
  await page.goto('/');

  // Find the first webcam link and click it
  await page.locator('a[href^="/cam/"]').first().click();

  // The new URL should be a cam page
  await expect(page).toHaveURL(/.*\/cam\/.*/);

  // The video player should be visible
  await expect(page.locator('video')).toBeVisible();
});

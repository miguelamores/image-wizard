import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("navigation sidebar links should have 6 items", async ({ page }) => {
    const nav = page.getByTestId("nav-links").getByRole("listitem");
    await expect(nav).toHaveCount(6);
  });

  test("user sidebar links should have 3 items", async ({ page }) => {
    const nav = page.getByTestId("user-links").getByRole("listitem");
    await expect(nav).toHaveCount(3);
  });
});

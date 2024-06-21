import { test, expect } from "@playwright/test";

test.describe("Login page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/sign-in");
  });

  test("navigate to login", async ({ page }) => {
    await expect(page).toHaveURL("http://localhost:3000/sign-in");
  });

  test("modal title should be visible", async ({ page }) => {
    await expect(page.getByText(/Sign in to image_wizard/)).toBeVisible();
  });

  test("user should be able to fill username input", async ({ page }) => {
    const input = page.getByRole("textbox", { name: /username/ });
    await input.fill("miguel");
    await expect(input).toHaveValue("miguel");
  });
});

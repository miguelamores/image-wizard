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

  test.skip("user should be able to sign-in with google", async ({ page }) => {
    // await page.getByRole("textbox", { name: /username/ }).fill("miguelamores")
    await page.getByRole("button", { name: "Google" }).click();
    // await page.waitForURL(/^https:\/\/accounts\.google\.com\/v3$/);
    await page
      .getByRole("textbox", { name: /Email or phone/ })
      .fill("migueamores@gmail.com");
    await page.getByRole("button", { name: "Next" }).click();
    // await page.waitForNavigation();
    // await page.waitForSelector('input[type="password"]', { state: "visible" });
    await page.getByLabel(/Enter your password/).fill("miguel1991.");
    // await page
    //   .getByRole("textbox", { name: /Enter your password/ })
    //   .fill("miguel1991.");
    // await page.fill('input[type="password"]', "miguel1991");
    await page.getByRole("button", { name: "Next" }).click();
  });
});

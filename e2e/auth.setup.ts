import { test as setup, expect } from "@playwright/test";

const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ page }) => {
  await page.goto("/sign-in");
  await page
    .getByLabel(/Email address or username/)
    .fill(process.env.LOGIN_USERNAME!);
  await page.getByRole("button", { name: "Continue" }).click();

  await page.getByLabel(/Password/).fill(process.env.LOGIN_PASS!);
  await page.getByRole("button", { name: "Continue" }).click();

  await page.waitForURL("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Unleash Your Creative Vision with Image Wizard"
  );

  await page.context().storageState({ path: authFile });
});

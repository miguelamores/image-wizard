import { test, expect } from "@playwright/test";
import { link } from "fs";

test.describe("Naigation sidebar", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test.skip("click Image restore should redirect", async ({ page }) => {
    await page
      .getByRole("complementary")
      .filter({ hasText: "Image Restore" })
      .getByRole("link", { name: "Image Restore" })
      .click({ force: true });
    // await page.getByRole("link", { name: "Image Restore" }).click();
    await page.waitForURL("/transformations/add/restore");
    await expect(page).toHaveURL("/transformations/add/restore");
    // await expect(
    //   page.getByRole("heading", { name: "Restore Image" })
    // ).toBeVisible();
  });

  test.skip("click Generative Fill should redirect", async ({ page }) => {
    await page
      .getByTestId("sidebar-link")
      .filter({ hasText: "Generative Fill" })
      .click();
    await page.waitForURL("http://127.0.0.1:3000/transformations/add/fill");
    await expect(page).toHaveURL("/transformations/add/fill");
  });
});

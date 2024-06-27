import { test, expect } from "@playwright/test";

test.describe("Restore image screen", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/transformations/add/restore");
  });

  test("should navigate to specific url", async ({ page }) => {
    await expect(page).toHaveURL("/transformations/add/restore");
  });

  test("should have title and input", async ({ page }) => {
    const title = page.getByRole("heading", { name: "Restore Image" });
    const imageInput = page.getByRole("textbox", {
      name: "Image Title",
    });
    await expect(title).toBeVisible();
    await expect(imageInput).toBeVisible();
  });

  test.skip("Apply button should be disabled on first load", async ({
    page,
  }) => {
    expect(
      page.getByRole("button", { name: "Apply Transformation" })
    ).toBeDisabled();
  });
});

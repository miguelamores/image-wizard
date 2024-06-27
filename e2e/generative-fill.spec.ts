import { test, expect } from "@playwright/test";

test.describe("Generative fill page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/transformations/add/fill");
  });

  test("should render title", async ({ page }) => {
    const title = page.getByRole("heading", { level: 2 });
    expect(title).toHaveText("Generative Fill");
  });

  test("user should be able to fill title", async ({ page }) => {
    const titleInput = page.getByRole("textbox", { name: "Image Title" });
    await titleInput.fill("Test title");
    await expect(titleInput).toHaveValue("Test title");
  });

  test("user should be able to select Aspect Ratio", async ({ page }) => {
    await page.getByRole("combobox").click();
    await page.getByRole("option", { name: "Square (1:1)" }).click();
    await expect(page.getByRole("combobox")).toContainText("Square (1:1)");
  });
});

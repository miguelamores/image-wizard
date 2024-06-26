import type { FullConfig } from "@playwright/test";

async function globalSetup(config: FullConfig) {
  process.env.LOGIN_USERNAME = "user";
  process.env.LOGIN_PASS = "xxx";
}

export default globalSetup;

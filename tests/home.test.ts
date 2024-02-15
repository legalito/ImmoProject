// TEST FOR HOME PAGE

import { test, describe, expect } from "vitest";
import { setup, fetch, createPage } from "@nuxt/test-utils/e2e";

describe("Home page test", async () => {
     await setup({
          server: true,
          browser: true,
          browserOptions: {
               type: "chromium",
          },
     });

     test('test', async () => {
          // Assuming setup() correctly starts the Nuxt server and exposes the URL,
          // you can fetch the homepage and check the status code here.
          const response = await fetch("/", { method: "HEAD" }); // Use HEAD to get headers only
          expect(response.status).toBe(200); // Adjusted to check the response status
     });

     test('test button', async () => {
        const page = await createPage('/')
        expect( page.locator("#button").isVisible)  
     })
});

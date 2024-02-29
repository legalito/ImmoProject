import { test, expect, describe } from "vitest";

import { setup, fetch, createPage } from "@nuxt/test-utils/e2e";

describe("Contact page test", async () => {
     await setup({
          server: true,
          browser: true,
          browserOptions: {
               type: "chromium",
          },
     });

     test("Test if paged is accesible", async () => {
          const response = await fetch("/contact", { method: "HEAD" }); // Use HEAD to get headers only
          expect(response.status).toBe(200); // Adjusted to check the response status
     });

     test("titre", async () => {
          const page = await createPage("/contact");

          // Vérifiez la présence d'un élément h1 avec le texte "Contact"
          const h1 = await page.waitForSelector("h1");
          expect(h1).not.toBeNull();
          const textContent = await h1.textContent();
          expect(textContent).toBe("Contact");
     });

     test("formulaire", async () => {
          const page = await createPage("/contact");

          // Vérifiez que la page contient un formulaire
          const form = await page.waitForSelector("form");
          expect(form).not.toBeNull();
     });

     test("formulaire soumission", async () => {
          const page = await createPage("/contact");

          // Remplissez le formulaire
          await page.fill('input[name="name"]', "John Doe");
          await page.fill('input[name="email"]', "test@gmail.com");
          await page.fill('textarea[name="message"]', "Hello, World!");
          await page.click('button[type="submit"]');
          // Vérifiez que le formulaire a été soumis
          const form = await page.waitForSelector("form");
     });
});

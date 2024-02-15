import { test, expect } from '@playwright/test';

test('Vérifier la page contact', async ({ page }) => {
  // Accédez à la page contact
  const response = await page.goto('localhost:3000/contact');

  // Vérifiez que la page renvoie un code de statut 200
  if(response != null)
    expect(response.ok()).toBeTruthy();
});

test('titre' , async ({ page }) => {
      // Go to the starting url before each test.
      await page.goto('localhost:3000/contact');
   // Vérifiez la présence d'un élément h1 avec le texte "Contact"
   const h1 = await page.waitForSelector('h1');
   expect(h1).not.toBeNull();
   const textContent = await h1.textContent();
   expect(textContent).toBe('Contact');
});

test('formulaire' , async ({ page }) => {
  await page.goto('localhost:3000/contact');

  // Vérifiez que la page contient un formulaire
  const form = await page.waitForSelector('form');
  expect(form).not.toBeNull();
});

test('formulaire soumission' , async ({ page }) => {
  await page.goto('localhost:3000/contact');

  // Remplissez le formulaire
  await page.fill('input[name="name"]', 'John Doe');
  await page.fill('input[name="email"]', 'test@gmail.com');
  await page.fill('textarea[name="message"]', 'Hello, World!');
  await page.click('button[type="submit"]');
  // Vérifiez que le formulaire a été soumis
  const form = await page.waitForSelector('form');
});


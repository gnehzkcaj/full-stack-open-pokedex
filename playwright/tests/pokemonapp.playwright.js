// @ts-check
const { test, describe, expect } = require('@playwright/test')
require('dotenv').config()

// @ts-ignore
describe('Pokedex', () => {
  test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/')

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/)
  })

  test('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/')

    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click()

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible()
  })

  test('front page can be opened', async ({ page }) => {
    const baseUrl = process.env.BASE_URL !== undefined ? process.env.BASE_URL : 'https://bookish-xylophone-jprr7rg99vq3ppr6-8080.app.github.dev/'
    await page.goto(baseUrl)
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
})
// @ts-nocheck
const { test, expect } = require('@playwright/test')
import describe from '@playwright/test'
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
    const baseUrl = process.env.BASE_URL
    await page.goto(baseUrl)
    await expect(page.getByText('ivysaur')).toBeVisible({ timeout: 10000 })
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible({ timeout: 30000 })
  })
})



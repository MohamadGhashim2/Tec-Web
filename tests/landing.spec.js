import { expect, test } from '@playwright/test'

const viewports = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1280, height: 900 },
]

for (const viewport of viewports) {
  test(`landing page works at ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height })
    await page.goto('/')

    await expect(page).toHaveTitle(/TEC/)
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()

    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth + 1,
    )
    expect(hasHorizontalOverflow).toBeFalsy()

    const navToggle = page.getByTestId('nav-toggle')
    const isMobileNav = await navToggle.isVisible()

    if (isMobileNav) {
      await navToggle.click()
      await expect(page.getByRole('link', { name: /Hizmetler|الخدمات/ }).first()).toBeVisible()
    } else {
      await expect(page.getByRole('link', { name: /Hizmetler|الخدمات/ }).first()).toBeVisible()
    }

    await page.getByRole('button', { name: /العربية|AR/ }).click()
    await expect(page.locator('html')).toHaveAttribute('lang', 'ar')
    await expect(page.getByTestId('hero-rotating-title')).toContainText(
      /أجهزة الفحص|التعليم والتدريب|مركز صيانة/,
    )
    await page.locator('#specialties').scrollIntoViewIfNeeded()
    await expect(
      page
        .getByRole('heading', {
          name: /أجهزة الفحص الشامل AutoXpertiz|التعليم والتدريب المهني على تكنولوجيا السيارات|مركز صيانة السيارات المتكامل/,
        })
        .first(),
    ).toBeVisible()

    if (isMobileNav) {
      await navToggle.click()
    }

    await page.getByRole('button', { name: /Türkçe|TR/ }).click()
    await expect(page.locator('html')).toHaveAttribute('lang', 'tr')
    await expect(page.getByTestId('hero-call-cta')).toBeVisible()
    await expect(page.getByTestId('hero-call-cta')).toHaveAttribute('href', 'tel:+905010674844')
    await expect(page.getByTestId('hero-rotating-title')).toContainText(
      /AutoXpertiz|Otomotiv teknolojileri|Entegre araç bakım/,
    )
    await page.locator('#specialties').scrollIntoViewIfNeeded()
    await expect(
      page
        .getByRole('heading', {
          name: /AutoXpertiz destekli kapsamlı araç kontrol sistemleri|Otomotiv teknolojileri için eğitim ve mesleki gelişim|Entegre araç bakım, onarım ve servis merkezi/,
        })
        .first(),
    ).toBeVisible()

    await expect(page.getByTestId('hero-whatsapp-cta')).toBeVisible()
    await expect(page.getByTestId('hero-whatsapp-cta')).toHaveAttribute(
      'href',
      /wa\.me\/905010674844/,
    )

    const floatingButton = page.getByTestId('floating-whatsapp')
    await expect(floatingButton).toBeVisible()

    const floatingBox = await floatingButton.boundingBox()
    expect(floatingBox).not.toBeNull()
    expect(floatingBox.y).toBeGreaterThan(viewport.height * 0.55)
  })
}

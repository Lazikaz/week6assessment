
import { Builder, Capabilities, By } from "selenium-webdriver"
import { skipPartiallyEmittedExpressions, textChangeRangeIsUnchanged } from "typescript"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test("Clicking draw displays the choices div", async ()=> {
    const draw = await driver.findElement(By.id("draw"))
    draw.click()
    const choices = await driver.findElement(By.id("choices"))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
})

test("Clicking on add to duo adds a bot to duo", async () => {
    const draw = await driver.findElement(By.id("draw"))
    draw.click()
    const choices = await driver.findElement(By.id("choices"))
    const button = await driver.findElement(By.xpath(`//*[@id="choices"]/div[1]/button`))
    button.click()
    const playerDuo = await driver.findElement(By.id("player-duo"))
    const displayed = await playerDuo.isDisplayed()
    expect(displayed).toBe(true)
})
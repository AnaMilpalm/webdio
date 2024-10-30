import { browser, expect } from '@wdio/globals'

describe('Webdriverio main page', () => {
    xit('should have correct title', async () => {
        await browser.url(`https://webdriver.io/`);

        const title = await browser.getTitle()
        console.log(title);

        await expect(browser).toHaveTitle('WebdriverIO . Next-gen browser and mobile automation test framework for Node.js  | WebdriverIO')
    });

    xit("should show setValue command", async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`);

        let input = await $("#username")
        await input.setValue("world")
        await input.setValue("hello")
        await browser.pause(2000)

        console.log(await input.getValue())
        await expect(input).toHaveValue("hello")
    });

   xit("shoud show addValue command", async () => {
    await browser.url(`https://the-internet.herokuapp.com/login`);

    let input = await $("#username")
    await input.addValue("hello")
    await browser.pause(2000)

    await input.addValue(123)
    await browser.pause(2000)

    await expect(input).toHaveValue("hello123")
});

xit("should show getAttribute command", async () => {
    await browser.url(`https://dou.ua/search`);

    let inputSearch = await $('#gsc-i-id1')
    let attr = await inputSearch.getAttribute("aria-label")
    console.log("Placeholder attribute is: " + attr)

    await inputSearch.setValue("Cat")
    attr = await inputSearch.getValue()
    await browser.pause(2000)
    console.log("Value attribute is: " + attr)
});
xit("should show click command", async () => {
    await browser.url(`https://the-internet.herokuapp.com/login`);

    let loginButton = await $('.radius')
    await browser.pause(2000)
    await loginButton.click()
    await browser.pause(4000)

    let inputUsername = await $("#username")
    await inputUsername.addValue("tomsmith")
    await browser.pause(2000)

    let inputPassword = await $("#password")
    await inputPassword.addValue("SuperSecretPassword!")
    await browser.pause(2000)

    await loginButton.click()
    await browser.pause(4000)
});

xit("should show getLocation command", async () => {
    await browser.url(`https://dou.ua`);

    let inputSearch = await $('#txtGlobalSearch')
    let location = await inputSearch.getLocation()
    console.log("Location is: " + location)

    let xLocation = await inputSearch.getLocation("x")
    console.log("Location by x is: " + xLocation) 
});

xit("should show getText command", async () => {
 await browser.url(`https://webdriver.io`)

 let subtitle = await $('.hero__subtitle')
 console.log("Subtitle text is: "+ await subtitle.getText())
})

xit("should show url command", async () => {
    await browser.url(`https://webdriver.io`);

   const blogButton = await $('.button[href="/docs/gettingstarted"]')
   let clickable = await blogButton.isClickable()
   console.log("Is clickable: " + clickable) //outputs true
});

xit("should show if an element is displayed", async () => {
    await browser.url(`https://webdriver.io`);

    const blogButton = await $('.button[href="/docs/gettingstarted"]')
    let displayed = await blogButton.isDisplayed()
    console.log("🚀 ~ it ~ displayed:" + displayed)
});

xit("should show if an element is visible", async () => {
    await browser.url(`https://webdriver.io`)

    const blogButton = await $('.burron[href="/docs/gettingstarted"]')
    let displayedInViewport = await blogButton.isDisplayed()
    console.log("🚀 ~ it ~ displayedInViewport: " + displayedInViewport)
});

xit("should show if an element is enabled", async () => {
    await browser.url(`https://webdriver.io`);

    const gettingstartedButton = await $('button[href="/docs/gettingstarted"]')

    let isEnabled = await gettingstartedButton.isEnabled()
    console.log("Is get started button enabled: " + isEnabled)  
});

xit("should show if an element is enabled", async () => {
    await browser.url(`https://webdriver.io`);

    const gettingstartedButton = await $('.button[href="/docs/gettingstarted"]')

    let isFocused = await gettingstartedButton.isFocused()
    console.log("Is get started button focused before click: " + isFocused)  
    await browser.pause(2000)
    await getStartedButton.click()
    console.log("Is get started button focused after click: " + isFocused)
    await browser.pause(2000)
});

xit("should show movement to element action", async () => {
    await browser.url(`https://webdriver.io`);

    const getStartedLink = await $('.footer__link-item[href="/docs/gettingstarted"]')

    await browser.pause(2000)
    await getStartedLink.scrollIntoView()
   await browser.pause(2000)
});

xit("should show waitUntil coomand", async () => {
    await browser.url(`https://webdriver.io/`)

    await browser.waitUntil(async () => {
        return $('.button[href="/docs/gettingstarted"]').isDisplayed();
    }, 5000, "Button is not displayed")
});

xit("should get html for certain elements", async () => {
    await browser.url(`https://webdriver.io`);

    const outerHTML = await $('.dropdown__menu').getHTML()
    console.log("outerHTML :" + outerHTML)

    const innerHTML = await $('.dropdown__menu').getHTML(false)
    console.log("innerHTML :" + innerHTML)
});

it("should show save screenshot command", async () => {
    await browser.url(`https://webdriver.io`);

    const getStartedLink = await $('.footer__link-item[href="/docs/gettingstarted"]')
    await browser.pause(2000)
    await getStartedLink.saveScreenshot('linkScreenshot.png')
});
it("should switch to another window", async () => {
    await browser.url(`https://webdriver.io`);

    await browser.newWindow(`https://webdriver.io`);
    await browser.pause(2000)

    await browser.switchWindow(`https://webdriver.io`);
    await browser.pause(2000)
});
});


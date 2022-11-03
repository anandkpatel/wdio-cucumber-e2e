import { Given, When, Then } from "@wdio/cucumber-framework";
let chai = require("chai")
Given(/^Google page is open$/, async function(){
    await browser.url("https://www.google.com")
    await browser.pause(10000)
})

When(/^Search with (.*)$/, async function(searchItem){
    console.log(`>> search item --> ${searchItem}`);
    let element = await $("[name = q]")
    await element.setValue(searchItem)
    await browser.keys("Enter")
})

Then(/^Click on the first search result$/, async function(){
    let ele = await $(`<h3>`)
    await ele.click()
})

Then(/^URL should match (.*)$/, async function(ExpectedRes){
let url = await browser.getUrl()
await chai.expect(url).to.equal(ExpectedRes)
})
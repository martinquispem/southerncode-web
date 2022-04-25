

import { When } from '@wdio/cucumber-framework';
import pages from '../pageobjects/pages'
import languages from '../testData/languages'

When(/^I go to the themePage$/, () => {
    pages['homePage'].goToThemes()
    pages['themePage'].btnSave.waitForDisplayed()
});

When(/^I go to the settingsPage$/, () => {
    pages['homePage'].goToSettings()
    pages['settingsPage'].selectBoxLanguage.waitForDisplayed()
});

When(/^I search (.*)$/, (value) => {
    pages['homePage'].search(value)
    pages['resultPage'].results.waitForDisplayed()
});

When(/^I change the theme to Terminal$/, () => {
    pages['themePage'].changeThemeToTerminal()
});

When(/^I change the language to (.*)$/, (language) => {
    const ddb = pages['settingsPage'].selectBoxLanguage
    ddb.selectByAttribute('value', languages[language]);
});
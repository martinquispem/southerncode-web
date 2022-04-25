

import { Then } from '@wdio/cucumber-framework';
import pages from '../pageobjects/pages'
import languages from '../testData/languages'

Then(/^I should see a displayed picture of Michael Jordan$/, () => {
    expect(pages['resultPage'].imageResult.getAttribute('href')).toContain('Michael_Jordan')
    expect(pages['resultPage'].imageResultTitle.getText()).toBe('Michael Jordan')
});

Then(/^I should see at least one Wikipedia page result$/, () => {
    expect(pages['resultPage'].wikipediaResult).toHaveAttribute('data-hostname', 'en.wikipedia.org')
});

Then(/^I should see at least one Nba page result$/, () => {
    expect(pages['resultPage'].nbaResult).toHaveAttribute('data-hostname', 'www.nba.com')
});

Then(/^I verify the background color has changed$/, () => {
    const colorTitle = pages['resultPage'].resultTitles.getCSSProperty('color')
    expect(colorTitle.parsed.hex).toBe('#50f148')
});

Then(/^I verify the language label has been changed by (.*)$/, (language) => {
    const ddb = pages['settingsPage'].selectBoxLanguage
    expect(ddb.getValue()).toBe(languages[language])
});
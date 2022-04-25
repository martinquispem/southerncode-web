

import { Given } from '@wdio/cucumber-framework';
import pages from '../pageobjects/pages';

Given(/^I am on the (\w+)$/, (page) => {
    pages[page].open()    
    pages[page].inputSearch.waitForDisplayed()
});

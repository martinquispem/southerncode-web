

import Page from './page';

class HomePage extends Page {

    get inputSearch () {
        return $('#search_form_input_homepage');
    }
    
    get btnSearch () {
        return $('#search_button_homepage');
    }

    get btnMenu () {
        return $('a.header__button--menu.js-side-menu-open');
    }

    get optionThemes () {
        return $('ul.nav-menu--theme').$$('li')[1];
    }

    get optionSettings () {
        return $('ul.nav-menu--theme').$$('li')[2];
    }

    goToThemes() {
        this.btnMenu.click()
        this.optionThemes.waitForDisplayed()
        this.optionThemes.click()
    }

    goToSettings() {
        this.btnMenu.click()
        this.optionSettings.waitForDisplayed()
        this.optionSettings.click()
    }

    search (value) {
        this.inputSearch.setValue(value);
        this.btnSearch.click();
    }

    open () {
        return super.open('/');
    }
}

export default new HomePage();



import Page from './page';

class SettingsPage extends Page {

    get selectBoxLanguage () {
        return $('#setting_kad');
    }

    changeLanguage () {
        //this.selectBoxLanguage.selectByAttribute('value', 'someValue3');
        this.selectBoxLanguage.getValue()
    }

    open () {
        return super.open('/settings#theme');
    }
}

export default new SettingsPage();

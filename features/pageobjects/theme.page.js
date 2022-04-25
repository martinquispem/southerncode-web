

import Page from './page';

class ThemePage extends Page {

    get buttonTerminal () {
        return $('[data-theme-id="t"]');
    }

    get btnSave () {
        return $('a.btn.btn--primary.js-set-exit');
    }

    changeThemeToTerminal () {
        this.buttonTerminal.click()
        this.btnSave.click();
    }

    open () {
        return super.open('/settings#theme');
    }
}

export default new ThemePage();

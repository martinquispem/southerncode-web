

import Page from './page';

class ResultPage extends Page {

    get results () {
        return $('#links');
    }

    get wikipediaResult () {
        return $('[data-domain="en.wikipedia.org"]');
    }

    get nbaResult () {
        return $('[data-domain="www.nba.com"]');
    }

    get resultTitles () {
        return $('a.result__a.js-result-title-link');
    }

    get imageResultTitle () {
        return $('div.module__title.js-about-item-title');
    }

    get imageResult () {
        return $('a.module__image');
    }
}

export default new ResultPage();

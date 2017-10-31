import Client from "../Client.js";

let changeListeners = [];
let initialized = false;
let heroUnit = [];

let notifyChange = () => {
    changeListeners.forEach((listener) => {
        listener();
    });
}

let fetchFacts = () => {
    if (initialized) {
        return;
    }

    const cloudLanguage =localStorage.getItem('cloudLanguage') || 'en-US';
   
    Client.items()
        .type('hero_unit')
        .languageParameter(cloudLanguage)
        .get()
        .subscribe(response => {
            heroUnit = response.items;
            notifyChange();
            initialized = true;
        });
}

class HeroStore {

    // Actions

    provideHeroUnit() {
        fetchFacts();
    }

    // Methods

    getHeroUnit() {
        return heroUnit;
    }

    // Listeners

    addChangeListener(listener) {
        changeListeners.push(listener);
    }

    removeChangeListener(listener) {
        changeListeners = changeListeners.filter((element) => {
            return element !== listener;
        });
    }

}

export default new HeroStore();
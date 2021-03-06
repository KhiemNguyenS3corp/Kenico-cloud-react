import Client from "../Client.js";

let changeListeners = [];
let initialized = false;
let navItems = [];

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
        .type('navigation_items')
        .languageParameter(cloudLanguage)
        .get()
        .subscribe(response => {
            navItems = response.items;
            notifyChange();
            initialized = true;
        });
}

class NavigationStore {

    // Actions

    provideNavigationItems() {
        fetchFacts();
    }

    // Methods

    getNavitaionItems() {
        return navItems;
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

export default new NavigationStore();
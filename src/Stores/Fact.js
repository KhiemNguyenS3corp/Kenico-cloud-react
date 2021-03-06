import Client from "../Client.js";

let changeListeners = [];
let initialized = false;
let facts = [];

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
  Client.item('about_us')
    .languageParameter(cloudLanguage)
    .get()
    .subscribe(response => {
      facts = response.item.facts;
      notifyChange(); 
      initialized = true;
      });  
}

class FactStore {

  // Actions

  provideFacts() {
    fetchFacts();
  }

  // Methods

  getFacts() {
    return facts;
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

export default new FactStore();
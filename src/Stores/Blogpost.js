import Client from "../Client.js";

let changeListeners = [];
let initialized = false;
let blogposts = [];

let notifyChange = () => {
    changeListeners.forEach((listener) => {
        listener();
    });
}

let fetchBlogposts = () => {
    
    if (initialized) {
        return;
    }

    /*Client.items({
        "system.type": "blog_post",
        "elements" : "title,date,header_image,perex,url_slug",
        "order": "elements.date[desc]",
        "limit": "5"
    }).then((response) => {
        blogposts = response.items;
        notifyChange();
    });*/
    

    

    
    initialized = true;
}

class BlogPostStore {
    // Actions

    provideBlogposts() {
        fetchBlogposts();
    }

    // Methods
    getBlogposts(count) {
        Client.items()
        .type('blog_post')
        .get()
        .subscribe(response => {
            blogposts = response.items;
            debugger
           notifyChange();
           return blogposts.slice(0, count);
        });
     
       
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

export default new BlogPostStore();
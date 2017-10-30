import {  ContentItem } from 'kentico-cloud-delivery-typescript-sdk';
import {  resolveContentLink } from '../Utilities/ContentLinks';

export class NavigationItems extends ContentItem {
    constructor(){
        super({
            propertyResolver: ((fieldName) => {
                
                if (fieldName === 'title'){
                    return 'title';
                }

                if (fieldName === 'content_item'){
                    return 'contentItem';
                }

                if (fieldName === 'redirect_to_item'){
                    return 'redirectToItem';
                }

                if (fieldName === 'redirect_to_url'){
                    return 'redirectToUrl';
                }

                if (fieldName === 'child_navigation_items'){
                    return 'childNavigationItems';
                }

                if (fieldName === 'url_slug'){
                    return 'urlSlug';
                }

            }),
            linkResolver: (link) => resolveContentLink(link)
        })    
    }

  
    
}
import {  ContentItem } from 'kentico-cloud-delivery-typescript-sdk';
import {  resolveContentLink } from '../Utilities/ContentLinks';

export class BlogPost extends ContentItem {
    constructor(){
        super({
            propertyResolver: ((fieldName) => {                
                if (fieldName === 'url_pattern'){
                    return 'urlPattern';
                }
                if (fieldName === 'blog_post'){
                    return 'blogPost';
                }
            }),
            linkResolver: (link) => resolveContentLink(link)
        })    
    }

  
    
}
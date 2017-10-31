import {  ContentItem } from 'kentico-cloud-delivery-typescript-sdk';
import {  resolveContentLink } from '../Utilities/ContentLinks';

export class HeroUnit extends ContentItem {
    
    constructor(){
        super({
            propertyResolver: ((fieldName) => {
                
                if (fieldName === 'title'){
                    return 'title';
                }

            }),
            linkResolver: (link) => resolveContentLink(link)
        })    
    }
    
}
// kentico cloud
import { DeliveryClient, DeliveryClientConfig, TypeResolver } from 'kentico-cloud-delivery-typescript-sdk';

const projectId = '6b1aee7f-a9f7-42b4-98d7-59f979b221be';
const previewApiKey = "ew0KICAiYWxnIjogIkhTMjU2IiwNCiAgInR5cCI6ICJKV1QiDQp9.ew0KICAidWlkIjogInVzcl8wdldIc3RqZG5BV0lWb1pSUHdEdzZ0IiwNCiAgImVtYWlsIjogImtoaWVtdnN2dUBnbWFpbC5jb20iLA0KICAicHJvamVjdF9pZCI6ICI2YjFhZWU3Zi1hOWY3LTQyYjQtOThkNy01OWY5NzliMjIxYmUiLA0KICAianRpIjogIi1ScGp4M083dHhOTnpYSkwiLA0KICAidmVyIjogIjEuMC4wIiwNCiAgImdpdmVuX25hbWUiOiAibmd1eWVuIiwNCiAgImZhbWlseV9uYW1lIjogImtoaWVtIiwNCiAgImF1ZCI6ICJwcmV2aWV3LmRlbGl2ZXIua2VudGljb2Nsb3VkLmNvbSINCn0.PQFupaAUCuQH_cy2WQ--X3Sq1vzqhMIDdGQ70z_9f2s";

// models
import { AboutUs } from './Models/AboutUs'
import { Accessory } from './Models/Accessory'
import { Article } from './Models/Article'
import { Brewer } from './Models/Brewer'
import { Cafe } from './Models/Cafe'
import { Coffee } from './Models/Coffee'
import { FactAboutUs } from './Models/FactAboutUs'
import { Grinder } from './Models/Grinder'
import { HeroUnit } from './Models/HeroUnit'
import { Home } from './Models/Home'
import { HostedVideo } from './Models/HostedVideo'
import { Office } from './Models/Office'
import { Tweet } from './Models/Tweet'
import { BlogPost } from './Models/BlogPost'
import { NavigationItems } from './Models/NavigationItems'

// configure type resolvers
let typeResolvers = [
  new TypeResolver('about_us', () => new AboutUs()),
  new TypeResolver('accessory', () => new Accessory()),
  new TypeResolver('article', () => new Article()),
  new TypeResolver('brewer', () => new Brewer()),
  new TypeResolver('cafe', () => new Cafe()),
  new TypeResolver('coffee', () => new Coffee()),
  new TypeResolver('fact_about_us', () => new FactAboutUs()),
  new TypeResolver('grinder', () => new Grinder()),
  new TypeResolver('hero_unit', () => new HeroUnit()),
  new TypeResolver('home', () => new Home()),
  new TypeResolver('hosted_video', () => new HostedVideo()),
  new TypeResolver('office', () => new Office()),
  new TypeResolver('tweet', () => new Tweet()),
  new TypeResolver('blog_post', () => new BlogPost()),
  new TypeResolver('navigation_items', () => new NavigationItems())
];


function isPreview() {
  return previewApiKey !== "";
}

export default new DeliveryClient(
  new DeliveryClientConfig(projectId, typeResolvers,
    {
      enablePreviewMode: isPreview(),
      previewApiKey: previewApiKey
    }
  )
)
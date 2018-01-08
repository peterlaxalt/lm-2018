# laxaltandmciver.co

Laxalt & McIver 2017 Shop
Version 2.8.0 (LMNTS-Watch)
[www.laxaltandmciver.co](www.laxaltandmciver.co)

# To Start
[Set Up Shopify Theme Kit](https://shopify.github.io/themekit/) and follow instructions to clone your theme locally.

* If on ```master``` branch, before running `theme watch` run the below:
```
theme download
git pull
theme watch
```
This is to be sure you are synced with the latest updates. To run, follow Themekit instructions to `watch` and edit theme accordingly.

# Things to note
You cannot have two developers on the dev environment at a time. Same goes for ```master```, but we want to avoid working on ```master``` as much as possible as this is the production version. To solve this, Pete will mainly be taking care of ```master``` branch, so before starting any development make sure you ```git checkout [your branch]``` and sync with ```master``` before starting any development. ```git pull origin master```, ```theme upload```, and run your server as stated above, ```theme watch```. To deploy your changes, ```git push origin [your branch]```. Be sure to commit and push your changes as much as possible to avoid merge conflicts as we have separate working branches now.

# Built with LMNTS
Our stylesheet is based off of the lmnts.scss stylesheet made over the years that L&M websites share. It's loaded before the Shopify framework of choice (Timber/Slate/Debut) and overrides any existing SCSS.

## SCSS Structure
In Shopify's case, we are stuck to using one .scss file - barf. So here's the table of contents:

1. vendor: external stylesheets
    1. `normalize.css`

2. global variables: variables as well as classes used site-wide
    1. `base`
    2. `palette`
    3. `mixins`
    4. `typography`
    5. `animations`

3. page structure: core structure of website
    1. `rows`
    2. `columns`

4. site modules
    1. `nav`
    2. `footer`
    3. `content`
    4. `hero`

5. page specific styling
    1. `product`
    2. `home`
    3. `contact`
    4. `cart`
    5. `login`
    6. `collections`
    7. `[insert section here]`

## Prefixing & Snippets

As well, with Shopify, we utilize snippets. Please prefix your snippets accordingly. See below.

- `svg-name.liquid` These are SVG codes for icons, images, etc.
- `lmnt-name.liquid` These elements of our pages. Buttons, sections, Shogun elements, etc.
- `molecule-name.liquid` These are groups of elements working together for specific cases. For example, navigation for normal pages may be standard, but custom collection pages have a colorized/modified navigation.

This prefixing convention stems into our `styles.scss` file. Please prefix appropriately so your IDE can pull prefixes nicely for efficient coding. See below.

### Variable Prefixing
- `$fnt-name` Fonts.
- `$clr-name` Colors.
- `$base-size` Universal Sizing.

### Style Prefixing
- `.txt-classname` Text.
- `.btn-classname` Buttons.
- `.bg-classname` Background.
- `.anim-classname` Animation.
- `.col-width` Columns.
- `.row-style` Rows.
- `.lmnt-name-classname` Module focused styling. Use paired with your elements in `/snippets/`.

# In store

## lmnt-swatches

We (meaning Alisha) built out a sweet swatch system to recognize color variants and also override them in the assets. Right now we will dynamically attempt to see if there is a CSS default color with your variant name (indigo, aqua, red, blue, yellow, etc). If you want to override that - upload a .png to the /assets/ folder named as so: ```product-swatch-[YOUR VARIANT NAME].png```.

## Adding projects + case studies, or editing website via Forestry.io
1. Request access to Forestry.io from Pete (pete@laxaltandmciver.co) or login at `/backdoor/`
2. Login and edit as needed.
3. Refer below to the L&M Page Builder Reference for adding `lmnts`.

## LMNTS Page Builder in Forestry.io
1. type: text
2. type: image
3. type: vimeo
   - Video is found in your Vimeo advanced tab.
   - Be sure to supply a poster image if the video doesn't load.
4. type: ui
   - orientation: desktop
   - orientation: mobile
   - Be sure to supply a poster image if the video doesn't load.
5. type: sticky
   - This is the Ueno-style screen scroll for long images, where your description is sticky and your content scrolls.

### Page Builder LMNT Data Breakdown
```
id: ''
type: ''
orientation: ''
width: ''
text-align: ''
body: ''
headline: ''
subhead: ''
pullquote: ''
cta: ''
cta_link: ''
media_source: ''
video_poster: ''
css: ''
animation: ''
```
* `id` is your specific row ID. This is injected into the <div> of your element - users cannot see this.
* All elements will respond to `width`, `class`, and custom `css` added to your element. `class` will add classes to your element.
* `type` refers to the type of row. Current support `type` data is:
  - `text` is a text block and will respond to body`, `headline`, `subhead`, `pullquote`, `cta`, and `text-align`
  - `image` is an image element and will only respond to `media_source`.
  - `vimeo` is a Vimeo video element and will display a video from `media-source`. Try to supply a `video_poster` when possible in the case your video doesn't load.
  - `ui` is a UI portfolio item. It will display `media_source` the same as a `vimeo` element if `ui-video` is true. Else, it will display a `media_source` as an image.
  - `animation` is the animation that will play when your item comes in and out of the screen. I default this to none if blank. Refer to the `lmnts-watch` docs below for animation references.

### Introducing LMNTS-Watch: Scroll Animation Library

Yay. Here's for animation. Simply add any of the tags below to add animation on scroll in/out.
- ```lmnt-watch-slide-from-left```
- ```lmnt-watch-slide-from-right```
- ```lmnt-watch-slide-from-bottom```
- ```lmnt-watch-slide-from-top```
- *Incremental fading:* Adjust the steps in the ```animation.scss``` file.
- ```lmnt-watch-fade-in-1```
- ```lmnt-watch-fade-in-2```
- ```lmnt-watch-fade-in-3```
- ```lmnt-watch-fade-in-4```
- *Incremental zooming:* Adjust the steps in the ```animation.scss``` file.
- ```lmnt-watch-zoom-in-1```
- ```lmnt-watch-zoom-in-2```
- ```lmnt-watch-zoom-in-3```
- ```lmnt-watch-zoom-in-4```

# Copyright

Copyright (c) 2014 - 2018 Laxalt & McIver LLC: All Rights Reserved.

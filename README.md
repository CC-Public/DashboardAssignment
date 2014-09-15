# Dashboard

## Overview

To successfully pass this assignment you need to develop a single-page **javascript** application which would represent user dashboard with a number of customizable widgets persisting their state and settings across sessions. Application layout should adopt for different screens (tablets/phones) and run flawlessly on desktop (IE 9+, FF, Chrome, Safari) and most common mobile platforms (iOS/Adroid/WP). 

## Technical Requirements

###Frameworks and technologies:

We would like you to use the following technologies:

 * [AngularJS](http://angularjs.org). Show as much features as you can from angular but do not overcomplicate;
 * [TypeScript](http://www.typescriptlang.org/). Use classes and strong typing as much as possible;
 * [Twitter Bootstrap](http://getbootstrap.com/) + [Less CSS](http://lesscss.org/). Use responsive 12-column grid-system and write less instead of css;
 * [Protractor](http://angular.github.io/protractor/). Cover you application at least with necessary tests;

Plus anything that helps you. But please try to keep the stack as thin as possible, so don't use extra dependecies unless you *really* need them. Additional credit would be given for those who *will not use jQuery*.

### Server Side

This assignment does not expect you to write any server-side code in most cases.

### Data

You would need to populate your app with financial data (stocks, prices and history prices for charting) from [Quandl](https://www.quandl.com/)'s **JSON API**. It's free and extreamly simple to use, so just [register](https://www.quandl.com/users/sign_up) and make sure you read [documentation](https://www.quandl.com/help/api). Further instructions would be given in widgets description section.


###Source Code
The quality of the code **matters** so please try not only to make it work but also make it readable and maintainable. We would also give much attention to you application's structure and code organization.

All the development has to be done in [GitHub](http://github.com/) or any other public source-code hosting service.

You can work on this assignment as long as you wish but the _strict requitrement_ would be **frequent commits**. 

Once finished, please send to [it@cc.com.mt](mailto:it@cc.com.mt) link to your repository and link to the published version.

## Business Requirments

### Main

The main screen would be disaplying all widgets in the state that user left them last time or would be set to default view. Initially main screen should look like this for new users:

![Main](/mockups/main.png?raw=true)

There are 3 types of widgets:
 * **Watch List**. Shows the latest data on the selected products
 * **Price Chart**. Price history for certain product
 * **Trade Feed**. Latest updates feed

Each widget also has it's own settings (which would be described in more details below) and behaviour: _Trade Feed_ and _Watch List_ could be shown only once per dashboard while _Price Chart_ could be instantiated multiple times. 

### Settings

Settings button should bring up the screen which would allow to set some basic settings for all widgets:

![Main-Settings](/mockups/main-settings.png?raw=true)

**Save** button should create (or update) a persistant storage and push selected options there. **Cancel** should close the widow without saving any changes. **Reset** should bring up the default settings for _all widgets_ and disaply Main view with default settings.


### Widgets

All widgets could be closed using the `x` button in top right corner which should be the same as hiding the widget in main settings screen. Each widget should have a help tooltip shoing when hovering over `?`. Each widget should also have a 'gear-button' which would bring up the settings screen for current instance.

Hiding one of the widgets should cause the page to be reorganized respectively. No strict rules here just make it look nice on mobiles and tables regardless of how many widgets are being showed.

#### Watch List

The goal of this widget is to provide to users quick overview of their favorited products. Should show default top 5 products: _Apple, Google, Microsoft, Coca Cola, Ford_. It could be instantiated only **once** per dashboard or could be hidden.

This is how watch list should look like in desktop browser:

![Watchlist](/mockups/watchlist.png?raw=true)

**Chart** button should add a new Price Chart widget to dashboard with prices for selected product. **Buy** button should redirect to 'Buy product' page (which would be a stub reading something like _"Buy Product Id={APPL}"_). **Details** page should be also a sub page reading _"Details for Product Id={APPL}"_.
For devices with screen width less than `748px` the screen should look like this:

![Watchlist](/mockups/watchlist-sm.png?raw=true)

Settings for the watchlist window should look like this:

![Watchlist Settings](/mockups/watchlist-settings.png?raw=true)


## Contacts

If any questions would appear please email us on [it@cc.com.mt](mailto:it@cc.com.mt).
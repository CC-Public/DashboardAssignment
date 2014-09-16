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

### Data

Within this assignment you would need to populate your app with financial data (stocks, prices and historical data for charting) which could come either from [Markit On Demand public API](http://dev.markitondemand.com/) in **JSON** format or from [Yahoo Finance](https://code.google.com/p/yahoo-finance-managed/wiki/YQLAPI). Both are extremely simple and does not require any registration. Further instructions would be given below. And once you can think of a better source provider you are more familliar with please feel free to use it.

###Source Code

The quality of the code **matters** so please try not only to make it work but also make it readable and maintainable. We would also give much attention to you application's structure and code organization.

All the development has to be done in [GitHub](http://github.com/) or any other public source-code hosting service.

You can work on this assignment as long as you wish, though the _strict requitrement_ would be **frequent and atomic commits** at least once per 1-2h of work. This means we won't accept you code if it would be pushed into repository in a single commit done on the last day. We need to see _how you progress_ as well so please let us see how you got there.

Once finished, please send the links to your repository and published version to [it@cc.com.mt](mailto:it@cc.com.mt).

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

Once user starts typing the product name in dropdown autocomplete:

![Watchlist Settings Select](/mockups/watchlist-settings-select.png?raw=true)

For the list of the products you can use [Markit On Demand Api](http://dev.markitondemand.com/#companylookup). **JSON** lookup example for companies with the name matching string _'app'_:

    http://dev.markitondemand.com/Api/v2/Lookup/json?input=app

To get product details you can either use [markitondemand's Stock Quote API](http://dev.markitondemand.com/#stockquote):

    http://dev.markitondemand.com/Api/v2/Quote/json?symbol=AAPL

Or use [YQL API](http://developer.yahoo.com/yql/console/?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20=%20'AAPL'&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys) from yahoo (which might be more flexible):

    select * from yahoo.finance.quotes where symbol = 'AAPL'

## Contacts

If any questions would appear please email us on [it@cc.com.mt](mailto:it@cc.com.mt).
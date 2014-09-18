# Dashboard Assignment

## Overview

To successfully pass this assignment you'll need to develop a single-page **JavaScript** application which would represent user dashboard with a number of customizable widgets persisting their state and settings across sessions. Application layout should adopt for different screens (tablets/phones) and run flawlessly on desktop (IE 9+, FF, Chrome, Safari) and most common mobile platforms (iOS/Android/Widows Phone). 

## Technical Requirements

### Development Stack:

We would like you to use:

 * [AngularJS](http://angularjs.org) - use as many angular features as you can (services, dependency injection, directives) but do not over complicate
 * [TypeScript](http://www.typescriptlang.org/) - use classes, inheritance and strong typing as much as possible. You can find definitions for common libraries [here](https://github.com/borisyankov/DefinitelyTyped)
 * [Twitter Bootstrap](http://getbootstrap.com/) + [Less CSS](http://lesscss.org/) - use responsive 12-column grid-system
 * [Protractor](http://angular.github.io/protractor/) - cover your application with necessary tests

Plus anything that helps you. But try to keep the stack as thin as possible, so don't use extra dependencies unless you *really* need them. Additional credit would be given for those who *will not use jQuery*.

### Data

Within this assignment you would need to populate your app with financial data (stocks, prices and historical data for charting) which you can get in JSON format either from [Markit On Demand public API](http://dev.markitondemand.com/)  or from [Yahoo Finance](https://code.google.com/p/yahoo-finance-managed/wiki/YQLAPI). Both are extremely simple and do not require any registration. Further instructions would be given below. Actually if you can think of a better data provider for stocks and quotes or the one you are more familiar with please feel free to use it.

###Source Code

The quality of the code **matters** so please try not only to make it work but also make it readable and maintainable. We would also give much attention to you application's structure and architecture.

All the development has to be done in [GitHub](http://github.com/) or any other public source-code hosting service.

You can work on this assignment as long as you wish, though the _strict requirement_ would be **frequent and atomic commits** at least once per 1-2 hours of work. This means we won't accept you code if it would be pushed into repository in a single commit done on the last day. We need to see _how you progress_ as well.

Once finished, please send the links to your repository and published version to [it@cc.com.mt](mailto:it@cc.com.mt).


## Business Requirements

### Main

The main screen would be displaying all widgets in the state that user left them last time or would be set to default view. Initially main screen should look like this for new users:

![Main](/mockups/main.png?raw=true)

There are 3 types of widgets:

 * **Watch List**. Shows the latest data on the selected products
 * **Price Chart**. Price history for certain product
 * **Trade Feed**. Latest user activity updates feed

Each widget also has its own settings (which would be described in more details below) and behavior: _Trade Feed_ and _Watch List_ could be shown only once per dashboard while _Price Chart_ could be instantiated multiple times (see details below).

### Settings

Settings button should bring up the screen which would allow to set some basic settings for all widgets:

![Main-Settings](/mockups/main-settings.png?raw=true)

**Save** button should create (or update) a persistent storage and push selected options there. **Cancel** should close the widow without saving any changes. **Reset** should bring up the default settings for _all widgets_ and display Main view with default settings.


### Widgets

All widgets could be closed using the `x` button in top right corner which should be the same as hiding the widget in main settings screen. Widgets might have a help tool-tip shown while hovering `?`. Some widgets would also  also have a 'gear-button' which would bring up the settings screen for current widget instance. All the settings screens should have 3 buttons: save (persist changes), cancel (discard changes) and reset (return widget to default state). 

Hiding one of the widgets should cause the page to be reorganized respectively. No strict rules here just make it look nice on mobiles and tables regardless of how many widgets are being shown.

#### Watch List

The goal of this widget is to provide to users quick overview of their favorite products. Should show default top 5 products: _Apple, Google, Microsoft, Coca Cola, Ford_. It could be instantiated only **once** per dashboard or could be hidden.

This is how watch list should look like in desktop browser:

![Watch list ](/mockups/watchlist.png?raw=true)

**Chart** button should add a new Price Chart widget to dashboard with prices for selected product. **Buy** button should redirect to 'Buy product' page (which should be a separate stub page reading _"Buy Product Id={AAPL}"_). **Details** page should be also a sub page reading _"Details for Product Id={AAPL}"_.
For devices with screen width less than `748px` watch list should look like this:

![Watch list ](/mockups/watchlist-sm.png?raw=true)

Settings screen for this widget should look like this:

![Watch list Settings](/mockups/watchlist-settings.png?raw=true)

`Show Charts as new widgets` checkbox should control the **chart** button behavior, allowing user either to display only one chart-widget or have multiple widgets per each product.

Once user starts typing inside 'Select Product' drop-down auto-complete should appear with results populated from the server:

![Watch list Settings select ](/mockups/watchlist-settings-select.png?raw=true)

For the list of the products you can use [Markit On Demand API](http://dev.markitondemand.com/#companylookup).  Here is lookup example for companies with the name matching the string _'app'_:

    http://dev.markitondemand.com/Api/v2/Lookup/json?input=app

Adding the product to the watch list should be done by `+` button which should be active only when the product is selected. User also should have the ability to **reorder** items in with arrow-controls in the table.

To get product details you can either use [markitondemand's Stock Quote API](http://dev.markitondemand.com/#stockquote):

    http://dev.markitondemand.com/Api/v2/Quote/json?symbol=AAPL

Or use [Yahoo's YQL](http://developer.yahoo.com/yql/console/?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20=%20'AAPL'&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys) from yahoo (which might be more flexible):

```sql
select * from yahoo.finance.quotes where symbol = 'AAPL'
```

#### Price Chart

Chart show historical prices for a certain product within given time period. This widget be created multiple time allowing to see prices for different products on the same dashboard.

![Chart](/mockups/chart.png?raw=true)

Chart settings should give the possibility to change product and the time period:

![Chart Settings](/mockups/chart-settings.png?raw=true)

Time periods are specified in months. For example if today is 16th of September 2014 than the prices should be shown:

 * **1m** - from 16th of August 2014 till now
 * **3m** - from 16th of June 2014 till now
 * **12m** - from 16th of September 2013 till now

To get historical prices you can either use [markitondemand's API](http://dev.markitondemand.com/#interactive):

    http://dev.markitondemand.com/Api/v2/InteractiveChart/json?parameters={"Normalized":false,"NumberOfDays":365,"DataPeriod":"Day","Elements":[{"Symbol":"AAPL","Type":"price","Params":["c"]}]}

Or [Yahoo's YQL](http://developer.yahoo.com/yql/console/?q=select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20%3D%20%22YHOO%22%20and%20startDate%20%3D%20%222009-09-11%22%20and%20endDate%20%3D%20%222010-03-10%22&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys):

```sql
select * from yahoo.finance.historicaldata
where symbol = "AAPL" and
startDate = "2009-09-11" and
endDate = "2010-03-10"
```

You can also use [Quandl API](https://www.quandl.com/help/api):

    http://www.quandl.com/api/v1/datasets/GOOG/NASDAQ_AAPL.json?trim_start=2013-09-16&trim_end=2014-09-16


#### Trade feed

This widget should display latest user activity in real time. Stacking new records in the top instead of replacing the whole feed. Trade Feed will not have any settings or help buttons.

![Trade Feed](/mockups/trade-feed.png?raw=true)

To get data for this widget you will need to use [parse.com](https://www.parse.com/) back-end application. First add reference for [parse JavaScript SDK](https://www.parse.com/docs/js_guide):

```html
<script type="text/javascript" src="http://www.parsecdn.com/js/parse-1.3.0.min.js"></script>
```

Before using any Parse classes, add the initialization call with Application ID and JavaScript key:

```js
Parse.initialize("clCmPyaT4LfjGsGjKuxGcF7Wt1CD6aE6urucljPA", "cnAXZ6Gae05VR2kzZk5sQtN0HRJwM9Y90Mk2LFBt");
```

Now you can get the list of latest records. Call `GetUserActivities` method like this:

```js
Parse.Cloud.run('GetUserActivities', {limit: 10}, {
    success: function(result) {
      // Process result array
    },
    error: function(result) {
      // show error
    }
});
```

The response will be JSON array in the following containing following `UserActivity` objects:

```json
{
    "user": {
        "firsname": "evelyn",
        "lastname": "cole",
        "pictureUrl": "http://api.randomuser.me/portraits/med/women/90.jpg"
    },
    "action": 2,
    "amount": 416,
    "currency": "USD",
    "price": 16.48,
    "company": "Visalia",
    "date": "2014-09-17T13:01:27.713Z"
}
```
 * action = 1 is a **buy** 
 * action = 2 is a **sell**
 
Though there might be more fields you can ignore them for this assignment.

To get real-time updates you would need to poll the server asking for new records. There is a separate method for that - `GetNewUserActivityUpdates`:

```js
Parse.Cloud.run('GetNewUserActivityUpdates', {
    since: new Date(),
    chance: 0.05
    }, {
            success: function(result) { /* Process data */ },
            error: function(result) { /* Show error */ }
  });
```

Since the method actually produces random data on each request you might want to change `chance` parameter which controls the probability of returning new record per each user. Response format is the same as in `GetUserActivities` method above.

There is a web-client [http://tradefeed.parseapp.com/](http://tradefeed.parseapp.com/) where you can test back-end and add generate some test-data. You can also find source code both for client and server [here](/tradefeed). 

## Design

You can find PSDs in `design` [folder](/design). Try to follow them as much as possible though unfortunately they are not complete and will require some creativity. Please extract some general styles and elements like widget container, button, grid or drop-down list and extrapolate them on other applications screens.
We want to judge your HTML/CSS skills as well so make it neat and clean.

## Contacts

If any questions would appear please email us on [it@cc.com.mt](mailto:it@cc.com.mt).
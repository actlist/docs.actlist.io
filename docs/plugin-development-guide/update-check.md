---
title: Update check
---

When the plugin's updates found, it is indicated by a red dot. Clicking the red dot will update the plugin automatically or archives will be opened by default browser.

```java title="Plugin.java"
public Plugin() throws Exception {
    super("whatever you want");

    setPluginVersion("1.0.0"); // this is essential for update check
    setPluginUpdateCheckURI(URI.create("http://your-server.name"));
}
```

![](/img/plugin-development-guide/how-to-induce-to-latest-version-of-plugin.png)

The Actlist will requests to your server with `version` parameter via `GET` method when Actlist is instanced up at first time.

You can respond with your web application server or if you don't have any web application server, but it's ok.
feel free to use this [update-check.js](https://github.com/actlist/actlist-plugin-update-check/raw/master/update-check.js)
but don't forget to upload the `update-check.js` file to your own online place like a `GitHub`.
and you can specify the url of `update-check.js` on `setPluginUpdateCheckURI` method.
(be aware that this request url must be ends with `.js`)

## Using dynamic web application server

Please response these parameters as a single Map object to the Actlist's update check request.
- `available` : `true` or `false`. this will notice to user that your plugin has available updates or not.
-  `jar` : latest jar file of your plugin for automatic updates.
- `requiredActlist` : minimum compatible version of the Actlist for automatic updates.
- `url` : the plugin's archives url. this url will be browsed when automatic update fails.
- `killSwitch` : `on` or `off`. this will make the plugin to unavailable.
- `endOfService` : `true` or `false`. this will notice to user that your plugin has reached end-of-service or not.

## Using static JavaScript file via GitHub

If you don't have any web application server, but you have `GitHub` account, this is your way.

Please refer to this [sample repository](https://github.com/actlist/actlist-plugin-update-check).

you can see [Plugin.java](https://github.com/actlist/actlist-plugin-update-check/blob/master/src/main/java/Plugin.java) is pointing update check url to its own repository's `https://github.com/.../raw/master/update-check.js`

## Browse plugin's archives

There are two ways to browse the archives when automatic update fails.
1. By `url` response value through `setPluginUpdateCheckURI(URI)` method.
2. By your code with 2nd parameter of `setPluginUpdateCheckURI(URI, URI)` method.

Even if you set the archives url manually through `setPluginArchivesURI` method or 2nd parameter of `setPluginUpdateCheckURI(URI, URI)`, server's `url` response value will be strongly respected.

## Notice plugin's update

You can override `pluginUpdateFound` method for notice or something.

```java title="Plugin.java"
@Override
public void pluginUpdateFound() throws Exception {
    label.setText("Update available !");
}
```
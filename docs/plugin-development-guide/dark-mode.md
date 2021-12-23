---
title: Dark mode
---

You can test your plugin to fit to dark mode by using `DebugParameter` like this:

```java title="Plugin.java"
public static void main(String args[]) throws Exception {
    debug(DebugParameter.custom().setDarkMode(true).build());
}
```

There is also `isDarkMode()` method and overridable `applicationConfigChanged()` method for adjusting color at runtime.

```java title="Plugin.java"
@Override
public void applicationConfigChanged() throws Exception {
    if (isDarkMode()) {
        node.setStyle("-fx-background-color: -fx-base;");
    } else {
        node.setStyle("-fx-background-color: #ffffff;");
    }
}
```

:::note
The `applicationConfigChanged()` method will be called when the Actlist user changes dark mode property or proxy host in the configuration view.
:::
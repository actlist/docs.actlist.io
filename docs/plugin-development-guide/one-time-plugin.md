---
title: One time plugin
---

If you want to build a one time plugin that deactivates the plugin when something is done,
you can use `setOneTimePlugin(true);` method on plugin's constructor as like below:

```java title="Plugin.java"
public Plugin() throws Exception {
    super("whatever you want");
    
    setOneTimePlugin(true);
}
```

The plugin will have deactivated state as a default state. and if user clicks the toggle button to activate the plugin then `pluginActivated()` method will be called.
you can just code something within the `pluginActivated()` method.

:::warning
Don't forget the `requestDeactivate();` method. this method will make your plugin to back to deactivated state.
:::

Here is an example source code:

```java title="Plugin.java"
import org.silentsoft.actlist.plugin.ActlistPlugin;

public class Plugin extends ActlistPlugin {

    public static void main(String args[]) throws Exception {
        debug();
    }

    public Plugin() throws Exception {
        super("whatever you want");
        
        setOneTimePlugin(true);
    }

    @Override
    protected void initialize() throws Exception { }

    @Override
    public void pluginActivated() throws Exception {
        try {
            /*
             * do something here
             */
        } catch (Exception e) {
            // exception handling
        } finally {
            requestDeactivate();
        }
    }

    @Override
    public void pluginDeactivated() throws Exception { }

}
```
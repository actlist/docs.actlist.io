---
title: Context menu
---

You can put a function(context menu) through `putFunction` method at `initialize` method.

```java title="Plugin.java"
@Override
protected void initialize() throws Exception {
    putFunction("printHelloWorld", new TextFunction("Hello World", () -> {
        System.out.println("Hello, World !");
    }));
    putFunction("printGoodMorning", new TextFunction("Good morning", () -> {
        System.out.println("Good morning !");
    }));
    putFunction("printGoodNight", new TextFunction("Good night", () -> {
        System.out.println("Good night !");
    }));
}
```

![](/img/plugin-development-guide/how-to-add-a-function.png)
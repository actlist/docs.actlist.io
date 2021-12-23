---
title: Minimum compatible version
---

```java title="Plugin.java"
public Plugin() throws Exception {
    super("whatever you want");

    setMinimumCompatibleVersion(1, 2, 6); // Actlist's major, minor, patch version.
}
```
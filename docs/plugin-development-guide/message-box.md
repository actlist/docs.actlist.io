---
title: Message box
---

The Actlist has built in `MessageBox`.

See the sample source code below:

```java
Optional<ButtonType> result = MessageBox.showConfirm("Are you a robot?");
result.ifPresent((buttonType) -> {
    if (buttonType == ButtonType.NO) {
        System.out.println("I'm not a robot.");
    }
});
```
---
title: Event Handling with `on-` Prefix
sidebar_position: 3
---

## Event Handling with `on-` Prefix

LumeoJS allows you to bind event handlers to HTML elements using the `on-` prefix.

### Example

Add a button with an `on-click-a` attribute in your HTML:

```html
<button on-click="handleClick">Click Me</button>
```

### Defining the Event Handler in JavaScript

Define the `handleClick` function within your LumeoJS state:

```html
<script>
  Lumeo((state) => {
    state.handleClick = () => {
      alert("Button clicked!");
    };
  });
</script>
```

Now, clicking the button triggers the `handleClick` function, which displays an alert message.

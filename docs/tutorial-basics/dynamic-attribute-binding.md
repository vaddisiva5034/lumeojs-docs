---
title: Dynamic Attribute Binding with `:`
---

### To bind HTML attributes dynamically, use a colon (`:`) before the attribute name.

### Example

In your HTML, bind the `title` attribute to a variable:

```html
<p title=":message">Hover over me!</p>
```

### Initializing the State in JavaScript

Define `message` in your LumeoJS state:

```html
<script>
  Lumeo((state) => {
    state.message = "Welcome to LumeoJS!";
  });
</script>
```

Hovering over the paragraph will display the message dynamically set as the `title` attribute.

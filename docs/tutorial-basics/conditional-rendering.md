---
title: Conditional Rendering with `l-show`
---

### Use the `l-show` attribute to conditionally show or hide HTML elements.

### Example

Add an element with `l-show` in your HTML:

```html
<div l-show="isVisible">This is visible!</div>
<button on-click="toggleVisibility">Toggle Visibility</button>
```

### Toggling Visibility in JavaScript

Define `isVisible` and a function to toggle it in the LumeoJS state:

```html
<script>
  Lumeo((state) => {
    state.isVisible = true; // Initially visible
    state.toggleVisibility = () => {
      state.isVisible = !state.isVisible;
    };
  });
</script>
```

Clicking the button toggles the visibility of the `<div>`.

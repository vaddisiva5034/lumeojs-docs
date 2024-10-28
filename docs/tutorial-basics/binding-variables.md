---
title: Binding Variables with `l-model`
---

### The `l-model` attribute lets you bind a JavaScript variable to an HTML input.

### Example

In your HTML, add the `l-model` attribute to an `<input>` element:

```html
<input type="text" l-model="myVariable" placeholder="Type something..." />
<p>You typed: {{ myVariable }}</p>
```

### Initializing the State in JavaScript

Define `myVariable` within your LumeoJS state:

```html
<script>
  Lumeo((state) => {
    state.myVariable = "";
  });
</script>
```

Now, whatever is typed in the input box is automatically reflected in `myVariable` and displayed in the `<p>` element.

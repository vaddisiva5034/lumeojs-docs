---
title: Displaying Dynamic Content with `{{ }}`
---

### LumeoJS allows you to use double curly braces `{{ }}` to display dynamic content.

### Example

In your HTML, use `{{ }}` to display a variable:

```html
<p>Hello, {{ name }}!</p>
```

### Initializing the State in JavaScript

Define the variable within your LumeoJS state:

```html
<script>
  Lumeo((state) => {
    state.name = "Lumeo User";
  });
</script>
```

Now, `{{ name }}` will dynamically display the value of `name`.

---
title: Getting Started with LumeoJS
sidebar_position: 1
---

### Learn how to include and initialize LumeoJS in your project.

### Step 1: Include LumeoJS in Your HTML

Add the following script tag to include LumeoJS:

```html
<script src="https://cdn.jsdelivr.net/npm/lumeojs"></script>
```

### Step 2: Initialize LumeoJS with Your State

Define and initialize your application state with Lumeo:

```html
<script>
  // Initialize Lumeo with your state
  Lumeo((state) => {
    state.name = "World";
    state.isVisible = true;
    state.message = "Welcome to LumeoJS!";
  });
</script>
```

### Step 3: Bind Elements in Your HTML

Use Lumeo bindings to interact with the HTML elements:

```html
<input type="text" l-model="name" placeholder="Enter your name" />
<p>Hello, {{ name }}!</p>
<p l-show="isVisible">This is visible!</p>
<p title=":message">Hover over me!</p>
```

You’re all set! LumeoJS will bind the JavaScript state to your HTML elements.

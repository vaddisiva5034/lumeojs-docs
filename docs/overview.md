---
title: Overview of LumeoJS
sidebar_position: 1
---

# LumeoJS Overview

LumeoJS is a lightweight JavaScript library designed to handle simple state management and data binding with minimal code and a very small footprint. It’s ideal for projects where you want a dynamic webpage without the heavy overhead of larger libraries. LumeoJS makes it easy to bind JavaScript variables to HTML elements, handle events, conditionally display content, and update elements dynamically whenever the state changes.

## Why I Created LumeoJS

When creating simple webpages—especially static pages with minimal dynamic data—using popular libraries can feel excessive. These libraries often require more bundle size to load, and they come with a wide range of features that may not be necessary for smaller projects. To address this, I created LumeoJS to provide a lightweight alternative that focuses on ease and simplicity.

### Key Advantages

- **Minimal Size**: LumeoJS is extremely small, meaning your webpage loads faster and uses fewer resources.
- **Simple State Binding**: With a single state object, updating data across multiple places on the page is straightforward and efficient.
- **Automatic Re-rendering**: Updating the state automatically reflects changes across all bound elements, eliminating manual updates.

## Getting Started

Here’s a quick guide on how to use LumeoJS:

### 1. Include LumeoJS

To use LumeoJS, simply include the library in your HTML file:

```html
<script src="https://cdn.jsdelivr.net/npm/lumeojs"></script>
```

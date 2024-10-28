# Usage

## Basic Binding

Create reactive bindings for variables directly in HTML.

```html live
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
    <script src="https://unpkg.com/lumeojs"></script>
  </head>
  <body>
    <input type="text" l-model="name" placeholder="Enter your name" />
    <p>Hello, {{ name }}!</p>
    <p l-show="isVisible">This is visible!</p>
    <p title=":message">Hover over me!</p>
    <script>
      // Initialize Lumeo with your state
      Lumeo((state) => {
        state.name = "World";
        state.isVisible = true;
        state.message = "Welcome to LumeoJS!";
      });
    </script>
  </body>
</html>
```

---
sidebar_position: 1
title: Create a New Page
description: Step-by-step guide to creating a new page in your project
---

# Create a New Page

Creating a new page is easy! Follow this step-by-step guide to add pages to your project.

---

## Step 1: Create the Markdown File

Start by creating a new Markdown file (`.md` or `.mdx`) in your project’s `docs` directory (or any specified content folder).

```plaintext
my-project/docs/my-new-page.md
```

## Step 2: Add Front Matter

At the top of your Markdown file, add a front matter section to set the page metadata:

```markdown
---
title: My New Page
sidebar_position: 2
description: A brief description of this page
---
```

- `title`: Defines the page’s title.
- `sidebar_position`: Determines the page’s order in the sidebar.
- `description`: Provides a short description for SEO and previews.

## Step 3: Add Content

Now, add your content using Markdown syntax. Here’s an example of text with headers, lists, and code blocks:

````markdown
# My New Page

Welcome to my new page! This is where the content goes.

## Section 1: Overview

Provide an overview here.

- Key Point 1
- Key Point 2

### Subsection: Details

Here is some detailed information.

```javascript
function myFunction() {
  console.log("Hello, world!");
}
```
````

## Step 4: Save and View the Page

Save the file, and then run your development server (e.g., `npm start`). Navigate to your newly created page to view it in the browser.

---

## Additional Tips

- Organize pages in subfolders for a better structure.
- Use `.mdx` instead of `.md` if you need to embed React components in your content.

And that’s it! You’ve created a new page. 🎉

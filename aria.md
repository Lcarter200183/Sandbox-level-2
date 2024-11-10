# Auria

### ACCESSIBLE Rich Internet Applications

It"s a way to make websites more accesssible to people with disabilities

### AURIA attributes

1. `aria-current`
   - Indicates that an item is currently selected.
   - `page` indicated that the item is a page.
   - `"true"` that the item is currently selected.
   - Other valid values:`"step"` `"location"` `"date"` `"time"`
   - Switch it to `"false"` when the item is enabled.
   - use an element that can be selected.

2. `aria-disabled`
   - Indicates the status of an item.
   - `"true"` indicates that the item is disabled.
   - Switch it to `"false"` when the item is enableed.
   - Use on element that can be disabled and enabled.

3. This ARIA describes an item without a label.
   - `"close"` is describing a button that has a meaning, but no label.
   - Use an item or image that have a meanig but no label.

### Enable the accessibility tree in developer tools
1. Open developer tools
2. Elements tab
3. Accessibility tab
4. Enable full-page accessible tree
5. Refresh page

### Accessibility tree

The accessibility tree:
 - Represents the structure of a web page.
 - Only includes accessibility elements.
 - How assistive technologies interpret and describe a web page to a user.

### Semantic elements

1. header
2. main
3. footer
4. section
5. headings
6. `<p>`
7. `<label>`
8. `<article>`
    - Use for blog posts, news articles, and other independent self-contained content.
    - Example: recipe cards
9. `<section>`
    - Use to enclose themes, categories, and content with headings.
    - Example: recipe ingredients, recipe instructions.
10. `<dialog>`
    - Use this for a box or window that can be opened or closed.
    - Example: Bootstrap alert 
    - Use the open attribute to show the `<dialog>` 
11.  `<output>`
     - Use this for the result of a calculation or showing feedback.
     - Example: The form has been successfully submitted.



### Semantic atttributes

1. Attributes that begin with `aria`.
   - aria-current
   - aria-disabled
   - area-label 
2. `type`
   - type="password"
   - type="tel"
   - type="email"
   - type="text"
3. `role`
   - role="alert"
   - id="phone"
   - `for` should match the `id` 
  
  ### Bootstrap componets
   - used in aria
  1. nav
  2. list-group
  3. alert
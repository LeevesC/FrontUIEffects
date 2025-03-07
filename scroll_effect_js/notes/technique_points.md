- ## viewport:

  1. `items-list`, the vertically scrollable container with `height:100vh` and `overflow-y:auto`.

  2. `100vh` equals the full height of the browser's viewport (the visible window area)

  3. Since `top-navigator` is `sticky` and not `fixed`, it occupies space in the normal flow initially. However, `items-list` follows it as a sibling in .app.

  4. The `height: 100vh` on `items-list` is calculated relative to the viewport, not affected by sibling elements like `top-navigator`.

- ## `.offsetTop`:

  Measures the distance (in pixels) from the top edge of an element to the top edge of its offset parent.

- ## `.scrollTop`:

  an element's content has been scrolled vertically from tis top edge.

- ## How to implement Which `group-section` is in view?

  The top of the section is above the bottom of the top navigator **&&** the bottom of the section is below the bottom of the top navigator

  1. `section.offsetTop <= scrollPosition` Ensures the section has been scrolled into or past the top of the visible area. (first condition)

  2. `groupSections[index + 1].offsetTop > scrollPosition` the next section’s top is below scrollPosition. (second condition)

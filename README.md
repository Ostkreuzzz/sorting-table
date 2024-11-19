## Overview

### The challenge

Users should be able to:

- Filter and sort people in the table effectively.
- Share the URL containing filters and sorting parameters to show exactly what they see.
- Use interactive sorting on columns such as name, sex, born, and died.
- Filter by Name: Updates the query search parameter with case-insensitive text from the input. Only displays people whose name, motherName, or fatherName match the query. The query is removed if the input is empty.
- Sorting:
  Clicking on a column header sorts the data in ascending order (A -> Z or 0 -> 9).
  Clicking again reverses the order to descending.
  A third click disables sorting and removes the sort and order search parameters.
  Sorting parameters are stored using sort (for the field) and order (with desc for descending).
- URL Search Params: All filter and sorting parameters are stored in the URL to facilitate sharing and navigation persistence.

### Screenshot

![](image.png)

### Links

- [Solution URL](https://github.com/Ostkreuzzz/sorting-table)
- [Live Site URL](https://ostkreuzzz.github.io/sorting-table/)

## My process

### Built with

- React: Leveraged for building interactive user interfaces.
- React Router: Used for navigation and maintaining search params.
- TypeScript: To implement filtering, sorting, and URL management.
- CSS: Styled components for a clean, responsive design.
- Hooks: Utilized useEffect, useState, and custom hooks for managing state and side effects.

### What I learned

- How to manage URL search parameters for deep-linking features.
- Implementing multi-step sorting logic in React tables.
- Using React-Router to dynamically read and set URL parameters.
- Maintaining stateful parameters while navigating within a specific page.
- Building a responsive sidebar that conditionally displays based on data load state.

## Author

- Github - [Ostkreuzzz](https://github.com/Ostkreuzzz)
- LinkedIn - [Mykhailo Sulima](https://www.linkedin.com/in/mykhailo-sulima-a80648339/)
- Telegram - [@Ostkreuz](https://t.me/Ostkreuz)

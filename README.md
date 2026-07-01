# React + Vite

There are several common ways to style components in React. Each approach has different strengths depending on the size and needs of your project.

### 1. Inline Styling

Styles are written as JavaScript objects.

```jsx
function App() {
  return (
    <h1 style={{ color: "blue", fontSize: "30px" }}>
      Hello React
    </h1>
  );
}
```

**Advantages:**

* Simple for dynamic styles.
* No separate CSS file needed.

**Disadvantages:**

* Not suitable for large applications.
* Cannot use pseudo-classes like `:hover`.

---

### 2. External CSS

Create a CSS file and import it into your component.

**App.css**

```css
.title {
  color: blue;
  font-size: 30px;
}
```

**App.js**

```jsx
import "./App.css";

function App() {
  return <h1 className="title">Hello React</h1>;
}
```

**Advantages:**

* Easy to maintain.
* Best for general styling.

---

### 3. CSS Modules

CSS Modules scope styles locally to avoid class name conflicts.

**Button.module.css**

```css
.button {
  background-color: green;
  color: white;
  padding: 10px;
}
```

**Button.js**

```jsx
import styles from "./Button.module.css";

function Button() {
  return (
    <button className={styles.button}>
      Click Me
    </button>
  );
}
```

**Advantages:**

* Prevents CSS class conflicts.
* Great for component-based projects.

---

### 4. Styled Components

A CSS-in-JS library that lets you write CSS inside JavaScript.

Install:

```bash
npm install styled-components
```

Example:

```jsx
import styled from "styled-components";

const Title = styled.h1`
  color: blue;
  font-size: 30px;
`;

function App() {
  return <Title>Hello React</Title>;
}
```

**Advantages:**

* Component-scoped styles.
* Supports dynamic styling with props.

---

### 5. Sass (SCSS)

Sass extends CSS with variables, nesting, and mixins.

Install:

```bash
npm install sass
```

**App.scss**

```scss
$primary-color: blue;

.title {
  color: $primary-color;

  &:hover {
    color: red;
  }
}
```

**App.js**

```jsx
import "./App.scss";

function App() {
  return <h1 className="title">Hello React</h1>;
}
```

---

### 6. Utility-First CSS (Tailwind CSS)

Apply styles directly using utility classes.

```jsx
function App() {
  return (
    <h1 className="text-blue-600 text-3xl font-bold">
      Hello React
    </h1>
  );
}
```

**Advantages:**

* Fast development.
* Highly customizable.
* Minimal custom CSS.

---

## Comparison

| Method            | Best For                 | Pros                       | Cons                               |
| ----------------- | ------------------------ | -------------------------- | ---------------------------------- |
| Inline CSS        | Dynamic styles           | Simple                     | Limited features                   |
| External CSS      | Small to medium projects | Easy to understand         | Global scope can cause conflicts   |
| CSS Modules       | Component-based apps     | Scoped styles              | Slightly more setup                |
| Styled Components | Modern React apps        | Dynamic, reusable          | Additional dependency              |
| Sass              | Large projects           | Variables, nesting, mixins | Requires compilation               |
| Tailwind CSS      | Rapid UI development     | Fast, consistent           | Utility classes can become lengthy |

### Which one should you use?

* **Beginners:** External CSS.
* **Medium to large React projects:** CSS Modules or Sass.
* **Component libraries or highly dynamic UIs:** Styled Components.
* **Fast UI development:** Tailwind CSS.

In modern React development, **CSS Modules**, **Tailwind CSS**, and **Styled Components** are among the most commonly used approaches, depending on the project's requirements.

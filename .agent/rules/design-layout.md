---
trigger: manual
---

# Sketchy Layout & Design Guidelines

> **GOAL**: Create a "Digital Wall & Notebook" experience. The homepage is a wall with sticky notes; inner pages feel like a student's hand-drawn study notebook.

---

## 🏠 Home Page: "The Wall" layout

**Concept**: A dark/textured wall background with colorful sticky notes acting as navigation entry points.

### 1. Wall Container
- **Background**: Use the user-provided wall image.
  - CSS: `bg-cover bg-center bg-no-repeat fixed inset-0 z-[-1]`
  - Fallback: Dark charcoal `#1a1a1a` if image fails.
- **Overlay**: Optional semi-transparent dark overlay (`bg-black/40`) to ensure text contrast.

### 2. Header
- **Position**: Centered top, floating.
- **Style**: Hand-written large title (Project Name).
- **Effect**: Use `react-rough-notation` (underline or highlight) for the title.

### 3. Navigation Grid (The Sticky Notes)
- **Layout**: Centered Flex/Grid container (`flex flex-wrap justify-center gap-8` or `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
- **Item Style (Sticky Note)**:
  - **Shape**: `card` class from PaperCSS.
  - **Colors**: Assign random palette colors (`bg-peach`, `bg-sky`, `bg-mint`, `bg-lavender`) to each note.
  - **Rotation**: Slight random rotation (`-rotate-1`, `rotate-2`) to mimic imperfect sticking.
  - **Shadow**: Drop shadow to create depth against the wall.
  - **Interact**: Hover effect scale up (`hover:scale-105`) + z-index bump.
  - **Content**: Large hand-written labels (e.g., "Roadmap", "Quizzes").

---

## 🗺️ Page 2: C++ Roadmap Layout

**Concept**: A treasure map or mind-map drawn on paper.

- **Background**: `bg-cream` (Paper texture).
- **Layout**:
  - **Nodes**: Clickable "sketchy" shapes (rectangles/circles) representing topics.
  - **Connections**: Hand-drawn lines (SVG paths with `stroke-dasharray` or "rough" style).
  - **Structure**: Vertical or Tree-based flow.
- **Interaction**:
  - Clicking a node opens the **Topic Detail** page.
  - Active/Completed nodes get a "Rough Notation" checkmark or fill.

---

## 📝 Page 3: Topic Pages (Markdown)

**Concept**: A clean, readable study notebook.

- **Background**: `bg-cream` (Notebook paper).
- **Layout**:
  - **Sidebar (Left/Right)**: Table of Contents (sketchy border container).
  - **Main Content (Center)**: `max-w-3xl mx-auto p-8`.
- **Typography**:
  - Headers: Hand-written font style.
  - Code Blocks: "Boxed" look with monospaced font, distinct background (`bg-lavender`).
  - Blockquotes: Vertical hand-drawn line on the left (`border-l-4 border-primary`).
- **Components**:
  - **Next/Prev Buttons**: At the bottom for linear navigation.

---

## ❓ Page 4: Quiz Page

**Concept**: Flashcards on a desk.

- **Layout**: Masory or Grid of questions.
- **Card Style**:
  - Front: Question text.
  - Back/Modal: Answer + Explanation.
- **Interaction**:
  - Click Question -> Opens PaperCSS **Modal**.
  - **Modal**:
    - **Header**: "Answer Key"
    - **Body**: Code snippet or explanation.
    - **Footer**: "Got it!" button to close.

---

## 🎨 Page 5: System Design Board

**Concept**: Infinite whiteboard / Drawing canvas.

- **Tool**: React Flow (customized).
- **Node Styles**:
  - Override default React Flow styles to use **PaperCSS borders**.
  - Nodes should look like hand-sketched boxes/cylinders (Database).
- **Edges**: Rough/Hand-drawn lines.
- **Background**: Dot grid or Graph paper pattern.

---

## 💻 Page 6: LeetCode Tracker

**Concept**: A progress checklist or grade report.

- **Layout**: PaperCSS `table` or list of "Task Cards".
- **Table Columns**:
  1. **Status**: Checkbox or Rough Notation "Cross-off".
  2. **Problem**: Link to LeetCode (External with icon).
  3. **Diffculty**: Badge (`badge-success` for Easy, `badge-warning` for Med, `badge-danger` for Hard).
  4. **Notes**: Short text area.

---

## 📏 General Design Rules (All Pages)

1.  **Padding/Margins**: Generous breathing room (`p-8`, `m-4`).
2.  **Consistency**: Always use the **Color Palette** from `style-guideline.md`.
3.  **Fonts**: Ensure a font stack that supports the "sketchy" vibe (e.g., *Patrick Hand*, *Indie Flower*, or generic sans-serif with rough borders).
4.  **Borders**: ALL containers must have visible 2px+ borders (PaperCSS default).

---

> **Implementation Note**: For the "Wall" background image, ensure it is placed in `public/assets/wall-bg.jpg` (or relevant path) and referenced correctly in CSS/Tailwind.

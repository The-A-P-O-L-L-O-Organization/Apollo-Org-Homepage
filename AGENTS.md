# AGENTS.md - Apollo Organization Homepage

## Build Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Code Style Guidelines

### Framework & Language

- **Astro** framework with **TypeScript** (strict config)
- Use `.astro` extension for components
- Frontmatter scripts use `---` delimiters

### Imports & Structure

- Imports at top of frontmatter in Astro files
- Use relative imports for local files
- Follow TypeScript strict typing

### Naming Conventions

- **Components**: PascalCase (e.g., `Header.astro`)
- **CSS Classes**: kebab-case with BEM-like structure (e.g., `.nav-desktop`, `.highlight-card`)
- **Files**: kebab-case for pages/components

### Styling

- Scoped CSS within `<style>` tags in Astro components
- Use CSS custom properties and modern features
- Responsive design with mobile-first approach
- Semantic HTML structure

### TypeScript

- Strict TypeScript configuration
- Use zod schemas for content collections
- Explicit typing preferred over inference

### Error Handling

- Use optional chaining (`?.`) for DOM queries
- Graceful fallbacks for missing elements

No linting/formatting tools configured - follow existing patterns.

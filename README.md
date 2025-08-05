## Download Table Component Tech Test Submission
- All main components are in `src/components/downloadTable` and `src/components/ui`.
- Tests are located in the `__tests__` folders next to their components.
- The project is TypeScript-first and uses modern React best practices.
- If you have issues running tests, ensure your Node.js version is compatible (Node 18+ recommended) and that your `tsconfig.json` has `"jsx": "react-jsx"`.

## Git Bundle Instructions

If you received this project as a Git Bundle:

1. **Clone the bundle:**
   ```bash
   git clone <bundle-file> <folder-name>
   cd <folder-name>
   git checkout main
   ```
2. Follow the steps below to install dependencies and run the project/tests.


## Project Structure
```
src/
├── components/
│   ├── downloadTable/
│   │   ├── DownloadTableCell.tsx
│   │   ├── DownloadTableHeader.tsx
│   │   ├── DownloadTableRow.tsx
│   │   ├── DownloadTableToolbar.tsx
│   │   ├── index.tsx
│   └── ui/
│       ├── EmptyDataBody.tsx
│       ├── ErrorBody.tsx
│       └──  LoadingBody.tsx
```

## Running the Project

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Running Tests

This project uses Jest and React Testing Library for unit and integration tests.

- **Run all tests:**
  ```bash
  npm test
  ```

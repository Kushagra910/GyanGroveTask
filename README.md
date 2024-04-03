# Project Overview
This project aims to build a responsive website that displays upcoming and recommended events. The website fetches event data from provided APIs and presents it to the user in an intuitive and visually appealing manner. Key features include responsiveness for both desktop and mobile screens, fetching data from APIs, and implementing infinite scrolling.

## Setup and Local Run Instructions
- Clone the repository: git clone https://github.com/Kushagra910/GyanGroveTask.git
- Navigate to the project directory: cd <project-directory>
- Install dependencies: npm install
- Start the development server: npm run dev
- Open the browser and go to http://localhost:5173 to view the website locally.
Explanation of Design and Technical Decisions


## Technologies Used
- React with TypeScript: Chosen for its component-based architecture and strong typing, providing a robust and maintainable codebase.
- Vite: Used as the bundler for its fast development server and build times, making the development process efficient.
- React-Slider and React-Slick: Utilized for implementing mobile responsiveness and infinite scrolling, enhancing the user experience.
### Design Decisions
Responsive Design: Implemented to ensure the website works seamlessly across various screen sizes, providing an optimal viewing experience for users on desktop and mobile devices.
- API Integration: Leveraged provided APIs to fetch event data dynamically, keeping the content up-to-date and relevant for users.
- Infinite Scrolling: Utilized React-Slider and React-Slick libraries for infinite scrolling functionality, allowing users to easily navigate through a large number of events.
### Technical Decisions
- Component Structure: Organized components in a modular and reusable manner, promoting code reusability and maintainability.
- TypeScript Usage: Employed TypeScript to catch errors during development and provide better code documentation and editor support.
- Dependency Management: Used npm for dependency management and version control, ensuring consistency and compatibility across environments.



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

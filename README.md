# tailwind setup

- although tailwind was installed by default by nextjs, tailwind.config.js file was not there to create design system.
- for that, uninstalled the latest(unstable) tailwind version
  ```javascript
      pnpm remove tailwindcss
  ```
  - and installed 3.4.4 using
    ```javascript
        pnpm add -D tailwindcss@3.4.4 postcss autoprefixer
    ```
  - create file
  ```javascript
       pnpm exec tailwindcss init
  ```

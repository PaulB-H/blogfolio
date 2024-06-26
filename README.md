// *******************************************
### Blogfolio
// *******************************************

Well, the blog part is on the way.

// *******************************************
#### Made with...
// ******************************************* 

NextJS with App Router, currently statically exported.

CSS Modules

TypeScript and [typescript-plugin-css-modules](https://github.com/mrmckeb/typescript-plugin-css-modules)

CSS Variable Auto-Completion Extension [vscode-css-variables](https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-css-variables)

[RemixIcon](https://github.com/Remix-Design/RemixIcon)

// *******************************************
#### Notes
// ******************************************* 

// ******************************************* \
// **CSS Variable Auto-Completion**

I am only using one CSS variable set in JS for font in layout.tsx:

```js 
// layout.tsx

const Inter = localFont({
  src: "../../public/fonts/Inter-VariableFont_slnt,wght.ttf",
  display: "swap",
  variable: "--font-inter", // <-- Here
});
```

And I wanted to be able to type-check or autocomplete usage of that css variable directly in a plain module.css file.

The easiest solution for me with no other config was a VS Code extension:\
[vscode-css-variables](https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-css-variables)

This seems to be able to autocomplete CSS variables in CSS files even if the variable was set in a tsx file.

// ******************************************* 

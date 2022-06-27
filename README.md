# Grid Auto Fit for Tailwind CSS

A plugin that helps you create a responsive grid layout in Tailwind CSS without using media queries. It uses the `auto-fit` keyword in the `grid-template-columns` CSS property to help you do the same.

## Installation

Install it in a new or existing Tailwind CSS project

```
npm install -D @shrutibalasa/tailwind-grid-auto-fit
```

Then add the plugin to your `tailwind.config.js` file:

```
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@shrutibalasa/tailwind-grid-auto-fit'),
    // ...
  ],
}
```

## Basic usage

Use the class `grid-auto-fit` along with `grid` class to create a responsive grid layout.

```
<section class="grid gap-4 grid-auto-fit">
   <div class="p-4 bg-blue-100 rounded-md">
      Item 1
   </div>
   <div class="p-4 bg-blue-100 rounded-md">
      Item 2
   </div>
   <div class="p-4 bg-blue-100 rounded-md">
      Item 3
   </div>
   <div class="p-4 bg-blue-100 rounded-md">
      Item 4
   </div>
   <div class="p-4 bg-blue-100 rounded-md">
      Item 5
   </div>
   <div class="p-4 bg-blue-100 rounded-md">
      Item 6
   </div>
   <div class="p-4 bg-blue-100 rounded-md">
      Item 7
   </div>
</section>
```

## Changing the grid item size

Use utilities like `.grid-auto-fit-sm`, `.grid-auto-fit-xl` to change the minimum and maximum item size of the responsive grid. This plugin includes five item sizes with the default minimum size being 16rem.

| Class                                 | Minimum item width |
| ------------------------------------- | ------------------ |
| `grid-auto-fit-xs`                    | `12rem`            |
| `grid-auto-fit-sm`                    | `14rem`            |
| `grid-auto-fit` or `grid-auto-fit-md` | `16rem`            |
| `grid-auto-fit-lg`                    | `18rem`            |
| `grid-auto-fit-xl`                    | `20rem`            |

## Arbitrary values

This plugin supports the use of arbitrary values if you want a custom minimum item size

```
<section class="grid grid-auto-fit-[13rem]">
   ...
</section>
```

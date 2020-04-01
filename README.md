## Intro
mint-css is boilerplate CSS that you can use for prototyping, theming, or even use directly in your projects. 
It is useful for web designers as well as developers.

## Table of contents

* [Themes and flavors](#themes-and-flavors)
* [Quickstart](#quickstart)
* [Changing themes](#changing-themes)
* [Why this project?](#why-this-project)
* [What are flavors?](#what-are-flavors)
* [How you can contribute](#how-you-can-contribute)
* [Credits](#credits)

## Themes and flavors

Specify just 4 colors in your theme file and you're ready to go!  
Full support for dark themes and contrast-conscious typography.  

![alt text](./themes.gif "Themes GIF")

**Flavors** allow us to create UI-kits while retaining a consistent class-naming system. Read more about flavors [here](#what-are-flavors).

## Quickstart
*src = source code, build = final output, demo = demo webpage and documentation*
1. Download the latest release [here](https://github.com/Saunved/mint-css/releases)
2. Open the ```demo/default/index.html``` file in Chrome/Firefox to view the project in its default state

That's it! If you wish to change themes or play with the code files, keep reading.

## Changing themes
1. Start by installing Sass on your computer from [here](https://github.com/sass/dart-sass/releases/tag/1.26.3). *Feel free to read up on Sass if you are unfamiliar with it.*
2. Open a terminal in the current directory and run ```sass --watch ./src/main.scss:./demo/default/output.css```
3. Open the ```src/main.scss``` file and uncomment the theme you wish to keep. Save the file.
4. Open the ```demo/default/index.html``` file in Chrome/Firefox to check if the theme has changed

## Why this project?
* The focus is on being able to make different themes based on various color palettes for prototyping. This is super useful for designers and front-end devs to check how different color combinations might look before implementing them in their existing projects.

* Ever gotten *tired* of the way a framework looks and want to spice things up by changing the UI? Switching over to a new framework or design style requires constantly going back and forth between the documentation and the code and renaming classes and fixing dependencies. **Flavors** will allow people to create unique "UI kits" while retaining most class names and reusing partials and components across flavors.

* Most CSS frameworks (and boilerplates) do not come with good support for dark themes or contrast-conscious typography. These have to be hand-written. This is taken care of by a few if/else statements in sass to check for lightness (HSL) values.

* Allowing people to spin up a good-looking website in record time with all the essential elements styled and a small CSS file size was always an aim.

* Another important idea is to make the CSS as extensible as possible by keeping components decoupled. For example, if you aren't going to use any forms, you can simply comment out the partials/form line in src/main.scss. This is already available in existing frameworks like Bootstrap and Materialize.

* A consistent class naming system will allow various flavors to be interchangeable, giving us the ability to adapt to new flavors quickly. Although this cannot be enforced, we can take good care to use the ```docs/class-list``` file for any classes that we might require.

* The world has moved beyond framework-based grids. I have included the skeleton-css grid directly in the project, but you can always comment out the component from the ```./src/main.scss``` file and use CSS Grids instead.

## What are flavors?
A flavor is a type of UI. E.g. "Material design" is a flavor, or "Flat" is a flavor. I decided not to call it a theme, since that term is used to define the color themes in this project. Flavors contain partials (css code for different UI elements) and components (Javascript-based UI + functionality).

You can create your own flavors. You can even copy and modify some partials and components from the existing flavors if you wish to. To start creating flavors quickly, you can create a copy of the existing ```blueprint``` flavor, and modify it however you wish to. You can refer to the ```default``` flavor to get an idea of the implementation.

A list of class names that you should ideally retain for consistency is provided in this file: [docs/class-list.md](./docs/class-list.md).

## How you can contribute
Refer to the [CONTRIBUTING.md file](https://github.com/Saunved/mint-css/blob/master/CONTRIBUTING.md)

## Credits
* This project is inspired by **skeleton-css**. The grid used is taken directly from [SkeletonCSS Github](https://github.com/dhg/Skeleton.)
* A color file is included along with this project, taken from the **Materialize CSS** project found [here](https://github.com/Dogfalo/materialize). To use the color classes, simply add this to the main.scss file:  
```@import "partials/color.scss"```  
You can find out how to use the color classes [here](https://materializecss.com/color.html).
Bear in mind that this increases the project size by 32.9kb!
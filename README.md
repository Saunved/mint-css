## Intro
mint-css is boilerplate CSS that you can use for prototyping, theming, or even use directly in your projects.  

## Keep the themes coming!
Specify just 4 colors in your theme file, and you're ready to go! **Full support for dark themes and contrast-conscious typography**.  

![alt text](./themes.gif "Themes GIF")

## Quickstart (for designers or non-web developers)
*src = source code, build = final output, demo = demo webpage and documentation*
1. Download the latest release [here](https://github.com/Saunved/mint-css/releases)
2. Open the ```demo/index.html``` file in Chrome/Firefox to view the project in its default state

That's it! If you wish to change themes or play with the code files, keep reading.

## Changing themes
1. Start by installing Sass on your computer from [here](https://github.com/sass/dart-sass/releases/tag/1.26.3). *Feel free to read up on Sass if you are unfamiliar with it.*
2. Open a terminal in the current directory and run ```sass --watch ./src/main.scss:./build/output.css```
3. Open the ```src/main.scss``` file and uncomment the theme you wish to keep. Save the file.
4. Open the ```demo/index.html``` file in Chrome/Firefox to check if the theme has changed

## Modifying and adding things
1. The ```flavors/default``` folder contains the default flavor of ```partials``` and ```components```. One can create another folder inside ```flavors``` and create their own suite of partials and components
2. All partials and components are referred in the ```src/main.scss``` file. So if you create any new flavors or components, please ensure that they are referred to in the main.scss file.
3. You can simply run the command below to start compiling the sass output while you make any changes  
```sass --watch ./src/main.scss:./build/output.css```

The sass command will create an ```build/output.css``` file each time you make any changes to the referred partials or the main.scss file. Open the index.html file to see the results. I recommend creating a local server that automatically updates whenever any files in the folder are changed.

## Why this project?
* The focus is on being able to make different themes based on various color palettes for prototyping. This is super useful for designers and front-end devs to check how different color combinations might look before implementing them in their existing projects.

* A problem with CSS frameworks is that they get in the way of uniqueness with respect to design, and switching over to a new framework or design style requires constantly going back and forth between the documentation and the code. The idea of flavors will allow people to create unique "UI kits" while retaining most class names and reusing existing partials and components where required.

* Most CSS frameworks (and boilerplates) do not come with good support for dark themes or contrast-conscious typography. These have to be hand-written. This is taken care of by a few if/else statements in sass to check for lightness (HSL) values.

* Allowing people to spin up a good-looking website in record time with all the essential elements styled and a small CSS file size was always an aim.

* Another important idea is to make the CSS as extensible as possible by keeping components decoupled. For example, if you aren't going to use any forms, you can simply comment out the partials/form line in src/main.scss. This is already available in existing frameworks like Bootstrap and Materialize.

* A consistent class naming system will allow various flavors to be interchangeable, giving us the ability to adapt to new flavors quickly. Although this cannot be enforced, we can take good care to use the ```docs/class-list``` file for any classes that we might require.

* The world has moved beyond framework-based grids. I have included the skeleton-css grid directly in the project, but you can always comment out the component from the ```./src/main.scss``` file and use CSS Grids instead.

## Themes

![alt text](./themes.gif "Themes GIF")

This repository contains a few existing themes.
You can easily create new themes in the ```src/themes``` folder. Check out the existing themes to get an idea for how the themes are implemented. If you create a new theme, remember to update the main.scss file to refer to it.

### Ideas for creating themes
You can contribute by creating multiple themes for this project.

**You have to specify only 4 colors in the theme file.** The rest of the colors are calculated directly in the ```src/themes/_contrasts.scss``` file based on the lightness (HSL) values of the specified colors.

A great tool to generate themes can be found here:
http://colormind.io/template/material-dashboard/
You can use the following guidelines to make a theme based on the colors given by the tool above:
1) Use the center color for primary color
2) Use the color left of center for secondary color
3) Use the color right or extreme right of center for accent color
4) Use the color to the extreme left for base color  

Of course, you are free to mix and match as you please!

## How you can contribute
1. Add cross-browser compatibility
2. Improve the existing code
2. Remove redundancies in the existing code
3. Add more partials
    - Sidenav
    - Accordions
    etc.
4. Improve the index.html file to add documentation

## Work on existing code
You can work on the existing code in any of the following folders:  
```src/flavors/flavor-name/partials```  
```src/flavors/flavor-name/components```  
```src/themes```

The following files/folders are used only in the index.html file for demonstration purposes. You can edit these files/folders if you are working on the index.html file to add documentation:    
```demo/assets```

# Add new code
## To create partials
1. Create a new file in the ```src/flavors/flavor-name/partials``` folder called ```your-partial-name.scss```
2. Link this partial in the ```src/main.scss``` file

## To create JS-based components
1. Create a new folder in ```src/flavors/flavor-name/components``` called ```your-component-name```
2. Create a scss file in the folder and link it in ```src/main.scss```
3. Create a js file in the folder and link it in ```src/index.html``` 

## What are flavors?
A flavor is a type of UI. E.g. "Material design" is a flavor, or "Flat" is a flavor. I decided not to call it a theme, since that term is used to define the color themes in this project. Flavors contain partials (css code for different UI elements) and components (Javascript-based UI + functionality).

You can create your own flavors. You can even copy and modify some partials and components from the existing flavors if you wish to. This project (currently) contains only one flavor: "default".

A list of class names that you should ideally retain for consistency is provided in this file: [docs/class-list.md](./docs/class-list.md).

## Create documentation
You can add documentation for your created partials or components by creating a section for them inside the index.html file. You can refer to the existing documentation code to get an idea for how to use the CodeViewer helper component.

## Credits
* This project is inspired by **skeleton-css**. The grid used is taken directly from [SkeletonCSS Github](https://github.com/dhg/Skeleton.)
* A color file is included along with this project, taken from the **Materialize CSS** project found [here](https://github.com/Dogfalo/materialize). To use the color classes, simply add this to the main.scss file:  
```@import "partials/color.scss"```  
You can find out how to use the color classes [here](https://materializecss.com/color.html).
Bear in mind that this increases the project size by 32.9kb!

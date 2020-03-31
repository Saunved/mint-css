## Intro
mint-css is boilerplate CSS that you can use for prototyping, theming, or even use directly in your projects.  
It comes with **full support for dark themes and contrast-conscious typography**.

## Quickstart (for designers or non-web developers)
1. Clone (download) this repository
2. Open the ```index.html``` file in Chrome/Firefox to view the project in its default state

That's it! If you wish to change themes or play with the code files, keep reading.

## Going in-depth
1. Start by installing Sass on your computer from [here](https://github.com/sass/dart-sass/releases/tag/1.26.3). *Feel free to read up on Sass if you are unfamiliar with it.*
2. You can add/remove/edit partials in the main.scss file and compile the output using  
```sass --watch main.scss:output.css```

This will create an output.css file each time you make any changes to the referred partials or the main.scss file. Open the index.html file to see the results. I recommend creating a local server that automatically updates whenever any files in the folder are changed.

Current output.css file size with all components (except Materialize colors) included is **17.1kb**.
This size will increase slightly once full cross-browser compatibility is added.

## Why this project?
**This project is inspired by skeleton-css and Materialize CSS and looks to combine the best of both** to create a boilerplate CSS that can be extended in a variety of ways. 
* The focus is on being able to make different themes quickly for prototyping. This is super useful for designers and front-end devs to check how different color combinations might look before implementing them in their existing projects.
* **Allowing people to spin up a good-looking website in record time with all the essential elements styled**
* Another important idea is to make the CSS as extensible as possible by keeping components decoupled. For example, if you don't require a dropdown in the navbar, you can simply comment out the ```partials/dropdown``` line in ```main.scss```. The same applies for all other components.
* The world has moved beyond framework-based grids. Although we have included (directly), the skeleton-css grid - you can always comment out the component from the ```main.scss``` file and use CSS Grids instead.

## Themes

![alt text](./themes.gif "Themes GIF")

This repository contains a few existing themes.
You can easily create new themes in the ```themes``` folder. Check out the existing themes to get an idea for how the themes are implemented. If you create a new theme, remember to update the main.scss file to refer to it.

### Ideas for creating themes
You can contribute by creating multiple themes for this project.

**You have to specify only 4 colors in the theme file.** The rest of the colors are calculated directly in the ```themes/_contrasts.scss``` file based on the lightness (HSL) values of the specified colors.

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
```partials```  
```components```  
```themes```

The following files/folders are used only in the index.html file for demonstration purposes. You can edit these files/folders if you are working on the index.html file to add documentation:    
```assets```  
```style.scss```  

## To create partials
1. Create a new file in the ```partials``` folder called ```your-partial-name.scss```
2. Link this partial in the ```main.scss``` file

## To create JS-based components
1. Create a new folder in ```components``` called ```your-component-name```
2. Create a scss file in the folder and link it in ```main.scss```
3. Create a js file in the folder and link it in ```index.html``` 

## Create documentation
You can add documentation for your created partials or components by creating a section for them inside the index.html file. You can refer to the existing documentation code to get an idea for how to use the CodeViewer helper component.

## Credits
* This project is inspired by **skeleton-css**. The grid used is taken directly from [SkeletonCSS Github](https://github.com/dhg/Skeleton.)
* A color file is included along with this project, taken from the **Materialize CSS** project found [here](https://github.com/Dogfalo/materialize). To use the color classes, simply add this to the main.scss file:  
```@import "partials/color.scss"```  
You can find out how to use the color classes [here](https://materializecss.com/color.html).
Bear in mind that this increases the project size by 32.9kb!
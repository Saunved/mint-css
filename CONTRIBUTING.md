# Contributing to mint-css
Thank you for taking the time to contribute to this project!

## Table of contents

* [Reporting bugs](#reporting-bugs)
* [Suggesting an enhancement](#suggesting-an-enhancement)
* [Modifying the codebase](#modifying-the-codebase)
    - [Fixing bugs](#fixing-bugs)
    - [Adding new themes](#adding-new-themes)
    - [Adding new flavors](#adding-new-flavors)
* [Contributing to documentation](#contributing-to-documentation)
* [Help required with](#help-required-with)
* [Quick how-to](#quick-how-to)

## Reporting bugs
* Check if the bug was reported previously by searching under [Issues](https://github.com/Saunved/mint-css/issues) on Github
* If the bug isn't reported please report it [here](https://github.com/Saunved/mint-css/issues/new/choose)

## Suggesting an enhancement
* If you are a designer or you think certain styles can be improved in existing flavors, you can suggest enhancement [here](https://github.com/Saunved/mint-css/issues/new/choose)

## Modifying the codebase

**Folder structure**
1) Themes are defined in ```src/themes```
2) Flavors are defined in ```src/flavors```
    - The ```flavor-name/partials``` is used to define the partial sass files for that flavor
    - The ```flavor-name/flavor-name.scss``` file is used to import the partials you wish to use. This file is added to Gulp to build the output 
3) Javascript components are shared across flavors and are defined in ```src/components```
4) The [class list](./docs/class-list) file contains a list of classes that must be reused across flavors where applicable 

**Building**
**Gulp** is used to compile the scss files and store the .css and .min.css output in the ```build```

### Fixing bugs
* Open a new pull request and mention the issue number (if present)
* Please write a verbose description to highlight exactly what has been fixed and how

### Adding new themes
You can refer to the following website to quickly create theme colors: [Colormind](http://colormind.io/template/material-dashboard/). Modifications for existing themes will usually not be accepted. 
* **You have to specify only 4 colors in the theme file.** The rest of the colors are calculated directly based on the lightness (HSL) values of the specified colors.

* Create a theme under ```src/themes/theme-name```
* Update ```gulpfile.js``` and add the theme to the array of themes
* Run ```gulp sass``` in the command line and update the stylesheet reference in ```index.html``` to view your new theme
* Open a pull request if you want to add this theme to the main branch

### Adding new flavors
* If you have an idea or you are a designer who wants to implement a flavor, please create a new flavor request [here](https://github.com/Saunved/mint-css/issues/new/choose)
* Create new flavors quickly by simply creating a copy of any of the existing flavors, e.g. ```src/flavors/default``` folder and renaming it to ```your-flavor-name```
* Before creating new classes, always refer to the [class list](./docs/class-list.md) to use the correct class name
* Add the flavor to ```gulpfile.js```
* Run ```gulp build``` to generate ```build/flavor-name``` output css
* Run ```gulp demo``` to generate ```docs/flavor-name/assets/css``` output css
* Open a pull request when you are ready to add your flavor
* **Javascript components are shared across flavors**

### Adding to the class list
* If you want to new classes to the class list file, open a pull request [here](https://github.com/Saunved/mint-css/issues/new/choose) and suggest a style enhancement

## Contributing to documentation
* *Still working on how to structure the documentation!*

## Help required with
1. Adding cross-browser compatibility
2. Improving the existing code (optimizations and removing redundancies)
3. Creating new flavors

## Quick how-to
You can work on the existing code in any of the following folders:  
```src/components```  
```src/flavors/flavor-name/partials```    
```src/themes```

**To create partials**
1. Create a new file in the ```src/flavors/flavor-name/partials``` folder called ```your-partial-name.scss```
2. Link this partial in the ```src/main.scss``` file

**To create JS-based components**
1. Create a new component in ```src/components``` called ```your-component-name```
2. Create a scss file in the relevant ```src/flavors/flavor-name``` folder and link it in ```src/main.scss```
3. Link the JS file in ```src/index.html```

# Contributing to mint-css
Thank you for taking the time to contribute to this project!

## Table of contents

* [Reporting bugs](#reporting-bugs)
* [Fixing bugs](#fixing-bugs)
* [Adding new themes](#adding-new-themes)
* [Adding new flavors](#adding-new-flavors)
* [Suggesting an enhancement](#suggesting-an-enhancement)
* [Contributing to documentation](#contributing-to-documentation)
* [Help required with](#help-required-with)
* [Quick how-to](#quick-how-to)

## Reporting bugs
* Check if the bug was reported previously by searching under [Issues](https://github.com/Saunved/mint-css/issues) on Github
* If the bug isn't reported please report it [here](https://github.com/Saunved/mint-css/issues/new/choose)

## Fixing bugs
* Open a new pull request and mention the issue number (if present)
* Please write a verbose description to highlight exactly what has been fixed and how

## Adding new themes
* You can create new themes under ```src/themes``` and open a pull request for the same
* You can refer to the following website to quickly create theme colors: [Colormind](http://colormind.io/template/material-dashboard/)
* Modifications for existing themes will usually not be accepted
* **You have to specify only 4 colors in the theme file.** The rest of the colors are calculated directly in the ```src/themes/_contrasts.scss``` file based on the lightness (HSL) values of the specified colors.
* Refer to any existing themes to get an idea for how they are implemented
* Fefer to the theme file in ```src/main.scss``` to view your changes once you are done

## Adding new flavors
* Create new flavors quickly by simply creating a copy of the ```src/flavors/blueprint``` folder and renaming it to ```your-flavor-name```
* If you are reusing components from existing flavors, you can either link to them (in which case we have to ensure dependencies are maintained across version changes) or create a separate copy (in which case we have to ensure that bug fixes and modifications in the original are reflected manually).
* Open a pull request when you are ready to add your flavor
* If you have an idea or you are a designer who wants to implement a flavor, please create a new flavor request [here](https://github.com/Saunved/mint-css/issues/new/choose)

## Suggesting an enhancement
* If you are a designer or you think certain styles can be improved in existing flavors, you can suggest enhancement [here](https://github.com/Saunved/mint-css/issues/new/choose)

## Contributing to documentation
* *Still working on how to structure the documentation!*

## Help required with
1. Adding cross-browser compatibility
2. Improving the existing code (optimizations and removing redundancies)
3. Creating new flavors

## Quick how-to
You can work on the existing code in any of the following folders:  
```src/flavors/flavor-name/partials```  
```src/flavors/flavor-name/components```  
```src/themes```

The following files/folders are used only in the index.html file for demonstration purposes. You can edit these files/folders if you are working on the index.html file to add documentation:    
```demo/assets```

**To create partials**
1. Create a new file in the ```src/flavors/flavor-name/partials``` folder called ```your-partial-name.scss```
2. Link this partial in the ```src/main.scss``` file

**To create JS-based components**
1. Create a new folder in ```src/flavors/flavor-name/components``` called ```your-component-name```
2. Create a scss file in the folder and link it in ```src/main.scss```
3. Create a js file in the folder and link it in ```src/index.html```

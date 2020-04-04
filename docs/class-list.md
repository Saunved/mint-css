This file contains a list of CSS classes used in this repository along with information about them. 
**It is intended to serve as a basis for naming classes across flavors to retain consistency.** Whenever you are implementing a new flavor or migrating an existing framework across, ensure that these classes are used wherever applicable. 

## Table of contents
* [Buttons](#buttons)
* [Navigation](#navigation)
* [Table](#table)
* [Form elements](#form-elements)
* [Utility](#utility)
    - [General utility classes](#general-utility-classes)
    - [Extra utility classes](#extra-utility-classes)
* [Cards](#cards)
* [Responsive helpers](#responsive-helpers)

## Buttons
class name | purpose
-----------|-----------
.btn | defines a button
.btn-outline | defines a button with an outline
.btn-small | defines a small button
.btn-large | defines a large button
.btn-float | defines a button with a box shadow that loses that box shadow on hover
.btn-raise | defines a button that acquires a box shadow on hover
.btn-rounded | defines a button with rounded corners
.btn-light | defines a light background button
.btn-dark | defines a dark background button
.btn-secondary | defines a button with a secondary background color
.btn-accent | defines a button with an accent background color
.btn-circle | defines a circular button
.btn-no-shadow | specify a button without any shadow (even on hover)

## Navigation
class name | purpose
-----------|-----------
.navigation | defines a navigation menu wrapper
.logo | defines a logo wrapper
.dropdown | defines a dropdown wrapper
.dropdown-title | defines the dropdown name
.dropdown-content | defines the list of dropdown elements
.navbar-fixed | defines a navbar fixed to the top of the page
.navbar-fixed-bottom | defines a navbar fixed to the bottom of the page
.sidenav | defines sidenav content
.sidenav.active | indicates an active sidenav
.slide-left | defines sidenav that slides in from left
.slide-right | defines sidenav that slides in from right
.rise | defines a sidenav that slides up from below
.drop | defines a sidenav that slides down from above
.trigger | defines the trigger for a sidenav
.close-trigger | defines the close trigger for a sidenav

## Table
class name | purpose
-----------|-----------
.wrapped | defines a table with a border around it
.cells | defines a table with borders around each cell
.separated | defines a table with a bottom border for each row
.striped | defines a table with alternating background color rows
.highlight | defines a table with rows that change background color on hover

## Form elements
class name | purpose
-----------|-----------
.suffix | indicates a suffix element
.prefix | indicates a prefix element
.presuffix | indicates suffix and prefix element
.cover | indicates a wrapper for a form element
.checkmark | indicates a checked checkbox
.dot | indicates a checked radio button


## Utility
### General utility classes
class name | purpose
-----------|-----------
.left | left float
.right | right float
.left-align | text align to the left
.right-align | text align to the right
.center | text-align to the center, vertical align to middle
.shadow | indicates a *bottom shadow* on an element
.clearfix | indicates float clearfix
.inline | indicates ```display:inline-block```
.transparent | unsets the background color
.primary | primary background color
.secondary | secondary background color
.accent | accent background color
.primary-text | primary text color
.secondary-text | secondary text color
.accent-text | accent text color

### Extra utility classes
class name | purpose
-----------|-----------
keep | sets display to block
remove | sets display to none
visible | sets visibility to visible
hidden | sets visibility to hidden
rounded-large | adds a large border-radius
rounded | adds a border-radius
border | adds a border to an element
no-border | removes border from an element
depth-1 | indicates an element with box-shadow level 1 (least)
depth-2 | indicates an element with box-shadow level 2
depth-3 | indicates an element with box-shadow level 3
depth-4 | indicates an element with box-shadow level 4
depth-5 | indicates an element with box-shadow level 5
depth-6 | indicates an element with box-shadow level 6
depth-7 | indicates an element with box-shadow level 7
depth-8 | indicates an element with box-shadow level 8
depth-9 | indicates an element with box-shadow level 9
depth-10 | indicates an element with box-shadow level 10 (most)


## Cards
class name | purpose
-----------|-----------
.card | defines a card
.box | defines a box
.hoverable | defines an element that acquires a box shadow on hover
.card-title | defines the title of a card
.card-content | defines the content of a card
.card-footer | defines the footer of a card
.card-image | defines an image contained in a card

## Responsive helpers
class name | purpose
-----------|-----------
.only-phone | content will be visible only on phones
.above-tablet-portrait | content will be visible only above tablet portrait width
.above.tablet-landscape | content will be visible only above tablet landscape width
.above-desktop | content will be visible only above desktop width
.above-desktop-large | content will be visible only above large desktop width
.below-table-landscape | content will be visible only below tablet landscape width
.below-desktop | content will be visible only below desktop width
.below-desktop-large | content will be visible only below large desktop width

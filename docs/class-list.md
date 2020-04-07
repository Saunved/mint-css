> There are only two hard problems in Computer Science: cache invalidation and naming things  
> — Phil Karlton

This file contains a list of CSS classes used in this repository along with semantic information about them. 
**They are intended to serve as a basis for naming classes across flavors to retain consistency.** 
The actual implementation of classes is left upto the author of each flavor. It is recommended that you define ALL the classes specified in the class list to ensure smoother migrations from or to existing flavors.

This class list **does not** deal with layouts since they do not factor into how various elements are styled.

## Table of contents
* [Buttons](#buttons)
* [Navigation](#navigation)
* [Table](#table)
* [Form elements](#form-elements)
* [Utility](#utility)
    - [General utility classes](#general-utility-classes)
    - [Extra utility classes](#extra-utility-classes)
* [Elements](#elements)
* [Modal](#modal)
* [Media](#media)
* [Cards](#cards)
* [Color classes](#color-classes)
* [Responsive helpers](#responsive-helpers)

## Buttons
Class | Purpose
-----------|-----------
.btn | defines a normal button
.btn-small | defines a small button
.btn-large | defines a large button
.btn-default | defines the default button
.btn-outline | defines a button with an outline
.btn-float | defines a button with a box shadow that loses that box shadow on hover
.btn-raise | defines a button that acquires a box shadow on hover
.btn-rounded | defines a button with rounded corners
.btn-light | defines a light background button
.btn-dark | defines a dark background button
.btn-secondary | defines a button with a secondary background color
.btn-accent | defines a button with an accent background color
.btn-circle | defines a circular button
.btn-disabled | defines a disabled button
.btn-group | defines a wrapper for a group of buttons

## Navigation
Class | Purpose
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
Class | Purpose
-----------|-----------
.wrapped | defines a table with a border around it
.cells | defines a table with borders around each cell
.separated | defines a table with a bottom border for each row
.striped | defines a table with alternating background color rows
.highlight | defines a table with rows that change background color on hover

## Form elements
Class | Purpose
-----------|-----------
.form-control | defines a wrapper around (usually) an input and a label
.input-group | defines an input group form prefix, suffix, and presuffix
.suffix | indicates a suffix element on input:text
.prefix | indicates a prefix element on input:text
.presuffix | indicates suffix and prefix element on input:text
.cover | indicates a wrapper for custom radio buttons or checkboxes
.checkmark | indicates a checked checkbox
.dot | indicates a checked radio button
.custom-input | custom input element
.custom-file | custom file input
.custom-select | indicates a customized select element
.custom-toggle | indicates a customized toggle switch
.custom-range | indicates a customized range picker

## Utility
### General utility classes
Class | Purpose
-----------|-----------
.left | left float
.right | right float
.left-align | text align to the left
.right-align | text align to the right
.center | text-align to the center, vertical align to middle
.clearfix | indicates float clearfix
.clear-left | indicates a clear left
.clear-right | indicates a clear right
.inline-block | indicates ```display:inline-block```
.transparent | unsets the background color

### Extra utility classes
Class | Purpose
-----------|-----------
.display-block | sets display to block
.display-none | sets display to none
.visible | sets visibility to visible
.hidden | sets visibility to hidden
.rounded | adds a border-radius
.rounded-large | adds a large border-radius
.border | adds a border to an element
.no-border | removes border from an element
.no-padding | remove all padding from an element
.no-margin | remove all margins from an element
.uppercase | transforms text to uppercase
.lowercase | transforms text to lowercase
.capitalize | transforms text to capitalize
.text-justify | indicates justified text
.break-all | indicates a ```word-break: break-all```
.break-word | indicates a ```word-break: keep-all```
.hoverable | indicates element that gains styling on hover
.shadow | indicates a box-shadow on an element
.no-shadow | removes box-shadow from an element
.tooltip | indicates tooltip that appears on hover over (usually) some icon
.depth-1 | indicates an element with box-shadow level 1 (least)
.depth-2 | indicates an element with box-shadow level 2
.depth-3 | indicates an element with box-shadow level 3
.depth-4 | indicates an element with box-shadow level 4
.depth-5 | indicates an element with box-shadow level 5


## Elements
Class | Purpose
-----------|-----------
.breadcrumb | indicates a wrapper for a breadcrumb element
.progress | indicates a wrapper for a progress bar
.progress-bar | indicates a progress bar
.progress-bar-success | indicates a (usually) green progress bar
.progress-bar-info | indicates a (usually) blue progress bar
.progress-bar-warning | indicates a (usually) yellow progress bar
.progress-bar-danger | indicates a (usually) red progress bar
.badge | indicates a badge (a small element with text inside, e.g. unread count)
.badge-dark | indicates a dark badge
.badge-light | indicates a light badge
.badge-success | indicates a (usually) green badge
.badge-info | indicates a (usually) blue badge
.badge-warning | indicates a (usually) blue badge
.badge-danger | indicates a (usually) red 
.toast | indicates a toast


## Modal
Class | Purpose
-----------|-----------
.modal  | defines a modal
.modal-close | defines the close button for a modal
.modal-header | defines a modal header
.modal-content | defines a modal's content area
.modal-footer | defines a modal's footer

## Media
Class | Purpose
-----------|-----------
img.img-responsive | indicates a responsive image
video.video-responsive | indicates a responsive video
.img-circle | indicates a circular image
.img-thumbnail | indicates a thumbnail image


## Cards
Class | Purpose
-----------|-----------
.card | defines a card
.box | defines a box
.hoverable | defines an element that acquires a box shadow on hover
.card-title | defines the title of a card
.card-content | defines the content of a card
.card-footer | defines the footer of a card
.card-image | defines an image contained in a card

## Color classes
Class | Purpose
-----------|-----------
.primary | primary background color
.secondary | secondary background color
.accent | accent background color
.primary-text | primary text color
.secondary-text | secondary text color
.accent-text | accent text color
.success | (usually) green background color
.success-text | (usually) green text color
.danger | (usually) red background color
.danger-text | (usually) red text color
.info | (usually) blue background color
.info-text | (usually) blue text color
.warning | (usually) yellow background color
.warning-text | (usually) yellow text color


## Responsive helpers
Class | Purpose
-----------|-----------
.only-phone | content will be visible only on phones
.above-tablet-portrait | content will be visible only above tablet portrait width
.above.tablet-landscape | content will be visible only above tablet landscape width
.above-desktop | content will be visible only above desktop width
.above-desktop-large | content will be visible only above large desktop width
.below-table-landscape | content will be visible only below tablet landscape width
.below-desktop | content will be visible only below desktop width
.below-desktop-large | content will be visible only below large desktop width

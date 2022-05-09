# Star Signs

Star Signs is a simple app cerated as a space to practice the implementation React features and reinforce the learning of the principals behind them.

Version one of the project presents users with a list of star signs. When a sign is clicked the an astrological reading for that day will appear on the screen.

## Application Design

### Components

[App](#App)

[Signs](#Signs)

#### App

the app component renders a [React Fragment](https://reactjs.org/docs/fragments.html) where in the [Material UI](#styling) [CSS Baseline](https://mui.com/material-ui/react-css-baseline/) is set.

App then returns the [Signs](#signs) component.

#### Signs

Signs contains a static array of objects
each object is made up of an id (number) and name (string)

the component Signs returns an unordered list of items generated by the starSigns function

starSigns is a function that takes in the Signs array of objects, deconstructs them (by name and id), maps the array elements and returns a list of star signs (name) as list elements with each array element's id as the list item's key.

## Styling

Star Signs is styled with the [Material UI](https://mui.com/) component library.

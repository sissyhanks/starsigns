# Star Signs

[LIVE DEMO](https://sissyhanks.github.io/starsigns)

Star Signs is a simple app cerated as a space to practice the implementation React features and reinforce the learning of the principals behind them.

Version one of the project presents users with a list of star signs. When a sign is clicked the an astrological reading for that day will appear on the screen.

## Application Design

### Components

[App](#App)

[WelcomeSigns](#WelcomeSigns)

[ShowSigns](#ShowSigns)

[SignNav](#SignNav)

#### App

the app component conditionally renders a [React Fragment](https://reactjs.org/docs/fragments.html) based on the [state](https://www.geeksforgeeks.org/how-to-change-the-state-of-react-component-on-click/#:~:text=We%20have%20to%20set%20initial,inside%20the%20function%20using%20setState.) of the App component

App then returns the [Signs](#signs) component.

#### WelcomeSigns

Signs contains a static array of objects
each object is made up of an id (number) and name (string)

the component Signs returns an unordered list of items generated by the starSigns function

starSigns is a function that takes in the Signs array of objects, deconstructs them (by name and id), maps the array elements and returns a list of star signs (name) as list elements with each array element's id as the list item's key.

#### ShowSigns

ShowSigns is passed the state of the App component as a [prop](https://medium.com/@jasminegump/passing-data-between-a-parent-and-child-in-react-deea2ec8e654) and, when the conditions off rendering this component are met, displays the name of the prop passed to it.

#### SignNav

SignNav is a react component with a list of sign options that is shown on the ShowSigns display. the list of signs are clickable buttons that update the state of the ShowSigns component when clicked.
the ShowSigns component passes the call back function `nuSign` to the SignNav component as a prop that is triggered within SignNav's click event handler to update the state of the ShowSign component with the value of any button clicked within the SignNav component

## Styling

Star Signs is styled with the [Material UI](https://mui.com/) component library.

Do you love handling events?
if so use [currentTarget](https://stackoverflow.com/questions/58193507/handling-icon-onclick-events-with-material-ui-and-reactjs) in place of target to pull info from events

All icons by [Icons8](https://icons8.com/)

## Deployment

Deployed to [GitHub Pages](https://github.com/gitname/react-gh-pages)

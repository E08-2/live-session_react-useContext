// * useContext Introduction

// So far, we have looked at two key hooks: useState and useEffect
// (There are several other hooks - and you can even make your own custom hook!)
// ? More information on hooks: https://reactjs.org/docs/hooks-reference.html

// Now let's look at another useful hook: useContext()

// * What is useContext?

// useContext can be used as an alternative to props.
// useContext lets you pass data DIRECTLY from the source (the "provider").
// ... This data can then be used by the descendent component which needs it (the "consumer").

// * So why would we need the useContext hook?

// By now, you are familiar with having to pass data down through props, and creating multiple props to do so.
// For example, to get data from a parent component to a great-grandchild component...
// * This process is called "PROP-DRILLING". It can make a complex app quite hard to manage/maintain


// ===================================
// #region Diagram 1 - Prop drilling
// ? Diagram 1 - Prop drilling

//*            data                  data                       data       Uses the data
// PARENT ---> props ---> CHILD ---> props ---> GRANDCHILD ---> props ---> GREAT-GRANDCHILD
//#endregion
// ===================================


// * How can useContext help with prop-drilling?

// useContext gives a way out of this situation!
// It allows us to pass data from the parent (the "provider") to (in the current example) the great-grandchild (the "consumer").


// ===================================
// #region Diagram 2 - useContext

//*       data   Uses the data
// PARENT ---> GREAT-GRANDCHILD

// #endregion
// ===================================


// * So how do we actually USE useContext()

// In the above example, useContext() would work in the following way:

// * 1. Create the "context" to pass the data in the PARENT component.
// * 2. Make the PARENT component the PROVIDER of some data
// * 3. Let the GREAT-GRANDCHILD "consume" the data provided by App.js
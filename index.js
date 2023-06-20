// Function 1: receivesAFunction
const receivesAFunction = (callback) => {
    callback(); // Call the callback function
  }
  
  // Function 2: returnsANamedFunction
  const returnsANamedFunction = () => {
    // Define a named function
    const namedFunction = () => {
      console.log("This is a named function");
    };
  
    return namedFunction; // Return the named function
  }
  
  // Function 3: returnsAnAnonymousFunction
  const returnsAnAnonymousFunction = () => {
    // Return an anonymous function directly
    return () => {
      console.log("This is an anonymous function");
    };
  }
  
// userInfo.js


let idCounter = 1;  

function createUserProfiles(names, modifiedNames) {
   //check if names are already in the profile collection and create a new one if it doesn't exist already and not modified names already 
  if (names.length !== modifiedNames.length) {

    // Throwing an error if the arrays are not of the same length
    throw new Error("Arrays must have the same length");
  }

  // Creating a new array to store the processed results
  const userProfiles = [];


  for (let i = 0; i < names.length; i++) {
    const originalName = names[i];
    const modifiedName = modifiedNames[i];

    userProfiles.push({
      id: idCounter++,
      originalName,
      modifiedName,
    });
  }

  return userProfiles;
}
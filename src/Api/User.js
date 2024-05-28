async function CreateUser(usernameValue, passwordValue, userDescriptionValue, userImageValue, userResumoValue ){
    try{
      const username = usernameValue;
      const password = passwordValue;
      const userDescription = userDescriptionValue;
      const userImage = userImageValue;
      const userResumo = userResumoValue;
      const createdUser = await Parse.User.signUp(usernameValue, passwordValue, userDescriptionValue, userImageValue, userResumoValue);
    }catch(error){
      console.log(error);
    }
}

async function LoginUser(usernameValue, passwordValue){
    try{
      const username = usernameValue;
      const password = passwordValue;
      const loggedInUser = await Parse.User.logIn(usernameValue, passwordValue);
    }catch(error){
        console.log(error);
    }
    const currentUser = await Parse.User.current();
    console.log( loggedInUser === currentUser);
}

const getCurrentUser = async function () {
    	const currentUser = await Parse.User.current();
    	if (currentUser !== null) {
    	    Alert.alert(
    	      'Success!',
    	      `${currentUser.get('username')} is the current user!`,
        );
    	  }
    	return currentUser;
};
const isUserLoggedIn = () => {
    const userId = JSON.parse(localStorage.getItem('user'));
    // console.log(userId);
    if (userId)
        return true
    else return false
}
export default isUserLoggedIn;
const authInit = () => {
    const toggleRegistrationAuth = document.querySelector('.sign-up__sign-in-btn')
    const toggleRegistrationReg = document.querySelector('.sign-up__sign-up-btn')
    const toggleAuthorisationAuth = document.querySelector('.sign-in__sign-in-btn')
    const toggleAuthorisationReg = document.querySelector('.sign-in__sign-up-btn')

    if (!toggleRegistrationAuth) return
    if (!toggleRegistrationReg) return
    if (!toggleAuthorisationAuth) return
    if (!toggleAuthorisationReg) return

    const signIn = document.querySelector('.sign-in')
    const signUp = document.querySelector('.sign-up')
    
    const handleToggleSignIn = () => {
        signIn.classList.add('sign-in_active')
        signUp.classList.remove('sign-up_active')
    }
    
    const handleToggleSignUp = () => {
        signUp.classList.add('sign-up_active')
        signIn.classList.remove('sign-in_active')
    }

    toggleRegistrationAuth.addEventListener('click', handleToggleSignIn)
    toggleRegistrationReg.addEventListener('click', handleToggleSignUp)
    toggleAuthorisationAuth.addEventListener('click', handleToggleSignIn)
    toggleAuthorisationReg.addEventListener('click', handleToggleSignUp)
}

export default authInit
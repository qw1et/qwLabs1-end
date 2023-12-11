import A11yDialog from "a11y-dialog"

const requestDialogReg = () => {
    const regContainer = document.querySelector('#dialog-reg')
    if (!regContainer) return 
    const dialogReg = new A11yDialog(regContainer)
}
export default requestDialogReg
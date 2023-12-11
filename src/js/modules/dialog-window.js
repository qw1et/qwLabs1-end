import A11yDialog from "a11y-dialog"

const requestDialogInit = () => {
    const container = document.querySelector('#dialog-window')
    if (!container) return 
    const dialog = new A11yDialog(container)
}
export default requestDialogInit
import requestDialogInit from "./modules/dialog-window"
import requestDialogReg from "./modules/dialog-reg"
import authInit from "./modules/btn-hide"
import menuInit from "./modules/toggle-menu"

const init = () => {
    requestDialogInit()
    requestDialogReg()
    authInit()
    menuInit()
    
}
 init ()

import requestDialogInit from "./modules/dialog-window"
import requestDialogReg from "./modules/dialog-reg"
import authInit from "./modules/btn-hide"
import menuInit from "./modules/toggle-menu"
import swiper from "./modules/slider"

const init = () => {
    requestDialogInit()
    requestDialogReg()
    authInit()
    menuInit()
    swiper()
}

init ()

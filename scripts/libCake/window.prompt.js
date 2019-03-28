(() => {
    if(window.isElectron) {
        const ipcRenderer = require('electron').ipcRenderer

        window.prompt = function prompt(message, defaultValue) {
            return ipcRenderer.sendSync('window.prompt', { message, defaultValue })
        }
    }
})()

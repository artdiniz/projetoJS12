(() => {
    window.isElectron = (
        window && window.process && window.process.type && typeof window.process.type === 'string'
    ) || false
})()
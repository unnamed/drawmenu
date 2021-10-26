const { BrowserWindow, app } = require('electron');
const path = require('path');

async function createWindow() {
    const win = new BrowserWindow({
        icon: 'icon.ico',
        show: false,
        backgroundColor: '#1d2126',
        frame: false,
        titleBarStyle: 'hidden',
        nodeIntegration: true
    });

    win.maximize();
    win.show();

    await win.loadFile(path.join(__dirname, 'index.html'));

    return win;
}

app.on('ready', async () => {
    await createWindow();
});

app.on('window-all-closed', () => app.quit());
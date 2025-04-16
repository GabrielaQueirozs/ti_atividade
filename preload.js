// arquivo de pre carregamento e reforço de segurança na comunicação entre processos (IPC)

//const { contextBridge, ipcRenderer } = require("electron")

// importaçao dos recursos do framework
// contextbridge segunrança | ipcrenderer comunicação
const {contextBridge,ipcRenderer} = require('electron')
const cliente = require('./src/models/cliente')

// Enviar ao main um pedido para conexão com o banco de dados e troca do icone no processo de renderização(index.html)
ipcRenderer.send('db-connect')

contextBridge.exposeInMainWorld('api',{
    clientWindow: () => ipcRenderer.send('client-Window'),
    osWindow: () => ipcRenderer.send('os-Window'),
    dbStatus:(message)=>ipcRenderer.on('db-status', message),
    newCliente: (client) => ipcRenderer.send('new-Client', client),
    resetForm: 
})

function dbStatus(message){
    ipcRenderer.on('db-status',message)
}
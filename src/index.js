const { Client, LocalAuth } = require("whatsapp-web.js")
const qrcode = require("qrcode-terminal")

const client = new Client({ authStrategy: new LocalAuth() })

client.on("qr", (qr) => {
    // Generate and scan this code with your phone
    qrcode.generate(qr, { small: true })
})

client.on("ready", () => {
    console.log("Client is ready!")
})

client.on("message", (msg) => {
    console.log(`${msg.from} => ${msg.body}`)
})

client.initialize()

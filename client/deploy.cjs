const ftp = require("basic-ftp");
const path = require("path");

async function deploy() {
    const client = new ftp.Client();
    client.ftp.verbose = true;

    try {
        await client.access({
    host: "publishpixel.in",
    user: "u477921188",
    password: "Balu_1994",
    secure: true,        // still use TLS
    secureOptions: { rejectUnauthorized: false } // ignore certificate errors
});


        console.log("Connected to FTP server.");

        // Go to the folder to upload
        await client.cd(".");

        // Upload all files from dist
        await client.uploadFromDir(path.join(__dirname, "dist"));

        console.log("Deployment complete!");
    } catch (err) {
        console.error(err);
    }
    client.close();
}

deploy();

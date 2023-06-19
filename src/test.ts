import "dotenv/config";
import {Midjourney} from "../src";

/**
 *
 * a simple example of how to use the imagine command
 * ```
 * npx tsx example/imagine.ts
 * ```
 */
async function main() {
    // fetch("https://www.google.com").then(()=>{console.log('fetch over')}).catch((error)=>{console.log('fetch failed!',error)})
    const client = new Midjourney({
        // ServerId: <string>"1111293074757402744",
        // ChannelId: <string>"1111293075222954005",
        // // SalaiToken: <string>"MTAxNzk1NDM4Mjg5NTEzMjY4Mg.GaEFTH.dKjjJSYTC-ij50aQwWY8H7doafaA-hnNiiscK8",
        // SalaiToken: <string>"MTAxNzk1NDM4Mjg5NTEzMjY4Mg.G9gdYZ.uj9MsCXdydJYVPc0dl23KdsrrQDIW-UAgQCML8",
        ServerId: <string>"1120325892808396882",
        ChannelId: <string>"1120325892808396885",
        // SalaiToken: <string>"MTAxNzk1NDM4Mjg5NTEzMjY4Mg.GaEFTH.dKjjJSYTC-ij50aQwWY8H7doafaA-hnNiiscK8",
        SalaiToken: <string>"MTAxMzU5MTIzMTM0NDk0MzEyNA.GNCg1l.wbNZjkW_kxLARSemJRXCF6jEGqtx31k8QSv-lE",
        Debug: true,
        Ws: true,
        Proxy: "http://127.0.0.1:10809"
    });
    const msg = await client.Imagine("A giant space shipyard around moon", (uri: string) => {
        console.log("loading", uri);
    });
    console.log({msg});
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});

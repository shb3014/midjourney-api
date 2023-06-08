import "dotenv/config";
import { Midjourney } from "../src";
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
        ServerId: <string>"1111293074757402744",
        ChannelId: <string>"1111293075222954005",
        SalaiToken: <string>"MTAxNzk1NDM4Mjg5NTEzMjY4Mg.GaEFTH.dKjjJSYTC-ij50aQwWY8H7doafaA-hnNiiscK8",
        Debug: true,
        Ws:true,
    });
    const msg = await client.Imagine("A little pink elephant", (uri: string) => {
        console.log("loading", uri);
    });
    console.log({ msg });
}
main().catch((err) => {
    console.error(err);
    process.exit(1);
});

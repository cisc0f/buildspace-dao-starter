import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x147356855868Ee64406201910387Cf92ECEE7E45");

(async () => {
    try{
        await editionDrop.createBatch([
            {
                name: "Ship Engine",
                description: "This NFT will give you access to ShipDAO",
                image: readFileSync("scripts/assets/ship-engine.png"),
            },
        ]);
        console.log("Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("Failed to create the new NFT", error);
    }
})();
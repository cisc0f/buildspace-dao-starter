import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
    try{
        const editionDropAddress = await sdk.deployer.deployEditionDrop({
            name: "ShipDAO Membership",
            description: "A DAO to become a shipowner",
            image: readFileSync("scripts/assets/shipdao.png"),
            primary_sale_recipient: AddressZero,
        });

        const editionDrop = sdk.getEditionDrop(editionDropAddress);
        const metadata = await editionDrop.metadata.get();

        console.log("Successfully deployed edition drop contract, address:", editionDropAddress);
        console.log("edition drop metadata:", metadata);
    } catch (error) {
        console.log("Failed to deployed edition drop contract:", error);
    }
})();
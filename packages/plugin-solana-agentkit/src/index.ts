import { Plugin } from "@elizaos/core";
import createToken from "./actions/createToken.ts";

export const solanaAgentkitPlguin: Plugin = {
    name: "solana",
    description: "Solana Plugin with solana agent kit for TELE",
    actions: [createToken],
    evaluators: [],
    providers: [],
};

export default solanaAgentkitPlguin;

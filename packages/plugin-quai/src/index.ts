import { Plugin } from "@elizaos/core";
import transfer from "./actions/transfer";

export const quaiPlugin: Plugin = {
    name: "quai",
    description: "Quai Plugin for TELE",
    actions: [transfer],
    evaluators: [],
    providers: [],
};

export default quaiPlugin;

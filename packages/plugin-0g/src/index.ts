import { Plugin } from "@elizaos/core";
import { zgUpload } from "./actions/upload";

export const zgPlugin: Plugin = {
    description: "ZeroG Plugin for TELE",
    name: "ZeroG",
    actions: [zgUpload],
    evaluators: [],
    providers: [],
};

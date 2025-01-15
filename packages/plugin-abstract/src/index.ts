import { Plugin } from "@elizaos/core";

import { transferAction } from "./actions";

export const abstractPlugin: Plugin = {
    name: "abstract",
    description: "Abstract Plugin for TELE",
    actions: [transferAction],
    evaluators: [],
    providers: [],
};

export default abstractPlugin;

import { Plugin } from "@elizaos/core";

import { TransferAction } from "./actions";

export const cronosZkEVMPlugin: Plugin = {
    name: "cronoszkevm",
    description: "Cronos zkEVM plugin for TELE",
    actions: [TransferAction],
    evaluators: [],
    providers: [],
};

export default cronosZkEVMPlugin;

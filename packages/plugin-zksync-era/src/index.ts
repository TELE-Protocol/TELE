import { Plugin } from "@elizaos/core";

import { TransferAction } from "./actions/";

export const zksyncEraPlugin: Plugin = {
    name: "zksync-era",
    description: "ZKsync Era Plugin for TELE",
    actions: [TransferAction],
    evaluators: [],
    providers: [],
};

export default zksyncEraPlugin;

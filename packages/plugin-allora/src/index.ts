import { Plugin } from "@elizaos/core";
import { getInferenceAction } from "./actions/getInference.ts";
import { topicsProvider } from "./providers/topics.ts";

export const alloraPlugin: Plugin = {
    name: "Allora Network plugin",
    description: "Allora Network plugin for TELE",
    actions: [getInferenceAction],
    evaluators: [],
    providers: [topicsProvider],
};

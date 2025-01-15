import { Plugin } from "@elizaos/core";
import { sgxAttestationProvider } from "../providers/sgxAttestationProvider";

export const sgxPlugin: Plugin = {
    name: "sgx",
    description: "Intel SGX plugin for TELE, providing SGX attestation",
    actions: [],
    providers: [sgxAttestationProvider],
    evaluators: [],
    services: [],
    clients: [],
};

import { createClientComponents } from "./createClientComponents";
import { createSystemCalls } from "./createSystemCalls";
import { setupNetwork } from "./setupNetwork";
import { getEntities } from "@dojoengine/react";

export type SetupResult = Awaited<ReturnType<typeof setup>>;

/**
 * Sets up the necessary components and network utilities.
 *
 * @returns An object containing network configurations, client components, and system calls.
 */
export async function setup() {
    // Initialize the network configuration.
    const network = await setupNetwork();

    // Create client components based on the network setup.
    const components = createClientComponents(network);

    // await getEntities(network.toriiClient, network.contractComponents as any);

    // Establish system calls using the network and components.
    const systemCalls = createSystemCalls(network, components);

    return {
        network,
        components,
        systemCalls,
    };
}

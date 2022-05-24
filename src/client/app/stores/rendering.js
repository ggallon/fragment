import { writable } from "svelte/store";
import { client } from "../client";
import { keepInSync, rehydrate } from "./utils";

const key = "rendering";

export const SIZES = {
    FIXED: "fixed",
    PRESET: "preset",
    ASPECT_RATIO: "aspect-ratio",
    MONITOR: "monitor",
    SCALE: "scale",
};

export const current = writable({
    ...rehydrate(`fragment.rendering`, {
        width: 500,
        height: 500,
        pixelRatio: 1,
        resizing: SIZES.FIXED,
        aspectRatio: 1,
        scale: 1,
        preset: 'a4',
    }, true)
});

keepInSync(`fragment.rendering`, current);

export const threshold = writable(rehydrate("fragment.threshold", 0, false));
keepInSync("fragment.threshold", threshold);

export const monitors = writable([]);
export const canvases = writable([]);

/* multisampling store */
export const multisampling = writable(rehydrate("multisampling", [], true));
keepInSync("multisampling", multisampling);

/* sync across clients */
let isSynchronized = false;

export const sync = writable(isSynchronized);

function checkForSync({ clientCount } = {}) {
    let prev = isSynchronized;
    isSynchronized = clientCount > 0;

    if (prev && !isSynchronized) {
        console.warn("[fragment] Sketch is running at specified framerate.");
    } else if (!prev && isSynchronized) {
        console.warn("[fragment] Multiple instances of Fragment detected. Running sketch(s) at simulated framerate.");
    }

    if (prev !== isSynchronized) {
        sync.set(isSynchronized);
    }
}

client.on('start', checkForSync);
client.on('client-connect', checkForSync);
client.on('client-disconnect', checkForSync);

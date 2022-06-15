import { writable } from "svelte/store";
import { keepInSync, rehydrate } from "./utils";

export const IMAGE_ENCODINGS = ["png", "jpeg", "webp"];



export const VIDEO_FORMATS = {
	FRAMES: "frames",
	MP4: "mp4",
	GIF: "gif",
	WEBM: "webm",
};

export const exports = writable({
	...rehydrate(`fragment.exports`, {
		quality: 0.92,
		imageEncoding: IMAGE_ENCODINGS[0],
		videoFormat: Object.values(VIDEO_FORMATS)[0],
		pixelsPerInch: 72,
		framerate: 60,
		useDuration: true,
	}, false)
});


keepInSync(`fragment.exports`, exports);

export const recording = writable(false);

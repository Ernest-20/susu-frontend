// a small helper to simulate network latency or delay
// (like "Creating account..." on a button) actually get a chance to show.
// USage: awiat mockDelay(800)  →  pause for 800ms before continuing

export function mockDelay(ms =800) {
    return new Promise((resolve) => setTimeout(resolve,ms));
}
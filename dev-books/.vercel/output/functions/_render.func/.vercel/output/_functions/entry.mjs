import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_De1DKbDu.mjs';
import { manifest } from './manifest_BZJozXEU.mjs';
import { onRequest } from './_noop-middleware.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_Bnf2bTrn.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_xyNWRKU-.mjs')],
]);;

const _page0 = () => import('./pages/404.astro.mjs');
const _page1 = () => import('./pages/libro/_id_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const _page3 = () => import('./pages/_image.astro.mjs');
const pageMap = new Map([
    ["src/pages/404.astro", _page0],
    ["src/pages/libro/[id].astro", _page1],
    ["src/pages/index.astro", _page2],
    ["node_modules/.pnpm/astro@5.0.0-beta.1_rollup@4.22.4_typescript@5.6.2/node_modules/astro/dist/assets/endpoint/generic.js", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "41e9eb80-c3e5-4dec-aa05-8e16106c1f75",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

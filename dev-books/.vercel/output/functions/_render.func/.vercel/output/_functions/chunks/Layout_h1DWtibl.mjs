import { c as createComponent, r as renderTemplate, a as addAttribute, f as renderScript, b as createAstro, d as renderComponent, g as renderHead, h as renderSlot } from './astro/server_BWafY5Bs.mjs';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/Andre/OneDrive/Escritorio/astro/dev-books/node_modules/.pnpm/astro@5.0.0-beta.1_rollup@4.22.4_typescript@5.6.2/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Andre/OneDrive/Escritorio/astro/dev-books/node_modules/.pnpm/astro@5.0.0-beta.1_rollup@4.22.4_typescript@5.6.2/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body> <div> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "C:/Users/Andre/OneDrive/Escritorio/astro/dev-books/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };

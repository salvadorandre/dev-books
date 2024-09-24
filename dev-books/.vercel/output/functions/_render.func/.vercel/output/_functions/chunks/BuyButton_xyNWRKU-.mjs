import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro } from './astro/server_BWafY5Bs.mjs';

const $$Astro = createAstro();
const $$BuyButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BuyButton;
  const SPAIN = "ES";
  const country = Astro2.request.headers.get("X-Vercel-IP-Country") ?? "ES";
  const storeCountry = country === SPAIN ? "spain" : "usa";
  const countryName = country === SPAIN ? "Spain" : "United States";
  const { buy } = Astro2.props;
  const url = buy[storeCountry];
  return renderTemplate`${maybeRenderHead()}<a title="Comprar Libro" target="_blank" rel="noopener noreferrer" class="text-balance inline-flex gap-2 items-center bg-yellow-400 hover:bg-yellow500 active:bg-yellow-600 text-black font-bold py-2 px-4
                    rounded-lg border border-yellow-500 transition duration-200 ease-in-out hover:scale105 justify-center text-center"${addAttribute(url, "href")}>
Comprar en Amazon ${countryName} </a>`;
}, "C:/Users/Andre/OneDrive/Escritorio/astro/dev-books/src/components/BuyButton.astro", void 0);

const $$file = "C:/Users/Andre/OneDrive/Escritorio/astro/dev-books/src/components/BuyButton.astro";
const $$url = undefined;

export { $$BuyButton as default, $$file as file, $$url as url };

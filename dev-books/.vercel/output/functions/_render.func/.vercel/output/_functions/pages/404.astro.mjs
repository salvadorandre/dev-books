/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BWafY5Bs.mjs';
import { $ as $$Layout } from '../chunks/Layout_h1DWtibl.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404: Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28"> <div class="w-full lg:w-1/2"> <img class="w-full rounded-lg mr-5 w-48 rounded" src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGt2ZngyZGZzbHZhdzhmNWZwYXM5aDIzdDV5bHB5N2lzejl4eGU0ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SJXzadwbexJEAZ9S1B/giphy.gif" alt=""> </div> <div class="w-full lg:w-1/2"> <h1 class="py-4 text-3xl lg:text-4xl font-extrabold text-white-800">Looks like you've found the doorway to the great nothing</h1> <p class="py-4 text-base text-white-800">The content you’re looking for doesn’t exist. Either it was removed, or you mistyped the link.</p> <p class="py-2 text-base text-white-800">Sorry about that! Please visit our hompage to get where you need to go.</p> <a href="/" class="w-full lg:w-auto my-4 block text-center border rounded-md px-1 sm:px-16 py-5 bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Go back to Homepage</a> </div> </div> ` })}`;
}, "C:/Users/Andre/OneDrive/Escritorio/astro/dev-books/src/pages/404.astro", void 0);

const $$file = "C:/Users/Andre/OneDrive/Escritorio/astro/dev-books/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };


export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-CMJx0Uvu.js",
      "chunk-DQuEr4T6.js",
      "chunk-DmKS4ipx.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7KiLtaJ1.js",
      "chunk-DQuEr4T6.js",
      "chunk-DmKS4ipx.js"
    ],
    "route": "/servicios"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C5tREbXG.js",
      "chunk-DmKS4ipx.js"
    ],
    "route": "/proyectos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CjINt1iS.js",
      "chunk-DQuEr4T6.js",
      "chunk-DmKS4ipx.js",
      "chunk-gXWSgGua.js"
    ],
    "route": "/nosotros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C4Sup-jp.js",
      "chunk-DQuEr4T6.js",
      "chunk-DmKS4ipx.js",
      "chunk-gXWSgGua.js"
    ],
    "route": "/contacto"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 10212, hash: '7bad001f9ab86f1c3352535b626b3bc39039f244dbb05f0210a69999033becb1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 946, hash: '388cc5758384bd66002e5f832d6d50786256840ea861e9a4aecfa35d9569e23f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'proyectos/index.html': {size: 45518, hash: 'd4c134a45b77f337c7971c88335f6ecc71eac11f0be0aa6766b760fa1a21a943', text: () => import('./assets-chunks/proyectos_index_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 63357, hash: 'cb49e5f11dcd26bbe2dcaa76de702d732d62fcbae618cf65cf601b30f5cbd260', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'servicios/index.html': {size: 66908, hash: '4ad367012a91ab6f704b61e450e9a1d2cca907d63e5f8fcceeabcb4aac2fc469', text: () => import('./assets-chunks/servicios_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 64156, hash: '7d058136ca896fdb340f052f35390357f77cda8b80832082f450299027fb8cfc', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'index.html': {size: 67703, hash: '90f7f6b84ffbd4983685f3dfaeea109f007f91a6602fcb770ea5ccf0eb06c2e8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DGVTNR2K.css': {size: 11383, hash: 'phaLBvpGiM4', text: () => import('./assets-chunks/styles-DGVTNR2K_css.mjs').then(m => m.default)}
  },
};

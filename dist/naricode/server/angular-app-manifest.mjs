
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-BxFGeu6V.js",
      "chunk-C7ztORop.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DbHgmLj2.js",
      "chunk-C7ztORop.js"
    ],
    "route": "/servicios"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DU_NGpIF.js",
      "chunk-C7ztORop.js"
    ],
    "route": "/proyectos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DUUD9Lyt.js",
      "chunk-gXWSgGua.js",
      "chunk-C7ztORop.js"
    ],
    "route": "/nosotros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-gbmBeqdR.js",
      "chunk-gXWSgGua.js",
      "chunk-C7ztORop.js"
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
    'index.csr.html': {size: 10212, hash: '38c6312dcc3ebc7d540a08a10baef8fa4f43bee3e494a86f4a04026c8889034e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 946, hash: '711de66d6d7d451068649acf7067dae19dbadfafb5928fa696f4c527185c7f3d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'proyectos/index.html': {size: 45518, hash: 'b53f792b1b0dc3526f26cbf33281ac7e8394efb499b846ca1dd0ee641ef50747', text: () => import('./assets-chunks/proyectos_index_html.mjs').then(m => m.default)},
    'servicios/index.html': {size: 62729, hash: '1fdefc0050fb6178ab42df4c4517e39c0a18e6d81647d40f557927faa0ab4af6', text: () => import('./assets-chunks/servicios_index_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 58458, hash: 'ca0149e34de1999baaded0f7fde6436739c9dbb9d75ec614d6d13f7d0fb5fcac', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'index.html': {size: 64970, hash: 'c0626c1354c73d8641d26c998400b9d407dcc4a5bfe6df2b10c650a23b68db5c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 61231, hash: 'baca1894a0145fb7d7722dab2e4dc3968d609a09d355cdce4d987d347007fce7', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'styles-LJI27JWI.css': {size: 10198, hash: 'rZiPIk0GTtE', text: () => import('./assets-chunks/styles-LJI27JWI_css.mjs').then(m => m.default)}
  },
};


export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-jAzrg_92.js",
      "chunk-Boe8W-8V.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CrMSMc3T.js",
      "chunk-Boe8W-8V.js"
    ],
    "route": "/servicios"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C_Qi_f6_.js",
      "chunk-Boe8W-8V.js"
    ],
    "route": "/proyectos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BwmsQkNQ.js",
      "chunk-Boe8W-8V.js",
      "chunk-gXWSgGua.js"
    ],
    "route": "/nosotros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-dThVd8DC.js",
      "chunk-Boe8W-8V.js",
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
    'index.csr.html': {size: 9733, hash: 'fb5cf8b9b2f3de8230d9acba68e46702acce576958f958ea9544d9b8ed0306da', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 946, hash: '454610ffe5f9a3d6fbd71768d9c4f89921598731cacbacc505361ccc03d820cb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 61573, hash: '6b6e5ae6681e9a684affb9b828b71aadbb33d74be342c62fad3f10f33031c892', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'proyectos/index.html': {size: 42496, hash: '82475934b4ddfa41c69485a80ad6022b4dbaecdb18eb3b407ef55753e81a56c1', text: () => import('./assets-chunks/proyectos_index_html.mjs').then(m => m.default)},
    'servicios/index.html': {size: 59398, hash: 'fef0726ce7e2f704a64b8a6037e9bb3c36bb099e19b19ca54cd288eb3f3cfd79', text: () => import('./assets-chunks/servicios_index_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 54820, hash: '0b15c94278bbad48c6e3f9505d262fc65bdc17e2062babd7aa9b78efcd4a8166', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 56761, hash: '1092630f9d06250bca88f52d41d4b52b88049883694c27cd46b2691b7038d432', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'styles-KQCL5Y2V.css': {size: 9369, hash: 'Y/UbTP4DwpM', text: () => import('./assets-chunks/styles-KQCL5Y2V_css.mjs').then(m => m.default)}
  },
};

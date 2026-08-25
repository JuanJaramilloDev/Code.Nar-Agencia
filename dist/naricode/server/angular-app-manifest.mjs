
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-CYZ_hlTO.js",
      "chunk-DtanVDaX.js",
      "chunk-DClz7CA7.js",
      "chunk-CB7KsFY6.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C9vs8xEa.js",
      "chunk-DtanVDaX.js",
      "chunk-DClz7CA7.js",
      "chunk-CB7KsFY6.js"
    ],
    "route": "/servicios"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-cp-FxGR9.js",
      "chunk-DtanVDaX.js",
      "chunk-DClz7CA7.js"
    ],
    "route": "/proyectos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-fsunb2ec.js",
      "chunk-DtanVDaX.js",
      "chunk-CB7KsFY6.js"
    ],
    "route": "/nosotros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DHb6HHbp.js",
      "chunk-DtanVDaX.js",
      "chunk-CB7KsFY6.js"
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
    'index.csr.html': {size: 10383, hash: 'e7085c74c39a0a96074e019d3151bf2f93ff2c2157fce0d7eae47a7fba25cdba', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1086, hash: '541eb4d92cbee03afb8a203f8137c375138d83bbc4b4eb68e88dbb0cf07670e2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'proyectos/index.html': {size: 48840, hash: '196fa3869b1c9969fd510aa97b0f29fa4691f2a1c8f7bc3555a04b64dda12b4e', text: () => import('./assets-chunks/proyectos_index_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 76838, hash: '1797bc65b69c42b67cf5496f7d36754d7668a5b81d9a3b6b7cb5642f4e268dd4', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'index.html': {size: 78411, hash: '5d783bb5de0863152b0832d67f4d5c3792088021cc97c4f4e0859fe33e229571', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'servicios/index.html': {size: 70492, hash: '60ecf3249185bcd4f450224cdcba4aae339af21964a1080bd30a83b01eec00eb', text: () => import('./assets-chunks/servicios_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 67160, hash: '366b69d8096af1a065a3af53c4b4230cb09338994973e0a31046f8cc9829cc32', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'styles-EF5T422U.css': {size: 11466, hash: 'Kpb6x5m3ezg', text: () => import('./assets-chunks/styles-EF5T422U_css.mjs').then(m => m.default)}
  },
};

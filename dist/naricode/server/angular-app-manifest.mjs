
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-G3NGIOHT.js",
      "chunk-WMNAKSMR.js",
      "chunk-LNAFF5OP.js",
      "chunk-OOLERLOD.js",
      "chunk-WHH2CJHL.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PJXT7YYP.js",
      "chunk-WMNAKSMR.js",
      "chunk-OOLERLOD.js",
      "chunk-WHH2CJHL.js"
    ],
    "route": "/servicios"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FXHLA5GA.js",
      "chunk-WMNAKSMR.js",
      "chunk-WHH2CJHL.js"
    ],
    "route": "/proyectos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-S2QRE3BR.js",
      "chunk-LNAFF5OP.js",
      "chunk-OOLERLOD.js",
      "chunk-WHH2CJHL.js"
    ],
    "route": "/nosotros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PBSDILF4.js",
      "chunk-LNAFF5OP.js",
      "chunk-OOLERLOD.js",
      "chunk-WHH2CJHL.js"
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
    'index.csr.html': {size: 804, hash: 'd3f2463b7eee18c48326cf02021cdf3a4b910cd01c5ce3b5cfc04758e2d1a62b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1344, hash: 'db27ecae8db9f4bdb0c60a8758be5f005870d0892ead0350c2ffe9f0d486f12c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 98563, hash: '3a85ff304aeb7d4a7bd4e355eda65aac1027350f9f40f4d4e774e6bcc3ab199e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'servicios/index.html': {size: 91543, hash: 'd12c8eb2dad9fa3bc2c4a948a782632f3ae250261f858aab777b2bb52b1d497a', text: () => import('./assets-chunks/servicios_index_html.mjs').then(m => m.default)},
    'proyectos/index.html': {size: 47656, hash: 'cee70c3b9ff6e41c1e63fba94ce861a61a8a041fe16e3280123d395b8043926e', text: () => import('./assets-chunks/proyectos_index_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 82482, hash: '4f22399f18e3424a05511108aed63851a57d0479b7d63fd23e9bad91148d1abd', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 74432, hash: 'e4318b54c2570a9c5cefec5eeae85bf40c383a2d06c36e15cf37333a47462e80', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)}
  },
};

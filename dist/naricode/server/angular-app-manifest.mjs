
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-X5g593Bh.js",
      "chunk-DEVHZudq.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DiJLrlYG.js",
      "chunk-DEVHZudq.js"
    ],
    "route": "/servicios"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bk7TJdx3.js",
      "chunk-DEVHZudq.js"
    ],
    "route": "/proyectos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DjLeDEv9.js",
      "chunk-DEVHZudq.js"
    ],
    "route": "/nosotros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DHoc12wP.js",
      "chunk-DEVHZudq.js"
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
    'index.csr.html': {size: 20085, hash: '7dae43a37836ca2ba9e5724f51a2b74563e95da8149ef33ab3a3ef653dd2f1a8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 18275, hash: '3375644e038ed719eb3aaaacfedbfaf8533ce06bf681aaf78f5d47dcb7f58199', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 61395, hash: '9e8fea22cfcc2232237f239a1382217c029c7c0bf380b2c3679df665008d83c7', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'proyectos/index.html': {size: 58761, hash: 'c4a2b7153a0218dce5c40f6916b15eeeea3263c75f561ae0eae2435b24a12049', text: () => import('./assets-chunks/proyectos_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 65237, hash: 'c22ff0e2ac8a42e99c441304e7b79fd9406608e038f164fe0d353da922cc097b', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'index.html': {size: 82783, hash: '19dd16a16e858e845ea0c9d08bbf3e2008157b6894a40d5c6c8c145d70b1a7cd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'servicios/index.html': {size: 75829, hash: 'd22bc037cfaddf7bf5c5bdbf3f707383d8d0c0097beae2819a759c02818aa792', text: () => import('./assets-chunks/servicios_index_html.mjs').then(m => m.default)},
    'styles-JMWP5LXT.css': {size: 4962, hash: 'BYHQ3JA+m9E', text: () => import('./assets-chunks/styles-JMWP5LXT_css.mjs').then(m => m.default)}
  },
};

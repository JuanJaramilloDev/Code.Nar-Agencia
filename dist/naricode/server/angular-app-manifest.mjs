
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-B1HSDsbh.js",
      "chunk-GX1PoGOB.js",
      "chunk-COpLldlb.js",
      "chunk-CsU11Dzv.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C-4Pt8Q6.js",
      "chunk-COpLldlb.js",
      "chunk-CsU11Dzv.js"
    ],
    "route": "/servicios"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D_8OQZFn.js",
      "chunk-CsU11Dzv.js"
    ],
    "route": "/proyectos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BCV0iwQA.js",
      "chunk-GX1PoGOB.js",
      "chunk-COpLldlb.js",
      "chunk-CsU11Dzv.js"
    ],
    "route": "/nosotros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CUB1CrNa.js",
      "chunk-GX1PoGOB.js",
      "chunk-COpLldlb.js",
      "chunk-CsU11Dzv.js"
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
    'index.csr.html': {size: 14630, hash: 'ab7390551f49cd693a0ab49c7ee1521a22258c08d0873454f285b95cde449c3b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1228, hash: '697a93af987d3fe2ad0c3ed67988c42bc66c7e38f00def19260eaed80473ffbd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'proyectos/index.html': {size: 59905, hash: '9c1666e1f22be3a47a34a0d5663fafe4a9ba12a30fb66c705ed707fec5a439ee', text: () => import('./assets-chunks/proyectos_index_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 89331, hash: '971737de523c7e9df3676694ca0c63d38ba5c193a749027f901ee3d0d7a9a85c', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'servicios/index.html': {size: 96539, hash: '4e2bb5e9373f84afd55f66e6299625b8799d9d40d9210f3c5b4ee496557fa1f5', text: () => import('./assets-chunks/servicios_index_html.mjs').then(m => m.default)},
    'index.html': {size: 98601, hash: '099278137ea635353f0d220161cb9f0ccec9fce2f09f21f09190c8507b40a6f0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 81555, hash: 'a34aefbd4561ef5719a4bee4770d389a26ba4ad2bf1ddc1e0783cde706e76f3f', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'styles-SXECQLAO.css': {size: 15574, hash: '0bA6T8rGh/I', text: () => import('./assets-chunks/styles-SXECQLAO_css.mjs').then(m => m.default)}
  },
};


export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-BraGsK46.js",
      "chunk-B4IxlEPh.js",
      "chunk-CP1xFpYB.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-g3dV-phx.js",
      "chunk-B4IxlEPh.js",
      "chunk-CP1xFpYB.js"
    ],
    "route": "/servicios"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-N3Rt8YkZ.js",
      "chunk-B4IxlEPh.js",
      "chunk-CP1xFpYB.js"
    ],
    "route": "/proyectos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CuWj16Ra.js",
      "chunk-B4IxlEPh.js"
    ],
    "route": "/nosotros"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cf48CGy7.js",
      "chunk-B4IxlEPh.js"
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
    'index.csr.html': {size: 10091, hash: '439187fc2fdee31f2490e948ea99df48ed99e575af9a891efc46be8b45109f31', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1086, hash: '0e039991f097ad0a9f05b3179dfc1b08b5910eeddafde3eb0981b7d5f1b46e42', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'proyectos/index.html': {size: 46135, hash: '84d2d6eba56acd73e6a568d05299e571979922c15373567358d6394526f37f28', text: () => import('./assets-chunks/proyectos_index_html.mjs').then(m => m.default)},
    'servicios/index.html': {size: 61653, hash: 'f64fe9f411d99ce2cefcaf1df630daedf234fc39e4cbb970faf4ab68ec50748a', text: () => import('./assets-chunks/servicios_index_html.mjs').then(m => m.default)},
    'index.html': {size: 65279, hash: '43645627e7b4cc52b9f18d295c7ee786274a189c748df3d72f89225bcd74c565', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 68651, hash: '53e741e4d4971c658a3035bfbd3f61f1586cf862720f3471ca17cfb644b86050', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 60118, hash: '8891f79287987ff102ca1b7799a333cf08903bde0e0326a85b5b2830564fce65', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'styles-POBN6KK7.css': {size: 9678, hash: '3eps8QgpuF0', text: () => import('./assets-chunks/styles-POBN6KK7_css.mjs').then(m => m.default)}
  },
};

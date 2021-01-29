/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.x/advanced/create_payment_method.html",
    "revision": "4369ca7c505d2440a76b0e0ffd843598"
  },
  {
    "url": "1.x/advanced/create_product_type.html",
    "revision": "28189150eea6e7f049fad6a2f390a381"
  },
  {
    "url": "1.x/advanced/create_shipping_method.html",
    "revision": "253eae9ac3c94e41eddcfae48d04ac8f"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "cd79dbe10a830f43ceaaab7c356fdf4a"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "29785a13fbe66ebe06f7279f2b20831c"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "1d4b01d42fe88363e95cae9e78d1e8c0"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "111f3b8e1947c6cec29539a254e643cb"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "f73b39d6f0f5dafc63389c4a4354c1a6"
  },
  {
    "url": "1.x/advanced/render_event.html",
    "revision": "e11f5222a47b0c2cf8493f2eba75719b"
  },
  {
    "url": "1.x/advanced/security_practice.html",
    "revision": "7044e79bf7aecc2ac6acdb88dc257d2d"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "b5c8b6cb7bf1ab0932e8ebb9c1c19529"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "583abcacdd0606dd3cb89b57cfe074e9"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "5e1ed46afd38f963beb2b0e770e43903"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "622c5db4c9f23290d3990e99c16d703f"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "449659d3371fec88d604c36dd36fdd85"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "b482a1f774444f3f436eeb0588cb6864"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "49d6e366d8270a3997b28945fb7cfeb9"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "4549964b2dd8561ca1a64cd952cde830"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "828bbb9227a936632102b40bd840dd7c"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "dd6f8fa8e622821b4eb07b637e47c53d"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "dddfa0059c72baba97f6483388489811"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "4e69623145f0206b5310e21f8e330e4c"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "83c0babf67af4577598e7ed379a2ce4b"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "22df2dcd1eda6087837069cdecfa937b"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "591846b983dcb9e90a7d5ec48f2a4ccf"
  },
  {
    "url": "1.x/introduction/folders.html",
    "revision": "e8aeb6f335a3cfa83e7715eeb144a1ba"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "77c20034f77f3209a9bf4e08231a06e9"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "1d4a6d8df50cf367f31fadbd091fb230"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "644c51fcaed3a55f4d8153d4f252f68a"
  },
  {
    "url": "1.x/introduction/upgrade_to_latest_bagisto.html",
    "revision": "fd7414cc5aa8d82e05335a60f5139838"
  },
  {
    "url": "1.x/packages/add_menu_in_admin.html",
    "revision": "fff8e97f2b3f184482640993f8f661ea"
  },
  {
    "url": "1.x/packages/create_acl.html",
    "revision": "36abc45f3f83c7b7d7983538d0925098"
  },
  {
    "url": "1.x/packages/create_custom_configuration.html",
    "revision": "b93a3353bd7dff5a4a2ea220c434a512"
  },
  {
    "url": "1.x/packages/create_migrations.html",
    "revision": "f17a49c2f8a6ec89747e464960121b55"
  },
  {
    "url": "1.x/packages/create_models.html",
    "revision": "94bd6647d2fc34192b4aec448bd013e2"
  },
  {
    "url": "1.x/packages/create_package.html",
    "revision": "ec51981f9f4ac8852b8c7951eb570f6f"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "aa0124ba4db1d79f5ef2f207f48a0f23"
  },
  {
    "url": "1.x/packages/store_data_through_repositories.html",
    "revision": "1e6be78ce77b4dec7aa55f3d8b6d58c5"
  },
  {
    "url": "1.x/themes/create_admin_theme.html",
    "revision": "da1650dd69df202e2c6865142893e8c0"
  },
  {
    "url": "1.x/themes/create_theme.html",
    "revision": "1205181a2cc8874f4860573cb92e5e19"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "d1009c02014fb7a59570beea18b90bbd"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "076ebbac78f16cf79ea8cb254e357f79"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "cf82df3f0f6b2f316524a7f67d7a2965"
  },
  {
    "url": "1.x/translations/change_the_language_of_error_validations_on_your_store.html",
    "revision": "d3e79d2e77112f9937aacce1753d4360"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "3d216b96334399cc76393a6aacc42482"
  },
  {
    "url": "1.x/translations/translation_based_on_locale.html",
    "revision": "cabc01837f1428fb1b7bd9dcd731ba1f"
  },
  {
    "url": "1.x/user_guides/cart_catalog_rule.html",
    "revision": "267b299983ca0e174322b828bf1fb063"
  },
  {
    "url": "1.x/user_guides/cart_rule.html",
    "revision": "e273fdd2b5bc1e414a89e1c2de25949d"
  },
  {
    "url": "1.x/user_guides/index.html",
    "revision": "754694e14d83f7fe20a6f24b89d3fd27"
  },
  {
    "url": "1.x/user_guides/social_auth.html",
    "revision": "87bc90739c5a79210472e65c93a85932"
  },
  {
    "url": "404.html",
    "revision": "17d9dd3ad179bc1ce31859890ca04707"
  },
  {
    "url": "assets/css/0.styles.ff275ce7.css",
    "revision": "7ea9fde45d437e7486fd997d53659249"
  },
  {
    "url": "assets/img/add-locale-bagisto.b2e2cfb9.png",
    "revision": "b2e2cfb94cf27c4c873e38113fa70aaf"
  },
  {
    "url": "assets/img/admin_social_auth.1f906bf7.png",
    "revision": "1f906bf7aaadd3d1ffa9d1f2a1ecb564"
  },
  {
    "url": "assets/img/admin-acl-output.33cbb854.png",
    "revision": "33cbb8542307d97dce7e411f4e1ffee2"
  },
  {
    "url": "assets/img/admin-custom-config-output.ad6536ab.png",
    "revision": "ad6536ab0b05048c23992f08943b6d1d"
  },
  {
    "url": "assets/img/admin-menu-output.a5949c80.png",
    "revision": "a5949c80bf47f4a37c0f8d330f1f139c"
  },
  {
    "url": "assets/img/arrabic-attribute.4d7a4275.png",
    "revision": "4d7a4275690cfe606cdb2f1babf87cc5"
  },
  {
    "url": "assets/img/bagisto_add_info.78af382e.jpg",
    "revision": "78af382e00c5ed610f08e7dcb25de296"
  },
  {
    "url": "assets/img/bagisto_attribute.a6fc572b.jpg",
    "revision": "a6fc572b5095c9086b4b9594c7627dbb"
  },
  {
    "url": "assets/img/bagisto_cart_add.63562e08.jpg",
    "revision": "63562e08b02018b7b6a8826f9bb124f6"
  },
  {
    "url": "assets/img/bagisto_cart_guest.d853001d.jpg",
    "revision": "d853001da175e958725f6cf956e31e84"
  },
  {
    "url": "assets/img/bagisto_cart_remove_item.3b5df823.jpg",
    "revision": "3b5df82328f5369892e46b182c1fb326"
  },
  {
    "url": "assets/img/bagisto_cart_update.3b860220.jpg",
    "revision": "3b860220a366af90e600fd35c087d67b"
  },
  {
    "url": "assets/img/bagisto_cart.3cc30a8b.jpg",
    "revision": "3cc30a8be1ec377e6a4aa9c4bb1cc4d5"
  },
  {
    "url": "assets/img/bagisto_config_attr.83af48dd.jpg",
    "revision": "83af48ddf4fc985007f39acec9cc37e3"
  },
  {
    "url": "assets/img/bagisto_config.325d4e50.jpg",
    "revision": "325d4e50a5fd49d4ec8a9c447f21a6e6"
  },
  {
    "url": "assets/img/bagisto_move_to_wishlist.092fc8ae.jpg",
    "revision": "092fc8ae6b7ce543f91fcbcb840ebd82"
  },
  {
    "url": "assets/img/bagisto_orders_id.47d67a0d.jpg",
    "revision": "47d67a0d48c7eb4471788608a266ebd0"
  },
  {
    "url": "assets/img/bagisto_orders_no_pag.eb8fd609.jpg",
    "revision": "eb8fd6090b445f1a375c41d22bdb9405"
  },
  {
    "url": "assets/img/bagisto_prod_color.54846a87.jpg",
    "revision": "54846a878f4e58126066ca83a1f698e4"
  },
  {
    "url": "assets/img/bagisto_prod_price_config.1c3285d1.jpg",
    "revision": "1c3285d10a818abb2dca20a777b79258"
  },
  {
    "url": "assets/img/bagisto_prod_price_simple.78ef8f5a.jpg",
    "revision": "78ef8f5ac73bae616e5e0794dfeb7f42"
  },
  {
    "url": "assets/img/bagisto_prod_size.2fdc1d32.jpg",
    "revision": "2fdc1d32ecc5200a7a65d99b44e600fb"
  },
  {
    "url": "assets/img/bagisto_save_address.633cf573.jpg",
    "revision": "633cf57391403cf1df62f8dfe80d6661"
  },
  {
    "url": "assets/img/bagisto_save_order.c2fab81f.jpg",
    "revision": "c2fab81f906b0dda24ab128e2100f0e3"
  },
  {
    "url": "assets/img/bagisto_save_payment.99edb31c.jpg",
    "revision": "99edb31ca6dbf31d3261d528d48f120f"
  },
  {
    "url": "assets/img/bagisto_save_shipping.6c8d23d1.jpg",
    "revision": "6c8d23d1f29b3905c0742e6fe9dc2a03"
  },
  {
    "url": "assets/img/bagisto_ship_order_id.367b77a9.jpg",
    "revision": "367b77a9b47802107f443338b7ff1cfe"
  },
  {
    "url": "assets/img/bagisto_shipments.e6134a4b.jpg",
    "revision": "e6134a4b8b604b1756ab3ef108884406"
  },
  {
    "url": "assets/img/bagisto_wishlist_page.de525699.jpg",
    "revision": "de5256999417cca7f6ab7503a5b109d1"
  },
  {
    "url": "assets/img/catageory-in-arabic.4b55c745.png",
    "revision": "4b55c745b858c4aac3044fa348caf6a7"
  },
  {
    "url": "assets/img/channel-setting-in-bagisto.a7a72cb5.png",
    "revision": "a7a72cb5af650f7e582f8deae80e4f99"
  },
  {
    "url": "assets/img/front-end-in-arabic.f7c759e0.png",
    "revision": "f7c759e055265bf9ebd9df156e22c9ab"
  },
  {
    "url": "assets/img/front-end.9aaeb0de.png",
    "revision": "9aaeb0de8e5707aa4afa1845e2fa1f4d"
  },
  {
    "url": "assets/img/github-OAuth-step1.e74d8be1.png",
    "revision": "e74d8be18d45562391def8eabc3f9f05"
  },
  {
    "url": "assets/img/github-OAuth-step3.1c5347e7.png",
    "revision": "1c5347e798d2d4e9f232e821b30a0d71"
  },
  {
    "url": "assets/img/google-OAuth-step1.cdeb34e7.png",
    "revision": "cdeb34e75d4109dc8c732cb2a41f7149"
  },
  {
    "url": "assets/img/google-OAuth-step10.7cf440b2.png",
    "revision": "7cf440b27afcc28b91d0569d0e0574dd"
  },
  {
    "url": "assets/img/google-OAuth-step2.33d3b5d7.png",
    "revision": "33d3b5d7d306652f9ad8145885649684"
  },
  {
    "url": "assets/img/google-OAuth-step3.7cfab527.png",
    "revision": "7cfab527afc801407b13bb1c0080502c"
  },
  {
    "url": "assets/img/google-OAuth-step4.58f07d86.png",
    "revision": "58f07d861b92fdf12e966ef8ec0a2f7d"
  },
  {
    "url": "assets/img/google-OAuth-step6.feabd47b.png",
    "revision": "feabd47b9a5af05843c2bb60b8226e37"
  },
  {
    "url": "assets/img/google-OAuth-step7.21f7d9f6.png",
    "revision": "21f7d9f6ff6babc41c0e032cf963356c"
  },
  {
    "url": "assets/img/google-OAuth-step8.c2178472.png",
    "revision": "c21784723f5897170c0780d4307dbbb1"
  },
  {
    "url": "assets/img/google-OAuth-step9.83e7862b.png",
    "revision": "83e7862bd3d9aa050b4dbd2bded3fec7"
  },
  {
    "url": "assets/img/hello-world-package-output.2f3c248f.png",
    "revision": "2f3c248fcf0bcdb3a497646485084147"
  },
  {
    "url": "assets/img/helloworld-admin-browser-output.58d525cb.png",
    "revision": "58d525cbaf78c5763ac8f557cdd31e9f"
  },
  {
    "url": "assets/img/helloworld-shop-browser-output.036ed5d9.png",
    "revision": "036ed5d98b58f5887a0cde7d6a874bd5"
  },
  {
    "url": "assets/img/installed-elastic-info.46e47fde.png",
    "revision": "46e47fde533d4982324a07b091943503"
  },
  {
    "url": "assets/img/language-changes.a799195d.png",
    "revision": "a799195df5c2def1f7798b6296eb0659"
  },
  {
    "url": "assets/img/limiting-error-messages.5887bc7c.png",
    "revision": "5887bc7c25f56a6e4e03ead32f873720"
  },
  {
    "url": "assets/img/locale-setup.a0047ee5.png",
    "revision": "a0047ee598bf517ca89e565539e444cc"
  },
  {
    "url": "assets/img/locale-trans.eed57105.png",
    "revision": "eed57105bf11bb1ad460c9e09ec9e207"
  },
  {
    "url": "assets/img/locale.b190a2d4.png",
    "revision": "b190a2d4e2ed61a1a75b829f6af4bdcf"
  },
  {
    "url": "assets/img/product-in-arabic.e634c43f.png",
    "revision": "e634c43ff0331dcf5ff91211017c6f1f"
  },
  {
    "url": "assets/img/product-index.a45ce729.png",
    "revision": "a45ce7297692b3170774154331aa5911"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/translation.96b21cfa.png",
    "revision": "96b21cfa473af2e88086d0ccdebb40e4"
  },
  {
    "url": "assets/js/10.298c8877.js",
    "revision": "b817a516e9c1e0acda3d81ba5e81b7ba"
  },
  {
    "url": "assets/js/11.23cbcd0f.js",
    "revision": "192d680edc3264c755d8ad8337b87136"
  },
  {
    "url": "assets/js/12.6413bda8.js",
    "revision": "7c461a1d473cbc4e677e390b8f0103ab"
  },
  {
    "url": "assets/js/13.d1a29590.js",
    "revision": "37bfb88d0354dbb392070cc13fc0ffd1"
  },
  {
    "url": "assets/js/14.34f5b963.js",
    "revision": "17644ca471f11505131ad8feab740982"
  },
  {
    "url": "assets/js/15.997e7997.js",
    "revision": "d2921e4f99b31f40e0373acb5883cb38"
  },
  {
    "url": "assets/js/16.ab1ad48f.js",
    "revision": "8858be8fe5d6c97739cc38553fca6884"
  },
  {
    "url": "assets/js/17.8d56dc33.js",
    "revision": "f1cd4847a83a3640ea3db3e462130b9b"
  },
  {
    "url": "assets/js/18.ef4df667.js",
    "revision": "6c0b20f1f7df3521aefa1a4553d2ae43"
  },
  {
    "url": "assets/js/19.fa1962b9.js",
    "revision": "6ae9a8e17089d7d0b32f57d8958ce416"
  },
  {
    "url": "assets/js/2.affb9a65.js",
    "revision": "9ca6355ac217ee615e6ae4f4915ef6f4"
  },
  {
    "url": "assets/js/20.f0008233.js",
    "revision": "f56e0d93bdb75c5886d706f6a8fd3d28"
  },
  {
    "url": "assets/js/21.19542b1b.js",
    "revision": "031434e9135ae1303fa4fc2f8f88258f"
  },
  {
    "url": "assets/js/22.0d3f85b5.js",
    "revision": "13121e5218d84cdaa67dc3ad2325d3ac"
  },
  {
    "url": "assets/js/23.d5b1b22d.js",
    "revision": "3308b2e9e96c383e7d416c2b07f32c1f"
  },
  {
    "url": "assets/js/24.62c3e39e.js",
    "revision": "22632ca0c1b45a6ca1efbf742339b556"
  },
  {
    "url": "assets/js/25.378f2a76.js",
    "revision": "dc3e82af99a811f5a2007a403fd2d51a"
  },
  {
    "url": "assets/js/26.1c4db522.js",
    "revision": "baab302522137ff79b3d1f9d397e9a66"
  },
  {
    "url": "assets/js/27.1b1bcfd3.js",
    "revision": "29195939cd1bfb082296c1045f384a5c"
  },
  {
    "url": "assets/js/28.3be2594b.js",
    "revision": "8f308e419775867999983a368c86a2f7"
  },
  {
    "url": "assets/js/29.a04bbc05.js",
    "revision": "a772dfb9e65d3efe9d9ecd726d2c7404"
  },
  {
    "url": "assets/js/3.9981dc65.js",
    "revision": "f99a229fb46dfc2e0d3c4971fe3d2fe2"
  },
  {
    "url": "assets/js/30.7e9ca312.js",
    "revision": "911b1e15933196b8e8101c30dc9c7b62"
  },
  {
    "url": "assets/js/31.a6fa3755.js",
    "revision": "e1700f85b64491fe15f704f97364d880"
  },
  {
    "url": "assets/js/32.527589a8.js",
    "revision": "adbc73bce06d9cdf159477cb5dd0e3c9"
  },
  {
    "url": "assets/js/33.67b80f79.js",
    "revision": "fe478dfa04d9b6a06d7dfd846664a60b"
  },
  {
    "url": "assets/js/34.e7fe75f6.js",
    "revision": "125c9b60ed390174759a98e7ee3bb02f"
  },
  {
    "url": "assets/js/35.c66fe5eb.js",
    "revision": "decd8ff86206810764a4db8484bc7c7d"
  },
  {
    "url": "assets/js/36.b96d4abc.js",
    "revision": "68fdb3c0e7543bbde7abc8e819caa380"
  },
  {
    "url": "assets/js/37.f1c12f69.js",
    "revision": "83a9084832abdd22fc5915a86e5384eb"
  },
  {
    "url": "assets/js/38.fa929fc1.js",
    "revision": "ef6a74f7f4b5fd5503d33d4a3cb6491c"
  },
  {
    "url": "assets/js/39.b73e316e.js",
    "revision": "de5696fb75498ff657983a26df1ba904"
  },
  {
    "url": "assets/js/4.519184b4.js",
    "revision": "c27f98f94856dd53ad409ab9c664a418"
  },
  {
    "url": "assets/js/40.10031b55.js",
    "revision": "99b34f2284b4a5fec8c8964cf1276d66"
  },
  {
    "url": "assets/js/41.e88e35ef.js",
    "revision": "c73bc2d4195a2e60a806cde37a93de79"
  },
  {
    "url": "assets/js/42.4206c405.js",
    "revision": "5ec6d0555d012e5c6edf367e523c73f4"
  },
  {
    "url": "assets/js/43.dae64810.js",
    "revision": "5ac0c7f9a49c2acdad016821d223fd31"
  },
  {
    "url": "assets/js/44.55785f86.js",
    "revision": "47657602504d063edb328fcaac8dfb1c"
  },
  {
    "url": "assets/js/45.e17acadd.js",
    "revision": "0fa6f6edb2d6356c168617a2c2098155"
  },
  {
    "url": "assets/js/46.55c2bed2.js",
    "revision": "8423f62167582f4c7ca4d9398ebbdcf4"
  },
  {
    "url": "assets/js/47.c1671b8b.js",
    "revision": "0c98a8f3e3803667db0059480e7ebf07"
  },
  {
    "url": "assets/js/48.f163015b.js",
    "revision": "1fa135edd092f8ca0f6c35e60f8b56a4"
  },
  {
    "url": "assets/js/49.e41e4e37.js",
    "revision": "77f5be053c37ffe874e4d4d9e3908dc4"
  },
  {
    "url": "assets/js/5.51806405.js",
    "revision": "35b78a8272ccb47b04c26b2f4e4fd8a3"
  },
  {
    "url": "assets/js/50.a693f074.js",
    "revision": "6855f6c587d885a036828b46492eba54"
  },
  {
    "url": "assets/js/51.66449c78.js",
    "revision": "8d2353f983ca423f33e8ddd9a05a01d0"
  },
  {
    "url": "assets/js/52.16a25475.js",
    "revision": "894e6405e173ec0d3f90ac8cb1afd519"
  },
  {
    "url": "assets/js/53.6ad997c1.js",
    "revision": "cb8106dacc5672b3c90120b1f09e8145"
  },
  {
    "url": "assets/js/54.a11ce854.js",
    "revision": "8f91c1a0a54e8955939a7cb474f6f6c4"
  },
  {
    "url": "assets/js/55.37644086.js",
    "revision": "5ee5843576be71b883b248915146311a"
  },
  {
    "url": "assets/js/56.33b7714d.js",
    "revision": "919842b7f8ac3a08d828f449e7d7a832"
  },
  {
    "url": "assets/js/6.065abd7f.js",
    "revision": "011f119b97d662b09e8bb43b75c3159a"
  },
  {
    "url": "assets/js/7.fb627f4d.js",
    "revision": "f01e38dd1389801c8e45b4900e68be61"
  },
  {
    "url": "assets/js/8.524bb880.js",
    "revision": "7b7e3a1d76214143e0bd4b1a51b13b64"
  },
  {
    "url": "assets/js/9.febf253b.js",
    "revision": "0c66c2b7f5f797777ff4a4ee9a1c1468"
  },
  {
    "url": "assets/js/app.7487ca72.js",
    "revision": "8372cb499772188fb88dd0fb0713094a"
  },
  {
    "url": "index.html",
    "revision": "af48ff94529cd531ba2ebc052d33436a"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

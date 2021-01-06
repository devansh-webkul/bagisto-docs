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
    "revision": "d186d0b5aa430d8d1b04dca0766f5fef"
  },
  {
    "url": "1.x/advanced/create_product_type.html",
    "revision": "f765ba33ca1858b26058891546f38b19"
  },
  {
    "url": "1.x/advanced/create_shipping_method.html",
    "revision": "7bb85c07a602e21dbf2d86682b68a111"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "d54b243fb426449f9c505072b0f7a55f"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "59c0eee76bb9b1fadea18ba6592ca804"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "6f3f8756ada722912ebbd0a11960f65e"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "3c874ade1790d802f919f49e7a3e0728"
  },
  {
    "url": "1.x/advanced/render_event.html",
    "revision": "dc32480d37a64ee2d0ca0bf6fef4f6ca"
  },
  {
    "url": "1.x/advanced/security_practice.html",
    "revision": "ca1f80e8b62b306f24c33dfbb57589be"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "df4ea34cc375476a544d03ee4af34191"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "649a5af2fed6ff7761ce5e5b87caf590"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "c87e838744e1e7213a0c28c7bd4636e2"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "dd5a58bb9cfa76c26b092f2f91982f7e"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "104c59cd3ca7d95cd9aa03da4309ec1e"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "3a4ed7112f1293d55a5c5ad156ae03d6"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "be0cbbaea941c050fae6c569aaf3a9d1"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "3691a8d4ea5fdc831718df972440bda3"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "4790d24337dad0dbb013e23b7e3224d7"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "24135f596d6b7128cdd5b33f70e9ff03"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "99356b8b44d850628cc46d2af1bbe1cc"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "99877f5b950ba0f9e764751bccd5d636"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "1596560ee731ebe7b40977ecbf96d5a3"
  },
  {
    "url": "1.x/introduction/folders.html",
    "revision": "5ff67c73053cb15ade507d9495132fdc"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "fd20eac77c8cbf40e340b61344a45def"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "d95b7ab2ca50afc79dde7a454a60ffb6"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "c9a28aa7733b8744bd5e06547ce00d63"
  },
  {
    "url": "1.x/introduction/upgrade_to_latest_bagisto.html",
    "revision": "8762b38787bbe6a1b5e57e22aca80a04"
  },
  {
    "url": "1.x/packages/add_menu_in_admin.html",
    "revision": "14348a3ca377a99d95c7633d622e8c70"
  },
  {
    "url": "1.x/packages/create_acl.html",
    "revision": "6c696671d506420469737784366627a9"
  },
  {
    "url": "1.x/packages/create_custom_configuration.html",
    "revision": "76ee33d50f8a36006aafd714ad1619e9"
  },
  {
    "url": "1.x/packages/create_migrations.html",
    "revision": "f51e97ec462a908090e38162563f3505"
  },
  {
    "url": "1.x/packages/create_models.html",
    "revision": "5c715d23ce918665732d5e4358c7e455"
  },
  {
    "url": "1.x/packages/create_package.html",
    "revision": "df5a75af191fc25cd309dc676f3658c4"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "1022b491713f1c3bdcb8fe162f78b16b"
  },
  {
    "url": "1.x/packages/store_data_through_repositories.html",
    "revision": "fbda72fc16e985e74ba1f5b8491e6253"
  },
  {
    "url": "1.x/themes/create_admin_theme.html",
    "revision": "744cdf7194e9ebf19ddfcac04ef8287c"
  },
  {
    "url": "1.x/themes/create_theme.html",
    "revision": "15a431e79c6deaf1caaa0e1da4ec4f94"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "a4877fbc9b79ad9127b5e0e9ab005da6"
  },
  {
    "url": "1.x/translations/change_the_language_of_error_validations_on_your_store.html",
    "revision": "a79a2782b21ac3ffeb79aecb14d3b388"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "7b91fad59f40bae2afec146c7ae0bd61"
  },
  {
    "url": "1.x/translations/translation_based_on_locale.html",
    "revision": "c3d7488d314368ade5f9f0a00499f18c"
  },
  {
    "url": "1.x/user_guides/cart_catalog_rule.html",
    "revision": "a97e41c8b94a8311bbfaa91c0bd2af01"
  },
  {
    "url": "1.x/user_guides/cart_rule.html",
    "revision": "a7e782559f2d42b99996e002707b2cd4"
  },
  {
    "url": "1.x/user_guides/index.html",
    "revision": "7d1753ff6d7940ac27f6e04e059e7912"
  },
  {
    "url": "404.html",
    "revision": "7c69f842e2f36a9ac9404453652423fb"
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
    "url": "assets/img/demo_products.86acc2d1.jpg",
    "revision": "86acc2d17a24f156e867f75404f9e121"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/translation.96b21cfa.png",
    "revision": "96b21cfa473af2e88086d0ccdebb40e4"
  },
  {
    "url": "assets/js/10.659b3753.js",
    "revision": "dd48afb990e5eb2a53232d9d0be661ab"
  },
  {
    "url": "assets/js/11.a060e227.js",
    "revision": "6eef835d7201a786611679868c09903a"
  },
  {
    "url": "assets/js/12.91bdab29.js",
    "revision": "b055a3f3fb8a5b2fffdfbf468bbe6ca6"
  },
  {
    "url": "assets/js/13.695ae2cc.js",
    "revision": "a2ffa968437a1fb817cbab1761f944a0"
  },
  {
    "url": "assets/js/14.d2c8b194.js",
    "revision": "52ee7ca78f99683dfc1e973fa1f78d8d"
  },
  {
    "url": "assets/js/15.f0f59029.js",
    "revision": "28ba8737b6add43d6b5b2cfd6abb6cbd"
  },
  {
    "url": "assets/js/16.12f378a6.js",
    "revision": "b8f91a54d1aefe9d39321d3c9fa8a9b2"
  },
  {
    "url": "assets/js/17.3bf8dc6d.js",
    "revision": "344106a3ad7a4cdd6520486b7a184f8d"
  },
  {
    "url": "assets/js/18.e37e66d9.js",
    "revision": "751017bd9a60e0b8d91fe5dc24961dba"
  },
  {
    "url": "assets/js/19.0ed6d12e.js",
    "revision": "004d8d890ab82071ee6d4d6230897a36"
  },
  {
    "url": "assets/js/2.a667fdc9.js",
    "revision": "68b064d6f19ca05ca1e23b95d7fe11eb"
  },
  {
    "url": "assets/js/20.78726409.js",
    "revision": "0c663cfa909e184f124f304bf01c8b50"
  },
  {
    "url": "assets/js/21.d7a4f2b2.js",
    "revision": "b660e1b1e46a4fbfcfcb6ddea6fd9a16"
  },
  {
    "url": "assets/js/22.fc40fd17.js",
    "revision": "acc0afc2b9867adeddb5ba477f32fd63"
  },
  {
    "url": "assets/js/23.26abe7e3.js",
    "revision": "89607288d15abde9b5b7fdbc7d2f054c"
  },
  {
    "url": "assets/js/24.70784aee.js",
    "revision": "f392e2d588be331334af8f503296273e"
  },
  {
    "url": "assets/js/25.067ef646.js",
    "revision": "4120a1c0e9968a239100c5720eeb0c3a"
  },
  {
    "url": "assets/js/26.7c38629c.js",
    "revision": "6fb345977798698a12ddd96e8b1be88a"
  },
  {
    "url": "assets/js/27.8213228e.js",
    "revision": "533552650a04cfa6a1b65018ab549f75"
  },
  {
    "url": "assets/js/28.43501bd7.js",
    "revision": "a50018b607b51e29d91d825cc26d7050"
  },
  {
    "url": "assets/js/29.df3cde7b.js",
    "revision": "a9e4c82c6fb5e53e020f09e8a74ca402"
  },
  {
    "url": "assets/js/3.5a0c1ff9.js",
    "revision": "b192ebe433dca3bdec96a8fe208b74aa"
  },
  {
    "url": "assets/js/30.8ae76254.js",
    "revision": "58aaf972947efb5aae520bcf474458f9"
  },
  {
    "url": "assets/js/31.a011280f.js",
    "revision": "961e8f7e9463ebca19fddce6b1d234c9"
  },
  {
    "url": "assets/js/32.f1bf55cf.js",
    "revision": "7c6e4f2cfd577378e5c7053fbe9de3ed"
  },
  {
    "url": "assets/js/33.336f5735.js",
    "revision": "c078e034b803272ecb97bde73ec4b3ed"
  },
  {
    "url": "assets/js/34.e27fbdf4.js",
    "revision": "bb017b2ea76de75e146bc6dea79daf05"
  },
  {
    "url": "assets/js/35.463a8208.js",
    "revision": "e4e3e6e98a9af7dd9ee404ddec6e5534"
  },
  {
    "url": "assets/js/36.99f94532.js",
    "revision": "982aed39cc17317e5694fee41ed45946"
  },
  {
    "url": "assets/js/37.e7e8e814.js",
    "revision": "5c9db5d3155cf864880200d9867b25e3"
  },
  {
    "url": "assets/js/38.b41573d2.js",
    "revision": "e715059ec41eac22b24438a242cd56c0"
  },
  {
    "url": "assets/js/39.2fabd71a.js",
    "revision": "48eb53713a199e1698e76b051c140f7f"
  },
  {
    "url": "assets/js/4.54fe4688.js",
    "revision": "6f2ea6ab596746f9ea811c222f917ee7"
  },
  {
    "url": "assets/js/40.22c43a48.js",
    "revision": "2f2c628ece8c824700382f9b4183e541"
  },
  {
    "url": "assets/js/41.f18744d0.js",
    "revision": "12aa15da74dda5a233c3fee4bc6c1747"
  },
  {
    "url": "assets/js/42.35e3ad00.js",
    "revision": "12ae386fd61fd5d32fb9baf2ab9ab5f1"
  },
  {
    "url": "assets/js/43.034c2dff.js",
    "revision": "187613beed17b25c1b528ea577657945"
  },
  {
    "url": "assets/js/44.b748dc66.js",
    "revision": "817011655bdc36f89c130dd49aecc98f"
  },
  {
    "url": "assets/js/45.18186b8a.js",
    "revision": "27462d0526ea9b6a9f1a0ec3a9e9627a"
  },
  {
    "url": "assets/js/46.277142d6.js",
    "revision": "71506b0019c75a8580904abfd7e37462"
  },
  {
    "url": "assets/js/47.6eda548f.js",
    "revision": "629e38830986ebb11163f9ca609e44dd"
  },
  {
    "url": "assets/js/48.d13845e3.js",
    "revision": "1292a3a7103ee08bbfe0bf0d6a1b54c1"
  },
  {
    "url": "assets/js/49.8cf3caf2.js",
    "revision": "1a1289afe390a6202e4cd42ff239c04f"
  },
  {
    "url": "assets/js/5.718d42b6.js",
    "revision": "5c036cfa2d8452723afd9c7ca74fc1a9"
  },
  {
    "url": "assets/js/50.02db3f45.js",
    "revision": "e00ed22e476c26e2766199607dfbc098"
  },
  {
    "url": "assets/js/6.9536758a.js",
    "revision": "d1d9f5188698825441d8155666cd8b28"
  },
  {
    "url": "assets/js/7.d07b907c.js",
    "revision": "63739f8a42525954008afbe478187de0"
  },
  {
    "url": "assets/js/8.b613b7d6.js",
    "revision": "9c5a86f88374a7115ca3ff38bdf9d667"
  },
  {
    "url": "assets/js/9.f9ad24d1.js",
    "revision": "be7b1ce2d4b191450f359639995921c9"
  },
  {
    "url": "assets/js/app.18e81de0.js",
    "revision": "009374bbc616973a911c343d26b99a70"
  },
  {
    "url": "index.html",
    "revision": "0db5d69614ce26b7d3cad4312bfb7e9d"
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

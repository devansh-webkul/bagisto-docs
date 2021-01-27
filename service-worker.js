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
    "revision": "54932b99d02396f6c5884336c7a15f55"
  },
  {
    "url": "1.x/advanced/create_product_type.html",
    "revision": "20aa232596d8199365867fc5d607400d"
  },
  {
    "url": "1.x/advanced/create_shipping_method.html",
    "revision": "ce093da50c58c50466fb7cace7702adf"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "523c0d62033c1a61f8acc7830c291da8"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "dde2b355a0ac99382d002f3c71663241"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "e5035635205ae0e99fd7c2d25b50447c"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "dbb9f31f1a7e1be924cf23a09451c269"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "93a7f4dd91bc8deff4c3d1b643a5a64e"
  },
  {
    "url": "1.x/advanced/render_event.html",
    "revision": "27d8ba5baa31749b32a9c92b25d0b03c"
  },
  {
    "url": "1.x/advanced/security_practice.html",
    "revision": "d23ca5a429ce03d3ef2e9380be92e5a9"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "1a53d7b79a499c5f5ea301818ae0f25b"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "2669c2c5c966b4798c0e65c4e75ae8be"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "60a7924925a1b21f82d2a3737d59cbb8"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "ae3269e9c762764128ca9e2dfbf78c4e"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "e1aeda7beecb7531e40df50b94053367"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "9e342a0fc3870d7bc15fad6abaa846b9"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "d21f0ddcafad2a95c38f17b3356a324a"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "2ba783339c50880be66d1ab7a0a62b59"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "c1b52fd24c289b90bee4a2439169d746"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "0dfd6f419925457789f7fb56c4a7ad0e"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "f9c47c0dc558763816ba237c9110479a"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "cd7749cc854e12032c59c31e903d6349"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "9c0db6adff8a0bc1a1e4af1177b5573d"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "e53b309f0280cc331d8714e4a9f6079c"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "5e6d6d6f2b065ab861894879edeff0b4"
  },
  {
    "url": "1.x/introduction/folders.html",
    "revision": "4cf6ccbe036558f7684f04f5dee4977c"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "bbe0d35f22db4c8acf90e5dfdaab339f"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "bc59b9f561140e29baee36322d0b6622"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "593a19f8baad9b8f9d687ff4d0974e42"
  },
  {
    "url": "1.x/introduction/upgrade_to_latest_bagisto.html",
    "revision": "398c0044842ab4dffed60db9e520ce3d"
  },
  {
    "url": "1.x/packages/add_menu_in_admin.html",
    "revision": "022cfb6c5326fc6a2d8f536fb8de2c86"
  },
  {
    "url": "1.x/packages/create_acl.html",
    "revision": "16e1b819a9165944389258f03d7c44eb"
  },
  {
    "url": "1.x/packages/create_custom_configuration.html",
    "revision": "f3f557e141a3c7628846419b3b898b49"
  },
  {
    "url": "1.x/packages/create_migrations.html",
    "revision": "86ff1e65de70f1d4110ea7c88e82791b"
  },
  {
    "url": "1.x/packages/create_models.html",
    "revision": "9051073b694991025c14d341ef5ae1e4"
  },
  {
    "url": "1.x/packages/create_package.html",
    "revision": "d0abd15e315ff21ae95d7901025dedfd"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "a9752bbdaa36140ef9fe49c606f3a9a0"
  },
  {
    "url": "1.x/packages/store_data_through_repositories.html",
    "revision": "92990203997c288be667f4207af2eaa8"
  },
  {
    "url": "1.x/themes/create_admin_theme.html",
    "revision": "59192706dfc51b18f1b08daa4ae869ae"
  },
  {
    "url": "1.x/themes/create_theme.html",
    "revision": "a53f7dc54ef5f022144bc642934c5ede"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "b0e9fcba66a70cca9d9ed4b5c41897ad"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "ac30f1b3e795c93e31b4fd596cde8620"
  },
  {
    "url": "1.x/translations/change_the_language_of_error_validations_on_your_store.html",
    "revision": "1a6ffe589d4254e490c95c67aaf0611c"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "0f1944eb76711e22814274df3422fcbe"
  },
  {
    "url": "1.x/translations/translation_based_on_locale.html",
    "revision": "456095af28fc81a1e643bb9028f601fb"
  },
  {
    "url": "1.x/user_guides/cart_catalog_rule.html",
    "revision": "cd6d3f03acc0206c859b33a6348e41dc"
  },
  {
    "url": "1.x/user_guides/cart_rule.html",
    "revision": "140e07d3bce1593105c273780f9906b3"
  },
  {
    "url": "1.x/user_guides/index.html",
    "revision": "892c2fd596c886ea79116d9edbaff500"
  },
  {
    "url": "1.x/user_guides/social_auth.html",
    "revision": "95bbbcb55d09d6dc6e6e2fe936ad5cda"
  },
  {
    "url": "404.html",
    "revision": "9cc552c8bb41c03de34c1f03b44cb252"
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
    "url": "assets/js/12.3899046c.js",
    "revision": "031dfa18f3ef5de93261c8795cf19d8a"
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
    "url": "assets/js/15.51a87bf4.js",
    "revision": "32aa3f22381aca10dfce014c53fef640"
  },
  {
    "url": "assets/js/16.c8b4d781.js",
    "revision": "b01310f5546d519ac513f1193f0df0ae"
  },
  {
    "url": "assets/js/17.3e94e2d7.js",
    "revision": "8c78d5869f17f0a8228b150c6e742aa0"
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
    "url": "assets/js/21.178e75d4.js",
    "revision": "b29454912a59aeeff915ddce3138a0ca"
  },
  {
    "url": "assets/js/22.920a4ca0.js",
    "revision": "3386e42cd067fa3015e80eedb9a2defe"
  },
  {
    "url": "assets/js/23.55cfc6a9.js",
    "revision": "80fdda3ccb6544c3d2277b7029fb93dc"
  },
  {
    "url": "assets/js/24.88ddeed7.js",
    "revision": "957b1b25342f99ead2583eaa069cee4e"
  },
  {
    "url": "assets/js/25.2942604d.js",
    "revision": "de6c3fe0fabd7a200f015f6ea62e54a0"
  },
  {
    "url": "assets/js/26.424de784.js",
    "revision": "467652680a8baad1a102065e485dde9e"
  },
  {
    "url": "assets/js/27.b46828cd.js",
    "revision": "75a78254906b1283a1b4ca02266935b7"
  },
  {
    "url": "assets/js/28.715349c8.js",
    "revision": "6015fa40cb08e43e64cdf21dc4c7fe11"
  },
  {
    "url": "assets/js/29.f94869a9.js",
    "revision": "e37e760a6ee2732e4be1429d7cecf10b"
  },
  {
    "url": "assets/js/3.2a3383ba.js",
    "revision": "2c384039fec2b53842606b1bd5f734b0"
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
    "url": "assets/js/4.84079dd4.js",
    "revision": "f43b79ab0ca05c5900152d2e19af9f7c"
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
    "url": "assets/js/49.539dceab.js",
    "revision": "f1bc12859b922aba03730be6e64dc3f3"
  },
  {
    "url": "assets/js/5.e663e278.js",
    "revision": "5d88dbf9e5c04dc0802bd952ed9264fe"
  },
  {
    "url": "assets/js/50.b4e9f9d2.js",
    "revision": "7b8b8200e320533212264e6bed7e9f62"
  },
  {
    "url": "assets/js/51.2ae80cf5.js",
    "revision": "a2cd8a46f4bad50efbc4307060a19fb6"
  },
  {
    "url": "assets/js/52.da7d02ea.js",
    "revision": "284aa36828831948e063eeeadeb43398"
  },
  {
    "url": "assets/js/53.2b8d5313.js",
    "revision": "4a84d67cda3b7e83b8ea8a7888fc223f"
  },
  {
    "url": "assets/js/54.01e23f4f.js",
    "revision": "0471d09cc3b87973fd1beedfbe6721f4"
  },
  {
    "url": "assets/js/55.103b46ce.js",
    "revision": "de666b80163b4b90d5a1a43b6e9ea75b"
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
    "url": "assets/js/8.621ac0e6.js",
    "revision": "267049662a54fd722542616464704113"
  },
  {
    "url": "assets/js/9.07fcc8de.js",
    "revision": "1ab4bfc6f13270360ab241605a9c733b"
  },
  {
    "url": "assets/js/app.81edb704.js",
    "revision": "8b0ccae6f8b59571dbf89b43b07c08b6"
  },
  {
    "url": "index.html",
    "revision": "2042ada8ebcd2713224fd89c93b05577"
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

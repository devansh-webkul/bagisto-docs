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
    "revision": "c0c7b9d5bc3a948493de85577b499da9"
  },
  {
    "url": "1.x/advanced/create_product_type.html",
    "revision": "6c4a73840f0ca26ffde28521f965b6f4"
  },
  {
    "url": "1.x/advanced/create_shipping_method.html",
    "revision": "ce5f0ba1b120b380666746f89bcd15e7"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "7d90ac42c6997a296412215bf7c28ecd"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "e0d737252d1e61529383f34daf47e931"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "dbac8d7fcb62f10cc22cadbd7c6b1bd1"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "c8bb9d71c8f15552f76b5d3a5dc79b45"
  },
  {
    "url": "1.x/advanced/render_event.html",
    "revision": "f224804b4a777a82e0ac11cdd0051055"
  },
  {
    "url": "1.x/advanced/security_practice.html",
    "revision": "48d29235218e081eca4df665b1e6ceba"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "228c27011de86e177ef2839154b56ddb"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "41ea684473d3db9ea26950467a051641"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "cfbc229fb8102a480a8c915f65f247c6"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "972e05748a643e590157fc6b34a07d7a"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "1eae59fccfcf7dde7c870252cfe31cb9"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "3961d49cb6e1dc6f7cfa82ba9929110c"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "e36206d9d018aeb2b4591916709c7a3f"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "e778cac604c39faa4ce289604ea096bd"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "06c5dcb1469bd5f82e2986d0405c060d"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "009fefd0ddd4c6d09aab51eacac53aad"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "38fbd75d61a64c9b56a2a9f5683777c9"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "9a840b432102db7b8e92be565a3ab51f"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "22ba8c6fd877adeaed00a32610569cef"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "c443f939c51313f63c5c8934dc5f799c"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "3597785bcca2f34bc110c11a4efe340a"
  },
  {
    "url": "1.x/introduction/folders.html",
    "revision": "1f3c75b7c6c81070cab1d0462a0c3fb1"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "bbb25210d0bf65582048be3a59933ae4"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "29dad3ff029ed5e858e1ed93b943e5cc"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "510dffc5b0aeb60973db659f74b78f52"
  },
  {
    "url": "1.x/introduction/upgrade_to_latest_bagisto.html",
    "revision": "7739a877028ea499a8223283c942caa6"
  },
  {
    "url": "1.x/packages/add_menu_in_admin.html",
    "revision": "108623a1ad3dc14a8b01db9bbb8cb632"
  },
  {
    "url": "1.x/packages/create_acl.html",
    "revision": "bbca6840ca6601270de430e84fd89fb7"
  },
  {
    "url": "1.x/packages/create_custom_configuration.html",
    "revision": "5feafd1b6accd69c819e7d3521b3b50d"
  },
  {
    "url": "1.x/packages/create_migrations.html",
    "revision": "e4abc242285b16e355d8434f532d5c3a"
  },
  {
    "url": "1.x/packages/create_models.html",
    "revision": "7d7d7deec733ac06639ca714b045cb60"
  },
  {
    "url": "1.x/packages/create_package.html",
    "revision": "757c9d09d494d2d0d3c9e2e92eddb0a4"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "d9836e6f0d2fc3382c42779246975076"
  },
  {
    "url": "1.x/packages/store_data_through_repositories.html",
    "revision": "a335f694b56d793b99612b1cd3149abf"
  },
  {
    "url": "1.x/themes/create_admin_theme.html",
    "revision": "862ea881a0d559a38d927d4c920966f3"
  },
  {
    "url": "1.x/themes/create_theme.html",
    "revision": "6dc8e67a27247abd19dda2729fbabe13"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "288ee1f31106507e52efb1bdcfc452b8"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "d567164c56b1498a7af1204a6adbe541"
  },
  {
    "url": "1.x/translations/change_the_language_of_error_validations_on_your_store.html",
    "revision": "0c351881686da6b5f067dca525f0dd0f"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "7c34a7d3ceb6ce68f162694e27530787"
  },
  {
    "url": "1.x/translations/translation_based_on_locale.html",
    "revision": "59c187f80763454495ece51d1968818b"
  },
  {
    "url": "1.x/user_guides/cart_catalog_rule.html",
    "revision": "3c421958811a21dfa0694b92dae97a69"
  },
  {
    "url": "1.x/user_guides/cart_rule.html",
    "revision": "35c78f3c7aabb3d789e4e3ab45c68a20"
  },
  {
    "url": "1.x/user_guides/index.html",
    "revision": "8ae25ddba607dd7bc9a0fc07e69e7816"
  },
  {
    "url": "1.x/user_guides/social_auth.html",
    "revision": "d879d97dc91f611d5055bef331a76982"
  },
  {
    "url": "404.html",
    "revision": "cd9cff06699625164c5ea05e64480388"
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
    "url": "assets/js/10.5244008a.js",
    "revision": "e62f501fbcbe6b87152f4048410f9d8d"
  },
  {
    "url": "assets/js/11.42969baf.js",
    "revision": "f25c79c41997bff6d132c96771484d77"
  },
  {
    "url": "assets/js/12.0bd8dfaf.js",
    "revision": "3828721a6f9feabf92bdb86343801b38"
  },
  {
    "url": "assets/js/13.cac4a452.js",
    "revision": "33c50c46ba6b913684ec4786778c1431"
  },
  {
    "url": "assets/js/14.8c2f252d.js",
    "revision": "110accc07dcd154eb55b5ae92b502f94"
  },
  {
    "url": "assets/js/15.27bda123.js",
    "revision": "c6faa0dbf4d4a018d64a8fc10a47de59"
  },
  {
    "url": "assets/js/16.03651442.js",
    "revision": "a6ec260dde3793c25dad66e816b21235"
  },
  {
    "url": "assets/js/17.3ceb6deb.js",
    "revision": "6d02d693247d00df8c00aefc91eca095"
  },
  {
    "url": "assets/js/18.2b113f52.js",
    "revision": "d1fd8aceade9a2dff8a9372c19234152"
  },
  {
    "url": "assets/js/19.1d4d418a.js",
    "revision": "daa1dd991ea36efeacade36e3a44ea79"
  },
  {
    "url": "assets/js/2.0190bd9b.js",
    "revision": "08e06718444029ceb94d12fa5862f01e"
  },
  {
    "url": "assets/js/20.867d37e1.js",
    "revision": "2c3823d5a9fbb69ca8a0c7f827f90c72"
  },
  {
    "url": "assets/js/21.d18ea91d.js",
    "revision": "4ac9f1b0275d9e0f664989304329c77d"
  },
  {
    "url": "assets/js/22.31a02f74.js",
    "revision": "5e43d9acc38a9aa43ddbd7872cb6ae49"
  },
  {
    "url": "assets/js/23.be5e1d8c.js",
    "revision": "3ad4438c1a708c30106bed07fbf89403"
  },
  {
    "url": "assets/js/24.705ea442.js",
    "revision": "c6721a09998ea91a86658a8b69b46202"
  },
  {
    "url": "assets/js/25.79d39ec0.js",
    "revision": "8592b86dd38fb21dc05d65223369c0a5"
  },
  {
    "url": "assets/js/26.93ebbc12.js",
    "revision": "0f733583059482f42bcdcaf501201537"
  },
  {
    "url": "assets/js/27.d0e875af.js",
    "revision": "d3f60f5f3adcfa55abc62e0cf340bf59"
  },
  {
    "url": "assets/js/28.4949e805.js",
    "revision": "e61b71e536f99db691f3124cce57593e"
  },
  {
    "url": "assets/js/29.7001033a.js",
    "revision": "a58d391a079d38f9f80059779a9cef75"
  },
  {
    "url": "assets/js/3.128d4047.js",
    "revision": "f6a95cb966615bef6a1a825673384f9a"
  },
  {
    "url": "assets/js/30.22ed2e07.js",
    "revision": "56da21e639f5ce271aed1cef0f890a3a"
  },
  {
    "url": "assets/js/31.08df0c1a.js",
    "revision": "4185c0ef33522fd3b07cf2a58ba9be96"
  },
  {
    "url": "assets/js/32.34d8c5a2.js",
    "revision": "844c4b419b9e0cae09bed7be0afaff9b"
  },
  {
    "url": "assets/js/33.46627303.js",
    "revision": "ba3d35007c610170560272c06a7a1a7c"
  },
  {
    "url": "assets/js/34.a02e5563.js",
    "revision": "fee42c06303ce6243bb071b003f566a7"
  },
  {
    "url": "assets/js/35.8d434079.js",
    "revision": "ac723d9c4f1a532410becbcf113ba8ff"
  },
  {
    "url": "assets/js/36.5255bc70.js",
    "revision": "33c122133e875127f7232cc6b877bef0"
  },
  {
    "url": "assets/js/37.f6a29708.js",
    "revision": "d18dcb7848b581ac55dfca728306d999"
  },
  {
    "url": "assets/js/38.7f62da5f.js",
    "revision": "01be402327c5efc53c3fdd2ba4e4fd5d"
  },
  {
    "url": "assets/js/39.aa59a074.js",
    "revision": "808f3e9dff5d824b8b7fadb94c118940"
  },
  {
    "url": "assets/js/4.3b539bac.js",
    "revision": "d39d626c7f262d21dba05005066451b7"
  },
  {
    "url": "assets/js/40.7c51bd98.js",
    "revision": "8d37956231afa8c8630ea9230531f3e2"
  },
  {
    "url": "assets/js/41.7e0ff554.js",
    "revision": "12c09357b55a727890173f37f035dc97"
  },
  {
    "url": "assets/js/42.fefca02f.js",
    "revision": "d3e220b5eabc70b61b97fc1c3e9d2ec5"
  },
  {
    "url": "assets/js/43.19424d76.js",
    "revision": "d069338038b4c0fcecaf047b7f05dab8"
  },
  {
    "url": "assets/js/44.91b9c253.js",
    "revision": "7535909c6605d71cbcaadf6388cbd877"
  },
  {
    "url": "assets/js/45.9c554436.js",
    "revision": "79b0f6ccf0ca738be4a449f4b4042e29"
  },
  {
    "url": "assets/js/46.0550fe51.js",
    "revision": "bf94566afee83853705d67f8febe3a5e"
  },
  {
    "url": "assets/js/47.9c5d66a0.js",
    "revision": "06c45d7e5c7b97a1f720667efd6946c0"
  },
  {
    "url": "assets/js/48.ae38d9dd.js",
    "revision": "f963f03bc66dd732de6fc1bad7b9135d"
  },
  {
    "url": "assets/js/49.aa71d56e.js",
    "revision": "3087e7c4392c754607848ce7446b92b0"
  },
  {
    "url": "assets/js/5.259d856d.js",
    "revision": "32acb951c0ba1f53908ade2f52ff141c"
  },
  {
    "url": "assets/js/50.8b01ae67.js",
    "revision": "7b8b8200e320533212264e6bed7e9f62"
  },
  {
    "url": "assets/js/51.00acba2b.js",
    "revision": "0485f3cdc3ba4d067d432159510e609b"
  },
  {
    "url": "assets/js/52.97e57a1c.js",
    "revision": "9f3c1a90b29d568a5d732a0e52b498f4"
  },
  {
    "url": "assets/js/53.1a29b899.js",
    "revision": "41a8b8af53110371f2edade3515b6d47"
  },
  {
    "url": "assets/js/54.943a46f2.js",
    "revision": "6698fe28a0a630e405f331cae4cfed3a"
  },
  {
    "url": "assets/js/6.f6ba448f.js",
    "revision": "f6f5d13f44ec206b5c1e9c7d0faf6e38"
  },
  {
    "url": "assets/js/7.2efc1770.js",
    "revision": "e15ed985ef68d1d500a50c531b6ed7fd"
  },
  {
    "url": "assets/js/8.ca62266e.js",
    "revision": "ae3ccb17d9ab6e5b3f24b4bee7f1ed1d"
  },
  {
    "url": "assets/js/9.eb9d0612.js",
    "revision": "280c50e0f1a7642d03435365217e3ffe"
  },
  {
    "url": "assets/js/app.0e58dd98.js",
    "revision": "acf013e93f92b121cdc5f2d1510f2ea4"
  },
  {
    "url": "index.html",
    "revision": "11c25a37263a339d645a858374e4cd7c"
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

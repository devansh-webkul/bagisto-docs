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
    "revision": "27a9f4610c3f53b131dad95d83f74e5c"
  },
  {
    "url": "1.x/advanced/create_product_type.html",
    "revision": "6b7e33d973fe6f1fda762032bd542439"
  },
  {
    "url": "1.x/advanced/create_shipping_method.html",
    "revision": "a7df0d1d909a9c46aab6920bdf24eafe"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "fa9667192109035141631932aac189dc"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "ae72cae391a12fb0670c30a64be8a02a"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "1a69fa40bd15d1844b89ab04565131eb"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "f82922e5f85e12808d66d9668e5ea438"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "af088e8aabf58d9cc3b9351d4f41796b"
  },
  {
    "url": "1.x/advanced/render_event.html",
    "revision": "ea9d4c1d68b02aaa135d7e07d3d82c36"
  },
  {
    "url": "1.x/advanced/security_practice.html",
    "revision": "2dcff3c60c96d13a46b5fb2ca5e125cc"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "40fb399cfe29e4f500825b452b579f98"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "00aa52257f9d3935ba66cedcf2ba427a"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "492e7a57f1313ae3340dbc75aed7d141"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "f60c763d366edc0ab21085f353add234"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "b08dceefc323c1ee952da01e97a75cf9"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "156b11449d4718201b3dea82e44a631e"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "c3673dbc9bbd55a84d33652500dee1d1"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "f32b0ca250fe0bc36fd494a98f619440"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "46bb8a87a0efb877520e6d6af8aba195"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "a5c4b763b6af45f014da68a9ce622f8f"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "347e57a40fe82cccf1d185778634f51b"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "cc9f792321bb99039cc24cb0607e41a7"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "71b864924a9f028bbcb6ef6e78f41e0c"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "96fe83825619c0a6f91a37cbf84c2c3e"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "a35ae0cd61561cdc8547c90a3c03e60c"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "254beb833a30881cf85d15d8950c9302"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "70dcd5f1076edae4616ba0a4e7efbb22"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "f76a85999b433fb463398c02cf85a2a5"
  },
  {
    "url": "1.x/graphql_admin_api/attribute_families.html",
    "revision": "06d7fd297d7fcd05c96f1b1dab679cbe"
  },
  {
    "url": "1.x/graphql_admin_api/attribute_groups.html",
    "revision": "80fd6bc2b69c9fc1464462479fa69f3d"
  },
  {
    "url": "1.x/graphql_admin_api/attributes.html",
    "revision": "ec1317a3380d6b8208d0c0da6bd72310"
  },
  {
    "url": "1.x/graphql_admin_api/categories.html",
    "revision": "c3ec78ec789936caa983513106ae440b"
  },
  {
    "url": "1.x/graphql_admin_api/cms.html",
    "revision": "58b67b2b64746f7300e8938963a6bfde"
  },
  {
    "url": "1.x/graphql_admin_api/customers.html",
    "revision": "5e85bc0756937c2668dd357922ead168"
  },
  {
    "url": "1.x/graphql_admin_api/explanation.html",
    "revision": "876ff712f57f9d8d523065c1ddbea047"
  },
  {
    "url": "1.x/graphql_admin_api/getting-started-with-the-api.html",
    "revision": "8f43f0740a50d0670a065d2c5c532197"
  },
  {
    "url": "1.x/graphql_admin_api/index.html",
    "revision": "effc8f5d90ff5b013e2b4f4e087dc61c"
  },
  {
    "url": "1.x/graphql_admin_api/products.html",
    "revision": "e5a62ed679d5af033e0dc79811e058ff"
  },
  {
    "url": "1.x/graphql_admin_api/promotions.html",
    "revision": "80fd7391e2a83a5ed06ce085ba0fd134"
  },
  {
    "url": "1.x/graphql_admin_api/sales.html",
    "revision": "cb24e36371d6a7af0d512ef62f40ca36"
  },
  {
    "url": "1.x/graphql_admin_api/settings.html",
    "revision": "4f1028ad5d8828fad2d869940e9193ae"
  },
  {
    "url": "1.x/graphql_admin_api/velocity.html",
    "revision": "b8d66ef4a6970944bd3a3061833580d7"
  },
  {
    "url": "1.x/graphql_shop_api/addresses.html",
    "revision": "314c59ca6fef3beeb3f92043bfc56c4a"
  },
  {
    "url": "1.x/graphql_shop_api/cart.html",
    "revision": "ec9a9cf995f0d8dd875af29b885a0293"
  },
  {
    "url": "1.x/graphql_shop_api/checkout.html",
    "revision": "2624aa0e912bc5843c8eaaf445c9e729"
  },
  {
    "url": "1.x/graphql_shop_api/compare.html",
    "revision": "63465863358f58fa8874642a08c140ab"
  },
  {
    "url": "1.x/graphql_shop_api/downloadable_links.html",
    "revision": "34d6bafd125f43aee05e931080e70dd4"
  },
  {
    "url": "1.x/graphql_shop_api/getting-started-with-the-api.html",
    "revision": "f631f035947ac937abba994267adceb5"
  },
  {
    "url": "1.x/graphql_shop_api/homepage.html",
    "revision": "6f05683c896c64fb0043c2ce9043e9a4"
  },
  {
    "url": "1.x/graphql_shop_api/index.html",
    "revision": "e363b5b1dc5b9f2f5080d05a4c66fad4"
  },
  {
    "url": "1.x/graphql_shop_api/orders.html",
    "revision": "0d56eab7a07110758b5c9176050c2b4c"
  },
  {
    "url": "1.x/graphql_shop_api/reviews.html",
    "revision": "8ea7101b04f968f29b0ce78fb17820af"
  },
  {
    "url": "1.x/graphql_shop_api/wishlists.html",
    "revision": "4c189399e9e57c761eb30e350cceb6dc"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "2d002c11f6ea683079ae2b75b5b3624d"
  },
  {
    "url": "1.x/introduction/folders.html",
    "revision": "429fa3bab4346c90db8c63cf04f08a45"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "d7e8515a66b3feb8ed5d7f0c2bd28460"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "b688357f87683272983513daa1dcd84f"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "88d7cc61278c1796e5d2ca9b545b55d8"
  },
  {
    "url": "1.x/introduction/upgrade_to_latest_bagisto.html",
    "revision": "4c3116e2784ec272c77bbbfb5ffce546"
  },
  {
    "url": "1.x/packages/add_menu_in_admin.html",
    "revision": "ee9ea43e3eb2433ba81722003dd4b415"
  },
  {
    "url": "1.x/packages/create_acl.html",
    "revision": "17784dec649fcb7c1c92c25f52b70e4a"
  },
  {
    "url": "1.x/packages/create_custom_configuration.html",
    "revision": "0056d29273c1fcda38c640d7621130d1"
  },
  {
    "url": "1.x/packages/create_migrations.html",
    "revision": "b2e5135e7d1a66721229e55d3b9ff62c"
  },
  {
    "url": "1.x/packages/create_models.html",
    "revision": "f405c999d5e5833178886d85a2b60725"
  },
  {
    "url": "1.x/packages/create_package.html",
    "revision": "86f3c01e4d717e97d8e6f459b80d3f32"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "9041b3ade0b13c896f4841f5abde5f61"
  },
  {
    "url": "1.x/packages/store_data_through_repositories.html",
    "revision": "bf7393df434b58e52864e17fa517945b"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "42b5495cdd8b05b2f412df317cd774f3"
  },
  {
    "url": "1.x/themes/create_admin_theme.html",
    "revision": "04e6de5b25c53330737f2523cd72cf8d"
  },
  {
    "url": "1.x/themes/create_theme.html",
    "revision": "31619181acfb94fa6aac1041c22d5595"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "a96ef544b0b148abfc830b5e3fdd5cb2"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "3792dbfe90c011a4d13a400e021c41b9"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "ab133dcd0fccfcab1c97e59b06c09f94"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "5437f05bb568a4a669c02d47d6a66129"
  },
  {
    "url": "1.x/translations/change_the_language_of_error_validations_on_your_store.html",
    "revision": "0d39d1a8084105b5c7c4fa247b2eaf70"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "8da58002a86d0c0542a6a5dace8c03e1"
  },
  {
    "url": "1.x/translations/translation_based_on_locale.html",
    "revision": "00f5242097f5946267e1fb96ceb68645"
  },
  {
    "url": "1.x/user_guides/cart_catalog_rule.html",
    "revision": "a8ee4d952ce24f147a97b00df6c3bfa0"
  },
  {
    "url": "1.x/user_guides/cart_rule.html",
    "revision": "3ecda1f39fceb87f18821daec994a1e4"
  },
  {
    "url": "1.x/user_guides/index.html",
    "revision": "8bacb9ac6b92d3fa61dd8f72e8921ee2"
  },
  {
    "url": "1.x/user_guides/social_auth.html",
    "revision": "aea06ed7821907e8cc329ac367aac931"
  },
  {
    "url": "404.html",
    "revision": "a7680ab9f020b8880b15613b46e2fb04"
  },
  {
    "url": "assets/css/0.styles.7e612dfc.css",
    "revision": "229436dddc5541cc57d9d271908e7d30"
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
    "url": "assets/img/mail-sample.6aa3d730.png",
    "revision": "6aa3d7304bd852564b76860b7117bdb7"
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
    "url": "assets/js/10.9464a983.js",
    "revision": "a5b5e4d370ad23197a6ccf1fcddde017"
  },
  {
    "url": "assets/js/11.5559cbc3.js",
    "revision": "c497e7d861caaeb931afc84f01db2e01"
  },
  {
    "url": "assets/js/12.ce092e93.js",
    "revision": "7321eb4f493b1c485138d7c031672a2b"
  },
  {
    "url": "assets/js/13.39a6e017.js",
    "revision": "703b489bfaf8f130d902b7dabe49a604"
  },
  {
    "url": "assets/js/14.75c11a20.js",
    "revision": "24de99178437ff9ae9cb5b96019d1209"
  },
  {
    "url": "assets/js/15.bdbf54fc.js",
    "revision": "514b13b255b391371a229ed0264e1fef"
  },
  {
    "url": "assets/js/16.3d2c4d40.js",
    "revision": "cecccd8d187c48725836266a1b991ff1"
  },
  {
    "url": "assets/js/17.ef23a016.js",
    "revision": "4d6ce0500260d6b1f6b3ab47e3e82085"
  },
  {
    "url": "assets/js/18.23b87b84.js",
    "revision": "1cef12a6a55a8550f5fb05f7b5fc0373"
  },
  {
    "url": "assets/js/19.a3e8b6fa.js",
    "revision": "51bf3df10a21d66205b20988b5fc9c58"
  },
  {
    "url": "assets/js/2.ce2ab776.js",
    "revision": "7f2e8f53e0898474f8ba04cbbe9bc5be"
  },
  {
    "url": "assets/js/20.c4839a59.js",
    "revision": "a0a47e35d57a17d1d7926b6c264160b6"
  },
  {
    "url": "assets/js/21.37ad4627.js",
    "revision": "8c35d0e87df760adc7cb2591252bace4"
  },
  {
    "url": "assets/js/22.7a62bbc1.js",
    "revision": "33cec39793e5a450f622a5a6a031625f"
  },
  {
    "url": "assets/js/23.593a626e.js",
    "revision": "3e3698447a439915fbe9b717a829c085"
  },
  {
    "url": "assets/js/24.61c3f151.js",
    "revision": "69bedc5a30fd8813262257bcefcf827a"
  },
  {
    "url": "assets/js/25.87a4413a.js",
    "revision": "a3ac198e2acf52ac0b95fbda5846c32d"
  },
  {
    "url": "assets/js/26.43b097db.js",
    "revision": "5c3b849a8af3533f61d1492c904c6e1e"
  },
  {
    "url": "assets/js/27.e4a10271.js",
    "revision": "31f4f87210e796ed8b2149b70f886199"
  },
  {
    "url": "assets/js/28.352085e0.js",
    "revision": "3dd3fea711c49fbc707e073dc3689bfe"
  },
  {
    "url": "assets/js/29.c6459d81.js",
    "revision": "cdf8877e76809a84af43fdfd7c73e75d"
  },
  {
    "url": "assets/js/3.25ce11e4.js",
    "revision": "aa6d43e4b2a5dd93ee7a8e1705d204ed"
  },
  {
    "url": "assets/js/30.8cd44809.js",
    "revision": "ade6dd1f8434c2b187e3a82129754969"
  },
  {
    "url": "assets/js/31.05fd719c.js",
    "revision": "4bfcb07d15ed764ae85144a0879e3edb"
  },
  {
    "url": "assets/js/32.8cfbb582.js",
    "revision": "baafc3cf37ce39265ccaf87c6f6455e1"
  },
  {
    "url": "assets/js/33.c9004e34.js",
    "revision": "141844ffe7ae1fead0713f3ef26853bb"
  },
  {
    "url": "assets/js/34.98407d11.js",
    "revision": "73421dc6c56a552eece93917bbefef49"
  },
  {
    "url": "assets/js/35.debf6f53.js",
    "revision": "2d2f5b172869d3e35fbeedd24a38ea9d"
  },
  {
    "url": "assets/js/36.8a8f858e.js",
    "revision": "7f49392529053ad8ec171af7432b9985"
  },
  {
    "url": "assets/js/37.ca020662.js",
    "revision": "08311f2d287a645506efb38cc7253d35"
  },
  {
    "url": "assets/js/38.251b617d.js",
    "revision": "3c810f7cda9cec7fdc4127b22ceffc03"
  },
  {
    "url": "assets/js/39.5f47781c.js",
    "revision": "ece235944077d17646758be34a205296"
  },
  {
    "url": "assets/js/4.463e56a6.js",
    "revision": "e814bdb597ae0ec250d639e3fb5f3d3a"
  },
  {
    "url": "assets/js/40.aa1653cd.js",
    "revision": "309da1e333517b53e6817742560d0a3e"
  },
  {
    "url": "assets/js/41.3292db28.js",
    "revision": "eb66ad22add3a5f2157464967ab9838a"
  },
  {
    "url": "assets/js/42.ccdf9479.js",
    "revision": "6c0bc8beccef6d30a74a9b94fdb22fe3"
  },
  {
    "url": "assets/js/43.abdc6082.js",
    "revision": "4b08d183af348e40aab2730a66ccf3bc"
  },
  {
    "url": "assets/js/44.86ebb09d.js",
    "revision": "d7a0f2d5699f005e86e18fd75a5e28f3"
  },
  {
    "url": "assets/js/45.dd131452.js",
    "revision": "dc9e740ad1c27aff6f49f8d301397fbc"
  },
  {
    "url": "assets/js/46.1b508b5f.js",
    "revision": "d9a470d01e711af5d4f31c172b681320"
  },
  {
    "url": "assets/js/47.789070e5.js",
    "revision": "60a187955bdfed45979f24db02977797"
  },
  {
    "url": "assets/js/48.22d1de93.js",
    "revision": "99dd01175ecaf54322e4e7df33a93a41"
  },
  {
    "url": "assets/js/49.e3480b78.js",
    "revision": "2dac49a90f209e0eedad270f262b2c55"
  },
  {
    "url": "assets/js/5.c5202ca1.js",
    "revision": "f3b2fdd5fba0122044103f22d3d0febe"
  },
  {
    "url": "assets/js/50.2de5ee9a.js",
    "revision": "8ed4625c696d71f7fb10189b9c877715"
  },
  {
    "url": "assets/js/51.aa61f0ff.js",
    "revision": "39597806156072cb85a252f6cbab4844"
  },
  {
    "url": "assets/js/52.7d927660.js",
    "revision": "ef7663785cb7c13433e8095708440407"
  },
  {
    "url": "assets/js/53.58bc990b.js",
    "revision": "c3bda4ef03f8db61d8339934d8b6b0e7"
  },
  {
    "url": "assets/js/54.d5ee017c.js",
    "revision": "c40c74676e1caf2ba8f25c87934d3367"
  },
  {
    "url": "assets/js/55.a1f3fb75.js",
    "revision": "b92cb5dc93f29a5f3e4814f63b5583ce"
  },
  {
    "url": "assets/js/56.85da27fc.js",
    "revision": "44417a57715e0658044188f8f940e3aa"
  },
  {
    "url": "assets/js/57.c65f7296.js",
    "revision": "d41b52df213d7abd49e564dd679e460d"
  },
  {
    "url": "assets/js/58.7e79517c.js",
    "revision": "b4d8f8f725bfa62ef2b7093f900325b1"
  },
  {
    "url": "assets/js/59.82dc1869.js",
    "revision": "8214f5548b14c0d8771ec828014a51d1"
  },
  {
    "url": "assets/js/6.7a71968f.js",
    "revision": "d89ea2101f7e740efebcb57cbbe3f1a5"
  },
  {
    "url": "assets/js/60.a7415874.js",
    "revision": "59d31326686e017a35fa0f90cab862a5"
  },
  {
    "url": "assets/js/61.dadf6634.js",
    "revision": "525d7c2eee5e877d2ffdd36c55ece09b"
  },
  {
    "url": "assets/js/62.17d3ab1a.js",
    "revision": "fadf20d810192bf288b6b70c42bcf098"
  },
  {
    "url": "assets/js/63.48c012ad.js",
    "revision": "f7038631912c2c2c563939176cd1bf26"
  },
  {
    "url": "assets/js/64.f3378e86.js",
    "revision": "3131eea60f18e365beecbdd4b0f01722"
  },
  {
    "url": "assets/js/65.29008481.js",
    "revision": "b43969b232c5831aee7b95e27d14d11d"
  },
  {
    "url": "assets/js/66.a0d82def.js",
    "revision": "30a8dae57dc66bc77ae63f104926ebdf"
  },
  {
    "url": "assets/js/67.b2d1e01e.js",
    "revision": "e31b5d1a7fec1731e951ef260e2d7e71"
  },
  {
    "url": "assets/js/68.916ef821.js",
    "revision": "b265a3f48239fa8a13f062f350f4c3c7"
  },
  {
    "url": "assets/js/69.82989822.js",
    "revision": "cff9a581edeed49c1c26afba20310a61"
  },
  {
    "url": "assets/js/7.1ec710ed.js",
    "revision": "90b220f06697cea978b2f6b4e5543730"
  },
  {
    "url": "assets/js/70.f52762d3.js",
    "revision": "6ee3106846e2092b17d2e8cd5ba7f269"
  },
  {
    "url": "assets/js/71.04d36caa.js",
    "revision": "925de269dfc482e68cfbd4473b17888f"
  },
  {
    "url": "assets/js/72.26c555e8.js",
    "revision": "3d62ce423b8ed575d391b947c1b43ac5"
  },
  {
    "url": "assets/js/73.cb5d7f6b.js",
    "revision": "ecae334450358b20997f249042c96e2a"
  },
  {
    "url": "assets/js/74.7a30e55b.js",
    "revision": "1813fe24b2f2d527651e0fdd1be8f109"
  },
  {
    "url": "assets/js/75.d798f182.js",
    "revision": "94e231e53f5636da5cae071cae176c00"
  },
  {
    "url": "assets/js/76.e02e89ec.js",
    "revision": "8e74d90ef30b1eb2de56995bd96ed5cd"
  },
  {
    "url": "assets/js/77.3a141f9f.js",
    "revision": "8e0bfab2f771601d0528efedcada22ec"
  },
  {
    "url": "assets/js/78.d027fab6.js",
    "revision": "555da8f1c05325000353274eef32e77a"
  },
  {
    "url": "assets/js/79.728588a2.js",
    "revision": "61a0090e5eed7ef16210c06f3366f6da"
  },
  {
    "url": "assets/js/8.57c40d94.js",
    "revision": "c43759b7ad23a75bdb95b2c472dcb2c7"
  },
  {
    "url": "assets/js/80.1dcf2eaa.js",
    "revision": "d23beeb4581132f44da89f52fd676769"
  },
  {
    "url": "assets/js/81.f39bf15f.js",
    "revision": "3ae6af1647f4b838347168bb33a56394"
  },
  {
    "url": "assets/js/82.acbe2fe5.js",
    "revision": "7cff43fa463ac3ac00a1207bc0e739c9"
  },
  {
    "url": "assets/js/83.10b449e7.js",
    "revision": "b59713f63964aa66aef9639911ad99aa"
  },
  {
    "url": "assets/js/84.71017fe7.js",
    "revision": "d4071d06ede315dfcd54a2b81f674113"
  },
  {
    "url": "assets/js/85.42ba020e.js",
    "revision": "d4ea4f95f8b26793096f74641a1da63c"
  },
  {
    "url": "assets/js/86.ef3fac0a.js",
    "revision": "2f74273b1de2be6277c0462d557c1b76"
  },
  {
    "url": "assets/js/87.491b2c27.js",
    "revision": "ff4fc1592c34c02c78ebf16131fc483a"
  },
  {
    "url": "assets/js/9.1131fcd6.js",
    "revision": "d03cfcbeed2ed158189782f39e2dac76"
  },
  {
    "url": "assets/js/app.cb656fe5.js",
    "revision": "260eefc28efb5cc0ce63859833922f24"
  },
  {
    "url": "index.html",
    "revision": "2cc3cdd1975d7919ef8811f7cf38c1e0"
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

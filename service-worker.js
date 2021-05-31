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
    "revision": "09fb4a5253cfeed63d867d61f7a92d8d"
  },
  {
    "url": "1.x/advanced/create_product_type.html",
    "revision": "2935e1a784ea4cd19c14389c16453f7e"
  },
  {
    "url": "1.x/advanced/create_shipping_method.html",
    "revision": "1cfbb6d2ea1b77da8124ffd68181401f"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "36ef58780495ca269d2a4749bfd92edd"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "a692f87bd31c926ef5b604418c14d301"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "8e0374ca76d6284dad2a71fae4693f00"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "d1ec2a5c4590d336b32c4a957dbedc5c"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "12c238b5be6a5666d88bf9f3c717f730"
  },
  {
    "url": "1.x/advanced/render_event.html",
    "revision": "11ab3fc897c49b2a863589f3b77fe8eb"
  },
  {
    "url": "1.x/advanced/security_practice.html",
    "revision": "27b154183bfdec162dbcb587a17085f8"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "8a5459580d5483c9137b5e9aa1155f62"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "6f401fcb5e081d522d7d921b39ac83ec"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "3f469a65b61a24145d687b1e3b65be69"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "454265968ed143bbcda35547645265c6"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "84930a4f2ce617e379368936980f7707"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "3901bd0eab4c9aa4e931b8debe6d5316"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "e226d57bb8c374e872b47041a8a6386b"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "1bdbc36313d93880239a39ec272f9e31"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "fd38afb20bab731c3a710b624b6ff005"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "3cb3dd6cbc6a355e915a737d056761dd"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "3941106b41d0124b1f4aa5eac4240769"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "c1745933f3e36db5cea89ae1320c30d0"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "56e00d7d7ba6e7297348be1f12b40ebd"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "c1abe8ea1d4fafe93cb6d5902bf34aab"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "05c7257fd589da0a2542704069ae0d27"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "979b68a2da73e8afb7234a468f81d8b6"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "b9f9c78ee2988d63574d75bcd2693e6f"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "f514e667fbc6501c085bc167652790dd"
  },
  {
    "url": "1.x/graphql_admin_api/attribute_families.html",
    "revision": "765c07d357b7b184ef644a9e9e7a1902"
  },
  {
    "url": "1.x/graphql_admin_api/attribute_groups.html",
    "revision": "c2b826f09a32d151e22d45460eede951"
  },
  {
    "url": "1.x/graphql_admin_api/attributes.html",
    "revision": "2ffc5d3e32e7a6b8390cf45c6e0f450e"
  },
  {
    "url": "1.x/graphql_admin_api/categories.html",
    "revision": "6a95bc649930443f4fa047d3cc9559b2"
  },
  {
    "url": "1.x/graphql_admin_api/cms.html",
    "revision": "29fc22fcdb9f6502f64490e5397bf1eb"
  },
  {
    "url": "1.x/graphql_admin_api/customers.html",
    "revision": "659d279d756b31bbb3e241ae3c4ea0f0"
  },
  {
    "url": "1.x/graphql_admin_api/explanation.html",
    "revision": "0b6acae63a0ffcc838391f6e0974bd85"
  },
  {
    "url": "1.x/graphql_admin_api/getting-started-with-the-api.html",
    "revision": "52afe251dff84e495ec79a99eedfc57a"
  },
  {
    "url": "1.x/graphql_admin_api/index.html",
    "revision": "8adfd73627ac8c5f434a0dd370574667"
  },
  {
    "url": "1.x/graphql_admin_api/products.html",
    "revision": "2809a4b1b2adc5c1708ae6fcde6c836e"
  },
  {
    "url": "1.x/graphql_admin_api/promotions.html",
    "revision": "4f59ed7274a769d3b449de91137f2190"
  },
  {
    "url": "1.x/graphql_admin_api/sales.html",
    "revision": "51e96cb3c62f2e61cd5b9c29cb347db4"
  },
  {
    "url": "1.x/graphql_admin_api/settings.html",
    "revision": "cc1ae67580c87278bdeae615cc6b334e"
  },
  {
    "url": "1.x/graphql_admin_api/velocity.html",
    "revision": "3e0d695511162130cdb1f8d36e1a1e1a"
  },
  {
    "url": "1.x/graphql_shop_api/addresses.html",
    "revision": "8d55c65c5e3b349738f3a3f861730e1c"
  },
  {
    "url": "1.x/graphql_shop_api/cart.html",
    "revision": "7fb25506205b80731705a86e131c60cd"
  },
  {
    "url": "1.x/graphql_shop_api/checkout.html",
    "revision": "11922289cb7c6aa06fcf4e6cee81dfd5"
  },
  {
    "url": "1.x/graphql_shop_api/compare.html",
    "revision": "c5316daf3cdd74d97361d0a452024ffb"
  },
  {
    "url": "1.x/graphql_shop_api/downloadable_links.html",
    "revision": "a3d45005f28d8db48837ae74fa057d84"
  },
  {
    "url": "1.x/graphql_shop_api/getting-started-with-the-api.html",
    "revision": "9733e2afce75456ce6b7cae1f060f052"
  },
  {
    "url": "1.x/graphql_shop_api/homepage.html",
    "revision": "0d03d661b6d138553920cd3ff3c733ef"
  },
  {
    "url": "1.x/graphql_shop_api/index.html",
    "revision": "a8667b506f52c56346293871ab4c7221"
  },
  {
    "url": "1.x/graphql_shop_api/orders.html",
    "revision": "72636cb7d7943754679cfc479a00c3fd"
  },
  {
    "url": "1.x/graphql_shop_api/reviews.html",
    "revision": "b6cba41348b71f7dfc000428e72496a0"
  },
  {
    "url": "1.x/graphql_shop_api/wishlists.html",
    "revision": "797f1635771344b1915cd321939d1ca3"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "77e8e9684234f95941a5bea301ee91ce"
  },
  {
    "url": "1.x/introduction/folders.html",
    "revision": "919390ebd501dd2e3a5387e5f8d58adf"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "2a72d39e703c546ddf70f697fc00cd3a"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "01d08c6abadab1cd1a28196e2a4ce7d5"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "b8afdf4edba640b7a49adadfc99c89be"
  },
  {
    "url": "1.x/introduction/upgrade_to_latest_bagisto.html",
    "revision": "139c69525724130bba399eb05f4ebd9e"
  },
  {
    "url": "1.x/packages/add_menu_in_admin.html",
    "revision": "f045d394309f26f5e01235e2a39bec24"
  },
  {
    "url": "1.x/packages/create_acl.html",
    "revision": "3b1517ed51e5b19df2d1d33591e4a687"
  },
  {
    "url": "1.x/packages/create_custom_configuration.html",
    "revision": "34b179b4e834b4fb9f5f02027cff46d3"
  },
  {
    "url": "1.x/packages/create_migrations.html",
    "revision": "2d4e8759a3dd26250c41c298af2a24bc"
  },
  {
    "url": "1.x/packages/create_models.html",
    "revision": "0e4d07b2ccbd579b9ce80d34e702d36a"
  },
  {
    "url": "1.x/packages/create_package.html",
    "revision": "85cdfb18c59a94ac18cab3dad39bda5d"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "7fca941f1c57a47dd2a4427c17475f37"
  },
  {
    "url": "1.x/packages/store_data_through_repositories.html",
    "revision": "74e617c19119e1bd285df360c8340b84"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "7ccd23e202e3a0531a2a922f20f0aaa6"
  },
  {
    "url": "1.x/themes/create_admin_theme.html",
    "revision": "9c9fc81ba5bae9b3f7b47397251f8e01"
  },
  {
    "url": "1.x/themes/create_theme.html",
    "revision": "59ea1889844d08823f32977e61484027"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "b5d31d9b0c9b6578eb35eccfb8d1394f"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "2feef8807f4d1da167183d1c26030349"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "353995d8a32a911a4ba5459130c379e5"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "190d7814982bf3452082161146990dd8"
  },
  {
    "url": "1.x/translations/change_the_language_of_error_validations_on_your_store.html",
    "revision": "3094b44795ba8e804e56f24f8812cd6d"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "daea7ed1008388534f37dba6b4efbc0f"
  },
  {
    "url": "1.x/translations/translation_based_on_locale.html",
    "revision": "d242d2ec54fbc6b481e5ff7ea809dab7"
  },
  {
    "url": "1.x/user_guides/cart_catalog_rule.html",
    "revision": "d62212e58e32a7725f7c8f2b9a2aaffe"
  },
  {
    "url": "1.x/user_guides/cart_rule.html",
    "revision": "e1ad4244403562b428b22432aeee6859"
  },
  {
    "url": "1.x/user_guides/index.html",
    "revision": "739b69386a02a06fd0f7aba40b6046ea"
  },
  {
    "url": "1.x/user_guides/social_auth.html",
    "revision": "371f015c68fe95a6ed4ca1f6c1ff1c4e"
  },
  {
    "url": "404.html",
    "revision": "1be776a7a95247a20e2dd329367a0a35"
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
    "url": "assets/js/14.4254805c.js",
    "revision": "5981247d514c4921d13b3ff3c8331b05"
  },
  {
    "url": "assets/js/15.eb96964e.js",
    "revision": "4ea0759c037ca0b2cbef79ea3f89187a"
  },
  {
    "url": "assets/js/16.78a23677.js",
    "revision": "9637f7463bfd0a5af4535b173cbcf5e3"
  },
  {
    "url": "assets/js/17.528dce41.js",
    "revision": "44b40e02e7688d16b2aec8365ce8c9a3"
  },
  {
    "url": "assets/js/18.c904bd24.js",
    "revision": "53305aef1901987a95e1e37aa9e35e73"
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
    "url": "assets/js/28.e89694ed.js",
    "revision": "7f2d14b0511956563634f3b2ed6cba5a"
  },
  {
    "url": "assets/js/29.4a804333.js",
    "revision": "63aba35a23754e7ce58af18cb88c6f3f"
  },
  {
    "url": "assets/js/3.6497f7a0.js",
    "revision": "ba0f8706ce2a0406594ec064ef517016"
  },
  {
    "url": "assets/js/30.0235185b.js",
    "revision": "d0594f31611ff1d052bdbbb47f733687"
  },
  {
    "url": "assets/js/31.2d86726e.js",
    "revision": "f1a7b8b2cc935fbf4a2e8f9b6353c8d8"
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
    "url": "assets/js/4.2b0e1f4e.js",
    "revision": "6d96af02b086ddf637073a924e511623"
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
    "url": "assets/js/5.c1e14efe.js",
    "revision": "a5f3d972d7a96ac45d1f43c12ea74b63"
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
    "url": "assets/js/59.f0871b93.js",
    "revision": "e311b059fb7d4635ce4f4b5d968cc239"
  },
  {
    "url": "assets/js/6.7a71968f.js",
    "revision": "d89ea2101f7e740efebcb57cbbe3f1a5"
  },
  {
    "url": "assets/js/60.fd0ecda2.js",
    "revision": "35cb4fd93ec861379a5bce7cbfd1defb"
  },
  {
    "url": "assets/js/61.da6fe2db.js",
    "revision": "f7868f8c2a61d7123b750bf3d802edb6"
  },
  {
    "url": "assets/js/62.d59671bd.js",
    "revision": "4c4a7227c99e8000505d73bf1d10b1c6"
  },
  {
    "url": "assets/js/63.857e417b.js",
    "revision": "aeb18aa13e6c14ff3f85e72d6e036bdf"
  },
  {
    "url": "assets/js/64.472dd3ee.js",
    "revision": "d83eea4f58780743fc53956ba30231c4"
  },
  {
    "url": "assets/js/65.470b8db9.js",
    "revision": "697b023aab6df8ea8ac2ef928fa1b9f2"
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
    "url": "assets/js/69.03004135.js",
    "revision": "a5d571e3d190ce63b4580ee0648159ee"
  },
  {
    "url": "assets/js/7.8b774b79.js",
    "revision": "ecb9444e29bbd59753e89cf10548303f"
  },
  {
    "url": "assets/js/70.a23e15fb.js",
    "revision": "a3df4d1f14eaf4da1d09fef9aae24afc"
  },
  {
    "url": "assets/js/71.ba7c6b6e.js",
    "revision": "5d5070b908aefa2e725831a96861abfb"
  },
  {
    "url": "assets/js/72.905d1e96.js",
    "revision": "a48a0b8ee9ee350fc2c14fb78c20fcc6"
  },
  {
    "url": "assets/js/73.7d6a9479.js",
    "revision": "28f33b7e6538570ae940c623f0bfd099"
  },
  {
    "url": "assets/js/74.6cf8ae7a.js",
    "revision": "36b827b69071750fc136d9e6e2fc9121"
  },
  {
    "url": "assets/js/75.9a346681.js",
    "revision": "909c0e948a092057e832ecb0f7927b37"
  },
  {
    "url": "assets/js/76.ff7e2307.js",
    "revision": "78c80e3bdae9ee6534479eea5fa3ff08"
  },
  {
    "url": "assets/js/77.3b62c293.js",
    "revision": "f03e63d813e331ff86bc3fe9b08099ea"
  },
  {
    "url": "assets/js/78.a5b17418.js",
    "revision": "0dc7c1732c32cc526bb577afb1bc0b2c"
  },
  {
    "url": "assets/js/79.60aa78c5.js",
    "revision": "5a24f7c754630b678ebd6e966f99ba74"
  },
  {
    "url": "assets/js/8.57c40d94.js",
    "revision": "c43759b7ad23a75bdb95b2c472dcb2c7"
  },
  {
    "url": "assets/js/80.b35e0004.js",
    "revision": "c63684f893efe54753d0d0fd63a77edd"
  },
  {
    "url": "assets/js/81.8943dfac.js",
    "revision": "304e54d12d18e4b5d92fedf3e7f35429"
  },
  {
    "url": "assets/js/82.d0aa9d12.js",
    "revision": "f7185817a94777eb6580282c6e6ae294"
  },
  {
    "url": "assets/js/83.7e25c313.js",
    "revision": "dd2791204d8b29fddf202d9325edfafd"
  },
  {
    "url": "assets/js/84.7a795796.js",
    "revision": "6e69c0fbcb2bbf6a39b4b1be55d07d3d"
  },
  {
    "url": "assets/js/85.07f5407d.js",
    "revision": "bf0f155fac8c054992aee6083f8a8924"
  },
  {
    "url": "assets/js/86.b14bfdd7.js",
    "revision": "50f8f5e32aa0b9325f5f8d485f86d1bb"
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
    "url": "assets/js/app.9706f659.js",
    "revision": "fb11df71308df70ac9b3a707c94e5370"
  },
  {
    "url": "index.html",
    "revision": "e3f678dae34a0c79795946950491fcb7"
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

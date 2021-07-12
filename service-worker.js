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
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "024e1507c0ab8141422bef7a02ac4433"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "dbba7ecef38d35f7b352b867cc9d8e8c"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "0797d5786ae370042a95e06724d53b4e"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "333b4ce0ab1b8fd830c1895401897032"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "fe9e5ec228945ef95a6c35ded4dd53c5"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "1a226314ab6c28ecc11f5fe65923b4d3"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "908eccfa9f2272fdd15bfe0e85a15137"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "c1b19f07d5778ec4cc14ed0ea799ea61"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "7d95c72faa383f82b4ffb04ed07c892f"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "b95928066d0c6d42a9a491ae8b30784b"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "392d34859a5db567944a3d31f34dea85"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "f7c131ca3e557619d6b423379a9c010e"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "bcd98315e76e7590ae9e5f86ecacb440"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "5dfd40cb527f2cac8573ff0ee9737664"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "4d4770d171f11e943582fd896a8c9292"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "8fd9e1ffd4fc4f44a4870e4993264d15"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "869295654feebda45302935fe2e1659d"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "51d10b562d3ac2c6ff95d4e33a7ea921"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "932b40ea8214abb85ddc09386be8d7ef"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "f754b2f00f92ac03a3c03053e32b4c3d"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "9d7de5301c04324622fe692dd23c3a34"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "e669a3c6b50dd58186386ae8eed2e8f9"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "f52a8ba59aeafa296ea2bb13bd4f77ec"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "b7d225d63a87cc664aeef0b2d8bf5746"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "64386e0c3702acf501dcc6f6b2503f13"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "669442e5c1e8b00e305ea9159cbf7f3d"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "d5699ed63979ba3193c37992f462ceb2"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "4e6c905b97f4c0abda7c0dfef34720af"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "6dca8f9ef0710db847d7659cd688699a"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "cef5bf8e9386c1cd774934ca04262401"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "e50c52e0182809d040efcc734e75d0f3"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "39136df73a6be39b6dfe418085496320"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "e8cfd2bff56bb47e8a1c86d6ae35a9f9"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "b84062ab768bb9badea06b331116688a"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "e9b99a68dee9ec25093c81ac3b71003e"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "25a0cb66d23df729d6ac9c1de4720edb"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "799f0ca5bd1d6321393c9bd7b470ea53"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "6e2dbe45bf6da152b355e60bd456d946"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "97c31eff6903490dd2c1b7b9c49e7dac"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "9706f90b6c5d1328a7e99c1d6f90982a"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "6f55f031903346b4b83b8d538d658d55"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "3d6642226d6d839d00c81272f3efc590"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "f86fe58bdccfe0533900b30c016593e3"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "1f9b28c2a2afc3633e16028fb9e67322"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "05b9b2fb63717a50d8968e84aa0cab2c"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "d5bc6f5d351c24b1e53b342d53590afd"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "330da4c2045caca8a2ec2e4e2b432caa"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "102e074ef596b42b8411211ab741c097"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "a80ee0df9e0ef039ff4dd4b9c8165e68"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "3869bca776fbfece62623678c3e159c5"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "06c72f23a4101b0abeb8bb8c2ba8321c"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "4158d5561f9e51b8fd2a212c1ccf0639"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "ea2a439da0dba2bc39684472ff9ee774"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "4ad696dbcc74b1ef0f6c436d3aaeca33"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "1aec9a7b72646bc9359320aa960836dc"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "f46586901bd30331d988a563919dac87"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "8ff75d8e1b31d518ab20fd98aa7d1a72"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "00a5bd285da4795f004ca2901e7a3cd3"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "65dbfd4494d6725e070d2255845238b4"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "d871c6c19bbf84dab994ede71cd4eef8"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "1fc02df7b3f22db295457f44b40afc2c"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "9595af44bceb85650af99f4bd9c18514"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "2263482ad6d3f31cfe5b05854d35c790"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "f4d48d29d69a8242a590bb461af47dc1"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "2e5b7ef3d1d1b80a939b22fe26b48c1a"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "75d0c694f6643322dedef7586d4f621f"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "903a2c7a0bf1c4995d1c4cb811ddbf27"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "a4410b907e77dfe6149caff6f796be7d"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "8cd3a356dccd61854cba3479f9022977"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "ac09cc7c0aa94463146d3b8a4f67430b"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "347bb549f0d203a4fb4c2cf3ea8c676a"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "37d3dd31d80d189fa95a011f8839a574"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "2b6a0b2315ac8b42a3d36f37441130f9"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "a1737dc0e6ccdb8947b6a8d9d0f8c299"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "e24027ee62c316cdd7e09a94cb02412f"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "6c33ae5f973385edec1c44ac6a2d54ac"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "fcbb54fedcb33a515b18bfc7773628b8"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "47ef72e879fe86577589507dce528f92"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "7be97ea6d85e967e7d4d9bb736812478"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "48fc4f05a586c4ab638949cb5d19babe"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "9dc92b721d50e722aaea4123862d3293"
  },
  {
    "url": "404.html",
    "revision": "b50dbe79f1d1f64682498aabe397e520"
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
    "url": "assets/img/default-location-calculation-config.ea4a469a.png",
    "revision": "ea4a469a4371daea67d8d9dc060dc002"
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
    "url": "assets/js/10.7dcc5b47.js",
    "revision": "37b57ad288c764c09246003833dd5746"
  },
  {
    "url": "assets/js/11.1cdf604e.js",
    "revision": "bb203076b46c76dde5ac40393a43ba7a"
  },
  {
    "url": "assets/js/12.7f9a66c5.js",
    "revision": "f57a21c7b1bdeebeca4acc2620e1a622"
  },
  {
    "url": "assets/js/13.1ea6db08.js",
    "revision": "40e9aad94b89aa7df2e72dd836216af1"
  },
  {
    "url": "assets/js/14.f1f6e33e.js",
    "revision": "fc6fd62b2fd662e2e7e19cfca2cb811c"
  },
  {
    "url": "assets/js/15.319ec07f.js",
    "revision": "4254641a7681b6d9235e810f0c0df679"
  },
  {
    "url": "assets/js/16.70590044.js",
    "revision": "94242b46c5c37a12eeeb15a22de0723a"
  },
  {
    "url": "assets/js/17.fa4983b1.js",
    "revision": "767c534ad97d7775e153ba36ef6a685a"
  },
  {
    "url": "assets/js/18.46d3613f.js",
    "revision": "806ba36d4643e586b186af3e0d083195"
  },
  {
    "url": "assets/js/19.fcaa2cfc.js",
    "revision": "a2f7f2082bffb59b811f17d039e99fac"
  },
  {
    "url": "assets/js/2.7f066290.js",
    "revision": "10f0794982f89da1a31ebbbce7b5ecbc"
  },
  {
    "url": "assets/js/20.038f829b.js",
    "revision": "3fd44851d9a518476c2dd83af3627076"
  },
  {
    "url": "assets/js/21.9e54701a.js",
    "revision": "949ef418e30404187a1b59fe6afc8b8b"
  },
  {
    "url": "assets/js/22.4382ec7d.js",
    "revision": "d262607c250f572d0389501ea6c843cf"
  },
  {
    "url": "assets/js/23.5118c78e.js",
    "revision": "ea316fcdb93c32bdd96891d2491d9c79"
  },
  {
    "url": "assets/js/24.d1700c9a.js",
    "revision": "7062268d802a3bfd6ed6719641b64ddf"
  },
  {
    "url": "assets/js/25.0a2ef3e7.js",
    "revision": "1499f42fd0223067e806e4a920945999"
  },
  {
    "url": "assets/js/26.02484242.js",
    "revision": "c35647b117f535e696900f16305bb5dc"
  },
  {
    "url": "assets/js/27.9eceaa81.js",
    "revision": "c0159a69e878c5f7e1ad1ae619a911e6"
  },
  {
    "url": "assets/js/28.60fb5391.js",
    "revision": "00d04dab1080d988378e44a8389809d1"
  },
  {
    "url": "assets/js/29.e90b9efa.js",
    "revision": "657a3d8846281102958e6bb35c326e94"
  },
  {
    "url": "assets/js/3.e24f2e4b.js",
    "revision": "2d852947621a5213fd0b65464e5ced79"
  },
  {
    "url": "assets/js/30.c86fb6b2.js",
    "revision": "cb02e6b266d9aac0fa84ca1ed5eab7f6"
  },
  {
    "url": "assets/js/31.7938660f.js",
    "revision": "c76efff4b839941f458bb55d098b3fc0"
  },
  {
    "url": "assets/js/32.74fa389f.js",
    "revision": "4da69a648ac923a0924a4223d49f9857"
  },
  {
    "url": "assets/js/33.6e66b10d.js",
    "revision": "a7b75b2f5711ba01d2e6bdc84b5db13d"
  },
  {
    "url": "assets/js/34.1b67b6c2.js",
    "revision": "f7fb57818608fe338b532ac47df1c75d"
  },
  {
    "url": "assets/js/35.dec8a573.js",
    "revision": "5942a0efd9d82f4ef128e7e70e7dbaf2"
  },
  {
    "url": "assets/js/36.6a76435d.js",
    "revision": "3937cdc42b05a6a3ec49ce7cfc5dd072"
  },
  {
    "url": "assets/js/37.06f01b18.js",
    "revision": "0888ea5f89a6ddd6c5b42ba6e4c43892"
  },
  {
    "url": "assets/js/38.573fa497.js",
    "revision": "f9f3fad0c5bb47de07f610eb0a0484a9"
  },
  {
    "url": "assets/js/39.f3e1f10e.js",
    "revision": "7d36555adbf42ded45f211810437b931"
  },
  {
    "url": "assets/js/4.c2f5df46.js",
    "revision": "a247591e9c385818bee302f1109b2e30"
  },
  {
    "url": "assets/js/40.f6126885.js",
    "revision": "201e71715ebdc098957bcf526bc3b80b"
  },
  {
    "url": "assets/js/41.e9c4260c.js",
    "revision": "7d67fdf514e5cb7627cc0e217471c61b"
  },
  {
    "url": "assets/js/42.06b60635.js",
    "revision": "2cf06d9ab857052124a6db3e6be6a047"
  },
  {
    "url": "assets/js/43.8abcce28.js",
    "revision": "9581b76269cb6fb8f9f891cde0fca7f5"
  },
  {
    "url": "assets/js/44.374cd2e2.js",
    "revision": "de1b4806f3954657059f2f6c5aeadd49"
  },
  {
    "url": "assets/js/45.75ab8282.js",
    "revision": "b180806736c29e1a522df15a6bb28cda"
  },
  {
    "url": "assets/js/46.1f522a1e.js",
    "revision": "fd722b4c0c017453aea7c76210a3828c"
  },
  {
    "url": "assets/js/47.695b3274.js",
    "revision": "6b5c7496b8fab1e5d910f76525b471dc"
  },
  {
    "url": "assets/js/48.68e8fefc.js",
    "revision": "8b7ef001eeb4426641b42d4d862167df"
  },
  {
    "url": "assets/js/49.029e9aff.js",
    "revision": "67e79cd111d49530c2cb96472a6dbb06"
  },
  {
    "url": "assets/js/5.02c14b6d.js",
    "revision": "c10ac0b0c1edf7a39d69f47d25e5547c"
  },
  {
    "url": "assets/js/50.8ca02e17.js",
    "revision": "cb578a89c3ccd8b9c4b0c79415846624"
  },
  {
    "url": "assets/js/51.48480778.js",
    "revision": "6fd8575e7978c460a0ac3f9a7dc6b82c"
  },
  {
    "url": "assets/js/52.b7a6fff8.js",
    "revision": "2204fc69c7f62e06e169031749268a4e"
  },
  {
    "url": "assets/js/53.f597282e.js",
    "revision": "2bc5b7e972f4b16a7d4b02c76c606383"
  },
  {
    "url": "assets/js/54.10bc587f.js",
    "revision": "bf480804a62b031d51a1ed6b40ca3c70"
  },
  {
    "url": "assets/js/55.7aff4aa1.js",
    "revision": "8510ddbc7a32e815605c8961be931856"
  },
  {
    "url": "assets/js/56.3e2a90fb.js",
    "revision": "4449098cd4518fb29622c159a6725519"
  },
  {
    "url": "assets/js/57.6720e23f.js",
    "revision": "190c307c5625818ec51e4c0bb69aba14"
  },
  {
    "url": "assets/js/58.f2c354c3.js",
    "revision": "b6a9fa161bb905e3afaae37cbc0a6c9c"
  },
  {
    "url": "assets/js/59.15d19841.js",
    "revision": "64c5ea7c708456fb6aa0e014781d02e2"
  },
  {
    "url": "assets/js/6.5c9f72aa.js",
    "revision": "396bde4b7568dac0adce6396e165eec5"
  },
  {
    "url": "assets/js/60.fc3ccd24.js",
    "revision": "26af37d29a4845405fae43ab2bb4f8b8"
  },
  {
    "url": "assets/js/61.5dc6fb25.js",
    "revision": "c892916eebbe09cfb99b98a8d454a885"
  },
  {
    "url": "assets/js/62.9047b57f.js",
    "revision": "6aa493595f4b9fbb8758d9596cc00412"
  },
  {
    "url": "assets/js/63.8ef41104.js",
    "revision": "3d9fb7f9845006da8cb2a0917582ff2f"
  },
  {
    "url": "assets/js/64.54991bba.js",
    "revision": "95a237505a2db7d3fbe5488b79ff2181"
  },
  {
    "url": "assets/js/65.be685fac.js",
    "revision": "224917dd34a8053da9ae8c93fc7e9a06"
  },
  {
    "url": "assets/js/66.567cc65b.js",
    "revision": "09f0be5fe6236a52e53c6f1c2282427f"
  },
  {
    "url": "assets/js/67.c5650f42.js",
    "revision": "383711473b5a34126764f19e8c23de30"
  },
  {
    "url": "assets/js/68.8ffc250c.js",
    "revision": "81f16dfeea65d773b9c964950d41f989"
  },
  {
    "url": "assets/js/69.072f3437.js",
    "revision": "ca9b69fde522dbaa3e55330bd249e72e"
  },
  {
    "url": "assets/js/7.2fe3bb02.js",
    "revision": "2b29cda2826659bd87a106e9bac5d33a"
  },
  {
    "url": "assets/js/70.7001dade.js",
    "revision": "574ba51894389d51def7c75afc43a2a3"
  },
  {
    "url": "assets/js/71.24b0a30d.js",
    "revision": "a9d2ca906e29870326ee0bcb6526471b"
  },
  {
    "url": "assets/js/72.1af7ef0d.js",
    "revision": "8ac57a69b3e4f25bb7e83e1bb2987017"
  },
  {
    "url": "assets/js/73.45319e43.js",
    "revision": "12453ff4858a175e738ba670b2f614d7"
  },
  {
    "url": "assets/js/74.81ac65e4.js",
    "revision": "459df5daf14e22c9fa7b03de1be28e3c"
  },
  {
    "url": "assets/js/75.53680175.js",
    "revision": "57fc53a7b591ce7e4bfc5359566c6ba6"
  },
  {
    "url": "assets/js/76.5ac56754.js",
    "revision": "0cafa26e95cbe8b4e345540634af984a"
  },
  {
    "url": "assets/js/77.0a08e6c1.js",
    "revision": "d098bc6dbebe2665ba59b36eab39ceae"
  },
  {
    "url": "assets/js/78.72f3dd6e.js",
    "revision": "69e7c1dab2b1f2602aa46775fb3de5f1"
  },
  {
    "url": "assets/js/79.569a9924.js",
    "revision": "d86677cf9f5b6803a1a1eab7c37d821c"
  },
  {
    "url": "assets/js/8.e773b0b6.js",
    "revision": "d506843bd5b515f5c42a36e93e85086f"
  },
  {
    "url": "assets/js/80.e6246cf8.js",
    "revision": "0391d12420b93f50bb61ff7632a9fefc"
  },
  {
    "url": "assets/js/81.028e2e8d.js",
    "revision": "c03ac0709278ebc268a0f0cd84366ed9"
  },
  {
    "url": "assets/js/82.4040738e.js",
    "revision": "c06070ad72317af6959247e9ea664c01"
  },
  {
    "url": "assets/js/83.382fe0aa.js",
    "revision": "e7aa0933dffbce6a74d154b917e84127"
  },
  {
    "url": "assets/js/84.b152ea0c.js",
    "revision": "a85ad5af79951752ea313d77489dab95"
  },
  {
    "url": "assets/js/85.a77934a1.js",
    "revision": "fc4becc511a753c639c704d1f6d3a60d"
  },
  {
    "url": "assets/js/86.255f4e2c.js",
    "revision": "7019e5fb3e6f93d3395890716d212ba8"
  },
  {
    "url": "assets/js/87.ce7e86b9.js",
    "revision": "a673c597c072b53dca21d640653d80e3"
  },
  {
    "url": "assets/js/9.ece679cb.js",
    "revision": "1438c07281a3b59da59ca98ca78fbd67"
  },
  {
    "url": "assets/js/app.abb3dace.js",
    "revision": "35441b0beb2aed91f5a08b36d16d8bd0"
  },
  {
    "url": "index.html",
    "revision": "46b01ee14b1c2f0f2d372c63bedc4038"
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

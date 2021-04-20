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
    "revision": "594ab5cc18fc7eeb3e0d90c2ff268668"
  },
  {
    "url": "1.x/advanced/create_product_type.html",
    "revision": "e3fced1c2423ed82fd84c95c4dd42235"
  },
  {
    "url": "1.x/advanced/create_shipping_method.html",
    "revision": "2e95f61ea913284e881b77823303abf0"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "e19f8f18ab386998a8c027209b864c54"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "b9835963372aa2892764e28136342ed2"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "74e3ed30c30b2f434c1c77de3bd61bde"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "6b6e3a153b75d32b6532400da5c0e098"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "1a2dfbb2354b47de8537c61c2f89c03d"
  },
  {
    "url": "1.x/advanced/render_event.html",
    "revision": "a631f28eeb78b7dd624bee93350435ed"
  },
  {
    "url": "1.x/advanced/security_practice.html",
    "revision": "d898d08602ffa4f0a50718be71b70471"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "38144341433dba43325ba1041f6e4b5f"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "633d6f80dcc96b4a60ca24d4d1bf0fe2"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "20d9e2de9a2f2064cc846f9eca67195c"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "d128b636cb4aa557265480a8e26ed791"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "9a409c6aea9880f34562f079e976839a"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "fd55ed913f20f9cb49caaf329479772e"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "505a0bf1c1dcbb84ba7eb863475d7316"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "c2990a48a3c566998cd7dbd33f19daeb"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "c581f237b4c845deda1f44e69d9c272b"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "7ca47128ce2309423cc1985561c8219a"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "30f912347b60cc829614c477dfcd9a46"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "085de52c94931e3e4e02c2295b09f926"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "dcdc58b3b0b0841fdc01de60513807c3"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "a7e820103d2067e5ccb1122e605245e3"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "8f9dea1f7d1050110f2579cb488a7a95"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "839152745488bd80b060db34e7cd844f"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "b679e67c3c89c9b5c1c0916792c3fa4e"
  },
  {
    "url": "1.x/introduction/folders.html",
    "revision": "0266476f0bb040951dc20ceaeb3c83d0"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "9d54c24485622a89c3047acdc8f41713"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "92fbf58c2490d88a5b72a6e013ca46d6"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "82979d38328c1f6a7e5abecf5cd4a48f"
  },
  {
    "url": "1.x/introduction/upgrade_to_latest_bagisto.html",
    "revision": "6c7623b0651661e867ec4381640da29c"
  },
  {
    "url": "1.x/packages/add_menu_in_admin.html",
    "revision": "fa2da3381dda7f1a3a6608aa0e1fe59c"
  },
  {
    "url": "1.x/packages/create_acl.html",
    "revision": "afb927982afb377568515f3a093576b0"
  },
  {
    "url": "1.x/packages/create_custom_configuration.html",
    "revision": "54ae2aa75d77ffc1bd0240010d66cb77"
  },
  {
    "url": "1.x/packages/create_migrations.html",
    "revision": "ff88c56bb2d9ef0b53d6b70040629a46"
  },
  {
    "url": "1.x/packages/create_models.html",
    "revision": "c7928c387ccddf183a97402b0d12dea3"
  },
  {
    "url": "1.x/packages/create_package.html",
    "revision": "2d01c0e28b4a2229dba67e13601ff96e"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "a6926c61e3b9eaab67c2088e173c7564"
  },
  {
    "url": "1.x/packages/store_data_through_repositories.html",
    "revision": "780739e27ea15f1a5ffe275d72a4e3cb"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "e8b819a4083565a8779d880cba8f59b3"
  },
  {
    "url": "1.x/themes/create_admin_theme.html",
    "revision": "4f38761f665ee36eae50a0d447945228"
  },
  {
    "url": "1.x/themes/create_theme.html",
    "revision": "f68c195123b874c1b41e530d82cab992"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "a37c8ff8f7d882115e42f4f2be2c4f99"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "cba17eab4206cf40d365de2461eb6979"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "9804e715f5b6cd3cd2e7800f9d096ea5"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "3410b39e14fdabd444e4184dcfcb9ccc"
  },
  {
    "url": "1.x/translations/change_the_language_of_error_validations_on_your_store.html",
    "revision": "7399c462cd081505bf284b803e14e9aa"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "95194ec6011cfb444e0fe3e9fe3068a9"
  },
  {
    "url": "1.x/translations/translation_based_on_locale.html",
    "revision": "84ffcf0996e730310833b1087542de86"
  },
  {
    "url": "1.x/user_guides/cart_catalog_rule.html",
    "revision": "dc8c1bdc9adbec5541b2b95cf31025a6"
  },
  {
    "url": "1.x/user_guides/cart_rule.html",
    "revision": "f15663e8152c961217c589cd1ee5b2ab"
  },
  {
    "url": "1.x/user_guides/index.html",
    "revision": "3517e1b946c6f98231a0f23f7364beda"
  },
  {
    "url": "1.x/user_guides/social_auth.html",
    "revision": "b10fd2d8fbf0f2d8bbc9601febe5f6fd"
  },
  {
    "url": "404.html",
    "revision": "c465d7b57027155fd0b0cf560506fde6"
  },
  {
    "url": "assets/css/0.styles.7e612dfc.css",
    "revision": "0e21ce67186e610f5bda9a9fadded9d7"
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
    "url": "assets/js/10.2394ec98.js",
    "revision": "8676d221c21744d5e89ee91aa06f24d0"
  },
  {
    "url": "assets/js/11.fdc14220.js",
    "revision": "731438b7db76b3c24bdae8ffdcd76d83"
  },
  {
    "url": "assets/js/12.ce092e93.js",
    "revision": "7321eb4f493b1c485138d7c031672a2b"
  },
  {
    "url": "assets/js/13.33aa6849.js",
    "revision": "bd4b24bb4143b94a1ebc51f8c4d2d6da"
  },
  {
    "url": "assets/js/14.7463abe9.js",
    "revision": "fb3a5d279340d59792ea08629a8f56c4"
  },
  {
    "url": "assets/js/15.46864e37.js",
    "revision": "9d91e1b1dbbfeda728ac05ca5cc6db82"
  },
  {
    "url": "assets/js/16.d8355b03.js",
    "revision": "75f92ee0e08484bf572fb83e26e218bc"
  },
  {
    "url": "assets/js/17.a85853bd.js",
    "revision": "70c1f9873089dfc4210daa7cdcd0435e"
  },
  {
    "url": "assets/js/18.9387f6e6.js",
    "revision": "8d04ccd1d72c50b6afc21c22b0e098a8"
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
    "url": "assets/js/22.8148a006.js",
    "revision": "ac46d9a85225e7a0183e457fab9ada9b"
  },
  {
    "url": "assets/js/23.03ea27e3.js",
    "revision": "a89d21d29f221f7bb4f8f34f29634cb8"
  },
  {
    "url": "assets/js/24.ca9c0c1b.js",
    "revision": "1671164e52a39c52269aad347ac2a262"
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
    "url": "assets/js/27.273b6775.js",
    "revision": "5f73644889bf07e686575971e7a95d14"
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
    "url": "assets/js/3.b009c9ac.js",
    "revision": "7489fcbeb951173ac5b76a90670b8284"
  },
  {
    "url": "assets/js/30.64c50e31.js",
    "revision": "af635b463da1449fa1aa476426222f9d"
  },
  {
    "url": "assets/js/31.ea9e58eb.js",
    "revision": "8eb8c16e14bc11553848fccaee5a69cd"
  },
  {
    "url": "assets/js/32.25d92949.js",
    "revision": "a589070a7e66128b6c8fe593a3adac74"
  },
  {
    "url": "assets/js/33.882aae9b.js",
    "revision": "bcda8efcee4d5828834cb917cec50e9a"
  },
  {
    "url": "assets/js/34.3d22953f.js",
    "revision": "2cd09d432fc146219d86db8c163f4344"
  },
  {
    "url": "assets/js/35.d73aaf66.js",
    "revision": "8ce4386572e45a5bf44fe7831922af52"
  },
  {
    "url": "assets/js/36.e71df176.js",
    "revision": "6ee77e6aafc4786a653a9006fb9fbafd"
  },
  {
    "url": "assets/js/37.bdd3d095.js",
    "revision": "fe2e6403f4e22a77e2c93cba1839b8be"
  },
  {
    "url": "assets/js/38.8b464316.js",
    "revision": "df711a62e538a4c2cba300259cfc2d84"
  },
  {
    "url": "assets/js/39.6fe1e20c.js",
    "revision": "c72d79b6083dbd09019b933a17e9528c"
  },
  {
    "url": "assets/js/4.7b6238bf.js",
    "revision": "153c758d532bcc45826746c3d6a7c2c8"
  },
  {
    "url": "assets/js/40.6c23711a.js",
    "revision": "2cb178b0b63271dcea27585d76050c84"
  },
  {
    "url": "assets/js/41.fe586d66.js",
    "revision": "68e5b659fb8c926b788bbe331d491e7e"
  },
  {
    "url": "assets/js/42.d00317b5.js",
    "revision": "319db55f68fe138390df24edf28dfef5"
  },
  {
    "url": "assets/js/43.2f1dc5e0.js",
    "revision": "0b3d0bdeb3361e3d918eb1b91a3f8e8c"
  },
  {
    "url": "assets/js/44.d4be8fb0.js",
    "revision": "8fa53c8f2c287dfbce6eab800b879cc6"
  },
  {
    "url": "assets/js/45.524311f3.js",
    "revision": "d6729d169a76afcf453d94d92063ae4a"
  },
  {
    "url": "assets/js/46.1bb2fe32.js",
    "revision": "f4adcfc27f2383fb035d10e34610ab99"
  },
  {
    "url": "assets/js/47.9b88abac.js",
    "revision": "05ad53fdf8f8a220700569406ced8a92"
  },
  {
    "url": "assets/js/48.763b69d9.js",
    "revision": "c04e9ca9ce6b88247eef7e25dec1de8a"
  },
  {
    "url": "assets/js/49.60106311.js",
    "revision": "141020fb924b6890fa97a4770857be9a"
  },
  {
    "url": "assets/js/5.6517a11e.js",
    "revision": "0ee49568d6f837c540d61f62f13a3a09"
  },
  {
    "url": "assets/js/50.b194f9a8.js",
    "revision": "80269ad0219a5fe8e28f8ed687dd514f"
  },
  {
    "url": "assets/js/51.234149fc.js",
    "revision": "5809158c8c1d198a6db0e6df63ed9a44"
  },
  {
    "url": "assets/js/52.3e3a1881.js",
    "revision": "7723769b31663e9bf60d81165451485f"
  },
  {
    "url": "assets/js/53.8c24df68.js",
    "revision": "6a1fe89fb8032c4f4b0709e44e1d1e05"
  },
  {
    "url": "assets/js/54.cd8e1e64.js",
    "revision": "9f17ec423bf0a253c4835547d586d987"
  },
  {
    "url": "assets/js/55.81443b5c.js",
    "revision": "97c6ee26e4a6b7eb510552fc61e71296"
  },
  {
    "url": "assets/js/56.536224ae.js",
    "revision": "ef663b52e305e67aef447b4bf36f360a"
  },
  {
    "url": "assets/js/57.5008d7cb.js",
    "revision": "6b1762b042b0927ad715344335f18871"
  },
  {
    "url": "assets/js/58.28d775ac.js",
    "revision": "a47990cf9913b8c117a0f481e9f88c8c"
  },
  {
    "url": "assets/js/59.0dece345.js",
    "revision": "78c78c14e6947eed10a6632f83185090"
  },
  {
    "url": "assets/js/6.e79e2c93.js",
    "revision": "42285aae8d02549e4a29e2ff53bce8a7"
  },
  {
    "url": "assets/js/60.42555fd9.js",
    "revision": "c0e11d4f09f8ac96e38be1da82476a9f"
  },
  {
    "url": "assets/js/7.5855a5bf.js",
    "revision": "2f6d8161c7a082a3cc8469380b456681"
  },
  {
    "url": "assets/js/8.b929a95b.js",
    "revision": "978a1f0286ae866b491d6ed4b241359b"
  },
  {
    "url": "assets/js/9.1131fcd6.js",
    "revision": "d03cfcbeed2ed158189782f39e2dac76"
  },
  {
    "url": "assets/js/app.5bbaea9d.js",
    "revision": "fb51bef8036260a3ac2c11eabe750108"
  },
  {
    "url": "index.html",
    "revision": "6618c1a837022154f73b79d3c6622719"
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

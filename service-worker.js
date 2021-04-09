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
    "revision": "b3d13ba6fcdf3d3bbd2e33d32ec1af80"
  },
  {
    "url": "1.x/advanced/create_product_type.html",
    "revision": "de7d0ce58e9df1ec8a13d151e9eaf3e9"
  },
  {
    "url": "1.x/advanced/create_shipping_method.html",
    "revision": "48276f00f06a1c53c2399f1850388cb1"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "09377c6a9a6d114f600d21744c8e1565"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "0d1814aa560ad910d057861ef740d621"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "ca092db95d60cf9c86e34bc8506b6144"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "04cfa3d10429ecc3b1a89d3bfed90750"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "d1695f418a3c9ad69bf1fa65ef138cd4"
  },
  {
    "url": "1.x/advanced/render_event.html",
    "revision": "d77827301b451a7bd4573884eb1a89ff"
  },
  {
    "url": "1.x/advanced/security_practice.html",
    "revision": "8ff6d4dec5fab75f3b402fd93fef09ab"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "d434434c519dd4659701f7e5a633867f"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "226010e346316346d2d00f1ac6f2a086"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "6c74cc54a3fe01c8f68987a578dc9683"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "a6dd4e3744f265731fef0679172e0256"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "8cd797d0c5fb9110f30c6e096f8f8e2e"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "94a5e5fa4119a2187c9cd196d6b9b435"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "51ba5f8e79e979395b384fca8016f241"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "fc5e7a74335c9cc475388481ae824c8f"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "d0e3000132fecf4b8ba795a92d5716e9"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "ad0998f81180617140e08d1e3cc05dbd"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "8c5fed2ad19926bab175044f4972472b"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "bfa36f844d4ce7bc4acd480a251cd96f"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "1ad0f228ed2f50bf263bb7e7ac4ac82e"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "1eadfc3768575b191be073bbce105e2a"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "356dd5021f67baea33f882a1045a8025"
  },
  {
    "url": "1.x/introduction/folders.html",
    "revision": "8495ae5166ff5abd073652f73358ebc9"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "2c8659d2627cf8e2b5a646914f03788a"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "5d663891af70528a7e9987c2f1485705"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "383e48ad44c74952ccd555d6d9a9f8d1"
  },
  {
    "url": "1.x/introduction/upgrade_to_latest_bagisto.html",
    "revision": "09eed684191992aebda168e4875779d4"
  },
  {
    "url": "1.x/packages/add_menu_in_admin.html",
    "revision": "ff52130faa2365901e4796c851790e38"
  },
  {
    "url": "1.x/packages/create_acl.html",
    "revision": "6a5e51d5a014abcfd6c1adf3ac63fa1e"
  },
  {
    "url": "1.x/packages/create_custom_configuration.html",
    "revision": "f7e8009f88a3645a04009da3c325269d"
  },
  {
    "url": "1.x/packages/create_migrations.html",
    "revision": "495ccfe36757e99c1985fc74b1663efa"
  },
  {
    "url": "1.x/packages/create_models.html",
    "revision": "091d9682af86ad33b624f771bfc9236b"
  },
  {
    "url": "1.x/packages/create_package.html",
    "revision": "e8477356bc8f46e9a5e601dc3f4eec10"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "bbb5e2319a7c7386cbc2784bc140d241"
  },
  {
    "url": "1.x/packages/store_data_through_repositories.html",
    "revision": "bfcd82a489cc3ec9245fc5472a5aab10"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "fc606b2683da9ac3a80ee9784e50e120"
  },
  {
    "url": "1.x/themes/create_admin_theme.html",
    "revision": "f395a1e856f7cac7814e08c975175a09"
  },
  {
    "url": "1.x/themes/create_theme.html",
    "revision": "36b7d3ccbdd4740a606c012b9467c892"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "14696418112b27c5544026591f4a86eb"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "2f33995f07574b7bdb2b71c005b65d45"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "ccd823a7f75b397e71087bfceb6a2d71"
  },
  {
    "url": "1.x/translations/change_the_language_of_error_validations_on_your_store.html",
    "revision": "3a99718bf1c0886b82e3de6142159abc"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "de2d54d1e792be1ebff0a8c75866bfd2"
  },
  {
    "url": "1.x/translations/translation_based_on_locale.html",
    "revision": "059c260a80e02196a63b93aad8d10b7a"
  },
  {
    "url": "1.x/user_guides/cart_catalog_rule.html",
    "revision": "ffc7de6d0f54bbed4744c6e710426523"
  },
  {
    "url": "1.x/user_guides/cart_rule.html",
    "revision": "e688204c3d1442175bba8827f1da0416"
  },
  {
    "url": "1.x/user_guides/index.html",
    "revision": "0a434e00ad31f4d00ac7bf6e24c10b86"
  },
  {
    "url": "1.x/user_guides/social_auth.html",
    "revision": "e00d8c6646d48da754d5d6121e73f4e7"
  },
  {
    "url": "404.html",
    "revision": "bb5cdf7fc8ae6f9c4c6b3fcd46aaec31"
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
    "url": "assets/js/10.1ecbbb3f.js",
    "revision": "94381f1750d892ba082f8623c4315433"
  },
  {
    "url": "assets/js/11.cf548b1c.js",
    "revision": "636d84f5993228ccaf74984eb619a35d"
  },
  {
    "url": "assets/js/12.262b35d9.js",
    "revision": "7ba99f72c190616f92c3ad9ba999c15f"
  },
  {
    "url": "assets/js/13.f1defb9d.js",
    "revision": "f5909056a0146b2252bf6db3cd06621c"
  },
  {
    "url": "assets/js/14.0a66fb6d.js",
    "revision": "3f69b62b50a4aa7db6399921d1c6c753"
  },
  {
    "url": "assets/js/15.a4af0f18.js",
    "revision": "705ffc077b92578db215bc9ffbd52dac"
  },
  {
    "url": "assets/js/16.149f2cf6.js",
    "revision": "fe6e3bd839a95a937d3adf7aeb9369c5"
  },
  {
    "url": "assets/js/17.7f573fa8.js",
    "revision": "351f8428c34a631f418bf2269195f476"
  },
  {
    "url": "assets/js/18.9af3d286.js",
    "revision": "4efbd56ab23179e5d679c1af6037db8b"
  },
  {
    "url": "assets/js/19.d470993f.js",
    "revision": "084ef1814633afae23dfb3f0ce918ab7"
  },
  {
    "url": "assets/js/2.fc7b0454.js",
    "revision": "2844a598ab3a92e2c2e987c31efdd2d9"
  },
  {
    "url": "assets/js/20.87c40c0d.js",
    "revision": "c0077bd93f7c6b24e21bfcb87f11ac25"
  },
  {
    "url": "assets/js/21.f0f4d939.js",
    "revision": "ae0646b1d27a6356f0b349209d302510"
  },
  {
    "url": "assets/js/22.b94e8881.js",
    "revision": "ac46d9a85225e7a0183e457fab9ada9b"
  },
  {
    "url": "assets/js/23.24f44a5e.js",
    "revision": "8970f155b4cd555f50a0c1a0a8779cc2"
  },
  {
    "url": "assets/js/24.b9076e16.js",
    "revision": "1671164e52a39c52269aad347ac2a262"
  },
  {
    "url": "assets/js/25.fc6e3795.js",
    "revision": "a3ac198e2acf52ac0b95fbda5846c32d"
  },
  {
    "url": "assets/js/26.fc480b25.js",
    "revision": "0e199997a4080cd63d3500c2b7ded49a"
  },
  {
    "url": "assets/js/27.6ca7e954.js",
    "revision": "8cdd7478adb2b63c8924f194e384b187"
  },
  {
    "url": "assets/js/28.9cb8fe8b.js",
    "revision": "04e251e52cf465622d9d17cb16b8d07c"
  },
  {
    "url": "assets/js/29.8a9ef8c9.js",
    "revision": "49275fada0e3422a99c3fbe636e30cfe"
  },
  {
    "url": "assets/js/3.d3947043.js",
    "revision": "db7c5cae3a75028afa0ba0336b094349"
  },
  {
    "url": "assets/js/30.b128e323.js",
    "revision": "c03d72d51b43e0a729711247563d093b"
  },
  {
    "url": "assets/js/31.64a1081c.js",
    "revision": "9de1ea596ecc69dd2418d69cc33277d6"
  },
  {
    "url": "assets/js/32.c12e1595.js",
    "revision": "0e9173b726ad2da1458b09071d00b750"
  },
  {
    "url": "assets/js/33.ca1b1f2b.js",
    "revision": "3566c56f10dc182aba3c1a918cdc3ec1"
  },
  {
    "url": "assets/js/34.791f73b1.js",
    "revision": "a1ca99fe60267359550007173b862e79"
  },
  {
    "url": "assets/js/35.94a57b77.js",
    "revision": "6f0e7f738a76bab202faf999061b2ee0"
  },
  {
    "url": "assets/js/36.5740f1c6.js",
    "revision": "8c91ae7dbea4a8745537532af7591459"
  },
  {
    "url": "assets/js/37.cedc16fa.js",
    "revision": "f4824e2ebefb0546fbe24cd89861bd52"
  },
  {
    "url": "assets/js/38.028dec5a.js",
    "revision": "066c18662b9accff28d9f4d15494956c"
  },
  {
    "url": "assets/js/39.a6e13862.js",
    "revision": "c410035445aff1f6fc9667baddb73c2a"
  },
  {
    "url": "assets/js/4.57df6da0.js",
    "revision": "027d164ece454d9f4f29fc8a40c5ad80"
  },
  {
    "url": "assets/js/40.2e0d7f1e.js",
    "revision": "0b6673a21a77ff1bf50167731f8e2aaf"
  },
  {
    "url": "assets/js/41.c7b2ab73.js",
    "revision": "1cb8d7de0c8f88f1d7f3fc5dc57eeb8e"
  },
  {
    "url": "assets/js/42.421c026f.js",
    "revision": "98ebc12ed64d7c8322ac5dd8eeb40c98"
  },
  {
    "url": "assets/js/43.49883ace.js",
    "revision": "079f858de3165c09d5004521942b87d8"
  },
  {
    "url": "assets/js/44.e5a45cc5.js",
    "revision": "72c9642abf70eadbdbc4bb7f9d204a3b"
  },
  {
    "url": "assets/js/45.a32e55b1.js",
    "revision": "8d543a6d9123d87b73b47bf72cc12bf7"
  },
  {
    "url": "assets/js/46.084d7670.js",
    "revision": "6abce7aea5ba4ab64628378c328b353f"
  },
  {
    "url": "assets/js/47.c90d9527.js",
    "revision": "d78543777d6d39f6bda2b8dcc4f62477"
  },
  {
    "url": "assets/js/48.7ea13b5d.js",
    "revision": "c7482f78d805230d9460170f7e654d13"
  },
  {
    "url": "assets/js/49.2f7d3e4d.js",
    "revision": "6a3d31b1ef25beae601249eff2c2b69c"
  },
  {
    "url": "assets/js/5.19bacd9f.js",
    "revision": "97438eada3d9c487d1cc418f3e293044"
  },
  {
    "url": "assets/js/50.0be05e77.js",
    "revision": "32813264bd549ea87c092cb7c9c22ccd"
  },
  {
    "url": "assets/js/51.93bff7b5.js",
    "revision": "9746368c843dc3d08a52c11373f3242c"
  },
  {
    "url": "assets/js/52.9b30740a.js",
    "revision": "e15107c6bbfe78504bb33d1349176eca"
  },
  {
    "url": "assets/js/53.302c0e20.js",
    "revision": "26d54c146d3fdc0de736c976e7543245"
  },
  {
    "url": "assets/js/54.e7a9b05c.js",
    "revision": "d97175b98777a107d0614c9bc78841df"
  },
  {
    "url": "assets/js/55.b19d9a79.js",
    "revision": "14b485e1ff8f76ca2b3a73cea7f76892"
  },
  {
    "url": "assets/js/56.033c1935.js",
    "revision": "39ab27b132166cad5e5e83465221a9b5"
  },
  {
    "url": "assets/js/57.9d005024.js",
    "revision": "77256e9afeb76c8d27d7d5192a563a80"
  },
  {
    "url": "assets/js/6.ad8dcbfe.js",
    "revision": "bac19c27d3157756dfcbe4cdc058c7bb"
  },
  {
    "url": "assets/js/7.9a8e00ac.js",
    "revision": "0e75c710b9d70821275703d2969795b6"
  },
  {
    "url": "assets/js/8.f5ee9aa5.js",
    "revision": "49b4327f2d0fee44f2804a7da5105c8d"
  },
  {
    "url": "assets/js/9.07fcc8de.js",
    "revision": "1ab4bfc6f13270360ab241605a9c733b"
  },
  {
    "url": "assets/js/app.b218fc7c.js",
    "revision": "73b1ec1b8462ed1cd30ed0771c5697a8"
  },
  {
    "url": "index.html",
    "revision": "97790fa8e39f32cb9e76e2f3469aa162"
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

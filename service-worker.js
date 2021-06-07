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
    "revision": "e322a42037222669d3a7f92aa1957bbf"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "06ff6bbefdbc2a927f9151cf96f049e5"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "61a7b1b6dd72231fd2d68c0db63fc39f"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "75b89b85df665c3175a105ad119d0846"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "a22807ff9755d99d642aed89dfbd8459"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "c56c5460c19a7631566a47ffb5be2f0a"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "6d69df107ec52e94d313fe539f7fffc5"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "046d0830f008a7b5d4ad87b534432692"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "edfa2f15985ecc770c70393655e79379"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "f17f4289614099a7b348448ba38f1746"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "efece671909c74e6b628388eca4d3730"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "7c944d908e48bdb914a067f0bee24a92"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "e5512d723c58d7cffdfa99b8a5687ca4"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "e3c83bd3a7cb7d038b20ef3c68095722"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "6804c56324e54e1a1a235bd927e045f5"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "e22a523de0f7983772dd7ee08eeaed57"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "04204f7169f619f4965edd80878f23c2"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "1f44b51c37598a5383b2864fc7ffd493"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "26abb6b4581a7abc61a56846222acbd0"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "2736c0b08efbad314458231fd7ef3900"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "311f59b132376ac52f701deada1c2ac3"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "ac68a1e38a957b4341d3669ffa0b7c75"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "7acd4ae18e50e9bcdedb65b6bac47676"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "28928380c606c901587363f134a35605"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "87e7a753a243d7b2fcc1078c18d796b2"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "faccbfd6e278d50e6c97024892fe2bc2"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "827d81eb8feba52cff9b0823a6b5d5d0"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "7091c3851eb70add6794d17df46336a0"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "dd5edc48a65572ba482937a7dec5f3f7"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "d2665bf5d70c69b146babc25380dc726"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "8453e0cb58677c33edf4999fb724e5fb"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "a63c431b599d47085418bda871da0f1e"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "c51ca1c41e05b51d3e2978f72d02d382"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "164118bc43b3d81982d3e045327b8f0d"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "ab90ac3cb4c2c98ad80f891936c3f37f"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "49c6f2c724830f156d07bf1d35ad5dbe"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "31942132d7a8298754cea345ee57c155"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "418d2062fd1a5a9fe2abc211a039610b"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "d510404c72f2284e1c7b5a139a29c0b8"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "5e9e7a5fd89daa17404e6148e0e37529"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "004278675133bf33ee5483a4adc987b5"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "8cd71670764e7f9cb80f2211efadbba7"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "2dda6454a248ab836d77488e5fa19e7e"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "b11aa185448cd263b96ae743c24ae3dd"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "a8467e27d72eda7de5c14edd128b21ae"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "082568281d8d5a528a86a226c826c256"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "598618cad56e342e6673a89225f8b7a2"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "88f402c72fe62368ce4b64f4e9523614"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "f4c51de9c8c9286f3b39e22e3a070e49"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "ca915bebd932de41bd3db4ffdd13f68b"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "86ea292b0914ff39dae77b91d8ad5cc1"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "44d26cc5167ccf6e6296c22595845005"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "5dc403f7f721c0f184a1e53b84ff3acd"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "0c8bfb50e1818433a6d7d6f71b802181"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "8a19c9ded8016b55e2cebca9f00c1477"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "485a582be82f3e3c6a162a2602f2c68b"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "f3441efa3826ec864e3e99b84f5fe0a6"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "a596c2ca3ea29d18ce94f2e0a90464bc"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "4ce0443059cce7c52bb793fb43f58e78"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "d181fe72c3cbe647b7c10948329ad0d3"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "107101147e1f9e503808b239268f6a33"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "7f393efb878383128410197bd34a9eed"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "598c2ae1c3e9840fcb0c87dcbd574075"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "62e6306ec62fc427827a5b53a8b5b944"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "8d98ec4fec3834308be8ead63cf37c18"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "63f2eb3b3f96b27da144cd726fe00e91"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "285f4c4308219ab00e606893e0f755c2"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "d460d2ca1998f0db33c1e2a8e1400f89"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "72576b8a949210bcc89271c2dfa020cf"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "65f12ad6ecacb7c6458625b8382eef38"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "e310a364c93096563a000c2ac113c872"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "870f670ac3ec82ca723222cb88ddc455"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "54701834d7a9fa013b5aa64c7dc7e639"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "a1e96f9cda57472973bd5262990aa5be"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "884048a500bec9b2ad6d0e7517631b6e"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "c0b8fbdabe91eb0bdf8f005604d471f7"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "7d44898c71b5e31f23b5454d44cbf886"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "283e338f9d37661a858eaeb60d5aa887"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "ad33e5c709da97484f7646667c2b8509"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "317c2571ea8fff1b91520499ed24473b"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "99205ede8cd31c5eb4e8bcf0fc7ee5b5"
  },
  {
    "url": "404.html",
    "revision": "8e4e8cbc61c76640a554063de28b34fb"
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
    "url": "assets/js/13.3469992e.js",
    "revision": "48f401f2586102ca67943be453dd7a29"
  },
  {
    "url": "assets/js/14.f1f6e33e.js",
    "revision": "fc6fd62b2fd662e2e7e19cfca2cb811c"
  },
  {
    "url": "assets/js/15.ad18ad2a.js",
    "revision": "6405ec57006627b48be7d12fd6af12ce"
  },
  {
    "url": "assets/js/16.bc7f6093.js",
    "revision": "75f546c220aa6a7545694bfebc67d3b3"
  },
  {
    "url": "assets/js/17.31afef30.js",
    "revision": "5a83a641483831e120a17f7a7e3c55ba"
  },
  {
    "url": "assets/js/18.03689130.js",
    "revision": "1e201aaa1a700183f2402c1c77e24e3c"
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
    "url": "assets/js/21.c7a22412.js",
    "revision": "4ded0a1fd2c4a781a483c134f2322f06"
  },
  {
    "url": "assets/js/22.3c6def5a.js",
    "revision": "732b7493271e400eee6629f0e9513674"
  },
  {
    "url": "assets/js/23.b4ba4cf5.js",
    "revision": "63263fb5b722a442085ded41374716da"
  },
  {
    "url": "assets/js/24.81a8880a.js",
    "revision": "e75e8ba7fdc409490dc0ea28be58a099"
  },
  {
    "url": "assets/js/25.d7cdf3d8.js",
    "revision": "f6fc07f7efedd1682d1c4b25f45f22a4"
  },
  {
    "url": "assets/js/26.61c42c48.js",
    "revision": "6de51369185517491cb93f8996a7e468"
  },
  {
    "url": "assets/js/27.bba6c5f3.js",
    "revision": "69c96a37a3b91a1f64169e3350734312"
  },
  {
    "url": "assets/js/28.c95b835b.js",
    "revision": "8f5145d8f0762c35b32714528a05e888"
  },
  {
    "url": "assets/js/29.66d0a0de.js",
    "revision": "c0a7bafd10a5c03493d23fb55cc4db6f"
  },
  {
    "url": "assets/js/3.e24f2e4b.js",
    "revision": "2d852947621a5213fd0b65464e5ced79"
  },
  {
    "url": "assets/js/30.3b6d298f.js",
    "revision": "0224b0aeff1f1507e6bb651586feca09"
  },
  {
    "url": "assets/js/31.f5871a99.js",
    "revision": "741eb589f359f145038e928c3f9dca14"
  },
  {
    "url": "assets/js/32.b03e59fa.js",
    "revision": "aeb3997f6b12203b0fe86743f3d7d7c0"
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
    "url": "assets/js/5.a85d4698.js",
    "revision": "151f5565c996bb9592cb15e4c1abec6e"
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
    "url": "assets/js/67.b79af734.js",
    "revision": "a46f70450afd389dbe90b58458b2b7ae"
  },
  {
    "url": "assets/js/68.8ffc250c.js",
    "revision": "81f16dfeea65d773b9c964950d41f989"
  },
  {
    "url": "assets/js/69.78bdb199.js",
    "revision": "171dd5be5dbbe893e7cd17bed0ba62df"
  },
  {
    "url": "assets/js/7.f6589dfc.js",
    "revision": "8e94db7d280778fa0869235a9725b607"
  },
  {
    "url": "assets/js/70.0bad5ab4.js",
    "revision": "a34665c448984edfe7fb6d7e8e110644"
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
    "url": "assets/js/75.fb49bf49.js",
    "revision": "83b6a7486630220edcb413454f338964"
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
    "url": "assets/js/80.b3076d76.js",
    "revision": "a0871b1b21d39e5a79f9ba9bdc40a71d"
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
    "url": "assets/js/9.1131fcd6.js",
    "revision": "d03cfcbeed2ed158189782f39e2dac76"
  },
  {
    "url": "assets/js/app.04f3147b.js",
    "revision": "4c6298eede23fc2f05484f8bbce57ded"
  },
  {
    "url": "index.html",
    "revision": "6ef8133da3c62330ccf7f760f92b69b0"
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

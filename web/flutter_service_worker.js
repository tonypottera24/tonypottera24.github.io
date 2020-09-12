'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "ec847f23c2f4a271c915767abf58b11f",
"/main.dart.js": "a773c734fb4b1671cb58921be1c1ff62",
"/favicon.png": "fa5e556ecc5f0960bd7e9c2909e4cc6c",
"/icons/Icon-192.png": "35435f9e9d7150c09e01c6cf873b376c",
"/icons/Icon-512.png": "441f9f9043db0916960b833c97a1d3fd",
"/manifest.json": "c87406e51c3ee3ff96f61dbab9720ea8",
"/assets/LICENSE": "b993106ae6faaa676106b68e61ec9f1a",
"/assets/AssetManifest.json": "0f62663a10e917a6f9417fc8a3f4627f",
"/assets/FontManifest.json": "580ff1a5d08679ded8fcf5c6848cece7",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/img/drawer/header.jpg": "bb260bcffeed4d2921ebfe1e25f8f1f8",
"/assets/assets/img/button/plus-minus-black.png": "f572d126004dbeff3c35b6b1f4e8553d",
"/assets/assets/img/button/minus-white.png": "d9da5d0e754e4e77e9470be19f12dd47",
"/assets/assets/img/button/multiply-white.png": "e01d2a48051d56f944b6b03386c8076d",
"/assets/assets/img/button/plus-white.png": "f1d6d924892c688d4b5866fd9948ca01",
"/assets/assets/img/button/sqrt-white.png": "a9d7ae4b893edaecd7bd8f59fbd94c6e",
"/assets/assets/img/button/equal-white.png": "ad39fab9f15124f2683c4d5a042c9ab2",
"/assets/assets/img/button/2.0x/plus-minus-black.png": "8195affb55d47590fa054e574a71050a",
"/assets/assets/img/button/2.0x/minus-white.png": "c7d37b6d54f05be6a84b17345b4f2347",
"/assets/assets/img/button/2.0x/multiply-white.png": "e7cd91f764756a879fdcf00e160048ea",
"/assets/assets/img/button/2.0x/plus-white.png": "33c169c0e8c380fee266e70c4088b382",
"/assets/assets/img/button/2.0x/sqrt-white.png": "b0197b6cee6fa21366975442d34b7fac",
"/assets/assets/img/button/2.0x/equal-white.png": "5ce168ef02c555ba2ac5edf7a1a32970",
"/assets/assets/img/button/2.0x/divide-white.png": "1b3909b10fa15c8594157f4442a19ed6",
"/assets/assets/img/button/2.0x/plus-minus-white.png": "0d18de04ddf7242fbcb0c919b93c4864",
"/assets/assets/img/button/2.0x/minus-black.png": "a2d5c728cf73a5dcd97e731fa87a4758",
"/assets/assets/img/button/2.0x/plus-black.png": "35ee2630a7367395fd7f9da4d3c2fab1",
"/assets/assets/img/button/2.0x/multiply-black.png": "8f3d7f7db69a6e8281edb0fa745a54a6",
"/assets/assets/img/button/2.0x/sqrt-black.png": "6274165b3d2dc7e906d09550db26c1bb",
"/assets/assets/img/button/2.0x/equal-black.png": "93c99afd4bf92c68019ad01666d17c76",
"/assets/assets/img/button/2.0x/divide-black.png": "264295047e92417bf3081cccad0fba95",
"/assets/assets/img/button/divide-white.png": "b1abb6cebf84ba41413a598028fba733",
"/assets/assets/img/button/3.0x/plus-minus-black.png": "65d9c8a4670c96b393fca1cfda1b65d0",
"/assets/assets/img/button/3.0x/minus-white.png": "cf4c6e947f717271372c5ea6234862a4",
"/assets/assets/img/button/3.0x/multiply-white.png": "1dee0935f61a74c17d7e8534175d05b9",
"/assets/assets/img/button/3.0x/plus-white.png": "197936c003ac18bbdd554ea007f1083c",
"/assets/assets/img/button/3.0x/sqrt-white.png": "c3f542a0cf8bb6bfd32a7a8edbea22a9",
"/assets/assets/img/button/3.0x/equal-white.png": "8075ff6ac11e0a478035fe039ab24b75",
"/assets/assets/img/button/3.0x/divide-white.png": "a79df3a58c5300542ec17647297419d4",
"/assets/assets/img/button/3.0x/plus-minus-white.png": "43e56592d5973342836aadbbd3f48ac8",
"/assets/assets/img/button/3.0x/minus-black.png": "2ac2dff108d269f6fbf036751ddfa6ae",
"/assets/assets/img/button/3.0x/plus-black.png": "bf9e076d51554b6323a9b489094f509f",
"/assets/assets/img/button/3.0x/multiply-black.png": "25add19f1ac9ec47ed2c4f95c2fc079f",
"/assets/assets/img/button/3.0x/sqrt-black.png": "1baadc4d27fdb1d2ea33b29410bb8c9f",
"/assets/assets/img/button/3.0x/equal-black.png": "7a421519ba3ff8579b8380b494eccad5",
"/assets/assets/img/button/3.0x/divide-black.png": "0a654c4550578ccd046a28f626a15648",
"/assets/assets/img/button/plus-minus-white.png": "c0ee949e4c5c10e5793b095769672ea5",
"/assets/assets/img/button/minus-black.png": "c67ae8407e3eecbdeebeace44214034c",
"/assets/assets/img/button/plus-black.png": "f620586233ca472c2868b0d6653c0b6a",
"/assets/assets/img/button/multiply-black.png": "9f430064ba41faa873b0e0102d353372",
"/assets/assets/img/button/sqrt-black.png": "0241715bc2ed900a94e8d699a959ba5a",
"/assets/assets/img/button/equal-black.png": "9582bb73bb3001dc43202b3429c57826",
"/assets/assets/img/button/divide-black.png": "c5edc19dd6eeabadaf50f6e18476f517"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

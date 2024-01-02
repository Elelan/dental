'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "e03f80247734f1892fb22451597943cb",
"index.html": "f4280d2981bd5fedc472fcb605ff824f",
"/": "f4280d2981bd5fedc472fcb605ff824f",
"main.dart.js": "bc4a266430d465780c46a9f8ab8a7a87",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6b1c373766ec79c3bb24b92918b26d0f",
"assets/images/appointments_title_bg.jpg": "b3bf65a29f4e87663d21be4c12fe45e3",
"assets/images/ser1.jpg": "470942f9a393fb949cc0bcd101493153",
"assets/images/ser3.jpg": "fe041be8b6b569b0e5a081bfbeb4b64c",
"assets/images/ser2.jpg": "a8335aae933efda0bbac4cd6b5259dcf",
"assets/images/doctor_image.jpg": "b05836cfbe7968b314b6317c0b304505",
"assets/images/slides/slide3.jpg": "81e03e95b9c71f7e1fc13b40635829c1",
"assets/images/slides/slide2.jpg": "1b4673ae3927c25ba204c725b3b0332f",
"assets/images/slides/slide1.jpg": "473a22bab13467aa9f4b162559919e42",
"assets/images/slides/slide4.jpg": "d13a6b2a164a595d76722a6f939e6c86",
"assets/images/pic1.jpg": "93dc5519647a230fbf0a954e35625325",
"assets/images/pic3.jpg": "ac91112b11bc4f1245c428c7c1b0524d",
"assets/images/bg4.jpg": "838ebb772d2a6cc217ebfb517702ceb5",
"assets/images/pic2.jpg": "c2472c6898e5b09c89f93c052c612a67",
"assets/images/dental.jpg": "43306653a422d19234e336ad214e5bb2",
"assets/images/bg1.jpg": "151a14239258ebeec79eaff090c09499",
"assets/images/h2.jpg": "90f3d5b84b77a03e4850ecd9a764c798",
"assets/images/bg3.jpg": "de6b4a6266c3c315b97063d33b7bbad6",
"assets/images/bg2.jpg": "ba51693e7821264adca36d74a3646c0a",
"assets/images/h1.jpg": "2600f8e82b5337a101bd81e3b52a2c5f",
"assets/images/h3.jpeg": "3ce3bf444e1fc14fbd71aebbf1b0eeb4",
"assets/images/services/tooth_extraction.jpg": "7887499a43e27a43f85611d528184d6c",
"assets/images/services/orthodontics.jpg": "8b93e566f5c0135c58cb92f2771b001c",
"assets/images/services/caries_prevention.png": "33e5a9eb0e7b092598bdec70b8db914e",
"assets/images/services/full_mouth_scaling_and_polishing.jpg": "2a8f11ad0715d191e7e56b9c60b5ec1b",
"assets/images/services/dentures.jpg": "19d0aef89ddc1c707dcac99ea6698fc5",
"assets/images/services/crown_and_bridges.jpg": "dd529ae4a6ec1ef16e5ecd69facbc8f1",
"assets/images/services/root_canal_treatment.jpg": "d6578aa240b0419c99c8dea2d3e61bd4",
"assets/images/services/tooth_filling.jpg": "fed3bb2caf58fa91630e275d6388eb1f",
"assets/images/services/implant.jpg": "e12121d96aba5abe530f5e9b0558901b",
"assets/pictures/root_canal.jpg": "c1270481089338810a25b0cadf3b590d",
"assets/pictures/child_dental_care.jpg": "ace8a316b17236fc9ae25c6869c9dbcb",
"assets/pictures/gallery4.jpg": "132892172726d6d5e42d6fe1f9da1520",
"assets/pictures/full_logo.png": "a0197bcfba9b6759f2e99f11ac41d898",
"assets/pictures/doctor.jpg": "4229d19a8bbd18d4335ae40799f8274a",
"assets/pictures/gallery3.jpg": "75aee38a791419513bf28d7f6c10f1c6",
"assets/pictures/banner_bg.jpg": "776d3796d9d4b440c0c596d8a782e313",
"assets/pictures/gallery2.jpg": "ccb90f601dffb9b7edad063172818a8b",
"assets/pictures/gallery1.jpg": "ba248e9a2aff348256faa2452a644acb",
"assets/pictures/dentures.jpg": "59e794d580861fb1f10394a52851a068",
"assets/pictures/wisdom_tooth.jpg": "98143a56ebc9d253318e35ef4423b25b",
"assets/pictures/crown_and_bridges.jpg": "2dc89f3c3033ea08c0acc529d4ebce26",
"assets/pictures/logo_Icon.png": "d1d597bc149f8804a7615f1045628ba1",
"assets/pictures/web.png": "45a82f81c21b9ff11a904a39222a031a",
"assets/pictures/why_us.jpg": "1321f9a5632e834693497f9d077a0dd5",
"assets/pictures/tooth_filling.jpg": "1bc063d70979423f19918ac48e30fc04",
"assets/pictures/implant.jpg": "ba1d2fcb1b7ffccf9087159f20427b1e",
"assets/pictures/orthodontic.jpg": "6f80f7931399d7cb6793e2463a6b6bdf",
"assets/pictures/full_mouth_scale.jpg": "7325ee852731c9542280a4a8c2ca1e85",
"assets/AssetManifest.json": "76149e4d31d8592d1154670903acd519",
"assets/NOTICES": "cd1751c5a2e6e4095b5cd7e05ddc975c",
"assets/FontManifest.json": "dedd9bdab25187cddf2fca01464ad833",
"assets/AssetManifest.bin.json": "0ec45d231d6acc075cd4dcac9ac891b1",
"assets/icons/teeth.png": "148e297d00da56d422571ba650574cba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "07df82e6c6f0a4cac360721bc6b66b99",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "c1492506c5c94337a13f5323cd43cd52",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "1155435b5d3da6ab90d7ca96ed5e54b5",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "443bf9006791447fe46bf302cff72080",
"assets/fonts/MaterialIcons-Regular.otf": "12bac46a26d43e5188032acc39aa58ad",
"assets/fonts/memphis/Memphis-Light.ttf": "1773685817a480701afe782ad6916ba9",
"assets/fonts/memphis/Memphis-LightItalic.ttf": "e0db34708838ced7307a686e56768849",
"assets/fonts/memphis/Memphis-Extra-Bold.ttf": "7098e1dcff76cbf160672411f05224bd",
"assets/fonts/memphis/Memphis-Medium.ttf": "a42c29400258e1fda4e8c730ce968ce7",
"assets/fonts/memphis/Memphis-Medium-Italic.ttf": "8f2659fc5704696bd4904da2bb5f7dd8",
"assets/fonts/memphis/Memphis-Bold.ttf": "740f528b6114f9fd7180f5476efb319a",
"assets/fonts/memphis/Memphis-Bold-Italic.ttf": "187c0b91f40a6b8d033e34baab000595",
"assets/assets/images/appointments_title_bg.jpg": "b3bf65a29f4e87663d21be4c12fe45e3",
"assets/assets/images/ser1.jpg": "470942f9a393fb949cc0bcd101493153",
"assets/assets/images/ser3.jpg": "fe041be8b6b569b0e5a081bfbeb4b64c",
"assets/assets/images/ser2.jpg": "a8335aae933efda0bbac4cd6b5259dcf",
"assets/assets/images/doctor_image.jpg": "b05836cfbe7968b314b6317c0b304505",
"assets/assets/images/slides/slide3.jpg": "81e03e95b9c71f7e1fc13b40635829c1",
"assets/assets/images/slides/slide2.jpg": "1b4673ae3927c25ba204c725b3b0332f",
"assets/assets/images/slides/slide1.jpg": "473a22bab13467aa9f4b162559919e42",
"assets/assets/images/slides/slide4.jpg": "d13a6b2a164a595d76722a6f939e6c86",
"assets/assets/images/pic1.jpg": "93dc5519647a230fbf0a954e35625325",
"assets/assets/images/pic3.jpg": "ac91112b11bc4f1245c428c7c1b0524d",
"assets/assets/images/bg4.jpg": "838ebb772d2a6cc217ebfb517702ceb5",
"assets/assets/images/pic2.jpg": "c2472c6898e5b09c89f93c052c612a67",
"assets/assets/images/dental.jpg": "43306653a422d19234e336ad214e5bb2",
"assets/assets/images/bg1.jpg": "151a14239258ebeec79eaff090c09499",
"assets/assets/images/h2.jpg": "90f3d5b84b77a03e4850ecd9a764c798",
"assets/assets/images/bg3.jpg": "de6b4a6266c3c315b97063d33b7bbad6",
"assets/assets/images/bg2.jpg": "ba51693e7821264adca36d74a3646c0a",
"assets/assets/images/h1.jpg": "2600f8e82b5337a101bd81e3b52a2c5f",
"assets/assets/images/h3.jpeg": "3ce3bf444e1fc14fbd71aebbf1b0eeb4",
"assets/assets/icons/teeth.png": "148e297d00da56d422571ba650574cba",
"assets/assets/fonts/memphis/Memphis-Light.ttf": "1773685817a480701afe782ad6916ba9",
"assets/assets/fonts/memphis/Memphis-LightItalic.ttf": "e0db34708838ced7307a686e56768849",
"assets/assets/fonts/memphis/Memphis-Medium.ttf": "a42c29400258e1fda4e8c730ce968ce7",
"assets/assets/fonts/memphis/Memphis-Medium-Italic.ttf": "8f2659fc5704696bd4904da2bb5f7dd8",
"assets/assets/fonts/memphis/Memphis-Bold.ttf": "740f528b6114f9fd7180f5476efb319a",
"assets/assets/fonts/memphis/Memphis-Bold-Italic.ttf": "187c0b91f40a6b8d033e34baab000595",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"31ecd36dd9f2e26b04f3795097445547","url":"assets/js/assessment.js"},{"revision":"5000362f34eee7667adb9dbd883f2217","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"cd242f3703e4c9f280a635e5a4d124fe","url":"contributors.html"},{"revision":"f3ff944d530cf38a6678461221fec2f2","url":"feedback.html"},{"revision":"93c4d1ea3fe7a1a668630735a38b5789","url":"images/exp3_1.png"},{"revision":"b34bade4d3d701f0826905dbec3ca3ce","url":"images/fig-1.png"},{"revision":"de1b1664d7207ab398bad9f7c600139c","url":"images/fig-2.png"},{"revision":"83c6e03add9e2d8336194ac0e88b96e0","url":"images/fig-3.png"},{"revision":"df60890b5669fdac0147f8fc768de313","url":"images/fig-4.png"},{"revision":"da8ffc757721e42438d1ca23cb9fd524","url":"images/fig-5.png"},{"revision":"d1ab35a3fd04e127fc713f08cdb98bcd","url":"images/fig-6.png"},{"revision":"701cb8fa00dbcff8540ad7e6d887c13e","url":"images/fig-7.png"},{"revision":"0ecea5d0e5d14e264b76ddc202b6e574","url":"images/fig-8.png"},{"revision":"9eac2a61be8ff439d5219686f8c6b9fb","url":"images/fig-9.png"},{"revision":"a8212287993dd481046b40ea9554af4b","url":"images/help.jpg"},{"revision":"f2f1e415d681eb68a9d2c3598b1b80ec","url":"images/iitkgp.png"},{"revision":"c65e54722c3db018be41e1c69071c61e","url":"images/logo.jpg"},{"revision":"4571491a0d285a3376fd6f74b2c1de8e","url":"images/pic-1.jpg"},{"revision":"09e771b1f3698703e6da83b507cc7aec","url":"images/pic-2.jpg"},{"revision":"26c4dc5234e9a8f18a06eb199051ac21","url":"images/pic-3.jpg"},{"revision":"a28117b8eb2a146ca93f319cdc91fc4f","url":"images/report.png"},{"revision":"89e1f8c1e15e03f45e11d3c9d4c733a5","url":"index.html"},{"revision":"bde0b59d117487c7fb4ac8465e471bb2","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"91303f8acbd7e9d6146e5a1d70f3940d","url":"posttest.html"},{"revision":"3329022a8ebd82a0ea4cd7b14fc581b7","url":"posttest.json"},{"revision":"0cd32b7a73706f5a410650bb7c5bf979","url":"pretest.html"},{"revision":"40df5d72a3637f5f23f17750c3724b86","url":"pretest.json"},{"revision":"b3e10790d2ccc7e4af6f59037cd51f0b","url":"procedure.html"},{"revision":"0b13042be33daebc361e5e8f1dd7d9af","url":"references.html"},{"revision":"56911504afd6e5582b37d9e05191c738","url":"simulation.html"},{"revision":"7c83c92b61fa805cb284414f4071fef9","url":"simulation/css/adi.css"},{"revision":"f16490e0a840f15fe3cda21fd6f51565","url":"simulation/css/adik.css"},{"revision":"f8f2e2eb9a0dc54dc40d2a1510eb6ba5","url":"simulation/css/bootstrap.min.css"},{"revision":"d960ba258a7371af992d59ca90998786","url":"simulation/css/joint.css"},{"revision":"6fd5a6e8197041971d02cf62d06f4b14","url":"simulation/css/jquery-ui.css"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"2d646db9485baccb85a7c47d00c27480","url":"simulation/images/iitkgp.png"},{"revision":"0b83d9b2c322182c437e582d7883996d","url":"simulation/images/vlabs.jpg"},{"revision":"bf9fa711f3378420485fbfe861eb0296","url":"simulation/images/vlabs.png"},{"revision":"feb0af2620fa89e20666222c3b1dda8a","url":"simulation/index.html"},{"revision":"2450cca4ec1d12634e970934580f353e","url":"simulation/js/adi.js"},{"revision":"81cdc2c747dc7476da4f4bbb99af4943","url":"simulation/js/adidspex3s.js"},{"revision":"8f3ab66adb0ce730593fb87b90f9886f","url":"simulation/js/adik.js"},{"revision":"222432686a333255fd0f9b8fa4d4e713","url":"simulation/js/backbone.js"},{"revision":"094448a3d4eb86a8f0f82406e4fbd38b","url":"simulation/js/basic.js"},{"revision":"77cbad27852866cec1e32648eaafd22d","url":"simulation/js/bootstrap.min.js"},{"revision":"c88eae88638e3bda1ef6b84dffc3ac32","url":"simulation/js/d3.v5.js"},{"revision":"f404be7b65a78c400376c2f38d9c5d42","url":"simulation/js/fonts/tex.js"},{"revision":"55ef252ef5172af738f8764fbfae8aa6","url":"simulation/js/joint.js"},{"revision":"ab5284de5e3d221e53647fd348e5644b","url":"simulation/js/jquery-ui.js"},{"revision":"23c7c5d2d1317508e807a6c7f777d6ed","url":"simulation/js/jquery.js"},{"revision":"dc5e7f18c8d36ac1d3d4753a87c98d0a","url":"simulation/js/jquery.min.js"},{"revision":"cac376515e879d9864e293ca3202b606","url":"simulation/js/knob.js"},{"revision":"cf4357240ba8acad4878b0494f8cfb6b","url":"simulation/js/leaderline.min.js"},{"revision":"c87b4981943241bf77dfb7a1f53f6323","url":"simulation/js/links.js"},{"revision":"bbb588cc4360df5d317ebff5f5c1ac9c","url":"simulation/js/lodash.js"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"1bc5ac9a19fa41053771a08d8129f895","url":"simulation/js/p1.js"},{"revision":"e49171bc71b37f6f07f1f3b7fb8845ba","url":"simulation/js/plain-draggable.js"},{"revision":"b9f305114cd500cf450bedb6ddd8baed","url":"simulation/js/popper.min.js"},{"revision":"98314247892d6ca0ef312bc7373beb44","url":"simulation/js/tex-chtml-full.js"},{"revision":"745b55a56005593ada4bde5603a645de","url":"simulation/js/ui.el.js"},{"revision":"39f1b300485193c085761af6db9b2635","url":"simulation/js/ui.js"},{"revision":"733ac74b6b1c0262d4006ddc8aa57e11","url":"theory.html"},{"revision":"19df5d6eb04b30799c9db94127e0e626","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );
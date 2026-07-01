'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "56d280ffb3ba6fa9fd2386e6ecd12185",
".git/config": "a6897d87a9b39e3508818424de4640eb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5170b8e12ab6a02ef25773c0cc253b56",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "25a3db70097ed8e6c6fe4cb7b203469d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9886c9129c7385e1418e781401069abb",
".git/logs/refs/heads/main": "0215f3b9863ccb5212abdabf73c867ce",
".git/logs/refs/remotes/origin/gh-pages-source": "41d1a6bca52aa0586490bd378e78ea96",
".git/logs/refs/remotes/origin/HEAD": "b01fc77781bd879542f55e0f35df60b8",
".git/logs/refs/remotes/origin/main": "902f199b416881e0130fd34ee64b4349",
".git/objects/00/9236a736af7e4ce9356e969d6e858c55818db5": "a8abe49b5039abdba25aac3775a789e9",
".git/objects/01/8b8deec1b2a2a31b6dd284db1edb9c3a90ef0d": "01aa893255801a70e41f597f59efbec5",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/78129c42663760ac420f9adb44746a9b13e20e": "34d1c4e5200b771a268c8d2ec159d8c8",
".git/objects/04/8426ff4ca936155daf1bbeaf7917c5b4cffe31": "3d0d71d351878254ab20132bbbc420c2",
".git/objects/05/85bfb46fa63cdda1b1d05e22c02f670a6648dc": "b829446bea1d44f6090fd594134c8629",
".git/objects/06/6461b84a72ed06b04e8ffb1192b910d5e69dc9": "1207229388e9cce1b5896fe6be6ebd33",
".git/objects/09/9564922543de4bf780fb1fc989bef6890b66b9": "cc9e85a8f4c69d0da5d9626232fa675a",
".git/objects/0a/d81043eaa3d29e20e65012f4a520813b8175c7": "f63e86756a7b60eef7f298bd12524aac",
".git/objects/10/643558680a53910b81a1fb43ef0b267ff950b5": "60b5b5652f6ac74a4e724def4a3174db",
".git/objects/11/542b9055c93646b1d8d86dc39cc713d6230962": "1cd445d2471c6afc699258fe77f99080",
".git/objects/12/a1a8294c6775f2811ee0656ce339f5e618a442": "7fdc023ff39393e96528179ba8008e90",
".git/objects/1c/10972eceaea5bc6ddf055d7e4caa75e01e6f8e": "0185c67dad999f49755704755e660c16",
".git/objects/1d/0675bd85cfbf6adb75c02028cd4c22c7e58094": "eb11068e1518040ab8510eebf17af8b0",
".git/objects/1d/ad9f7d2f5208eb20da194272f3a5dd76fd88ae": "70c069863534f3e83c598c77e60bada7",
".git/objects/1f/9181df56b37e9dd6545ec4b57a026fc8e1ad70": "c1a11e23416d2050f1e6a5c55a86953e",
".git/objects/22/1eb39448b482d3e9585222aafa88a6c00dbdaf": "ffda93b18d8e9434081e3e51bb3b9637",
".git/objects/24/33817a897d192ce5cfd4745228b75b170965b5": "5c87bef4090bf863e49647c68b7fe1b7",
".git/objects/28/04b74c3543085c202e342289d604685d2762ea": "d00306cecfe6974ada0d0990d0247c3a",
".git/objects/28/a12301876752f8f35cbcb4a02743c8c1fc1c4f": "5f498ac7954357fb6c5fb1edb1ded7f3",
".git/objects/29/752f0eff6544242657feb929a89c17ae0a8b77": "129ede016078ed586fd91152b6837495",
".git/objects/2a/2a903390ce0bf994c7ef71d1d66477c6d096ca": "56f6a916afee2951a141d38abff8a45e",
".git/objects/2b/127842cef7c088943b2adec6c049965ab5f8ee": "fc2ff9974e84a7fe930f2b88dcec1707",
".git/objects/2b/caf1bf67f88c66c1d9f8eb1847be8a8d55d4a9": "d47671318b5d5b374d15cf66e56f06c9",
".git/objects/2c/752045016db7cb11b7f7b59acda085a0db56ae": "a908c060a727611758d8b9962eb85cd8",
".git/objects/2d/0ed5a29126c3b273308b4de6951a06de3e692f": "1477b9d1848415da6791f562d4e16f82",
".git/objects/2f/689a2da911cb287c1070720307f37089823ca6": "3a0a585cbe8b48226124623425758453",
".git/objects/2f/bcf0c6e601e30502eaca63e63099b0ee4cff3a": "2ab9feb542f28b24b7e6bd932a67d076",
".git/objects/2f/db1ee419db5435e73fe29f0ffbce666498b0a0": "517e0d4ea3f62b3610d0ae278f213730",
".git/objects/31/a5956229cdfc3c72e09554907dd0f917c80f37": "650bcdb34bfdcb97ed6cbef1ded9be4d",
".git/objects/32/2ee79dd04e77bf01fac6f62330887e520a5d09": "c511c4ee7a517ffaec0a014b6a3ba153",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/33/f30ca5387168ee2336b107fc76e1712eacf79a": "4d0ea458c6bb543c2bed5c1cc7681236",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3a/273474f9ea75c8ff5fc1f18221c4404cfadcc5": "e972cbaec8260ba524a67fe149082e2b",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3e/095a55eab00cf596493349803fd006da1a84ad": "b0b1625a48823858ad33a10d944c2b98",
".git/objects/3e/dadf0ca8c3bf4fba8f53d18356ba2eb45eb37e": "b188b15b8e895ced5a5bc3a649ea34ac",
".git/objects/3f/0155c3a7e27f3643940370999b4860f09f0d44": "f4a424fcb16663bfaf0b875a63a040fc",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/41/2ba6f42c213754bd651591723a47e24a581a14": "da1d385583f862b91a3200e3e8924843",
".git/objects/41/36761a0d1aa799d610489bb11090b470f65ea5": "f9388206be3e66595e512a2793aa7b40",
".git/objects/41/b1ee8add8a442a2fe9544d79431dc4ba88781c": "32ceb35464129f29c781988830f6bec8",
".git/objects/41/e800870da4de9fa530913e340392a694d4895c": "0bff9d4d97508e7034a7d64b292745f2",
".git/objects/42/0f7dbe6f76c8e34aeff80d619d291281f6f3ff": "a7617b864afd54e51be36a35b049d772",
".git/objects/42/6f2d89dc9a5f955c671fda8014e29789044b9a": "dc9257b4ea93bba46684c80cd3dcdd33",
".git/objects/4c/8f61843db6539226014ae9b5064a7119f5f1f0": "f8f5e61a8571978fedd1fd20a04e6c2c",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/ae61ef273a346ce2fa09c7e62980eaa1074c6f": "361b040c68c69260db7ef8d2d3b93812",
".git/objects/50/c174f4d99ce625a6a6503ff5029e0cfbf677ab": "1a11619874766a4c70cf21e539196a19",
".git/objects/51/1a257dee1201ea715ed0e4e80cbf0c2e972589": "e6c21434f3e9ff23d2a68c0c881d4e6e",
".git/objects/51/89e2230985202b63970cc35ab9c596b2af23fe": "5dea8f66ea39022f9e9fe27ec8edcdc3",
".git/objects/52/1bfd1825bbf10d8d02e0b6d608d0484051a8a8": "5325a48178de84a2737b0425909c0c77",
".git/objects/54/818e07e72c6739c10d2f12f5ae8947523ca74e": "43ddb8ebc6a5c576097517e7ca7ac40d",
".git/objects/55/0b6275ac19dbcf696c719f48ea32d1f2851335": "319c6ed3696f0fb9cd8e70b233a3b4ae",
".git/objects/55/a677483c1f2667517828bc373858cd399af6a4": "b198d48f5563d542f54ebecc8e44013c",
".git/objects/56/0101050ecf004f3952021ffc7b2c968167b5b5": "23dcbdc94b9748dca4239ddd67badb42",
".git/objects/57/4bdeeeab6121ecc80a304ded7a13c62e936fc5": "326cdb5ed7f72c9da88924c0c38faea2",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5a/4ac38cad1d5cbd75cc308b71e3275ae76c2c76": "7c3f3430c9bb03ac2c23eb74c34413e2",
".git/objects/5b/ce4aa2a0efee40c930c2e496b3bc5bced3ccbb": "5dd68c6e6c07f3511b29da5b516cc872",
".git/objects/5c/17df3807a6b182fc55d87c6bffddd4f64873fc": "d403befc1383d592d6ce79f721b2bbb6",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/40fc7a3693d5cea7a1ae23ca7f300c0eed42df": "ca4af797e95976d05930baf2f3a48aba",
".git/objects/61/c867e584626aea254ddd60c04eb11390a7d7bb": "b94a2e51dc039f12ff02b714538efbe0",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/66/b163bc2a8ff37852f05db73c2e116a8b1d1757": "c198fa921c03e020a6051b637f2d1393",
".git/objects/67/f2d3563f0e4e97bc277a10b5d46e9016cd02af": "770da6e5bf4866c43cda297391ae77c3",
".git/objects/6e/9c3505cdf9c1fc96cba732738445dd8ad50036": "6db799bb0b598d77b2d56575ad76b899",
".git/objects/71/2108629f5babd21afc0f9b8108804f0032347e": "ed1f6b30cd5c3dc5cbdd25532a54ee28",
".git/objects/71/4bd40660d369a5e3ba367f8bbfff3e9fa8fb29": "466958ec2351be9656e37c8f872cb8f3",
".git/objects/78/f7385a20d9784d9104cae0b69c3e214ba0c2a7": "79b825fb2df55a4664e101e01639dda4",
".git/objects/79/21a42fa3d3b074af39d9283c19865e7621fe93": "487e7f16f5741432ceb71b1a46fa614a",
".git/objects/79/9d333f1dc149d81515e827d72d98e262c6781d": "095dd01e04464c5bdfff25145959a888",
".git/objects/7b/1323adb091c42ca58f9f8cbcc8e27750c2ee95": "bcce278aa168c2a8ca17b65f790e5c9e",
".git/objects/7f/0a14a5fa48c70722fb219bdfc19efa93312738": "a5dede5fb182ad34df2bd8896c229755",
".git/objects/7f/2fe04631e861a9dd0c691ab905ae4f37efc2ed": "b078a0ab3adc32fb5f5a967c7e36e5bd",
".git/objects/87/16336145d8a376729f58d1ac52e9c7bf97699b": "e81c1a2ecf541ab6788df810336ce6cd",
".git/objects/87/6f106b359e05c85351ff3a0a6f06fc299237b3": "e8db279caea571308cbb7935ea8b19e2",
".git/objects/87/eb949cdb56f95f9ff3d07af393f64869def572": "55e16fc253b0ed92314029b4d4afc941",
".git/objects/88/7e12504c258b047e7e08ea7c30d600df7606bc": "52b8925694e894ebc777bfbc63cd8fd8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/7545bad030de1c0aa4198145db57d74bd4b845": "a7b106b87964d97b3452a09254434b94",
".git/objects/8d/ae75ebb05c694774fa09370332009afc93ba55": "6af0253b0ca3c465747915eb5136c51f",
".git/objects/8e/8a7f89b33539ce63ef60b5600e99b84651a7a6": "45d163b7658b640df376dbe3a419a434",
".git/objects/8e/d041ab6cf0ab29db4bcd98089e983cf83b6000": "9fcba7ea33b123c1960c3f7507952dea",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/92/d0479ab02bf362b6c84de6c8bbbf1ba5a46a3b": "2d68f81a6071b0ee8e3b5a0a1c81d018",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/95/5056ee8016305a8f115865dad69683dc7152ac": "a15f079da27b5adb46840ef02529c26c",
".git/objects/9b/e900c4181a54214fe8d44ffaacdc519f6a2cd4": "8b9ad5dc373ff788b92dce2a0d323078",
".git/objects/9c/c045ee43e89535651d29ea7cda5240d47fdbb1": "069073840da68fd8863c7694caef22b1",
".git/objects/9e/60edf4d2b9a4c5e1e271a8a18b0b74b33f8baf": "3142b6ea9ffdd85ccb2b0a21f0a74ec6",
".git/objects/9e/d79d549f8a01d2ad8b9a2392f66faba74e5ecc": "30662ae294773af47b969382cb77173f",
".git/objects/9e/e1919dc230d3433cce79d137c37081c974034a": "7918dcf5b15c1ac607255918935ca48a",
".git/objects/a0/033a1673abb332d0c63bdfe02eade2fd5444e0": "46cc77fb9af7819c081366401958314c",
".git/objects/a0/2e08cf90c041770f7b3312614a29a0b01cb6d6": "47558cfc1da2c0bd511320bf77ccb9d6",
".git/objects/a1/a5881af60a24930257c02ffc818c63581119fa": "05a2c8142fbbde666532ba6eebf20df8",
".git/objects/a4/6f1edc6b48ef13f40f800b8e350966114dae98": "95ff8b0c34a9f20dc727d44b2a858758",
".git/objects/a5/7b8d304fb798f3a650636c35dfcb6c39a844fb": "88b97a3244e73465e9d6a9c628bcc993",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/295a31cebc8d1ba14de20753a121d36e548a35": "b42a33b119cf11cbe2679bb9fcc6079b",
".git/objects/a9/b4dba5f01ec8248605856ba9fe1cf420fe2916": "96a07c3226db35e1994bfb9e585fd881",
".git/objects/aa/7320247d22c859bbbbf76c37a51ee92e9cf68c": "0db868deff8b8a0104e961d1896c8a29",
".git/objects/aa/d664f3b42b088b61fb839075c6d2fa4e8798af": "7da5bbaaf906efd6c7ac7b0c05cd88ea",
".git/objects/ac/b6c78aba8b4b7d51c3563eff284e2678f072d1": "7612e114a203dd0f51eddf57ca3fab8b",
".git/objects/b2/6324336ee98eeb963dddbd40405a773f97c974": "f90d41e671df80349679c3c91ad79fdf",
".git/objects/b6/6ebb7f2e71ade39c6694db5c0a6eab69d520b7": "0e8cc40d8263de964bbf8788df02354e",
".git/objects/b6/befec1a9c0ef91976e04c7b8b0422aaff258b2": "440a9c05a7e0796ae8f3e806fd570423",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/60674bbf9270cccff97366b33f657b90427ed8": "cfb8166e8d0be6af0fc486e6d5d34cc2",
".git/objects/c0/216b48e23e46892265fd444a74cb7408069da5": "4f6cc5af60cdbd33d88c1ed9db92c6e6",
".git/objects/c0/9c7cdb77b981b3d80c73aed838a845bd943d6d": "8fd7557f37b53146ef0c4dbe4442e286",
".git/objects/c5/1275140a853172eba3a3b05009d4fbdbe8d64c": "eb8ddbd2f7145dee91df5f7ba6d0fd25",
".git/objects/c5/f7156f296a3c50b2a6027d59a66c1c128b9044": "ce7da0721d11ddcede991e55725a33b9",
".git/objects/cc/e8b8be6e9ccf35136c66ec61f8f75868e08156": "21b8fa5c1a77fe4d1526a40a57ad5016",
".git/objects/cd/69e3eaa19c22641ba845f321607d8445744000": "8bc702d06b19b5e29933283caa12f2e2",
".git/objects/ce/3449f52c82477639fd3a6863cc10d640531d1a": "f4392fbb8032c376ea0d9d9531bcec6d",
".git/objects/d0/d319e451c56d28b242412306839a772b2bc160": "ea32d0a82841afdc33630fb12d8c7c50",
".git/objects/d1/971e5b4def3219b60befebacf9b0f464a031c1": "e4517a26b4fb28d7d13bbdf2774355c8",
".git/objects/d3/67170febefb87644f65a531bac1a3d681e8d34": "a062c232e605edf20e56432e4c62663a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/1260c7af198fdee376541ea3b72fd583ccb17d": "5175a8451eccb3353260080c951a6671",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/31d7a812b860791e5aea77c00edef703261bb8": "b9778acf37a45260bb59109b21ad7fef",
".git/objects/d7/d4bc340043500e6b191d598b6513af340feee2": "1f44b43fb8285a7b6e33819917d32b91",
".git/objects/d8/08a8df692a646e6b155dcddedaae7e52d2db9d": "522a90de690887a6648aa2748cdd1dd4",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/da/aec7dc653ccb1ad6ad009b3ad2a5e32d68cd67": "d5d3ab5436a81e6f5d5b3ccf7246328b",
".git/objects/dc/67dd363b44f82d30dc9bd7cf661744278f4dd3": "fedc759dd4ef5de29d7b523f1c03f1a6",
".git/objects/de/7a305a5e528612c5aaaeb073a8972e2e6e8629": "ca04ddc475cce6788e2b789665863393",
".git/objects/de/9d41a2ccaa703205cee66dc877d42f433f6f9d": "95fea3f8d22e35e0dff12dd66e3c2aa5",
".git/objects/e5/cf1a5d0c1e20e2e5c6f07ce8cf83ae21d5158b": "fa36515cf67bc0244d220e630f71a20c",
".git/objects/ea/125e18b632d736728037f56297bafc3769a8d2": "b460ac82e0f3de759617905f9ba81562",
".git/objects/ea/6ef754eb9907cb3aca263a1696f1d1cec77c11": "9ecd9d1e50279cf05fb73c2a5aeb86a5",
".git/objects/ea/ff9da77655492a9a442a6820b0e15460a9529c": "789fa2caf5d1e7592b77d3c4ca95b53e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/f4debba779f6a6570d5f18b35a8eba55e3d1a6": "5beea9641bdc82203d0d5c5429ae52f2",
".git/objects/ef/3283df8dfb709851c307ed21d2db1fefc2addc": "f821f247d2c2d0c13331164f21872381",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/e29bfaa90959967ad9581ba612f33d067028c7": "32224eb492c9fd40618ed6fac12d64cb",
".git/objects/f0/2f7c12111195d5ce84e390e9f955632bfec6d3": "53d441eba01a656e8b6ac700bf02cb21",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/0fc36b203f08f32df7a2c5a6b0489be40b72b4": "5c3faa405d3a326c7cbc5f144277fc54",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/fe/56d6580fce69d14c1cf685394dc9ea661975ef": "7dc9daea455ac5864dac72a80e1c05ad",
".git/objects/pack/pack-54f407ead3aea0ac1569bc6776017f04eeed73c6.idx": "908a004696ed2bfaa003b4fc04de61b4",
".git/objects/pack/pack-54f407ead3aea0ac1569bc6776017f04eeed73c6.pack": "a9c3eff2e429767a9a4eb83c87328e1f",
".git/objects/pack/pack-54f407ead3aea0ac1569bc6776017f04eeed73c6.rev": "e96488544df7fcade236f4b7bd826d19",
".git/objects/pack/pack-744e65495c488755cc707f127cdcefcf96e370bf.idx": "4f8964d928064599fa8d702c5d54d7d6",
".git/objects/pack/pack-744e65495c488755cc707f127cdcefcf96e370bf.pack": "098f657a6f5580eb5c594485c96017ef",
".git/objects/pack/pack-744e65495c488755cc707f127cdcefcf96e370bf.rev": "43909a7317ef33bb2e0f307e1501a8ed",
".git/refs/heads/main": "9f0eded6370080f8b0f69154d30701c1",
".git/refs/remotes/origin/gh-pages-source": "bf83bae625f43a55c089b76530eea062",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "bb2a8e9ed37fa7cf9f9a160a54599fae",
"assets/AssetManifest.bin": "1a6b48651015930102f1ea7096276e7b",
"assets/AssetManifest.bin.json": "083b00d867e86ba368e4333cea5139d7",
"assets/AssetManifest.json": "9d9423f75854c9809adbc1b98991b0f9",
"assets/assets/banners/app_promo_banner.png": "b06a4e7994e6c8899ee84166cc5ea1ce",
"assets/assets/categories/bakery.png": "5ce6b0a9fad299680038e23448fbda93",
"assets/assets/categories/beverages.png": "15fbae633a1e07d5e33754e832706d6a",
"assets/assets/categories/biscuits_chips.png": "e84ec75e652a8435844349b696897b5c",
"assets/assets/categories/brass_items.png": "3c9a0987077092275fa8d3fbcef672a4",
"assets/assets/categories/condiments.png": "95aa2e3120d516da537e4a2099013f8c",
"assets/assets/categories/cooking_oils.png": "c33c1d650fd250e0881c7a6267507247",
"assets/assets/categories/daily_essentials.png": "c340af1c122f89bc355a8904b86c7719",
"assets/assets/categories/dairy_eggs.png": "279e04873d3952de96f1de22e5032769",
"assets/assets/categories/dals_beans.png": "641b1156647abb5085c9c88009d129b6",
"assets/assets/categories/drinks_juices.png": "86e2c1b8696064d5bdd0ff22e9db678a",
"assets/assets/categories/frozen_foods.png": "d132cd31d8b0a9c8c4fb50276f530400",
"assets/assets/categories/fruits_vegetables.png": "cc567b962de5b5d854c7e37b2bc3910a",
"assets/assets/categories/gifts_toys.png": "1e597d32118e85009ecc3afdb78ff412",
"assets/assets/categories/grains.png": "412d6f6ae207a99a80ed2f511c5a5c5e",
"assets/assets/categories/healthy_drinks.png": "19c69d0e2b3595099243962d4e454686",
"assets/assets/categories/nuts_seeds.png": "a7be86bcbf8aa229d2b5b2252b5d3d6d",
"assets/assets/categories/personal_care.png": "a73888ccc5f415683dfb18cf5419b428",
"assets/assets/categories/plastic_items.png": "5fc7e0f12f669d2bf505901f94823779",
"assets/assets/categories/pooja_items.png": "b1167ba677eb278edada5acf98bf45d9",
"assets/assets/categories/snacks_munchies.png": "c4f4d5a60e0a35b9be5c1f1cc75d03d8",
"assets/assets/categories/softdrinks.png": "2b30c4044e5ea473c05108380071fdd0",
"assets/assets/categories/steel_items.png": "575029ddc6e283c8275cebf5cb1785e6",
"assets/assets/categories/whole_spices.png": "b5577cc02a747df81a8828196e84c929",
"assets/assets/icons/best_prices.png": "c9c76222d4cbc915b6824069eaa923f3",
"assets/assets/icons/customer_first.png": "5ecff09fb207df781027e6e5ec442465",
"assets/assets/icons/email.webp": "8989e7f86c46c1466efddc0f927fa363",
"assets/assets/icons/fast_delivery.png": "3b159dccd17a91ed708b51c61fc28a72",
"assets/assets/icons/phone.png": "1559fc1e59e78d419cffc42457baffeb",
"assets/assets/icons/quality_trust.png": "d6ab21a05e5fe0af588f167422408dad",
"assets/assets/icons/whatsapp.png": "8e0d6d7c4bb29837dc2772816bd8a635",
"assets/assets/images/hero_basket.png": "3b4c91cd7a4cfa6dab6a32cfdf647268",
"assets/assets/logos/bs_logo.png": "818f6d9bafcf0d07f615ad849bbdf26b",
"assets/assets/store/app_store_badge.png": "745c1a6ad3e0f448c5f2ff00f015be66",
"assets/assets/store/google_play_badge.png": "488b053854efbd5c69f911c7c34f9b72",
"assets/assets/store/qr_code.png": "eeed16d3a881989ba058e0040a7bd1af",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "2466ef15225cc794538fafec2be2a24c",
"assets/NOTICES": "3dadbb1c4fc96b9ccd8e822446e4a4e5",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "89ed5c11eace618e0d12f26e732a5dab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "c2330d8ea62774a976bef3f883656936",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "404764c411148356c9f1f204eff54012",
"/": "404764c411148356c9f1f204eff54012",
"main.dart.js": "ce5868e830d0c7fd94cca92d8c7fb334",
"manifest.json": "3ae4cfb2e9e9b7621a79340031aba580",
"version.json": "dc2a187f77eec429cb5834acb9b19c1d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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

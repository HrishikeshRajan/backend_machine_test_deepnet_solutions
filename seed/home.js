
export default  {
   cards: [
       {
         card: {
            id: 1,
            type: 'header',
            title: {
              value: 'DEEP NET SOFT',
               additionalStyles: [
                 {
                    id: 11,
                   text: 'DEEP',
                   style: { color: '#0796EF' }
                 },
                 {
                    id:11.1,
                   text: ' NET ',
                   style: { color: '#ffffff' }
                 },
                 {
                    id:11.2,
                   text: 'SOFT',
                   style: { color: '#857878' }
                 }
               ]
              
            } ,
            image: {
               url: 'https://s3-alpha-sig.figma.com/img/22e3/1e48/6860545013e0a63ba8cb7e94004971f7?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mtvWfUezNjQpG5v2VUWL8R~8Ra6Bj7Gn6GqSNo0lt5J0zmaiIs0OecojuSdMJHAwc0zSkQJCmx2UgzZXcq21WoPSM-9DH5eBROFlrMtdaC1eBseBC6fGNfnA8s8YX2DzWQwMG7-1eRFlcg9XMPsJCvbj8u-rgwHNJwEUCFWHAA7jtL1xzBvK2GiBU~ZPy0NRBviL3Thiye4zD1~Wq~QL~k8gJOpi5K5R4azJOJwWDvl1200Vtbj92QZxWxLv4lny5xKqxLkYyKy-zEIpOFZfTPmWHgyeeE~9VBiaSDU-UcVp2fL5J8A4vHTVbJ6PhaSpGaUXCK8tiISbTt3COw1Lnw__',
               altText: 'deepsoft solutions logo'
              },
            navs: {
             button:{
                 id:1.11111,
                 type:'button',
                 icon: 'https://res.cloudinary.com/dxv2tmvfw/image/upload/v1718309053/machine_test_deepnet/ci_hamburger-md_pnu2xe.png'
              },
              list:[
                 {
                    id: 1.12,
                    name: 'HOME'
                 },
                 {
                    id: 1.23,
                    name: 'MENU',
                 },
                 {
                    id: 1.34,
                    name: 'MAKE A RESERVATION'
                 },
                 {
                    id: 1.45,
                    name: 'CONTACT US'
                 }
              ]
           
           }
         }
      },

      {
         card: {
            id: '666afabf717cf609257b7d39',
            type: 'banner',
            title: 'MENU',
            description: `Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.`,
            backgroundImage: {
               url: 'https://s3-alpha-sig.figma.com/img/aefd/7aa0/f81b6208cb3da0f5ecc0f0d109ca4bd0?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KEDAWU5~U2HblmekCG2KzvKOhy68DgzaiTEQYx1xb0GlKrjsX4F70RoVnWg-YU2R5~oNo27292aXP-C0W4558GAAaZWvGuZ-SQbNQ4QtoGSoOijYbHgVXiQ5i~M2PvRADbX0Np6DrMDTvMyW1j-r8qbhJzLsID~fkjQEmjFZp5uAeORfP7UwDd0WY5x5FLOFVHHk7DLZBaIgkByGNkzgrTsunM554RaMw8z7BsINiU~uy3LJNflSMHswayMiKyjR79~w0gdsnjjmHZaqzXek5pxdkPNDVN9wpDmSbwBDmf0Nd3iLEFDra~OnXT8cYHf8OSQnweBtMrkfMQRW1f7wxg__',
               altText: 'background'
              }
         }
      },
      {
         card: {
            id: '666afacc10caf6c1611ac104',
            type: 'categories',
            data: [{
                  id: '666afad5f0fffaba569f2d66',
                  title: 'FOOD',
               },
               {
                  id: '666afade174337f14d29157f',
                  title: 'DRINKS',
               },
               {
                  id: '666afae7886a314f56f4f610',
                  title: 'BRUNCH',
               }
            ],
            backgroundImage: {
               url: 'https://s3-alpha-sig.figma.com/img/0571/aff9/d875fd6fec8f3801ba095cc39be0e4b1?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VUUzAFCMUH6PUsBWtgylkNqqv3ghzhEsMYvUrMyPiVZUCpIkgNprDddwI3F7Pdgm-211Q8~YSq3lFzH4ONyo2J3bWK6hHwc5AuAeG5AAjXDSemMCSyF54IOdVHOEuDPpGnMF-kuRG3BRb5DuZNdi3oNFDo8-0aBSI-WQiSu5DFAsajNTebon2JP4zKcbVHB6Df4xqygHACCnTxxGrH4s6r5zEhvvUKhfCzKdJcwQiKw~G8LHXI4Oc379ornryVN4W5Hmn1~DXmFEgpIgVKs4kwqdS1HpPtTERTyDomUIp6JWVJvWTdOEyUUTdLzw3LXu3fA9gDsGojevspWZkmidhA__'
            }
         }
      },
      {
         card: {

            id: '666afaf87fd14c8396d5da05',
            type: 'category',
            title: 'DRINKS',
            data: [
              {
                id: '666afb048f54eba6c69a853a',
                name: 'LYCHEETINI',
                price: '$14',
                details: '229 Vodka ,vermouth,lychee juice,fresh lime juice'
              },
              {
                id: '666afb0eb17e3e30de2def71',
                name: 'HIBISCUS RITA',
                price: '$16',
                details: 'Casamigos Blanco,orange liqueur, hibiscus liqueur, dried hibiscus fresh lime juice'
              },
              {
                id: '666afb16d4a025199d5e37fb',
                name: 'ATLAS',
                price: '$18',
                details: 'Herradura Anejo, strawberry, lime, agave, club soda cotton candy candy fluff'
              },
              {
                id: '666afb20103066de68711f3a',
                name: 'SMOKED PEACH OLD FASHION',
                price: '$18',
                details: 'Angles Envy, creme de peach, bitters, cedarwood plank chard peaches,orange essence'
              },
              {
                id: '666afb29ef564778f43bd553',
                name: 'THE 6TH MAN',
                price: '$15',
                details: 'D\'usse, cointreau, lemon juice, blueberry puree'
              },
              {
                id: '666afb32a2c5e301f83d4016',
                name: 'DRAGONFRUIT TINI',
                price: '$14',
                details: 'Titos, dragon fruit liqueur, Cointreau, fresh lemon juice, simple'
              },
              {
                id: '666afb3a122e8491354aa9de',
                name: 'SWEET HEAT',
                price: '$16',
                details: 'Termana Reposado, muddled jalapeno, fresh lime juice, Agave'
              },
              {
                id: '666afb42d8c09b313e2c55c5',
                name: 'SMOKEY LOMA',
                price: '$16',
                details: 'Mezcal, fresh grapefruit juice, agave, soda'
              },
              {
                id: '666afb4b7366d134ee99b0c7',
                name: 'PURPLE RAIN',
                price: '$14',
                details: 'Empress Indigo gin, elderflower liqueur, lavender essence, fresh lemon juice, eggwhite'
              },
              {
                id: '666afb537b0cb83c3a7305b9',
                name: 'PEACH TEA',
                price: '$16',
                details: 'D\'usse, peach puree, house made tea'
              }
            ],
            images: {
              baseImage: 'https://s3-alpha-sig.figma.com/img/53f3/e533/f37f4a258b3eea846bf145fb95b71dfd?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QbiNN3J6q22e-QxXHrrSpemlv-MrZFt3O5q2whAU0tyEUehYPZZSR9usKvrtTz3KJ3aUJJ7cIyceJaIc7oQgGib5cniVFTVeFWUXU2y3t9uMl2MeVpkHrzolyzQLCd9HhwBjAJ7uRFywhwGBQizqIBlMdhvkJXaDFTVL0TiJGmb6sOHvTiSsCORCbhPPy--acNORSNk2e4yDsdMH8-VS5m3SvVqKgWxlijsnlN14aGJMXqaM5NdhNCGFpSUufJXgcmNY3Ok7xew~c3x-62YUudl5zy0xjMMxBfFlFCNL6PzLJvSIkqJONS8OWs~pb6TX8qRmrC4OuiE-sli3N7czjg__',
               left: 'https://s3-alpha-sig.figma.com/img/73b6/d4b4/d8f14a138d174cf312c322aee21e5d33?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ap8IqmFFrztGKiQJrAfCHXgrfgO1bbCTeZluM6t3I0yUP2lnZd8H~jMD16W16v2sq55GojvDY2qDgtcnjSXjrpfoqjNMPH417j9QJ7vOrc03rg1MbevM1eDsf1cnPzAXAjovy65CkOY5MjCt6-jQlwRX10aGQ4v4Xpu76a1vMq4EjUsxdUIABCEEcPTRFy5TI7wgzcBUmTAO71tvbD7p7kS0d2iDa-24t93mwj4xFN7D3v~cAdLhOa7VaDZE7kYrjldKmtR-sS6bXgTK2q-mrSkcfyV6Lo5bt8sEnC4ksarTumJejPkK1EGfWJ2VagxzdmqrTvdBMTxh5l5C63pOIg__',
               right: 'https://s3-alpha-sig.figma.com/img/d991/6426/9c9a9a113a03f4277d1a5a0488158f1b?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GrNzos64-arLz7phEnHt2pXgvbEOIOGQxl7ZRH4X2XJVLJOYshhZauoiwzuefMETcp25Fxd2vigihVmFjGv086j80iEY2r1v8fJ0hXC5dQSMmi6m37mXcoHmR2RXzXxF~iMBl0aBL8rav-9OSFJqLzszvYc8V1evd8IrCURfUp3awh8bWhmDZmG8kZKoNHXTaPlc--a1E99gFXprQ6QV9SKT2FUUV8vkKKz4RNBXOpE4RGigGnNVTPGvUfH4ypa6-swK~abWFAMgDfFeDOyu2xGBnfeOgp1-rAS44gzgSiTDzpUsD1PBU3o8h~8svW-RzxwrfS2nPVrFT1FfZ61Vfw__'
            }
         }
      },
      {
         card: {

            id: '666afb6184c7ded32d21d087',
            type: 'category',
            title: 'BRUNCH COCKTAILS',
            data: [{
                  id: '666afb6d42c22d372f2f1f64',
                  name: 'CINNAMON TOAST CRUNCH..........................$16',
                  details: 'Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon'
               },
               {
                  id: '666afb74b178213dc207ba1e',
                  name: 'BAR 42 MARY..................................................$14',
                  details: 'Titos, tomato juice, worcestershire, celery salt, black pepper, tabasco, fully loaded',
               },
               {
                  id: '666afb7fddb67997b79e661d',
                  name: 'MOET SPRITZ..................................................$20',
                  details: 'Aperol, St Germain, botanical liquor, fresh lime juice, mini brut Moet topper'
               },
               {
                  id: '666afb89439ceb01fa68371e',
                  name: 'SMOKED PEACH OLD FASHION.....................$18',
                  details: 'Angles Envy, creme de peach, bitters, cedarwood plank chard peaches,orange essence'
               },
               {
                  id: '666afb916ebd7f753f1a5653',
                  name: 'THE 6TH MAN..................................................$15',
                  details: 'D\'usse, cointreau, lemon juice, blueberry puree'
               },
               {
                  id: '666afb9856803bc692e56f8d',
                  name: 'DRAGONFRUIT TINI........................................$14',
                  details: 'Titos, dragon fruit liqueur, Cointreau, fresh lemon juice, simple'
               },
               {
                  id: '666afba0deb3ed569ebba033',
                  name: 'SWEET HEAT....................................................$16',
                  details: 'Termana Reposado, muddled jalapeno, fresh lime juice, Agave'
               },
               {
                  id: '666afba779e2632c96436629',
                  name: 'SMOKEY LOMA..............................................$016',
                  details: 'Mezcal, fresh grapefruit juice, agave, soda'
               },
               {
                  id: '666afbaf540aaca82cb2af7a',
                  name: 'PURPLE RAIN...................................................$14',
                  details: 'Empress Indigo gin, elderflower liqueur, lavender essence, fresh lemon juice, eggwhite'
               },
               {
                  id: '666afbb7900bc814934a1fd0',
                  name: 'PEACH TEA.......................................................$16',
                  details: 'D\'usse, peach puree, house made tea'
               }
            ],
            images: {
               left: 'https://s3-alpha-sig.figma.com/img/08f1/ba92/09e436820849a421ec0b1fe5126bf9b5?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XquJcuYJ0IG65qkpcfnTymLi5hS5SBxPYVAD3IxiPDqUlTAJPtwgUFU9tlen-6Imu~qSq50cfai2qG52Jiw0N7mDbY0F54hP6eGuSiyE3A~9lQEU4n7RCZm0KZEiW9iJ9zgYTrYTQeglUy9iwVSXqdYqIxzPed1~NNki0MND5VShq2dYmBzcUS~jPT3GLZZ5Zg6drA5D74~WFn6~ucbZ6dqKW210i29MuMHbT9ifixWfqvuLDDtMTz0ilnEvD2KDyyfmoLOMEHQQ7m1b~y1vUegK0PBuD0rl8X3mXsXAE44qFftW4MUhFLwUzQc2RMAzkKOpandUqM1U~TEb6ej66A__',
               right: 'https://s3-alpha-sig.figma.com/img/6b91/b238/f07a69022d4c64e313237eadaceb997f?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HnMqyELfZ9bRBWbp8maQjqTbSkImjJyii2IT8BAwJondswpkaO4CxByHrP3HiZoaTs~yXHbmvJJ8tuOqKyWTErhEcL3RHBuN4FJOdhf37ZFjm61ryCjSWRhd4U5vXhXYn~2d5nUnWo-AYUbjzw8qreiforcM-4cQCqkR81GiUdBcitRe4f~~kgaOCXNjdOvGpyxKAzvnWiyxNemw3NTrPfv64hm5e2-V6XgzJZNE6pQpXHyb~w1opNbEVAePP4-xWbuBIOL3Mghh8qkh4cdGgfroBZna8I8a-QsmwAtk8R15C1Xax9xWzqQEu3WQMFDX8sFHEgT~r2DoYeVJ6k38eQ__'
            }
         }
      },
      {
         card: {

            id: '666afbbfa5ed6eb91e08694d',
            type: 'smoke',
            title: 'HOOKAH FLAVORS',
            data: [{
                  id: '666afbc65bbdcc330c56ff72',
                  name: 'ORANGE MINT',
               },
               {
                  id: '666afbcdc701a65ad7e58af0',
                  name: 'BLUE MIST',
               },
               {
                  id: '666afbd77f08447deeffe4db',
                  name: 'MIGHTY FREEZE',
               },
               {
                  id: '666afbdf704c24588bb826d5',
                  name: 'LUV 66',
               },
               {
                  id: '666afbe7f69de82b87ef8e03',
                  name: 'PEACH',
               },
               {
                  id: '666afbef8d68fe92a7699841',
                  name: 'WATERMELON',
               },
            ],
            icon: {
               url: 'https://res.cloudinary.com/dxv2tmvfw/image/upload/v1718286483/machine_test_deepnet/Vector_bs4b6d.png'
            },
            images: {
              baseImage: 'https://s3-alpha-sig.figma.com/img/53f3/e533/f37f4a258b3eea846bf145fb95b71dfd?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QbiNN3J6q22e-QxXHrrSpemlv-MrZFt3O5q2whAU0tyEUehYPZZSR9usKvrtTz3KJ3aUJJ7cIyceJaIc7oQgGib5cniVFTVeFWUXU2y3t9uMl2MeVpkHrzolyzQLCd9HhwBjAJ7uRFywhwGBQizqIBlMdhvkJXaDFTVL0TiJGmb6sOHvTiSsCORCbhPPy--acNORSNk2e4yDsdMH8-VS5m3SvVqKgWxlijsnlN14aGJMXqaM5NdhNCGFpSUufJXgcmNY3Ok7xew~c3x-62YUudl5zy0xjMMxBfFlFCNL6PzLJvSIkqJONS8OWs~pb6TX8qRmrC4OuiE-sli3N7czjg__',
           
            }
         }
      },
      {
         card: {

            id: '666afbf7e81834902a19be8b',
            type: 'order-button',
            title: 'ORDER ONLINE',
            images: {
              baseImage: 'https://s3-alpha-sig.figma.com/img/53f3/e533/f37f4a258b3eea846bf145fb95b71dfd?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QbiNN3J6q22e-QxXHrrSpemlv-MrZFt3O5q2whAU0tyEUehYPZZSR9usKvrtTz3KJ3aUJJ7cIyceJaIc7oQgGib5cniVFTVeFWUXU2y3t9uMl2MeVpkHrzolyzQLCd9HhwBjAJ7uRFywhwGBQizqIBlMdhvkJXaDFTVL0TiJGmb6sOHvTiSsCORCbhPPy--acNORSNk2e4yDsdMH8-VS5m3SvVqKgWxlijsnlN14aGJMXqaM5NdhNCGFpSUufJXgcmNY3Ok7xew~c3x-62YUudl5zy0xjMMxBfFlFCNL6PzLJvSIkqJONS8OWs~pb6TX8qRmrC4OuiE-sli3N7czjg__',
           
            }
         }
      },
      {
         card: {

            id: '666afc1c71d6912d5012ead5',
            type: 'order-info',
            data: [{
                  id: '666afc262b7169cb2da748c1',
                  text: 'Food may not be refunded. If your food was made incorrectly we will remake it for you.'

               },
               {
                  id: '666afc31f8d43327f5fbf82f',
                  text: '18% service charge will be added to all checks over $100.'

               },
               {
                  id: '666afc37dbe96d78ade42ada',
                  text: 'Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness'

               },
            ],
            images: {
              baseImage: 'https://s3-alpha-sig.figma.com/img/53f3/e533/f37f4a258b3eea846bf145fb95b71dfd?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QbiNN3J6q22e-QxXHrrSpemlv-MrZFt3O5q2whAU0tyEUehYPZZSR9usKvrtTz3KJ3aUJJ7cIyceJaIc7oQgGib5cniVFTVeFWUXU2y3t9uMl2MeVpkHrzolyzQLCd9HhwBjAJ7uRFywhwGBQizqIBlMdhvkJXaDFTVL0TiJGmb6sOHvTiSsCORCbhPPy--acNORSNk2e4yDsdMH8-VS5m3SvVqKgWxlijsnlN14aGJMXqaM5NdhNCGFpSUufJXgcmNY3Ok7xew~c3x-62YUudl5zy0xjMMxBfFlFCNL6PzLJvSIkqJONS8OWs~pb6TX8qRmrC4OuiE-sli3N7czjg__',
           
            }
         }
      },
      {
         card: {

            id: '666afc47e55b32352173fac1',
            type: 'footer-contact',
         
            data: [{
                  id: '666afc4dab2544e9e81f1456',
                  text: 'CONNECT WITH US',
                  style:'flex order-2 xl:order-1',
                  options: [{
                        id: '666afc549b96d8405524c34b',
                        icon: 'https://res.cloudinary.com/dxv2tmvfw/image/upload/v1718287704/machine_test_deepnet/telephone_aa2xip.png',
                        text: '+1 470-788-8255'
                     },
                     {
                        id: '666afc63530fa84b67016b3e',
                        icon: 'https://res.cloudinary.com/dxv2tmvfw/image/upload/v1718287767/machine_test_deepnet/email_pbmyzr.png',
                        text: 'email@42barandgrill.com'
                     },
                  ]

               },
               {
                  id: '666afc6ef9fda89168749980',
                  text: 'DEEP NET SOFT',
                  style:'flex order-1 xl:order-2',
                  additionalStyles: [
                    {
                       id: 11,
                      text: 'DEEP',
                      style: { color: '#0796EF' }
                    },
                    {
                       id:11.1,
                      text: ' NET ',
                      style: { color: '#ffffff' }
                    },
                    {
                       id:11.2,
                      text: 'SOFT',
                      style: { color: '#857878' }
                    }
                  ],
                  images: {
                     url: 'https://s3-alpha-sig.figma.com/img/22e3/1e48/6860545013e0a63ba8cb7e94004971f7?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mtvWfUezNjQpG5v2VUWL8R~8Ra6Bj7Gn6GqSNo0lt5J0zmaiIs0OecojuSdMJHAwc0zSkQJCmx2UgzZXcq21WoPSM-9DH5eBROFlrMtdaC1eBseBC6fGNfnA8s8YX2DzWQwMG7-1eRFlcg9XMPsJCvbj8u-rgwHNJwEUCFWHAA7jtL1xzBvK2GiBU~ZPy0NRBviL3Thiye4zD1~Wq~QL~k8gJOpi5K5R4azJOJwWDvl1200Vtbj92QZxWxLv4lny5xKqxLkYyKy-zEIpOFZfTPmWHgyeeE~9VBiaSDU-UcVp2fL5J8A4vHTVbJ6PhaSpGaUXCK8tiISbTt3COw1Lnw__',
                     altText:'logo'
                  
                    },
                  follow: [{
                        id: '666afc772bf57f8693fab3c2',
                        icon: 'https://res.cloudinary.com/dxv2tmvfw/image/upload/v1718287727/machine_test_deepnet/facebook_aoivbk.png',
                        link: 'https://www.facebook.com/DeepNetSupport/'
                     },
                     {
                        id: '666afc7e8908b3cd7ae84767',
                        icon: 'https://res.cloudinary.com/dxv2tmvfw/image/upload/v1718287891/machine_test_deepnet/twitter_qthxkt.png',
                        link: '#'
                     },
                     {
                        id: '666afc86bdcd2fb8ff1705c8',
                        icon: 'https://res.cloudinary.com/dxv2tmvfw/image/upload/v1718287936/machine_test_deepnet/youtube_coonh6.png',
                        link: '#'
                     },
                     {
                        id: '666afc8aad2dd0f3d6a9a05a',
                        icon: 'https://res.cloudinary.com/dxv2tmvfw/image/upload/v1718287949/machine_test_deepnet/instagram_qwvitp.png',
                        link: '#'
                     },


                  ]

               },
               {
                  id: '666afc95c8af91aac0428f3a',
                  text: 'FIND US',
                  style:'flex order-3 ',
                  options: [{
                     id: '666afc9df24838cf1969cb27',
                     icon: 'https://res.cloudinary.com/dxv2tmvfw/image/upload/v1718287818/machine_test_deepnet/location_lxxyvq.png',
                     text: '327 Memorial Dr SE, Atlanta, GA 30312, USA'
                  }]

               },
            ]
         }
      },
      {
        card:{
           id: '666afc95c8af91aac0428f3t',
           type:'footer-credits',
            card: [{
                  id: '666afcb1f781a2daadb86035',
                  title: '© 2024 42 Bar & Grill. Developed by Deepnetsoft Solutions.'
   
               },
               {
                  id: '666afcba1a11e7fc194e13dc',
                  title: 'Terms & Conditions'
   
               },
               {
                  id: '666afcc19999c5dad99a8d31',
                  title: 'Privacy Policy'
   
               },
            ]
         }
      }

   ]
}
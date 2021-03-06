// data 및 필요 function
let data = [
    [
        {
            name: 'coffee',
            template: {
                KR: 'COFFEE',
                EN: 'COFFEE'
            },
            options: {
                title: {
                    subTitle: {
                        hotIceType: 'hotAndIce'
                    }
                },
                menuItem: {
                    price: {
                        
                    },
                    isHotText: {
                        KR: '인기',
                        EN: 'POP'
                    }
                }
            },
            items: [{
                name: {
                    KR: '에스프레소',
                    EN: 'Espresso'
                },
                prices: [
                    { name: 'hot', price: 2500},
                    { name: 'ice', price: 0}
                ]
            }, {
                name: {
                    KR: '아메리카노',
                    EN: 'Americano'
                },
                prices: [
                    { name: 'hot', price: 2900},
                    { name: 'ice', price: 3400 }
                ]
            }, {
                name: {
                    KR: '아메리카노 (S)',
                    EN: 'Americano (S)'
                },
                subText: {
                    KR: '<pre style="font-family: LotteMartHappy;margin: 0px; padding-top: 8px">   (take-out only)</pre>',
                    EN: '<pre style="font-family: LotteMartHappy;margin: 0px; padding-top: 8px">   (take-out only)</pre>'
                },
                prices: [
                    { name: 'hot', price: 1900, eventPrice: 1900 },
                    { name: 'ice', price: 2200, eventPrice: 2200 }
                ],
                isEvent: true
            }, {
                name: {
                    KR: '착한 아아 (1L)',
                    EN: 'Charming Ice-Ame (1L)'
                },
                prices: [
                    { name: 'hot', price: 0, eventPrice: 0},
                    { name: 'ice', price: 3500, eventPrice: 3000}
                ], 
                subText: {
                    KR: '<pre style="font-family: LotteMartHappy;margin: 0px; padding-top: 8px">   (take-out only)</pre>',
                    EN: '<pre style="font-family: LotteMartHappy;margin: 0px; padding-top: 8px">   (take-out only)</pre>'
                }
            }, {
                name: {
                    KR: '콜드브루 아메리카노',
                    EN: 'cold brew americano'
                },
                prices: [
                    { name: 'hot', price: 0},
                    { name: 'ice', price: 3900}
                ]
            }, {
                name: {
                    KR: '카페라떼',
                    EN: 'Cafe Latte'
                },
                prices: [
                    { name: 'hot', price: 3400},
                    { name: 'ice', price: 3900}
                ]
            }, {
                name: {
                    KR: '플랫화이트',
                    EN: 'Flat White'
                },
                prices: [
                    { name: 'hot', price: 3400},
                    { name: 'ice', price: 3900}
                ]
            }, {
                name: {
                    KR: '달고나라떼',
                    EN: 'Dalgona Latte'
                },
                prices: [
                    { name: 'hot', price: 4400 },
                    { name: 'ice', price: 4900 }
                ]
            }, {
                name: {
                    KR: '바닐라 / 헤이즐넛 라떼',
                    EN: 'Vanilla / Hazelnut Latte'
                },
                prices: [
                    { name: 'hot', price: 3700 },
                    { name: 'ice', price: 4200 }
                ]
            }, {
                name: {
                    KR: '돌체(연유) 라떼',
                    EN: 'Dolce Latte',
                },
                prices: [
                    { name: 'hot', price: 3700},
                    { name: 'ice', price: 4200}
                ],
                isHot: true
            }, {
                name: {
                    KR: '카푸치노',
                    EN: 'Cappuccino'
                },
                prices: [
                    { name: 'hot', price: 3900 },
                    { name: 'ice', price: 4400 }
                ]
            }, {
                name: {
                    KR: '카라멜마끼아또',
                    EN: 'Caramel Macchiato'
                },
                prices: [
                    { name: 'hot', price: 3900 },
                    { name: 'ice', price: 4400 }
                ]
            }, {
                name: {
                    KR: '카페모카 / 화이트초콜릿모카',
                    EN: '<div style="font-size: 16px; width: 280px;">White Chocolate Mocha / Cafe Mocha</div>'
                },
                prices: [
                    { name: 'hot', price: 3900 },
                    { name: 'ice', price: 4400 }
                ]
            }, {
                name: {
                    KR: '아인슈패너',
                    EN: 'Einspänner'
                },
                prices: [
                    { name: 'hot', price: 4400 },
                    { name: 'ice', price: 4400 }
                ]
            }, {
                name: {
                    KR: '자몽 비앙코',
                    EN: 'Grapefruit vianko'
                },
                prices: [
                    { name: 'hot', price: 5000, eventPrice: 5000 },
                    { name: 'ice', price: 5500, eventPrice: 5500 }
                ],
                isEvent: true
            }, {
                name: {
                    KR: '오렌지 비앙코',
                    EN: 'Orange Vianko'
                },
                prices: [
                    { name: 'hot', price: 5000, eventPrice: 5000},
                    { name: 'ice', price: 5500, eventPrice: 5500}
                ],
                isEvent: true
            }, {
                name: {
                    KR: '아포가토',
                    EN: 'Affogato'
                },
                prices: [
                    { name: 'hot', price: 0 },
                    { name: 'ice', price: 5500 }
                ]
            }, {
                name: {
                    KR: '핸드드립 커피',
                    EN: 'Brewed Coffee'
                },
                prices: [
                    { name: 'hot', price: 5000, eventPrice: 4500},
                    { name: 'ice', price: 5000, eventPrice: 4500}
                ],
                isEvent: true
            }]
        },
        {
            name: 'traTea',
            template: {
                KR: '전통차',
                EN: '<div style="width: 350px;">Traditional Tea</div>'
            },
            options: {
                menuItem: {
                    isHotText: {
                        KR: '인기',
                        EN: 'POP'
                    }
                }
            },
            items: [{
                    name: {
                        KR: '<div style="font-size: 19px; width: 280px">유자차 / 레몬차 / 자몽차 / 청귤차 / 라임차</div>',
                        EN: '<div style="font-size: 19px; width: 280px">Yuja / Lemon / Grapefruit Tea / Green Tangerine / Lime Tea</div>'
                    },
                    prices: [
                        { name: 'hot', price: 4300},
                        { name: 'ice', price: 4800}
                    ]
                }, {
                    name: {
                        KR: '<div style="font-size: 19px; width: 280px">꿀대추차 / 꿀모과차 / 꿀생강차</div>',
                        EN: '<div style="font-size: 19px; width: 280px">Honey Jujube / Honey quince / Honey ginger</div>'
                    },
                    prices: [
                        { name: 'hot', price: 4300},
                        { name: 'ice', price: 4800}
                    ]
                }, {
                    name: {
                        KR: '석류차',
                        EN: 'Pomegranate Tea'
                    },
                    prices: [
                        {name: 'hot', price: 4300},
                        {name: 'ice', price: 4800}
                    ]
                }, {
                    name: {
                        KR: '제주한라봉차',
                        EN: 'Jeju Hallabong Tea'
                    },
                    prices: [
                        { name: 'hot', price: 4300},
                        { name: 'ice', price: 4800}
                    ],
                    isHot: true
                }, {
                    name: {
                        KR: '견과율무차',
                        EN: 'Nuts Adlay Tea'
                    },
                    prices: [
                        { name: 'hot', price: 3900},
                        { name: 'ice', price: 4400}
                    ] 
                }, {
                    name: {
                        KR: '속삭임 국화차',
                        EN: 'Chrysanthemum tea'
                    },
                    prices: {
                        hot: 5000,
                        ice: 5500
                    }
                }, {
                    name: {
                        KR: '쌍화대추차',
                        EN: 'Ssanghwa Jujube Tea'
                },
                    prices: {
                        hot: 6000
                    },
                    prices: [
                        { name: 'hot', price: 6000 },
                        { name: 'ice', price: 0 }
                    ],
                }
            ]
        }
    ], [
        {
            name: 'latte',
            template: {
                KR: '<div style="font-size: 38px; width: 375px">LATTE</div>',
                EN: '<div style="font-size: 38px; width: 375px">LATTE</div>'
            },
            options: {
                title: {
                    subTitle: {
                        hotIceType: 'hotAndIce'
                    }
                },
                menuItem: {
                    price: {
                        
                    },
                    isHotText: {
                        KR: '인기',
                        EN: 'POP'
                    }
                }
            },
            items: [{
                name: {
                    KR: '딸기 라떼',
                    EN: 'Strawberry Latte'
                },
                prices: [
                    { name: 'hot', price: 0},
                    { name: 'ice', price: 4500}
                ],
                isHot: true
            }, {
                name: {
                    KR: '블루베리 라떼',
                    EN: 'Blueberrie Latte'
                },
                prices: [
                    { name: 'hot', price: 0},
                    { name: 'ice', price: 4500}
                ]
            }, {
                name: {
                    KR: '리얼 바나나 라떼',
                    EN: 'Real Banana Latte'
                },
                prices: [
                    { name: 'hot', price: 0},
                    { name: 'ice', price: 4500}
                ]
            }, {
                name: {
                    KR: '리얼망고 라떼',
                    EN: 'Real Mango Latte'
                },
                prices: [
                    {name: 'hot', price: 0},
                    {name: 'ice', price: 4500}
                ]
            }, {
                name: {
                    KR: '초코 / 화이트 초코 / 민트초코 라떼',
                    EN: 'Choco / white chocolate / Mint-Choco Latte'
                },
                prices: [
                    { name: 'hot', price: 3900},
                    { name: 'ice', price: 4400}
                ],
            }, {
                name: {
                    KR: '밀크카라멜라떼',
                    EN: 'Milk Caramel Latte'
                },
                prices: {
                    hot: 3400,
                    ice: 3900
                }
            }, {
                name: {
                    KR: '<div style="font-size: 20px; width: 330px;">말차 / 오곡 / 토피넛 라떼</div>',
                    EN: '<div style="font-size: 19px; width: 330px;">Green Tea / Grain / ToffeeNut Latte</div>'
                },
                prices: [
                    { name: 'hot', price: 3900},
                    { name: 'ice', price: 4400}
                ]
                // subItems: [{ 
                //     name: {
                //         KR: '초코', EN: 'Chocolate'
                //     }, 
                //     except: {
                //         prepared: true,
                //         event: true,
                //         hot: true
                //     }
                // }, {
                //     name: {
                //         KR: '민트초코', EN: 'Mint-Choco'
                //     }, 
                //     except: {
                //         prepared: true,
                //     }
                // }],
                // subText: {
                //     KR: {
                //         items: [
                //             {'초코': true},
                //             {'민트초코': true},
                //             {'말차': true},
                //             {'오곡': true},
                //         ],
                //         slicer: ' / '
                //     },
                //     EN: {
                //         items: [
                //             {'Chocolate': true},
                //             {'Mint-choco': true},
                //             {'Green Tea': true},
                //             {'Grain': true},
                //         ],
                //         slicer: ' / ',
                //         style: 'style="width: 400px; font-size: 16px;"'
                //     }
                // }
            }, {
                name: {
                    KR: '견과율무 라떼',
                    EN: 'Nut Ablay Latte'
                },
                prices: {
                    hot: 4400,
                    ice: 4900
                }
            }, {
                name: {
                    KR: '군고구마 라떼',
                    EN: '<div style="width: 400px">Roasted Sweet Potato Latte</div>'
                },
                prices: {
                    hot: 3900,
                    ice: 4400
                },
            }, {
                name: {
                    KR: '바밤바 라떼',
                    EN: 'Babamba Latte'
                },
                prices: {
                    hot: 3900,
                    ice: 4400 
                },
            }, {
                name: {
                    KR: '흑임자 라떼',
                    EN: 'Black Sesame Latte'
                },
                prices: {
                    hot: 4400,
                    ice: 4900 
                }
            }, {
                name: {
                    KR: '인절미 라떼',
                    EN: 'Injeolmi Latte'
                },
                prices: {
                    hot: 4400,
                    ice: 4900
                }
            }, {
                name: {
                    KR: '스페셜 복숭아 라떼',
                    EN: 'Special Peach Latte'
                },
                prices: [
                    { name: 'hot', price: 0, eventPrice: 0},
                    { name: 'ice', price: 5000, eventPrice: 5000}
                ],
                isEvent: true
            }, {
                name: {
                    KR: '돼지바 라떼',
                    EN: 'Pig-bar Latte'
                },
                prices: {
                    ice: 5500
                },
                isHot: true
            }, {
                name: {
                    KR: '밀크티',
                    EN: 'Milk Tea'
                },
                prices: [
                    { name: 'hot', price: 5000},
                    { name: 'ice', price: 5500}
            ]
            }, {
                name: {
                    KR: '로투스 라떼',
                    EN: 'Lotus Biscoff Latte'
                },
                prices: {
                    hot: 5000,
                    ice: 5500
                }
            }, {
                name: {
                    KR: '달고나 밀크',
                    EN: 'Dalgona Milk'
                },
                prices: {
                    hot: 3900,
                    ice: 4400
                }
            }]
        }, {
            name: 'tea',
            template: {
                KR: '<div style="font-size: 38px; width: 375px">TEA</div>',
                EN: '<div style="font-size: 38px; width: 375px">TEA</div>'
            },
            options: {
                menuItem: {
                    isHotText: {
                        KR: '인기',
                        EN: 'POP'
                    }
                }
            },
            items: [{
                name: {
                    KR: '허브티',
                    EN: 'Herbal Tea'
                },
                prices: [
                    { name: 'hot', price: 3900},
                    { name: 'ice', price: 4400}
                ],
                subText: {
                    KR: {
                        items: [
                            {'얼그레이': true},
                            {'카모마일바닐라': true},
                            {'카모마일 레몬 글라스': true},
                            {'히비스커스 로즈힙': true},
                            {'레몬진저': true},
                            {'페퍼민트 레몬': true},
                            {'스트로베리': true}
                        ],
                        slicer: ' / ',
                        style: 'style="font-size: 18px; width: 300px;"'
                    },
                    EN: {
                        items: [
                            {'Earl Gray': true},
                            {'Chamomile Vanilla': true},
                            {'Chamomile Lemon Glass': true},
                            {'Rose Hip & Cherry': true},
                            {'Lemon Ginger': true},
                            {'Peppermint Lemon': true},
                            {'strawberry': true}
                        ],
                        slicer: ' / ',
                        style: 'style="font-size: 16px; width: 330px;"'

                    }
                }
            }, {
                name: {
                    KR: '리얼 아이스티',
                    EN: 'Real Ice Tea'
                },
                prices: {
                    ice: 4500
                },
                subText: {
                    KR: {
                        items: [
                            {'레몬': true},
                            {'블루베리': true},
                            {'복숭아': true},
                            {'트로피칼': true},
                            {'석류': true},
                        ],
                        slicer: ' / ',
                        style: 'style="width: 330px;"'
                    },
                    EN: {
                        items: [
                            {'Lemon': true},
                            {'Blueberry': true},
                            {'Peach': true},
                            {'Tropical': true},
                            {'Pomegranate': true},
                        ],
                        slicer: ' / ',
                        style: 'style="width: 330px;"'
                    }
                }
            }]
        }, {
            name: 'bubbletea',
            template: {
                KR: '버블티<span style="font-size: 12px"> - 펄선택 (화이트, 블랙)</span>',
                EN: '<div style="width: 450px">Bubble Tea<span style="font-size: 12px"> - Select Pearls (White, Black)</span></div>'
            },
            options: {
                menuItem: {
                    isHotText: {
                        KR: '인기',
                        EN: 'POP'
                    }
                }
            },
            items: [{
                name: {
                    KR: '얼그레이 버블티',
                    EN: 'Herbal Tea'
                },
                prices: [
                    {name: 'hot', price: 0},
                    {name: 'ice', price: 5500}
                ]
            }, {
                name: {
                    KR: '흑당 버블티',
                    EN: 'Brown Sugar Bubble Tea'
                },
                prices: {
                    ice: 5300
                },
                isHot: true
            }]
        }
    ], [
        {
            name: 'ade',
            template: {
                KR: 'ADE',
                EN: 'ADE'
            },
            options: {
                title: {
                    subTitle: {
                        hotIceType: 'ice'
                    }
                },
                menuItem: {
                    isHotText: {
                        KR: '인기',
                        EN: 'POP'
                    },
                    isEventText: {
                        KR: '한정',
                        EN: 'Limited'
                    }
                }
            },
            items: [{
                name: {
                    KR: '에이드',
                    EN: 'Ade', 
                },
                prices: [{
                    name: 'ice',
                    price: 5000
                }],
                subText: {
                    KR: {
                        items: [
                            {레몬: true},
                            {유자레몬: true},
                            {자몽: true},
                            {자두: true},
                            {청귤: true},
                            {청포도: true},
                            {복숭아: true},
                            {파인애플: true},
                            {키위: true},
                            {패션푸룻: true},
                            {블루베리: true},
                            {라즈베리: true},
                            {라임: true},
                            {망고: true},
                            {석류: true}
                        ],
                        slicer: ' / ',
                    },
                    EN: {
                        items: [
                            {Lemon: true},
                            {'Yuja Lemon': true},
                            {Grapefruit: true},
                            {Plum: true},
                            {'Green Tangerine': true},
                            {'Green Grape': true},
                            {'Peach': true},
                            {'Pineapple': true},
                            {Kiwi: true},
                            {'Passion Fruit': true},
                            {Blueberries: true},
                            {Raspberry: true},
                            {Lime: true},
                            {Mango: true},
                            {Pomegranate: true}
                        ],
                        slicer: ' / ',
                        style: 'style="font-size: 18px;"'
                    }
                },
                isHot: true
            }, {
                name: {
                    KR: '제주한라봉에이드',
                    EN: 'Jeju Hallabong Ade'
                },
                prices: {
                    ice: 5000
                },
            }, {
                name: {
                    KR: '모히또',
                    EN: 'Mojito'
                },
                prices: {
                    ice: 5500
                },
            }, {
                name: {
                    KR: '뱅쇼',
                    EN: 'Vin Chaud'
                },
                prices: {
                    ice: 5500
                },
                isHot: true
            },{
                name: {
                    KR: '에너지뱅',
                    EN: 'Energy Bang'
                },
                prices: {
                    ice: 6900
                }
            }, {
                name: {
                    KR: '커먼유니크 에이드',
                    EN: 'Common Mallow Ade'
                },
                prices: {
                    ice: 7000
                }
            }]
        }, {
            name: 'shakeAndSmoo',
            template: {
                KR: '<div style="font-size: 36px; width: 375px">SHAKE & SMOOTHIE</div>',
                EN: '<div style="font-size: 30px; width: 375px">SHAKE & SMOOTHIE</div>'
            },
            options: {
                menuItem: {
                    isHotText: {
                        KR: '인기',
                        EN: 'POP'
                    }
                }
            },
            items: [{
                name: {
                    KR: '밀크 쉐이크',
                    EN: 'Milk Shake'
                },
                prices: {
                    ice: 4500
                }
            }, {
                name: {
                    KR: '오레오 쉐이크',
                    EN: 'Oreo Shake'
                },
                prices: {
                    ice: 5000
                }
            }, {
                name: {
                    KR: '커피 쉐이크',
                    EN: 'Coffee Shake'
                },
                prices: {
                    ice: 5500
                }
            }, {
                name: {
                    KR: '로투스 쉐이크',
                    EN: 'Lotus Biscoff Shake'
                },
                prices: {
                    ice: 5500
                }
            }, {
                name: {
                    KR: '바밤바 쉐이크',
                    EN: 'Babamba Shake'
                },
                prices: {
                    ice: 5500
                }
            }, {
                name: {
                    KR: '리얼바나나쉐이크',
                    EN: 'Real Banana Shake'
                },
                prices: {
                    ice: 5800
                }
            }, {
                name: {
                    KR: '돼지바 쉐이크',
                    EN: 'Pig-bar Shake'
                },
                prices: {
                    ice: 5800
                },
                isHot: true
            }, {
                name: {
                    KR: '초코/민트초코 프라페',
                    EN: 'Choco/Mint-Choco Frappe'
                },
                prices: {
                    ice: 5800
                }
            }, {
                name: {
                    KR: '딸기 치즈케익 프라페',
                    EN: 'Strawberry Cheesecake Frappe'
                },
                prices: {
                    ice: 5900
                }
            }, {
                name: {
                    KR: '석류 스무디',
                    EN: 'Pomegranate Smoothie'
                },
                prices: {
                    ice: 5000
                }
            }, {
                name: {
                KR: '군고구마 스무디',
                EN: 'Roasted Sweet Potato Smoothie'
                },
                prices: {
                    ice: 5500
                }
            }, {
                name: {
                    KR: '요거트 스무디',
                    EN: 'Yogurt Smoothie'
                },
                prices: {
                    ice: 5800
                },
                subText: {
                    KR: {
                        items: [
                            {플레인: true},
                            {딸기: true},
                            {라즈베리: true},
                            {블루베리: true},
                            {망고: true},
                            {복숭아: true},
                            {청귤: true},
                            {청포도: true},
                            {레몬 : true},
                            {제주한라봉: true},
                            {자두: true}
                        ],
                        slicer: ' / ',
                        style: 'style="width: 340px;"'
                    },
                    EN: {
                        items: [
                            {Plain: true},
                            {StrawBerry: true},
                            {Raspberry: true},
                            {Blueberry: true},
                            {Mango: true},
                            {Peach: true},
                            {"Jeju Hallabong": true},
                            {Plum: true}
                        ],
                        slicer: ' / ',
                        style: 'style="font-size: 20px;"'
                    }
                },
                isHot: true
            }, {
                name: {
                    KR: '팥빙수 쉐이크',
                    EN: 'red bean shaved ice shake'
                },
                prices: {
                    ice: 5800
                }
            }, {
                name: {
                    KR: '스페셜 쉐이크',
                    EN: 'special shake'
                },
                prices: {
                    ice: 6000
                },
            subText: {
                KR: {
                    items: [
                        {'녹차 빙수': true},
                        {'인절미 빙수': true}
                    ],
                    slicer:' / '
                }
            }
            }]
        },
    ], [
        {
            name: 'juice',
            template: {
                KR: 'JUICE',
                EN: 'JUICE'
            },
            options: {
                title: {
                    subTitle: {
                        hotIceType: 'ice'
                    }
                },
                menuItem: {
                    isHotText: {
                        KR: '인기',
                        EN: 'POP'
                    }
                }
            },
            items: [{
                name: {
                    KR: '수박쥬스(시즌메뉴)',
                    EN: 'Watermelon Juice'
                },
                prices: {
                    ice: 5000
                },
                isHot: true
            }, {
                name: {
                    KR: '땡모반{시즌메뉴)',
                },
                prices: {
                    ice: 6000
                }
            }, {
                name: {
                    KR: '과일쥬스',
                    EN: 'Fruit Juice'
                },
                prices: {
                    ice: 5500
                },
                subText: {
                    KR: {
                        items: [
                            {망고: true},
                            {오렌지: true},
                            {자몽: true},
                            {복숭아: true},
                            {홍시: true},
                            {파인애플: true},
                            {키위: true}
                        ],
                        slicer: ' / ',
                    },
                    EN: {
                        items: [
                            {mango: true},
                            {orange: true},
                            {grapefruit: true},
                            {peach: true},
                            {hongsi: true},
                            {pineapple: true},
                            {kiwi: true}
                        ],
                        slicer: ' / ',
                    }
                }
            }, {
                name: {
                    KR: '리얼베리쥬스',
                    EN: 'Real Berry Juice'
                },
                prices: {
                    ice: 5000
                },
                subText: {
                    KR: {
                        items: [
                            {딸기: true},
                            {블루베리: true},
                            {트리플베리: true}
                        ],
                        slicer: ' / ',
                    },
                    EN: {
                        items: [
                            {strawberry: true},
                            {blueberries: true},
                            {tripleberry: true}
                        ],
                        slicer: ' / ',
                    }
                }
            }, {
                name: {
                    KR: '딸기바나나쥬스',
                    EN: 'Strawberry&BananaJuice'
                },
                prices: {
                    ice: 5500
                }
            }]
                }, {
            name: 'shavedIce',
            template: {
                KR: '눈꽃빙수',
                EN: 'ShavedIce'
            },
            options: {
                menuItem: {
                    isHotText: {
                        KR: '인기',
                        EN: 'POP'
                    }
                }
            },
            items: [{
                name: {
                    KR: '찹쌀떡 / 인절미 / 치즈 빙수',
                    EN: '<div style="width: 370px; font-size: 17px;">Glutnious Rice Cake / Injeolmi / Cheese</div>'
                },
                prices: {
                    ice: 8900
                }
            }, {
                name: {
                    KR: '망고치즈큐브 빙수',
                    EN: 'Mango Cheese-cube'
                },
                prices: {
                    ice: 10900
                }
            }],
        }, {
        //     name: 'virginCocktail',
        //     template: {
        //         KR: '<div style="width: 375px">Virgin Cocktail</div>',
        //         EN: '<div style="width: 375px">Virgin Cocktail</div>'
        //     },
        //     items: [{
        //             name: {
        //                 KR: '피나콜라다',
        //                 EN: 'Piña Colada'
        //             },
        //             prices: {
        //                 ice: 7000
        //             }
        //         }, {
        //             name: {
        //                 KR: '파인애플 썬샤인',
        //                 EN: 'Pineapple Sunshine'
        //             },
        //             prices: {
        //                 ice: 7000
        //             }
        //         }, {
        //             name: {
        //                 KR: '샹그리아',
        //                 EN: 'Sangria'
        //             },
        //             prices: {
        //                 ice: 7000
        //             }
        //         }
        //     ]
        // }, {
            name: 'brunch',
            template: {
                KR: 'Brunch',
                EN: 'Brunch'
            },
            options: {
                menuItem: {
                    isHotText: {
                        KR: '인기',
                        En: 'POP'
                    }
                }
            },
            items: [
            //     {
            //     name: {
            //         KR: '고암길토스트',
            //         EN: 'GoamgilToast'
            //     },
            //     prices: [{
            //         name: 'meal',
            //         price: 1500,
            //         eventPrice: 1500
            //     }],
            //     isEvent: true
            // }, 
            {
                name: {
                    KR: '그릭요거트',
                    EN: 'Greek Yogurt'
                },
                prices: [{
                    name: 'meal',
                    price: 5000
                }],
                subText: {
                    KR: {
                        items: [
                            {블루베리견과: true},
                            {바나나견과: true},
                            {망고견과: true}
                        ], 
                        slicer: ' / ',
                        style: 'style="font-size: 23px;"'
                    },
                    EN: {
                        items: [
                            {'Blueberry Nuts': true},
                            {'Banana Nuts': true},
                            {'Mango Nuts': true}
                        ],
                        slicer: ' / ',
                    }
                }
            },{
                name: {
                    KR: '샌드위치',
                    EN: 'Sandwich'
                },
                prices: [{ name: 'meal', price: 2900 }],
            }, {
                name: {
                    KR: '베이글(플레인/어니언)',
                    EN: 'bagel(Plain/Onion'
                },
                prices: {
                    meal: 3500,
                },
            }, {
                name: {
                    KR: '치즈베이글',
                    EN: 'CheeseBagel'
                },
                prices: [{
                    name: 'meal',
                    price: 3800
                }],
            }, {
            name: {
                KR: '포켓치즈토스트',
                EN: 'Pocket Cheese Toast'
            },
            prices: [{
                name: 'meal',
                price: 3900
            }],
        }, {
            name: {
                KR: '크로크무슈',
                EN: 'Crokmush'
            },
            prices: [{
                name: 'meal',
                price: 4800
            }],
            isHot: true
        }, 
        // {
        //     name: {
        //         KR: '시카고피자',
        //         EN: 'ChicagoPizza'
        //     },
        //         prices: [{
        //             name: 'meal',
        //             price: 6500,
        //         }],
        //     }, 
            {
                name: {
                    KR: '숭늉 누릉지',
                    EN: 'Sungnik Nurungji'
                },
                prices: [{
                    name: 'meal',
                    price: 4800
                }],
            }, {
                name: {
                    KR: '모둠감자튀김',
                    EN: 'specialFrench fries'
                },
                prices: [{
                    name: 'meal',
                    price: 8800
                }],
            }, {
                name: {
                    KR: '<div style="width: 300px;">샐러드 (리코타 치즈 / 케이준)</div>',
                    EN: 'Salad (Ricotta Cheese / Cajun)'
                },
                prices: [{
                    name: 'meal',
                    price: 8900
                }],
                isHot:true
            }, {
                name: {
                    KR: '불고기 덮밥(호주 척롤)',
                    EN: 'Bulgogi Rice Bowl'
                },
                prices: [{
                    name: 'meal',
                    price: 7900,
                }],
            },{
                name: {
                    KR: '햄야채 / 김치 볶음밥',
                    EN: 'Ham Vegetables / Kimchi Fried Rice'
                },
                prices: [{
                    name: 'meal',
                    price: 8900,
                }],
            }, {
                name: {
                    KR: '고암길떡볶이',
                    EN: 'Goamgil Tteokbokki'
                },
                prices: [{
                    name: 'meal',
                    price: 9900
                }]
            }
            // {
            //     name: {
            //         KR: '낙지 / 치킨데리야끼 볶음밥',
            //         EN: 'Ham Vegetable Fried'
            //     },
            //     prices: [{
            //         name: 'meal',
            //         price: 9400,
            //     }],
            // }
        ]
        }, 
        // {
        // name: 'brunchset',
        // template: {
        //     KR: '<div style="width: 450px; color: #ff8080">Brunch Set<span style="font-size: 14px"> (브런치+아메)</span></div>',
        //     EN: '<div style="width: 450px; color: #ff8080">Brunch Set<span style="font-size: 14px"> (brunch+Ame)</span></div>'
        // },
        // options: {
        //     menuItem: {
        //         isHotText: {
        //             KR: '인기',
        //             En: 'POP'
        //         },
        //         isPreparedText: {
        //             KR: 'Sold-out',
        //             EN: 'Sold-out'
        //         }
        //     }
        // },
        // items: [{
        //     name: {
        //         KR: '샌드위치세트',
        //         EN: 'SandwichSet'
        //     },
        //     prices: [{ name: 'set', price: 4900, eventPrice: 4900}],
        //     // isPrepared: true
        //     isEvent: true
        // }, {
        //     name: {
        //         KR: '<span style="font-size: 18px">새우 / 햄야채 / 김치 볶음밥 세트</span>',
        //         EN: '<span style="font-size: 18px">Shrimp / Ham Vegetables / Kimchi Fried Rice Set</span>'
        //     },
        //     prices: [{
        //         name: 'set',
        //         price: 10900,
        //         eventPrice: 10900
        //     }],
        //     isEvent: true
        // }, 
        // {
        //     name: {
        //         KR: '<span style="font-size: 18px">낙지 / 치킨데리야끼 볶음밥 세트</span>',
        //         EN: '<span style="font-size: 18px">Small Octopus / Chicken-deriyaki Fried Set</span>'
        //     },
        //     prices: [{
        //         name: 'set',
        //         price: 11400,
        //         eventPrice: 11400
        //     }],
        //     isEvent: true
        // },
    //     {
    //         name: {
    //             KR: '커피업그레이드',
    //             EN: 'CoffeeUpgrade'
    //         },
    //         prices: {
    //             set: 1000,
    //         }
    //     }, {
    //         name: {
    //             KR: '에이드로 변경',
    //             EN: 'Change to Ade'
    //         },
    //         prices: {
    //             set: 2000
    //         }
    //     }]
    // }
        // }, {
            //     name: 'extra',
            //     template: {
                //         KR: 'EXTRA',
        //         EN: 'EXTRA'
        //     },
        //     options: {
            //         menuItem: {
        //             isHotText: {
            //                 KR: '인기',
            //                 EN: 'POP'
        //             }
        //         }
        //     },
        //     items : [
            //         {
                //             name: {
        //                 KR: '샷추가',
        //                 EN: 'Add Shot'
        //             },
        //             prices: {
            //                 add: 500
        //             },
        //             subText: {
            //                 KR: {
                //                     items: [
                    //                         {에스프레소: true},
        //                         {바닐라: true},
        //                         {헤이즐넛: true},
        //                     ],
        //                     slicer: ' / '
        //                 },
        //                 EN: {
        //                   items: [
        //                         {Espresso: true},
        //                         {Vanilla: true},
        //                         {Hazelnut: true},
        //                     ],
        //                     slicer: ' / '
        //                 }
        //             },
        //         }, {
        //             name: {
        //                 KR: '우유추가',
        //                 EN: 'Add Milk'
        //             },
        //             prices: {
        //                 add: 500
        //             }
        //         }, {
        //             name: {
        //                 KR: '펄추가',
        //                 EN: 'Add Pearls'
        //             },
        //             prices: {
        //                 add: 500
        //             },
        //             subText: {
        //                 KR: {
        //                     items: [
        //                         {화이트: true},
        //                         {블랙: true}
        //                     ],
        //                     slicer: ' / '
        //                 },
        //                 EN: {
        //                     items: [
        //                         {White: true},
        //                         {Black: false}
        //                     ],
        //                     slicer: ' / '
        //                 }
        //             }
        //         }, {
        //             name: {
        //                 KR: '사이즈업',
        //                 EN: 'Size-up'
        //             },
        //             prices: {
        //                 add: 1000
        //             }
        //         }
        //     ]
        // }
    ]
]

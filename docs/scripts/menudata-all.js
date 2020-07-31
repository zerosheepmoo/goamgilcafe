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
                },
                isEvent: true
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
                    { name: 'hot', price: 0},
                    { name: 'ice', price: 3900}
                ]
            }, {
                name: {
                    KR: '달고나라떼',
                    EN: 'Dalgona Latte'
                },
                prices: [
                    { name: 'hot', price: 0 },
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
                    EN: 'Dolce Latte'
                },
                prices: [
                    { name: 'hot', price: 3700},
                    { name: 'ice', price: 4200}
                ]
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
                    { name: 'hot', price: 0 },
                    { name: 'ice', price: 4400 }
                ]
            }, {
                name: {
                    KR: '아포가토',
                    EN: 'Affogato'
                },
                prices: [
                    { name: 'hot', price: 0 },
                    { name: 'ice', price: 5500 }
                ]
            }]
        },
        {
            name: 'traTea',
            template: {
                KR: '전통차',
                EN: '<div style="width: 350px;">Traditional Tea</div>'
            },
            items: [{
                    name: {
                        KR: '유자차 / 레몬차 / 자몽차',
                        EN: '<div style="font-size: 19px; width: 280px">Yuja / Lemon / Grapefruit Tea</div>'
                    },
                    prices: [
                        { name: 'hot', price: 4300},
                        { name: 'ice', price: 0}
                    ]
                }, {
                    name: {
                        KR: '쌍화대추차',
                        EN: 'Ssanghwa Jujube Tea'
                    },
                    prices: [
                        { name: 'hot', price: 5500 },
                        { name: 'ice', price: 0 }
                    ],
                    isPrepared: true
                }
            ]
        }
    ], [
        {
            name: 'latte',
            template: {
                KR: 'LATTE',
                EN: 'LATTE'
            },
            options: {
                title: {
                    subTitle: {
                        hotIceType: 'hotAndIce'
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
                ]
            }, {
                name: {
                    KR: '오리지널 라떼',
                    EN: 'Original Latte'
                },
                prices: [
                    { name: 'hot', price: 3900},
                    { name: 'ice', price: 4400}
                ],
                subText: {
                    KR: {
                        items: [
                            {'초코': true},
                            {'민트초코': true},
                            {'말차': true},
                            {'오곡': true},
                        ],
                        slicer: ' / '
                    },
                    EN: {
                        items: [
                            {'Chocolate': true},
                            {'Mint-choco': true},
                            {'Green Tea': true},
                            {'Grain': true},
                        ],
                        slicer: ' / ',
                        style: 'style="width: 400px; font-size: 16px;"'
                    }
                }
            }, {
                name: {
                    KR: '군고구마 라떼',
                    EN: '<div style="width: 400px">Roasted Sweet Potato Latte</div>'
                },
                prices: {
                    hot: 3900
                }
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
                    KR: '돼지바 라떼',
                    EN: 'Pig-bar Latte'
                },
                prices: {
                    ice: 5500
                },
                isPrepared: true
            }, {
                name: {
                    KR: '밀크티',
                    EN: 'Milk Tea'
                },
                prices: {
                    hot: 5000 
                }
            }]
        }, {
            name: 'tea',
            template: {
                KR: 'TEA',
                EN: 'TEA'
            },
            items: [{
                name: {
                    KR: '허브티',
                    EN: 'Herbal Tea'
                },
                prices: [
                    { name: 'hot', price: 3900},
                    { name: 'ice', price: 0}
                ],
                subText: {
                    KR: {
                        items: [
                            {'얼그레이': true},
                            {'카모마일바닐라': true},
                            {'카모마일 레몬 글라스': true},
                            {'로즈힙앤체리': true},
                            {'레몬진저': true},
                            {'페퍼민트 레몬': true}
                        ],
                        slicer: ' / ',
                    },
                    EN: {
                        items: [
                            {'Earl Gray': true},
                            {'Chamomile Vanilla': true},
                            {'Chamomile Lemon Glass': true},
                            {'Rose Hip & Cherry': true},
                            {'Lemon Ginger': true},
                            {'Peppermint Lemon': true}
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
                        ],
                        slicer: ' / ',
                        style: 'style="width: 400px;"'
                    },
                    EN: {
                        items: [
                            {'Lemon': true},
                            {'Blueberry': true},
                            {'Peach': true},
                            {'Tropical': true},
                        ],
                        slicer: ' / ',
                        style: 'style="width: 400px;"'
                    }
                }
            }]
        }, {
            name: 'bubbletea',
            template: {
                KR: '버블티<span style="font-size: 12px"> - 펄선택 (화이트, 블랙)</span>',
                EN: '<div style="width: 450px">Bubble Tea<span style="font-size: 12px"> - Select Pearls (White, Black)</span></div>'
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
                }
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
                }
            },
            items: [{
                name: {
                    KR: '에이드',
                    EN: 'Ade'
                },
                prices: {
                    ice: 5000
                },
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
                            {라즈베리: true}
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
                            {Raspberry: true}
                        ],
                        slicer: ' / ',
                        style: 'style="font-size: 18px;"'
                    }
                }
            }, {
                name: {
                    KR: '모히또 / 뱅쇼',
                    EN: 'Mojito / Vin Chaud'
                },
                prices: {
                    ice: 5500
                }
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
                EN: '<div style="font-size: 36px; width: 375px">SHAKE & SMOOTHIE</div>'
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
                    KR: '돼지바 쉐이크',
                    EN: 'Pig-bar Shake'
                },
                prices: {
                    ice: 5800
                },
                isPrepared: true
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
                            {복숭아: true}
                        ],
                        slicer: ' / '
                    },
                    EN: {
                        items: [
                            {Plain: true},
                            {StrawBerry: true},
                            {Raspberry: true},
                            {Blueberry: true},
                            {Mango: true},
                            {Peach: true}
                        ],
                        slicer: ' / ',
                        style: 'style="font-size: 20px;"'
                    }
                }
            }]
        }
    ], [
        {
            name: 'shavedIce',
            template: {
                KR: '빙수',
                EN: 'ShavedIce'
            },
            items: [{
                name: {
                    KR: '클래식 / 찹쌀떡 빙수',
                    EN: '<div style="width: 370px">Classic / Glutnious Rice Cake</div>'
                },
                prices: {
                    ice: 8900
                }
            }, {
                name: {
                    KR: '망고치즈큐브 빙수',
                    EN: 'Mango Chesse-cube'
                },
                prices: {
                    ice: 10900
                }
            }]
        }, {
            name: 'virginCocktail',
            template: {
                KR: '<div style="width: 375px">Virgin Cocktail</div>',
                EN: '<div style="width: 375px">Virgin Cocktail</div>'
            },
            items: [{
                    name: {
                        KR: '피나콜라다',
                        EN: 'Piña Colada'
                    },
                    prices: {
                        ice: 7000
                    }
                }, {
                    name: {
                        KR: '파인애플 썬샤인',
                        EN: 'Pineapple Sunshine'
                    },
                    prices: {
                        ice: 7000
                    }
                }, {
                    name: {
                        KR: '골든 메달리스트',
                        EN: 'Golden Medalist'
                    },
                    prices: {
                        ice: 7000
                    },
                    isPrepared: true
                }, {
                    name: {
                        KR: '샹그리아',
                        EN: 'Sangria'
                    },
                    prices: {
                        ice: 7000
                    }
                }
            ]
        }, {
            name: 'extra',
            template: {
                KR: 'EXTRA',
                EN: 'EXTRA'
            },
            items : [
                {
                    name: {
                        KR: '샷추가',
                        EN: 'Add Shot'
                    },
                    prices: {
                        add: 500
                    },
                    subText: {
                        KR: '<div style="padding-top: 20px;">에스프레소 / 바닐라 / 헤이즐넛</div>',
                        EN: '<div style="padding-top: 20px;">Espresso / Vanilla / Hazelnut</div>'
                    }
                }, {
                    name: {
                        KR: '우유추가',
                        EN: 'Add Milk'
                    },
                    prices: {
                        add: 500
                    }
                }, {
                    name: {
                        KR: '펄추가',
                        EN: 'Add Pearls'
                    },
                    prices: {
                        add: 500
                    },
                    subText: {
                        KR: {
                            items: [
                                {화이트: true},
                                {블랙: false}
                            ],
                            slicer: ' / '
                        },
                        EN: {
                            items: [
                                {White: true},
                                {Black: false}
                            ],
                            slicer: ' / '
                        }
                    }
                }, {
                    name: {
                        KR: '사이즈업',
                        EN: 'Size-up'
                    },
                    prices: {
                        add: 1000
                    }
                }
            ]
        }
    ]
]

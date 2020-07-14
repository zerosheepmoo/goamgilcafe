// coffee and traditional tea
m = new Menu();
m.connectFrom('app');

m.addSector('COFFEE', 'hotAndIce');
m.addSector('Traditional Tea', 'none', '<div style="width: 350px;">Traditional Tea</div>');

let coffeeSector = m.findSector('COFFEE');
let traTeaSector = m.findSector('Traditional Tea');

//  latte tea bubble tea
let m2 = new Menu();
m2.connectFrom('app');

m2.addSector('LATTE', 'hotAndIce');
m2.addSector('TEA');
m2.addSector('Bubble Tea', 'none', '<div style="width: 450px">Bubble Tea<span style="font-size: 12px"> - Select Pearls (White, Black)</span></div>');

let latteSector = m2.findSector('LATTE');
let teaSector = m2.findSector('TEA');
let bubTeaSector = m2.findSector('Bubble Tea');

// ade shake smoothie icecream
let m3 = new Menu();
m3.connectFrom('app');

m3.addSector('ADE', 'ice');
m3.addSector('SmoothieShake', 'none', '<div style="font-size: 36px; width: 375px">SHAKE & SMOOTHIE</div>');
m3.addSector('ShavedIce');

let adeSector = m3.findSector('ADE');
let smooShakeSector = m3.findSector('SmoothieShake');
let shavedIceSector = m3.findSector('ShavedIce');

// cocktails extra
let m4 = new Menu();
m4.connectFrom('app');

m4.addSector('<div style="width: 375px">Virgin Cocktail</div>');
m4.addSector('EXTRA');
let virCockSector = m4.findSector('<div style="width: 375px">Virgin Cocktail</div>');
let extraSector = m4.findSector('EXTRA');

// data
let coffeeMenuData = [{
    name: 'Espresso', priceHot: 2500
}, {
    name: 'Americano', priceHot: 2900, priceIce: 3400
}, {
    name: 'Charming Ice-Ame (1L)',
    priceHot: 0,
    priceIce: 3000,
    isUnion: false,
    subText: '<pre style="font-family: LotteMartHappy;margin: 0px; padding-top: 8px">   (take-out only)</pre>',
    isEvent: true
}, {
    name: 'Cafe Latte', priceHot: 3400, priceIce: 3900
}, {
    name: 'Flat White', priceHot: 0, priceIce: 3900
}, {
    name: 'Dalgona Latte', priceHot: 0, priceIce: 4900
}, {
    name: 'Vanilla / Hazelnut Latte', priceHot: 3700, priceIce: 4200
}, {
    name: 'Dolce Latte', priceHot: 3700, priceIce: 4200
}, {
    name: 'Cappuccino', priceHot: 3900, priceIce: 4400
}, {
    name: 'Caramel Macchiato', priceHot: 3900, priceIce: 4400
}, {
    name: 'Cafe Mocha', priceHot: 3900, priceIce: 4400
}, {
    name: 'White Chocolate Mocha', priceHot: 3900, priceIce: 4400
}, {
    name: 'Einspänner', priceHot: 0, priceIce: 4400
}, {
    name: 'Affogato', priceHot: 0, priceIce: 5500
}]

let traTeaMenuData = [{
    name: 'Tea', priceHot: 4300, subText: '<div style="padding-top: 20px;">Yuja / Lemon / Grapefruit</div>'
}, {
    name: 'Ssanghwa Jujube Tea', priceHot: 5500, isPrepared: true
}]

let latteMenuData = [{
    name: 'Strawberry Latte', priceHot: 0, priceIce: 4500
}, {
    name: 'Original Latte', priceHot: 3900, priceIce: 4400, subText: '<div style="padding-top: 20px;">Chocolate / Mint-choco / Green Tea / Grain</div>'
}, {
    name: 'Baked Sweet Potato Latte', priceHot: 3900
}, {
    name: 'Black Sesame Latte', priceIce: 4900
}, {
    name: 'Pig-bar Latte', priceIce: 5500, isPrepared: true
}, {
    name: 'Milk Tea', priceHot: 5000
}]

let TeaMenuData = [{
    name: 'Herbal Tea', priceHot: 3900, subText: '<div style="padding-top: 20px;">Earl Gray / Chamomile Vanilla / Chamomile Lemon Glass / Rose Hip & Cherry / Lemon Ginger / Peppermint Lemon</div>'
}, {
    name: 'Real Ice Tea', priceIce: 4500, subText: '<div style="padding-top: 20px; width: 400px">Lemon / Blueberry / Peach / Tropical</div>'
}]

let bubTeaMenuData = [{
    name: 'Earl Gray Bubble Tea', priceIce: 5500, isPrepared: true
}, {
    name: 'Brown Sugar Bubble Tea', priceIce: 5300, isPrepared: true
}]


let adeMenuData = [{
    name: 'Ade', priceIce: 5000, isUnion: true,
    subText: '<div style="padding-top: 20px;">Lemon / Yuja Lemon / Grapefruit / Plum / Green Tangerine / Green Grape / Peach / Pineapple / Kiwi / Passion Fruit / Raspberry</div>'
}, {
    name: 'Mojito / Vin Chaud', priceIce: 5000, isUnion: true
}, {
    name: 'Energy Bang', priceIce: 6900, isUnion: true
}, {
    name: 'Common Mallow Ade', priceIce: 7000, isUnion: true
}]

let smooShakeMenuData = [{
    name: 'Oreo Shake', priceIce: 5000, isUnion: true
}, {
    name: 'Cloudy Soda', priceIce: 5500, isUnion: true, isPrepared: true
}, {
    name: 'Pig-bar Shake', priceIce: 5800, isUnion: true, isPrepared: true
}, {
    name: 'Yogurt Smoothie', priceIce: 5800, isUnion: true,
    subText: '<div style="padding-top: 20px;">Plain / StrawBerry / Raspberry / Blueberry / Mango / Peach</div>'
}]

let shaIceMenudata = [{
    name: 'Classic / Injeolmi', priceIce: 8900, isUnion: true
}, {
    name: 'Mango Cheese-cube', priceIce: 10900, isUnion: true
}]

let virCockMenudata = [{
    name: 'Piña Colada', priceIce: 6000, isUnion: true, isPrepared: true
}, {
    name: 'Pineapple Sunshine', priceIce: 6000, isUnion: true, isPrepared: true
}, {
    name: 'Golden Medalist', priceIce: 6000, isUnion: true, isPrepared: true
}, {
    name: 'Sangria', priceIce: 6000, isUnion: true, isPrepared: true
}]

let extraMenuData = [{
    name: 'Add Shot', priceIce: 500, isUnion: true, subText: '<div style="padding-top: 20px;">Espresso / Vanilla / Hazelnut</div>'
}, {
    name: 'Add Milk', priceIce: 500, isUnion: true
}, {
    name: 'Add Pearls (White / Black)', priceIce: 500, isUnion: true
}, {
    name: 'Size-up', priceIce: 1000, isUnion: true
}]


// 마지막


let tempPre = [];
let tempEv = [];

function putItems(sector, data) {
    const len = data.length;
    for (let i = 0; i < len; i++) {
        let arg1, arg2, arg3, arg4, arg5;
        arg1 = data[i]['name'];
        arg2 = data[i]['priceHot'];
        arg3 = data[i]['priceIce'];
        arg4 = data[i]['isUnion'];
        arg5 = data[i]['subText'];
        sector.addChildItems(arg1, arg2, arg3, arg4, arg5);
        if (data[i]['isPrepared']) {
            tempPre.push({
                sector: sector,
                text: arg1
            })
        }
        if (data[i]['isEvent']) {
            tempEv.push({
                sector: sector,
                text: arg1
            })
        }
    }
}

function apply() {
    for (let i = 0, len = tempPre.length; i < len; i++) {
        tempPre[i].sector.updatePrepared(tempPre[i].text);
    }
    tempPre = [];
    for (let i = 0, len = tempEv.length; i < len; i++) {
        tempEv[i].sector.updateEvent(tempEv[i].text);
    }
    tempEv = [];
}

putItems(coffeeSector, coffeeMenuData);
putItems(traTeaSector, traTeaMenuData);
putItems(latteSector, latteMenuData);
putItems(teaSector, TeaMenuData);
putItems(bubTeaSector, bubTeaMenuData);
putItems(adeSector, adeMenuData);
putItems(smooShakeSector, smooShakeMenuData);
putItems(shavedIceSector, shaIceMenudata);
putItems(virCockSector, virCockMenudata);
putItems(extraSector, extraMenuData);

apply();
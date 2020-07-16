// 임시방편 language
window.menuLang = 'kr';

// 커피, 전통차
m = new Menu();
m.connectFrom('app');

// coffee and traditional tea
m.addSector('COFFEE', 'hotAndIce');
m.addSector('전통차');

let s = m.findSector('COFFEE');
let s2 = m.findSector('전통차');

// 라떼, 티, 버블티
let m2 = new Menu();
m2.connectFrom('app');

m2.addSector('LATTE', 'hotAndIce');
m2.addSector('TEA');
m2.addSector('버블티', 'none', '버블티<span style="font-size: 12px"> - 펄선택 (화이트, 블랙)</span>');
let s3 = m2.findSector('LATTE');
let s4 = m2.findSector('TEA');
let s5 = m2.findSector('버블티');

// 에이드 쉐이크 스무디 빙수
let m3 = new Menu();
m3.connectFrom('app');

m3.addSector('ADE', 'ice');
m3.addSector('SHAKEANDSMOOTHIE', 'none', '<div style="font-size: 36px; width: 375px">SHAKE & SMOOTHIE</div>');
m3.addSector('빙수');

let s6 = m3.findSector('ADE');
let s7 = m3.findSector('SHAKEANDSMOOTHIE');
let s8 = m3.findSector('빙수');

// 버진칵테일 엑스트라
let m4 = new Menu();
m4.connectFrom('app');

m4.addSector('VirginCocktail', 'none', '<div style="width: 375px">Virgin Cocktail</div>');
m4.addSector('EXTRA');
let s9 = m4.findSector('VirginCocktail');
let s10 = m4.findSector('EXTRA');

// data
let data = [{
    name: '에스프레소', priceHot: 2500
}, {
    name: '아메리카노', priceHot: 2900, priceIce: 3400
}, {
    name: '착한 아아 (1L)',
    priceHot: 0,
    priceIce: 3000,
    isUnion: false,
    subText: '<pre style="font-family: LotteMartHappy;margin: 0px; padding-top: 8px">   (take-out only)</pre>',
    isEvent: true
}, {
    name: '카페라떼', priceHot: 3400, priceIce: 3900
}, {
    name: '플랫화이트', priceHot: 0, priceIce: 3900
}, {
    name: '달고나라떼', priceHot: 0, priceIce: 4900
}, {
    name: '바닐라 / 헤이즐넛 라떼', priceHot: 3700, priceIce: 4200
}, {
    name: '돌체(연유) 라떼', priceHot: 3700, priceIce: 4200
}, {
    name: '카푸치노', priceHot: 3900, priceIce: 4400
}, {
    name: '카라멜마끼아또', priceHot: 3900, priceIce: 4400
}, {
    name: '카페모카 / 화이트초콜릿모카', priceHot: 3900, priceIce: 4400
}, {
    name: '아인슈패너', priceHot: 0, priceIce: 4400
}, {
    name: '아포가토', priceHot: 0, priceIce: 5500
}]

let data2 = [{
    name: '유자차 / 레몬차 / 자몽차', priceHot: 4300
}, {
    name: '쌍화대추차', priceHot: 5500, isPrepared: true
}]

let data3 = [{
    name: '딸기 라떼', priceHot: 0, priceIce: 4500
}, {
    name: '오리지널 라떼', priceHot: 3900, priceIce: 4400, subText: '<div style="padding-top: 20px;">초코 / 민트초코 / 말차 / 오곡 </div>'
}, {
    name: '군고구마 라떼', priceHot: 3900
}, {
    name: '흑임자 라떼', priceIce: 4900
}, {
    name: '돼지바 라떼', priceIce: 5500, isPrepared: true
}, {
    name: '밀크티', priceHot: 5000
}]

let data4 = [{
    name: '허브티', priceHot: 3900, subText: '<div style="padding-top: 20px;">얼그레이 / 카모마일 바닐라 / 카모마일 레몬 글라스 / 로즈힙앤체리 / 레몬진저 / 페퍼민트 레몬</div>'
}, {
    name: '리얼 아이스티', priceIce: 4500, subText: '<div style="padding-top: 20px; width: 330px">레몬 / 블루베리 / 복숭아 / 트로피칼</div>'
}]

let data5 = [{
    name: '얼그레이 버블티', priceIce: 5500, isPrepared: true
}, {
    name: '흑당 버블티', priceIce: 5300, isPrepared: true
}]

let data6 = [{
    name: '에이드', priceIce: 5000, isUnion: true, 
    subText: '<div style="padding-top: 20px;">레몬 / 유자레몬 / 자몽 / 자두 / 청귤 / 청포도 / 복숭아 / 파인애플 / 키위 / 패션푸룻 / 라즈베리</div>'
}, {
    name: '모히또 / 뱅쇼', priceIce: 5000, isUnion: true
}, {
    name: '에너지뱅', priceIce: 6900, isUnion: true
}, {
    name: '커먼유니크 에이드', priceIce: 7000, isUnion: true
}]

let data7 = [{
    name: '오레오 쉐이크', priceIce: 5000, isUnion: true
}, {
    name: '구름소다', priceIce: 5500, isUnion: true, isPrepared: true
}, {
    name: '돼지바 쉐이크', priceIce: 5800, isUnion: true, isPrepared: true
}, {
    name: '요거트 스무디', priceIce: 5800, isUnion: true,
    subText: '<div style="padding-top: 20px;">플레인 / 딸기 / 라즈베리 / 블루베리 / 망고 / 복숭아</div>'
}]

let data8 = [{
    name: '클래식 / 인절미 빙수', priceIce: 8900, isUnion: true
}, {
    name: '망고치즈큐브 빙수', priceIce: 10900, isUnion: true
}]

let data9 = [{
    name: '피나콜라다', priceIce: 7000, isUnion: true, isPrepared: true
}, {
    name: '파인애플 썬샤인', priceIce: 7000, isUnion: true, isPrepared: true
}, {
    name: '골든 메달리스트', priceIce: 7000, isUnion: true, isPrepared: true
}, {
    name: '샹그리아', priceIce: 7000, isUnion: true, isPrepared: true
}]

let data10 = [{
    name: '샷추가', priceIce: 500, isUnion: true, subText: '<div style="padding-top: 20px;">에스프레소 / 바닐라 / 헤이즐넛</div>'
}, {
    name: '우유추가', priceIce: 500, isUnion: true
}, {
    name: '펄추가 (화이트 / 블랙)', priceIce: 500, isUnion: true
}, {
    name: '사이즈업', priceIce: 1000, isUnion: true
}]


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

putItems(s, data);
putItems(s2, data2);
putItems(s3, data3);
putItems(s4, data4);
putItems(s5, data5);
putItems(s6, data6);
putItems(s7, data7);
putItems(s8, data8);
putItems(s9, data9);
putItems(s10, data10);


// 마지막

setTimeout(function() {
    apply()
}, 10);
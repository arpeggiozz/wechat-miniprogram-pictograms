const timetable = [
    {
        "key": "TOKYO 1964",
        "place": "东京",
        "season": "summer",
        "desc": '奥运会运动象形图在 1964 年东京奥运会上首次引入'
    },
    {
        "key": "GRENOBLE 1968",
        "place": "格勒诺布尔",
        "season": "winter"
    },
    {
        "key": "MEXICO 1968",
        "place": "墨西哥城",
        "season": "summer"
    },
    {
        "key": "SAPPORO 1972",
        "place": "札幌",
        "season": "winter"
    },
    {
        "key": "MUNICH 1972",
        "place": "慕尼黑",
        "season": "summer"
    },
    {
        "key": "INNSBRUCK 1976",
        "place": "因斯布鲁克",
        "season": "winter"
    },
    {
        "key": "MONTREAL 1976",
        "place": "蒙特利尔",
        "season": "summer"
    },
    {
        "key": "LAKE PLACID 1980",
        "place": "普莱西德湖",
        "season": "winter"
    },
    {
        "key": "MOSCOW 1980",
        "place": "莫斯科",
        "season": "summer"
    },
    {
        "key": "SARAJEVO 1984",
        "place": "萨拉热窝",
        "season": "winter"
    },
    {
        "key": "LOS ANGELES 1984",
        "place": "洛杉矶",
        "season": "summer"
    },
    {
        "key": "CALGARY 1988",
        "place": "卡尔加里",
        "season": "winter"
    },
    {
        "key": "SEOUL 1988",
        "place": "汉城",
        "season": "summer"
    },
    {
        "key": "ALBERTVILLE 1992",
        "place": "阿尔贝维尔",
        "season": "winter"
    },
    {
        "key": "BARCELONA 1992",
        "place": "巴塞罗那",
        "season": "summer"
    },
    {
        "key": "LILLEHAMMER 1994",
        "place": "利勒哈默尔",
        "season": "winter"
    },
    {
        "key": "ATLANTA 1996",
        "place": "亚特兰大",
        "season": "summer"
    },
    {
        "key": "NAGANO 1998",
        "place": "长野",
        "season": "winter",
        "desc": "融入了长野当地特色的花瓣造型",
    },
    {
        "key": "SYDNEY 2000",
        "place": "悉尼",
        "season": "summer"
    },
    {
        "key": "SALT LAKE 2002",
        "place": "盐湖城",
        "season": "winter"
    },
    {
        "key": "ATHENS 2004",
        "place": "雅典",
        "season": "summer"
    },
    {
        "key": "TORINO 2006",
        "place": "都灵",
        "season": "winter"
    },
    {
        "key": "BEIJING 2008",
        "place": "北京",
        "season": "summer",
        "desc": "以甲骨文、金文、古代铭文篆刻为设计灵感，极具中国文化特色",
    },
    {
        "key": "VANCOUVER 2010",
        "place": "温哥华",
        "season": "winter"
    },
    {
        "key": "LONDON 2012",
        "place": "伦敦",
        "season": "summer"
    },
    {
        "key": "SOCHI 2014",
        "place": "索契",
        "season": "winter"
    },
    {
        "key": "RIO 2016",
        "place": "里约热内卢",
        "season": "summer"
    },
    {
        "key": "PYEONGCHANG 2018",
        "place": "平昌",
        "season": "winter"
    },
    {
        "key": "TOKYO 2020",
        "place": "东京",
        "season": "summer",
        "desc": "奥运会运动象形图在 1964 年东京奥运会上首次引入，这是40年后的创新与继承"
    },
    {
        "key": "BEIJING 2022",
        "place": "北京",
        "season": "winter",
        "desc": '从秦汉时期的中国传统篆刻艺术中汲取灵感，也是向 2008 北京奥运会体育图标设计的致敬',
    },
    {
        "key": "PARIS 2024",
        "place": "巴黎",
        "season": "summer",
        "desc": `每个巴黎奥运体育图标都由三个元素组成：

        1. 运动特征
        每个体育图标都以其所代表的运动项目的特色工具为特征——比如射箭的箭、自行车赛的自行车或网球的球拍。
        
        2. 赛场特征
        赛场是运动员表演的舞台，没有赛场就没有运动员的精彩表现。体育图标展示了每项运动所使用的场地或赛道的特征。

        3. 对称轴设计
        所有的体育图标都采用了对称轴设计，使其更具“纹章”的样式或特征。`
    }
];

const sports = [
    {
        "en": "3x3 BASKETBALL",
        "cn": "三人篮球"
    },
    {
        "en": "ALPINE SKIING",
        "cn": "高山滑雪"
    },
    {
        "en": "ALPINE SKIING 1",
        "cn": "高山滑雪"
    },
    {
        "en": "ALPINE SKIING 2",
        "cn": "高山滑雪"
    },
    {
        "en": "ALPINE SKIING DOWNHILL",
        "cn": "高山滑雪速降"
    },
    {
        "en": "ALPINE SKIING GIANT SLALOM",
        "cn": "高山滑雪大回转"
    },
    {
        "en": "ALPINE SKIING SLALOM",
        "cn": "高山滑雪回转"
    },
    {
        "en": "ALPINE SKIING SUPER-G",
        "cn": "高山滑雪超级大回转"
    },
    {
        "en": "ARCHERY",
        "cn": "射箭"
    },
    {
        "en": "ARTISTIC GYMNASTICS",
        "cn": "竞技体操"
    },
    {
        "en": "ARTISTIC SWIMMING",
        "cn": "花样游泳"
    },
    {
        "en": "ATHLETICS",
        "cn": "田径"
    },
    {
        "en": "BADMINTON",
        "cn": "羽毛球"
    },
    {
        "en": "BASEBALL",
        "cn": "棒球"
    },
    {
        "en": "BASKETBALL",
        "cn": "篮球"
    },
    {
        "en": "BASQUE PELOTA",
        "cn": "巴斯克回力球"
    },
    {
        "en": "BEACH VOLLEYBALL",
        "cn": "沙滩排球"
    },
    {
        "en": "BIATHLON",
        "cn": "冬季两项"
    },
    {
        "en": "BMX FREESTYLE",
        "cn": "自由式小轮车"
    },
    {
        "en": "BMX RACING",
        "cn": "小轮车竞速"
    },
    {
        "en": "BOBSLEIGH",
        "cn": "雪车"
    },
    {
        "en": "BOBSLEIGH 2-MEN",
        "cn": "双人雪车"
    },
    {
        "en": "BOBSLEIGH 4-MEN",
        "cn": "四人雪车"
    },
    {
        "en": "BOWLING",
        "cn": "保龄球"
    },
    {
        "en": "BOXING",
        "cn": "拳击"
    },
    {
        "en": "BREAKING",
        "cn": "霹雳舞"
    },
    {
        "en": "CANOEING",
        "cn": "皮划艇"
    },
    {
        "en": "CANOEING FLATWATER",
        "cn": "皮划艇静水"
    },
    {
        "en": "CANOEING SLALOM",
        "cn": "皮划艇激流回旋"
    },
    {
        "en": "CANOEING SPRINT",
        "cn": "皮划艇竞速"
    },
    {
        "en": "CROSS COUNTRY SKIING",
        "cn": "越野滑雪"
    },
    {
        "en": "CURLING",
        "cn": "冰壶"
    },
    {
        "en": "CYCLING",
        "cn": "自行车"
    },
    {
        "en": "CYCLING BMX",
        "cn": "小轮车"
    },
    {
        "en": "CYCLING BMX FREESTYLE",
        "cn": "自由式小轮车"
    },
    {
        "en": "CYCLING BMX RACING",
        "cn": "小轮车竞速"
    },
    {
        "en": "CYCLING MOUNTAIN BIKE",
        "cn": "山地自行车"
    },
    {
        "en": "CYCLING ROAD",
        "cn": "公路自行车"
    },
    {
        "en": "CYCLING TRACK",
        "cn": "场地自行车"
    },
    {
        "en": "DIVING",
        "cn": "跳水"
    },
    {
        "en": "EQUESTRIAN",
        "cn": "马术"
    },
    {
        "en": "EQUESTRIAN DRESSAGE",
        "cn": "马术盛装舞步"
    },
    {
        "en": "EQUESTRIAN EVENTING",
        "cn": "马术三项赛"
    },
    {
        "en": "EQUESTRIAN JUMPING",
        "cn": "马术障碍赛"
    },
    {
        "en": "FENCING",
        "cn": "击剑"
    },
    {
        "en": "FIGURE SKATING",
        "cn": "花样滑冰"
    },
    {
        "en": "FIGURE SKATING MEN",
        "cn": "花样滑冰男子单人滑"
    },
    {
        "en": "FIGURE SKATING PAIRS",
        "cn": "花样滑冰双人滑"
    },
    {
        "en": "FIGURE SKATING SINGLES",
        "cn": "花样滑冰单人滑"
    },
    {
        "en": "FIGURE SKATING WOMEN",
        "cn": "花样滑冰女子单人滑"
    },
    {
        "en": "FOOTBALL",
        "cn": "足球"
    },
    {
        "en": "FREESKI BIG AIR",
        "cn": "自由式滑雪大跳台"
    },
    {
        "en": "FREESTYLE",
        "cn": "自由式滑雪"
    },
    {
        "en": "FREESTYLE AERIALS",
        "cn": "自由式滑雪空中技巧"
    },
    {
        "en": "FREESTYLE BALLET",
        "cn": "自由式滑雪芭蕾"
    },
    {
        "en": "FREESTYLE HALFPIPE",
        "cn": "自由式滑雪U型池"
    },
    {
        "en": "FREESTYLE MOGULS",
        "cn": "自由式滑雪雪上技巧"
    },
    {
        "en": "FREESTYLE SKI CROSS",
        "cn": "自由式滑雪越野"
    },
    {
        "en": "FREESTYLE SLOPESTYLE",
        "cn": "自由式滑雪坡面障碍技巧"
    },
    {
        "en": "GOLF",
        "cn": "高尔夫"
    },
    {
        "en": "GYMNASTICS",
        "cn": "体操"
    },
    {
        "en": "HANDBALL",
        "cn": "手球"
    },
    {
        "en": "HOCKEY",
        "cn": "曲棍球"
    },
    {
        "en": "ICE HOCKEY",
        "cn": "冰球"
    },
    {
        "en": "JUDO",
        "cn": "柔道"
    },
    {
        "en": "KARATE KATA",
        "cn": "空手道型"
    },
    {
        "en": "KARATE KUMITE",
        "cn": "空手道组手"
    },
    {
        "en": "LUGE",
        "cn": "无舵雪橇"
    },
    {
        "en": "LUGE 1-MEN",
        "cn": "男子单人无舵雪橇"
    },
    {
        "en": "LUGE 2-MEN",
        "cn": "男子双人无舵雪橇"
    },
    {
        "en": "MARATHON",
        "cn": "马拉松"
    },
    {
        "en": "MARATHON SWIMMING",
        "cn": "马拉松游泳"
    },
    {
        "en": "MODERN PENTATHLON",
        "cn": "现代五项"
    },
    {
        "en": "NORDIC COMBINED",
        "cn": "北欧两项"
    },
    {
        "en": "OLYMPIC VILLAGE",
        "cn": "奥运村"
    },
    {
        "en": "RHYTHMIC GYMNASTICS",
        "cn": "艺术体操"
    },
    {
        "en": "ROLLER HOCKEY",
        "cn": "滚轴曲棍球"
    },
    {
        "en": "ROWING",
        "cn": "划船"
    },
    {
        "en": "RUGBY SEVEN",
        "cn": "七人制橄榄球"
    },
    {
        "en": "SAILING",
        "cn": "帆船"
    },
    {
        "en": "SHOOTING",
        "cn": "射击"
    },
    {
        "en": "SHORT TRACK",
        "cn": "短道速滑"
    },
    {
        "en": "SKATEBOARDING",
        "cn": "滑板"
    },
    {
        "en": "SKELETON",
        "cn": "钢架雪车"
    },
    {
        "en": "SKI JUMPING",
        "cn": "跳台滑雪"
    },
    {
        "en": "SNOWBOARD",
        "cn": "单板滑雪"
    },
    {
        "en": "SNOWBOARD BIG AIR",
        "cn": "单板滑雪大跳台"
    },
    {
        "en": "SNOWBOARD CROSS",
        "cn": "单板滑雪越野"
    },
    {
        "en": "SNOWBOARD HALFPIPE",
        "cn": "单板滑雪U型池"
    },
    {
        "en": "SNOWBOARD PARALLEL GIANT SLALOM",
        "cn": "单板滑雪平行大回转"
    },
    {
        "en": "SNOWBOARD SLOPESTYLE",
        "cn": "单板滑雪坡面障碍技巧"
    },
    {
        "en": "SOFTBALL",
        "cn": "垒球"
    },
    {
        "en": "SPEED SKATING",
        "cn": "速度滑冰"
    },
    {
        "en": "SPEED SKIING",
        "cn": "极速滑雪"
    },
    {
        "en": "SPORT CLIMBING",
        "cn": "体育攀岩"
    },
    {
        "en": "SURFING",
        "cn": "冲浪"
    },
    {
        "en": "SWIMMING",
        "cn": "游泳"
    },
    {
        "en": "SYNCHRONIZED SWIMMING",
        "cn": "花样游泳"
    },
    {
        "en": "TABLE TENNIS",
        "cn": "乒乓球"
    },
    {
        "en": "TAEKWONDO",
        "cn": "跆拳道"
    },
    {
        "en": "TENNIS",
        "cn": "网球"
    },
    {
        "en": "TRAMPOLINE",
        "cn": "蹦床"
    },
    {
        "en": "TRIATHLON",
        "cn": "铁人三项"
    },
    {
        "en": "VOLLEYBALL",
        "cn": "排球"
    },
    {
        "en": "WATER POLO",
        "cn": "水球"
    },
    {
        "en": "WEIGHTLIFTING",
        "cn": "举重"
    },
    {
        "en": "WRESTLING",
        "cn": "摔跤"
    },
    {
        "en": "YACHTING",
        "cn": "游艇"
    }
]

const sportsAscByPinyin = ["奥运村", "巴斯克回力球", "棒球", "保龄球", "北欧两项", "蹦床", "冰壶", "冰球", "场地自行车", "冲浪", "单板滑雪", "单板滑雪大跳台", "单板滑雪平行大回转", "单板滑雪坡面障碍技巧", "单板滑雪越野", "单板滑雪U型池", "冬季两项", "短道速滑", "帆船", "钢架雪车", "高尔夫", "高山滑雪", "高山滑雪超级大回转", "高山滑雪大回转", "高山滑雪回转", "高山滑雪速降", "公路自行车", "滚轴曲棍球", "花样滑冰", "花样滑冰单人滑", "花样滑冰男子单人滑", "花样滑冰女子单人滑", "花样滑冰双人滑", "花样游泳", "滑板", "划船", "击剑", "极速滑雪", "竞技体操", "举重", "空手道型", "空手道组手", "篮球", "垒球", "马拉松", "马拉松游泳", "马术", "马术三项赛", "马术盛装舞步", "马术障碍赛", "男子单人无舵雪橇", "男子双人无舵雪橇", "排球", "霹雳舞", "皮划艇", "皮划艇激流回旋", "皮划艇竞速", "皮划艇静水", "乒乓球", "七人制橄榄球", "曲棍球", "拳击", "柔道", "三人篮球", "沙滩排球", "山地自行车", "射击", "射箭", "手球", "摔跤", "双人雪车", "水球", "四人雪车", "速度滑冰", "跆拳道", "体操", "体育攀岩", "田径", "跳水", "跳台滑雪", "铁人三项", "网球", "无舵雪橇", "现代五项", "小轮车", "小轮车竞速", "雪车", "艺术体操", "游艇", "游泳", "羽毛球", "越野滑雪", "自行车", "自由式滑雪", "自由式滑雪芭蕾", "自由式滑雪大跳台", "自由式滑雪空中技巧", "自由式滑雪坡面障碍技巧", "自由式滑雪雪上技巧", "自由式滑雪越野", "自由式滑雪U型池", "自由式小轮车", "足球"];
export const sportsPinyinInitials = {
    "奥运村": "A",
    "巴斯克回力球": "B",
    "棒球": "B",
    "保龄球": "B",
    "北欧两项": "B",
    "蹦床": "B",
    "冰壶": "B",
    "冰球": "B",
    "场地自行车": "C",
    "冲浪": "C",
    "单板滑雪": "D",
    "单板滑雪大跳台": "D",
    "单板滑雪平行大回转": "D",
    "单板滑雪坡面障碍技巧": "D",
    "单板滑雪越野": "D",
    "单板滑雪U型池": "D",
    "冬季两项": "D",
    "短道速滑": "D",
    "帆船": "F",
    "钢架雪车": "G",
    "高尔夫": "G",
    "高山滑雪": "G",
    "高山滑雪超级大回转": "G",
    "高山滑雪大回转": "G",
    "高山滑雪回转": "G",
    "高山滑雪速降": "G",
    "公路自行车": "G",
    "滚轴曲棍球": "G",
    "花样滑冰": "H",
    "花样滑冰单人滑": "H",
    "花样滑冰男子单人滑": "H",
    "花样滑冰女子单人滑": "H",
    "花样滑冰双人滑": "H",
    "花样游泳": "H",
    "滑板": "H",
    "划船": "H",
    "击剑": "J",
    "极速滑雪": "J",
    "竞技体操": "J",
    "举重": "J",
    "空手道型": "K",
    "空手道组手": "K",
    "篮球": "L",
    "垒球": "L",
    "马拉松": "M",
    "马拉松游泳": "M",
    "马术": "M",
    "马术三项赛": "M",
    "马术盛装舞步": "M",
    "马术障碍赛": "M",
    "男子单人无舵雪橇": "N",
    "男子双人无舵雪橇": "N",
    "排球": "P",
    "霹雳舞": "P",
    "皮划艇": "P",
    "皮划艇激流回旋": "P",
    "皮划艇竞速": "P",
    "皮划艇静水": "P",
    "乒乓球": "P",
    "七人制橄榄球": "Q",
    "曲棍球": "Q",
    "拳击": "Q",
    "柔道": "R",
    "三人篮球": "S",
    "沙滩排球": "S",
    "山地自行车": "S",
    "射击": "S",
    "射箭": "S",
    "手球": "S",
    "摔跤": "S",
    "双人雪车": "S",
    "水球": "S",
    "四人雪车": "S",
    "速度滑冰": "S",
    "跆拳道": "T",
    "体操": "T",
    "体育攀岩": "T",
    "田径": "T",
    "跳水": "T",
    "跳台滑雪": "T",
    "铁人三项": "T",
    "网球": "W",
    "无舵雪橇": "W",
    "现代五项": "X",
    "小轮车": "X",
    "小轮车竞速": "X",
    "雪车": "X",
    "艺术体操": "Y",
    "游艇": "Y",
    "游泳": "Y",
    "羽毛球": "Y",
    "越野滑雪": "Y",
    "自行车": "Z",
    "自由式滑雪": "Z",
    "自由式滑雪芭蕾": "Z",
    "自由式滑雪大跳台": "Z",
    "自由式滑雪空中技巧": "Z",
    "自由式滑雪坡面障碍技巧": "Z",
    "自由式滑雪雪上技巧": "Z",
    "自由式滑雪越野": "Z",
    "自由式滑雪U型池": "Z",
    "自由式小轮车": "Z",
    "足球": "Z"
}

const sportsByTimetable = {
    'ALPINE SKIING': ['BEIJING 2022', 'SOCHI 2014', 'TORINO 2006', 'VANCOUVER 2010'],
    'ALPINE SKIING 1': ['PYEONGCHANG 2018'],
    'ALPINE SKIING 2': ['PYEONGCHANG 2018'],
    'ALPINE SKIING DOWNHILL': [
        'ALBERTVILLE 1992',
        'CALGARY 1988',
        'GRENOBLE 1968',
        'INNSBRUCK 1976',
        'LAKE PLACID 1980',
        'LILLEHAMMER 1994',
        'NAGANO 1998',
        'SALT LAKE 2002',
        'SAPPORO 1972',
        'SARAJEVO 1984'
    ],
    'ALPINE SKIING GIANT SLALOM': [
        'ALBERTVILLE 1992',
        'CALGARY 1988',
        'INNSBRUCK 1976',
        'LAKE PLACID 1980',
        'LILLEHAMMER 1994',
        'NAGANO 1998',
        'SALT LAKE 2002',
        'SAPPORO 1972',
        'SARAJEVO 1984'
    ],
    'ALPINE SKIING SLALOM': [
        'ALBERTVILLE 1992',
        'GRENOBLE 1968',
        'INNSBRUCK 1976',
        'LAKE PLACID 1980',
        'LILLEHAMMER 1994',
        'SALT LAKE 2002',
        'SAPPORO 1972',
        'SARAJEVO 1984'
    ],
    'ALPINE SKIING SUPER-G': ['LILLEHAMMER 1994'],
    ARCHERY: [
        'ATHENS 2004', 'ATLANTA 1996',
        'BARCELONA 1992', 'BEIJING 2008',
        'LONDON 2012', 'LOS ANGELES 1984',
        'MONTREAL 1976', 'MOSCOW 1980',
        'MUNICH 1972', 'PARIS 2024',
        'RIO 2016', 'SEOUL 1988',
        'SYDNEY 2000', 'TOKYO 2020'
    ],
    'ARTISTIC GYMNASTICS': [
        'ATHENS 2004',
        'ATLANTA 1996',
        'BEIJING 2008',
        'LONDON 2012',
        'PARIS 2024',
        'RIO 2016',
        'SYDNEY 2000',
        'TOKYO 2020'
    ],
    'ARTISTIC SWIMMING': ['PARIS 2024', 'TOKYO 2020'],
    ATHLETICS: [
        'ATHENS 2004', 'ATLANTA 1996',
        'BARCELONA 1992', 'BEIJING 2008',
        'LONDON 2012', 'LOS ANGELES 1984',
        'MEXICO 1968', 'MONTREAL 1976',
        'MOSCOW 1980', 'MUNICH 1972',
        'PARIS 2024', 'RIO 2016',
        'SEOUL 1988', 'SYDNEY 2000',
        'TOKYO 1964', 'TOKYO 2020'
    ],
    BADMINTON: [
        'ATHENS 2004',
        'ATLANTA 1996',
        'BARCELONA 1992',
        'BEIJING 2008',
        'LONDON 2012',
        'PARIS 2024',
        'RIO 2016',
        'SEOUL 1988',
        'SYDNEY 2000',
        'TOKYO 2020'
    ],
    BASEBALL: [
        'ATHENS 2004',
        'ATLANTA 1996',
        'BARCELONA 1992',
        'BEIJING 2008',
        'LOS ANGELES 1984',
        'SEOUL 1988',
        'SYDNEY 2000',
        'TOKYO 2020'
    ],
    BASKETBALL: [
        'ATHENS 2004', 'ATLANTA 1996',
        'BARCELONA 1992', 'BEIJING 2008',
        'LONDON 2012', 'LOS ANGELES 1984',
        'MEXICO 1968', 'MONTREAL 1976',
        'MOSCOW 1980', 'MUNICH 1972',
        'PARIS 2024', 'RIO 2016',
        'SEOUL 1988', 'SYDNEY 2000',
        'TOKYO 1964', 'TOKYO 2020'
    ],
    '3x3 BASKETBALL': ['PARIS 2024', 'TOKYO 2020'],
    'BASQUE PELOTA': ['BARCELONA 1992'],
    'BEACH VOLLEYBALL': [
        'ATHENS 2004',
        'BEIJING 2008',
        'LONDON 2012',
        'PARIS 2024',
        'RIO 2016',
        'SYDNEY 2000',
        'TOKYO 2020'
    ],
    BIATHLON: [
        'ALBERTVILLE 1992', 'BEIJING 2022',
        'CALGARY 1988', 'GRENOBLE 1968',
        'INNSBRUCK 1976', 'LAKE PLACID 1980',
        'LILLEHAMMER 1994', 'NAGANO 1998',
        'PYEONGCHANG 2018', 'SALT LAKE 2002',
        'SAPPORO 1972', 'SARAJEVO 1984',
        'SOCHI 2014', 'TORINO 2006',
        'VANCOUVER 2010'
    ],
    'BMX FREESTYLE': ['PARIS 2024'],
    'BMX RACING': ['PARIS 2024'],
    BOBSLEIGH: [
        'ALBERTVILLE 1992',
        'BEIJING 2022',
        'CALGARY 1988',
        'GRENOBLE 1968',
        'LILLEHAMMER 1994',
        'NAGANO 1998',
        'PYEONGCHANG 2018',
        'SALT LAKE 2002',
        'SAPPORO 1972',
        'SOCHI 2014',
        'TORINO 2006',
        'VANCOUVER 2010'
    ],
    'BOBSLEIGH 2-MEN': ['INNSBRUCK 1976', 'LAKE PLACID 1980', 'SARAJEVO 1984'],
    'BOBSLEIGH 4-MEN': ['INNSBRUCK 1976', 'LAKE PLACID 1980', 'SARAJEVO 1984'],
    BOWLING: ['SEOUL 1988'],
    BOXING: [
        'ATHENS 2004', 'ATLANTA 1996',
        'BARCELONA 1992', 'BEIJING 2008',
        'LONDON 2012', 'LOS ANGELES 1984',
        'MEXICO 1968', 'MONTREAL 1976',
        'MOSCOW 1980', 'MUNICH 1972',
        'PARIS 2024', 'RIO 2016',
        'SEOUL 1988', 'SYDNEY 2000',
        'TOKYO 1964', 'TOKYO 2020'
    ],
    BREAKING: ['PARIS 2024'],
    CANOEING: [
        'BARCELONA 1992',
        'LOS ANGELES 1984',
        'MEXICO 1968',
        'MONTREAL 1976',
        'MOSCOW 1980',
        'MUNICH 1972',
        'SEOUL 1988',
        'TOKYO 1964'
    ],
    'CANOEING FLATWATER': ['ATHENS 2004', 'BEIJING 2008'],
    'CANOEING SLALOM': [
        'ATHENS 2004',
        'ATLANTA 1996',
        'BEIJING 2008',
        'LONDON 2012',
        'PARIS 2024',
        'RIO 2016',
        'SYDNEY 2000',
        'TOKYO 2020'
    ],
    'CANOEING SPRINT': [
        'ATLANTA 1996',
        'LONDON 2012',
        'PARIS 2024',
        'RIO 2016',
        'SYDNEY 2000',
        'TOKYO 2020'
    ],
    'CROSS COUNTRY SKIING': [
        'ALBERTVILLE 1992', 'BEIJING 2022',
        'CALGARY 1988', 'GRENOBLE 1968',
        'INNSBRUCK 1976', 'LAKE PLACID 1980',
        'LILLEHAMMER 1994', 'NAGANO 1998',
        'PYEONGCHANG 2018', 'SALT LAKE 2002',
        'SAPPORO 1972', 'SARAJEVO 1984',
        'SOCHI 2014', 'TORINO 2006',
        'VANCOUVER 2010'
    ],
    CURLING: [
        'ALBERTVILLE 1992',
        'BEIJING 2022',
        'CALGARY 1988',
        'NAGANO 1998',
        'PYEONGCHANG 2018',
        'SALT LAKE 2002',
        'SOCHI 2014',
        'TORINO 2006',
        'VANCOUVER 2010'
    ],
    CYCLING: [
        'ATHENS 2004',
        'ATLANTA 1996',
        'BARCELONA 1992',
        'BEIJING 2008',
        'LOS ANGELES 1984',
        'MEXICO 1968',
        'MONTREAL 1976',
        'MOSCOW 1980',
        'MUNICH 1972',
        'SEOUL 1988',
        'SYDNEY 2000',
        'TOKYO 1964'
    ],
    'CYCLING BMX': ['LONDON 2012', 'RIO 2016'],
    'CYCLING BMX FREESTYLE': ['TOKYO 2020'],
    'CYCLING BMX RACING': ['TOKYO 2020'],
    'CYCLING MOUNTAIN BIKE': ['LONDON 2012', 'PARIS 2024', 'RIO 2016', 'TOKYO 2020'],
    'CYCLING ROAD': ['LONDON 2012', 'PARIS 2024', 'RIO 2016', 'TOKYO 2020'],
    'CYCLING TRACK': ['LONDON 2012', 'PARIS 2024', 'RIO 2016', 'TOKYO 2020'],
    DIVING: [
        'ATHENS 2004',
        'ATLANTA 1996',
        'BARCELONA 1992',
        'BEIJING 2008',
        'LONDON 2012',
        'PARIS 2024',
        'RIO 2016',
        'SYDNEY 2000',
        'TOKYO 2020'
    ],
    EQUESTRIAN: [
        'ATHENS 2004',
        'ATLANTA 1996',
        'BARCELONA 1992',
        'BEIJING 2008',
        'LOS ANGELES 1984',
        'MEXICO 1968',
        'MONTREAL 1976',
        'MOSCOW 1980',
        'MUNICH 1972',
        'SEOUL 1988',
        'SYDNEY 2000',
        'TOKYO 1964'
    ],
    'EQUESTRIAN DRESSAGE': ['LONDON 2012', 'PARIS 2024', 'RIO 2016', 'TOKYO 2020'],
    'EQUESTRIAN EVENTING': ['LONDON 2012', 'PARIS 2024', 'RIO 2016', 'TOKYO 2020'],
    'EQUESTRIAN JUMPING': ['LONDON 2012', 'PARIS 2024', 'RIO 2016', 'TOKYO 2020'],
    FENCING: [
        'ATHENS 2004', 'ATLANTA 1996',
        'BARCELONA 1992', 'BEIJING 2008',
        'LONDON 2012', 'LOS ANGELES 1984',
        'MEXICO 1968', 'MONTREAL 1976',
        'MOSCOW 1980', 'MUNICH 1972',
        'PARIS 2024', 'RIO 2016',
        'SEOUL 1988', 'SYDNEY 2000',
        'TOKYO 1964', 'TOKYO 2020'
    ],
    'FIGURE SKATING': [
        'BEIJING 2022',
        'GRENOBLE 1968',
        'LILLEHAMMER 1994',
        'NAGANO 1998',
        'PYEONGCHANG 2018',
        'SAPPORO 1972',
        'SOCHI 2014',
        'TORINO 2006',
        'VANCOUVER 2010'
    ],
    'FIGURE SKATING MEN': ['ALBERTVILLE 1992'],
    'FIGURE SKATING PAIRS': [
        'ALBERTVILLE 1992',
        'CALGARY 1988',
        'INNSBRUCK 1976',
        'LAKE PLACID 1980',
        'SALT LAKE 2002',
        'SARAJEVO 1984'
    ],
    'FIGURE SKATING SINGLES': [
        'CALGARY 1988',
        'INNSBRUCK 1976',
        'LAKE PLACID 1980',
        'SALT LAKE 2002',
        'SARAJEVO 1984'
    ],
    'FIGURE SKATING WOMEN': ['ALBERTVILLE 1992'],
    FOOTBALL: [
        'ATHENS 2004', 'ATLANTA 1996',
        'BARCELONA 1992', 'BEIJING 2008',
        'LONDON 2012', 'LOS ANGELES 1984',
        'MEXICO 1968', 'MONTREAL 1976',
        'MOSCOW 1980', 'MUNICH 1972',
        'PARIS 2024', 'RIO 2016',
        'SEOUL 1988', 'SYDNEY 2000',
        'TOKYO 1964', 'TOKYO 2020'
    ],
    'FREESKI BIG AIR': ['BEIJING 2022'],
    FREESTYLE: ['LILLEHAMMER 1994', 'NAGANO 1998', 'TORINO 2006'],
    'FREESTYLE AERIALS': [
        'ALBERTVILLE 1992',
        'BEIJING 2022',
        'CALGARY 1988',
        'PYEONGCHANG 2018',
        'SALT LAKE 2002',
        'SOCHI 2014',
        'VANCOUVER 2010'
    ],
    'FREESTYLE BALLET': ['ALBERTVILLE 1992', 'CALGARY 1988'],
    'FREESTYLE HALFPIPE': ['BEIJING 2022', 'PYEONGCHANG 2018', 'SOCHI 2014'],
    'FREESTYLE MOGULS': [
        'ALBERTVILLE 1992',
        'BEIJING 2022',
        'CALGARY 1988',
        'PYEONGCHANG 2018',
        'SALT LAKE 2002',
        'SOCHI 2014',
        'VANCOUVER 2010'
    ],
    'FREESTYLE SKI CROSS': [
        'BEIJING 2022',
        'PYEONGCHANG 2018',
        'SOCHI 2014',
        'VANCOUVER 2010'
    ],
    'FREESTYLE SLOPESTYLE': ['BEIJING 2022', 'PYEONGCHANG 2018', 'SOCHI 2014'],
    GOLF: ['PARIS 2024', 'RIO 2016', 'TOKYO 2020'],
    GYMNASTICS: [
        'BARCELONA 1992',
        'LOS ANGELES 1984',
        'MEXICO 1968',
        'MONTREAL 1976',
        'MOSCOW 1980',
        'MUNICH 1972',
        'SEOUL 1988',
        'TOKYO 1964'
    ],
    HANDBALL: [
        'ATHENS 2004', 'ATLANTA 1996',
        'BARCELONA 1992', 'BEIJING 2008',
        'LONDON 2012', 'LOS ANGELES 1984',
        'MEXICO 1968', 'MONTREAL 1976',
        'MOSCOW 1980', 'MUNICH 1972',
        'PARIS 2024', 'RIO 2016',
        'SEOUL 1988', 'SYDNEY 2000',
        'TOKYO 2020'
    ],
    HOCKEY: [
        'ATHENS 2004', 'ATLANTA 1996',
        'BARCELONA 1992', 'BEIJING 2008',
        'LONDON 2012', 'LOS ANGELES 1984',
        'MEXICO 1968', 'MONTREAL 1976',
        'MOSCOW 1980', 'MUNICH 1972',
        'PARIS 2024', 'RIO 2016',
        'SEOUL 1988', 'SYDNEY 2000',
        'TOKYO 1964', 'TOKYO 2020'
    ],
    'ICE HOCKEY': [
        'ALBERTVILLE 1992', 'BEIJING 2022',
        'CALGARY 1988', 'GRENOBLE 1968',
        'INNSBRUCK 1976', 'LAKE PLACID 1980',
        'LILLEHAMMER 1994', 'NAGANO 1998',
        'PYEONGCHANG 2018', 'SALT LAKE 2002',
        'SAPPORO 1972', 'SARAJEVO 1984',
        'SOCHI 2014', 'TORINO 2006',
        'VANCOUVER 2010'
    ],
    JUDO: [
        'ATHENS 2004', 'ATLANTA 1996',
        'BARCELONA 1992', 'BEIJING 2008',
        'LONDON 2012', 'LOS ANGELES 1984',
        'MONTREAL 1976', 'MOSCOW 1980',
        'MUNICH 1972', 'PARIS 2024',
        'RIO 2016', 'SEOUL 1988',
        'SYDNEY 2000', 'TOKYO 1964',
        'TOKYO 2020'
    ],
    'KARATE KATA': ['TOKYO 2020'],
    'KARATE KUMITE': ['TOKYO 2020'],
    LUGE: [
        'ALBERTVILLE 1992',
        'BEIJING 2022',
        'CALGARY 1988',
        'GRENOBLE 1968',
        'LILLEHAMMER 1994',
        'NAGANO 1998',
        'PYEONGCHANG 2018',
        'SALT LAKE 2002',
        'SAPPORO 1972',
        'SOCHI 2014',
        'TORINO 2006',
        'VANCOUVER 2010'
    ],
    'LUGE 1-MEN': ['INNSBRUCK 1976', 'LAKE PLACID 1980', 'SARAJEVO 1984'],
    'LUGE 2-MEN': ['INNSBRUCK 1976', 'LAKE PLACID 1980', 'SARAJEVO 1984'],
    MARATHON: ['SEOUL 1988'],
    'MARATHON SWIMMING': ['PARIS 2024', 'RIO 2016', 'TOKYO 2020'],
    'MODERN PENTATHLON': [
        'ATHENS 2004', 'ATLANTA 1996',
        'BARCELONA 1992', 'BEIJING 2008',
        'LONDON 2012', 'LOS ANGELES 1984',
        'MEXICO 1968', 'MONTREAL 1976',
        'MOSCOW 1980', 'MUNICH 1972',
        'PARIS 2024', 'RIO 2016',
        'SEOUL 1988', 'SYDNEY 2000',
        'TOKYO 1964', 'TOKYO 2020'
    ],
    'NORDIC COMBINED': [
        'ALBERTVILLE 1992',
        'BEIJING 2022',
        'CALGARY 1988',
        'LILLEHAMMER 1994',
        'NAGANO 1998',
        'PYEONGCHANG 2018',
        'SALT LAKE 2002',
        'SAPPORO 1972',
        'SOCHI 2014',
        'TORINO 2006',
        'VANCOUVER 2010'
    ],
    'OLYMPIC VILLAGE': ['MEXICO 1968'],
    'RHYTHMIC GYMNASTICS': [
        'ATHENS 2004',
        'ATLANTA 1996',
        'BEIJING 2008',
        'LONDON 2012',
        'PARIS 2024',
        'RIO 2016',
        'SYDNEY 2000',
        'TOKYO 2020'
    ],
    'ROLLER HOCKEY': ['BARCELONA 1992'],
    ROWING: [
        'ATHENS 2004', 'ATLANTA 1996',
        'BARCELONA 1992', 'BEIJING 2008',
        'LONDON 2012', 'LOS ANGELES 1984',
        'MEXICO 1968', 'MONTREAL 1976',
        'MOSCOW 1980', 'MUNICH 1972',
        'PARIS 2024', 'RIO 2016',
        'SEOUL 1988', 'SYDNEY 2000',
        'TOKYO 1964', 'TOKYO 2020'
    ],
    'RUGBY SEVEN': ['PARIS 2024', 'RIO 2016', 'TOKYO 2020'],
    SAILING: [
        'ATHENS 2004', 'BARCELONA 1992',
        'BEIJING 2008', 'LONDON 2012',
        'MEXICO 1968', 'MOSCOW 1980',
        'MUNICH 1972', 'PARIS 2024',
        'RIO 2016', 'SYDNEY 2000',
        'TOKYO 1964', 'TOKYO 2020'
    ],
    SHOOTING: [
        'ATHENS 2004', 'ATLANTA 1996',
        'BARCELONA 1992', 'BEIJING 2008',
        'LONDON 2012', 'LOS ANGELES 1984',
        'MEXICO 1968', 'MONTREAL 1976',
        'MOSCOW 1980', 'MUNICH 1972',
        'PARIS 2024', 'RIO 2016',
        'SEOUL 1988', 'SYDNEY 2000',
        'TOKYO 1964', 'TOKYO 2020'
    ],
    'SHORT TRACK': [
        'ALBERTVILLE 1992',
        'BEIJING 2022',
        'LILLEHAMMER 1994',
        'NAGANO 1998',
        'PYEONGCHANG 2018',
        'SOCHI 2014',
        'TORINO 2006',
        'VANCOUVER 2010'
    ],
    SKATEBOARDING: ['PARIS 2024', 'TOKYO 2020'],
    SKELETON: [
        'BEIJING 2022',
        'PYEONGCHANG 2018',
        'SALT LAKE 2002',
        'SOCHI 2014',
        'TORINO 2006',
        'VANCOUVER 2010'
    ],
    'SKI JUMPING': [
        'ALBERTVILLE 1992', 'BEIJING 2022',
        'CALGARY 1988', 'GRENOBLE 1968',
        'INNSBRUCK 1976', 'LAKE PLACID 1980',
        'LILLEHAMMER 1994', 'NAGANO 1998',
        'PYEONGCHANG 2018', 'SALT LAKE 2002',
        'SAPPORO 1972', 'SARAJEVO 1984',
        'SOCHI 2014', 'TORINO 2006',
        'VANCOUVER 2010'
    ],
    SNOWBOARD: ['NAGANO 1998', 'SALT LAKE 2002', 'TORINO 2006'],
    'SNOWBOARD BIG AIR': ['BEIJING 2022', 'PYEONGCHANG 2018'],
    'SNOWBOARD CROSS': [
        'BEIJING 2022',
        'PYEONGCHANG 2018',
        'SOCHI 2014',
        'VANCOUVER 2010'
    ],
    'SNOWBOARD HALFPIPE': [
        'BEIJING 2022',
        'PYEONGCHANG 2018',
        'SOCHI 2014',
        'VANCOUVER 2010'
    ],
    'SNOWBOARD PARALLEL GIANT SLALOM': [
        'BEIJING 2022',
        'PYEONGCHANG 2018',
        'SOCHI 2014',
        'VANCOUVER 2010'
    ],
    'SNOWBOARD SLOPESTYLE': ['BEIJING 2022', 'PYEONGCHANG 2018', 'SOCHI 2014'],
    SOFTBALL: [
        'ATHENS 2004',
        'ATLANTA 1996',
        'BEIJING 2008',
        'SYDNEY 2000',
        'TOKYO 2020'
    ],
    'SPEED SKATING': [
        'ALBERTVILLE 1992', 'BEIJING 2022',
        'CALGARY 1988', 'GRENOBLE 1968',
        'INNSBRUCK 1976', 'LAKE PLACID 1980',
        'LILLEHAMMER 1994', 'NAGANO 1998',
        'PYEONGCHANG 2018', 'SALT LAKE 2002',
        'SAPPORO 1972', 'SARAJEVO 1984',
        'SOCHI 2014', 'TORINO 2006',
        'VANCOUVER 2010'
    ],
    'SPEED SKIING': ['ALBERTVILLE 1992'],
    'SPORT CLIMBING': ['PARIS 2024', 'TOKYO 2020'],
    SURFING: ['PARIS 2024', 'TOKYO 2020'],
    SWIMMING: [
        'ATHENS 2004', 'ATLANTA 1996',
        'BARCELONA 1992', 'BEIJING 2008',
        'LONDON 2012', 'LOS ANGELES 1984',
        'MEXICO 1968', 'MONTREAL 1976',
        'MOSCOW 1980', 'MUNICH 1972',
        'PARIS 2024', 'RIO 2016',
        'SEOUL 1988', 'SYDNEY 2000',
        'TOKYO 1964', 'TOKYO 2020'
    ],
    'SYNCHRONIZED SWIMMING': [
        'ATHENS 2004',
        'ATLANTA 1996',
        'BARCELONA 1992',
        'BEIJING 2008',
        'LONDON 2012',
        'RIO 2016',
        'SYDNEY 2000'
    ],
    'TABLE TENNIS': [
        'ATHENS 2004',
        'ATLANTA 1996',
        'BARCELONA 1992',
        'BEIJING 2008',
        'LONDON 2012',
        'PARIS 2024',
        'RIO 2016',
        'SEOUL 1988',
        'SYDNEY 2000',
        'TOKYO 2020'
    ],
    TAEKWONDO: [
        'ATHENS 2004',
        'BARCELONA 1992',
        'BEIJING 2008',
        'LONDON 2012',
        'PARIS 2024',
        'RIO 2016',
        'SEOUL 1988',
        'SYDNEY 2000',
        'TOKYO 2020'
    ],
    TENNIS: [
        'ATHENS 2004',
        'ATLANTA 1996',
        'BARCELONA 1992',
        'BEIJING 2008',
        'LONDON 2012',
        'LOS ANGELES 1984',
        'PARIS 2024',
        'RIO 2016',
        'SEOUL 1988',
        'SYDNEY 2000',
        'TOKYO 2020'
    ],
    TRAMPOLINE: [
        'ATHENS 2004',
        'BEIJING 2008',
        'LONDON 2012',
        'PARIS 2024',
        'RIO 2016',
        'TOKYO 2020'
    ],
    TRIATHLON: [
        'ATHENS 2004',
        'BEIJING 2008',
        'LONDON 2012',
        'PARIS 2024',
        'RIO 2016',
        'SYDNEY 2000',
        'TOKYO 2020'
    ],
    VOLLEYBALL: [
        'ATHENS 2004', 'ATLANTA 1996',
        'BARCELONA 1992', 'BEIJING 2008',
        'LONDON 2012', 'LOS ANGELES 1984',
        'MONTREAL 1976', 'MOSCOW 1980',
        'MUNICH 1972', 'PARIS 2024',
        'RIO 2016', 'SEOUL 1988',
        'SYDNEY 2000', 'TOKYO 1964',
        'TOKYO 2020'
    ],
    'WATER POLO': [
        'ATHENS 2004',
        'ATLANTA 1996',
        'BARCELONA 1992',
        'BEIJING 2008',
        'LONDON 2012',
        'MEXICO 1968',
        'PARIS 2024',
        'RIO 2016',
        'SEOUL 1988',
        'SYDNEY 2000',
        'TOKYO 2020'
    ],
    WEIGHTLIFTING: [
        'ATHENS 2004', 'ATLANTA 1996',
        'BARCELONA 1992', 'BEIJING 2008',
        'LONDON 2012', 'LOS ANGELES 1984',
        'MEXICO 1968', 'MONTREAL 1976',
        'MOSCOW 1980', 'MUNICH 1972',
        'PARIS 2024', 'RIO 2016',
        'SEOUL 1988', 'SYDNEY 2000',
        'TOKYO 1964', 'TOKYO 2020'
    ],
    WRESTLING: [
        'ATHENS 2004', 'ATLANTA 1996',
        'BARCELONA 1992', 'BEIJING 2008',
        'LONDON 2012', 'LOS ANGELES 1984',
        'MEXICO 1968', 'MONTREAL 1976',
        'MOSCOW 1980', 'MUNICH 1972',
        'PARIS 2024', 'RIO 2016',
        'SEOUL 1988', 'SYDNEY 2000',
        'TOKYO 1964', 'TOKYO 2020'
    ],
    YACHTING: ['ATLANTA 1996', 'LOS ANGELES 1984', 'MONTREAL 1976', 'SEOUL 1988']
};

const picformat = [
    { name: 'ALBERTVILLE 1992', picformat: 'png' },
    { name: 'ATHENS 2004', picformat: 'png' },
    { name: 'ATLANTA 1996', picformat: 'png' },
    { name: 'BARCELONA 1992', picformat: 'jpeg' },
    { name: 'BEIJING 2008', picformat: 'png' },
    { name: 'BEIJING 2022', picformat: 'png' },
    { name: 'CALGARY 1988', picformat: 'png' },
    { name: 'GRENOBLE 1968', picformat: 'png' },
    { name: 'INNSBRUCK 1976', picformat: 'png' },
    { name: 'LAKE PLACID 1980', picformat: 'png' },
    { name: 'LILLEHAMMER 1994', picformat: 'jpeg' },
    { name: 'LONDON 2012', picformat: 'png' },
    { name: 'LOS ANGELES 1984', picformat: 'png' },
    { name: 'MEXICO 1968', picformat: 'png' },
    { name: 'MONTREAL 1976', picformat: 'png' },
    { name: 'MOSCOW 1980', picformat: 'png' },
    { name: 'MUNICH 1972', picformat: 'png' },
    { name: 'NAGANO 1998', picformat: 'png' },
    { name: 'PARIS 2024', picformat: 'png' },
    { name: 'PYEONGCHANG 2018', picformat: 'png' },
    { name: 'RIO 2016', picformat: 'png' },
    { name: 'SALT LAKE 2002', picformat: 'png' },
    { name: 'SAPPORO 1972', picformat: 'png' },
    { name: 'SARAJEVO 1984', picformat: 'png' },
    { name: 'SEOUL 1988', picformat: 'png' },
    { name: 'SOCHI 2014', picformat: 'png' },
    { name: 'SYDNEY 2000', picformat: 'png' },
    { name: 'TOKYO 1964', picformat: 'jpeg' },
    { name: 'TOKYO 2020', picformat: 'png' },
    { name: 'TORINO 2006', picformat: 'png' },
    { name: 'VANCOUVER 2010', picformat: 'png' }
];

const imgSrcPrefix = 'cloud://mp-use-1g3c6ppmc5a56a95.6d70-mp-use-1g3c6ppmc5a56a95-1328437933';

export const pictogramsByTimetable = timetable.reverse().map(t => {
    const ext = picformat.find(p => p.name === t.key).picformat;
    const sportsPrograms = Object.keys(sportsByTimetable)
        .filter(key => sportsByTimetable[key].includes(t.key))
        .map(key => {
            const target = sports.find(s => s.en === key);
            return { ...target, imgSrc: `${imgSrcPrefix}/${t.key}/${key}.${ext}` };
        });
    return { ...t, sports: sportsPrograms };
});
export const pictogramsBySports = sportsAscByPinyin.map(s => {
    const filtered = sports.filter(sp => sp.cn === s);
    return filtered
        .map(sp => sportsByTimetable[sp.en])
        .map(list => {
            return timetable.filter(t => list.includes(t.key))
        })
        .map((list, index) => {
            const sp = filtered[index];
            return {
                ...sp, list: list.map((item) => {
                    const { key, place, season } = item;
                    const ext = picformat.find(p => p.name === item.key).picformat;
                    return {
                        src: `${imgSrcPrefix}/${item.key}/${sp.en}.${ext}`,
                        title: `${key.slice(-4)} ${place}${season === 'winter' ? '冬奥会' : '奥运会'}`,
                        season,
                    }
                })
            };
        })
}).map(sports => {
    const result = [];
    sports.forEach(sp => result.push(...sp.list));
    return { key: sports[0].cn, season: sports[0].list[0].season, list: result };
    // 内容过多，导航都放不下，所以过滤
}).filter(item => item.season !== 'winter' && item.list.length > 1)

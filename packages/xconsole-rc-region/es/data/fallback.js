export var District = {
  ASIA_PACIFIC: {
    districtId: 'asia-pacific',
    cnName: '亚太',
    enName: 'Asia Pacific',
    showName: '亚太',
    ordering: 101
  },
  EUROPE_AND_AMERICA: {
    districtId: 'europe-americas',
    cnName: '欧洲与美洲',
    enName: 'Europe & Americas',
    showName: '欧洲与美洲',
    ordering: 102
  },
  MIDDEL_EAST_AND_INDIA: {
    districtId: 'middleeast-india',
    cnName: '中东与印度',
    enName: 'Middle East & India',
    showName: '中东与印度',
    ordering: 103
  }
};
export default [{
  type: 'region',
  name: 'cn-qingdao',
  cnName: '华北 1',
  enName: 'China North 1 (Qingdao)',
  showName: '华北1（青岛）',
  description: '华北 1',
  enDescription: 'China North 1 (Qingdao)',
  ordering: 101,
  district: District.ASIA_PACIFIC
}, {
  type: 'region',
  name: 'cn-beijing',
  cnName: '华北 2',
  enName: 'China North 2 (Beijing)',
  showName: '华北2（北京）',
  description: '华北 2',
  enDescription: 'China North 2 (Beijing)',
  ordering: 102,
  district: District.ASIA_PACIFIC
}, {
  type: 'region',
  name: 'cn-zhangjiakou',
  cnName: '华北 3',
  enName: 'China North 3 (Zhangjiakou)',
  showName: '华北3（张家口）',
  description: '华北 3',
  enDescription: 'China North 3 (Zhangjiakou)',
  ordering: 103,
  district: District.ASIA_PACIFIC
}, {
  type: 'region',
  name: 'cn-huhehaote',
  cnName: '华北 5',
  enName: 'China North 5 (Huhehaote)',
  showName: '华北5（呼和浩特）',
  description: null,
  enDescription: null,
  ordering: 105,
  district: District.ASIA_PACIFIC
}, {
  type: 'region',
  name: 'cn-hangzhou',
  cnName: '华东 1',
  enName: 'China East 1 (Hangzhou)',
  showName: '华东1（杭州）',
  description: '华东 1',
  enDescription: 'China East 1 (Hangzhou)',
  ordering: 111,
  district: District.ASIA_PACIFIC
}, {
  type: 'region',
  name: 'cn-shanghai',
  cnName: '华东 2',
  enName: 'China East 2 (Shanghai)',
  showName: '华东2（上海）',
  description: '华东 2',
  enDescription: 'China East 2 (Shanghai)',
  ordering: 112,
  district: District.ASIA_PACIFIC
}, {
  type: 'region',
  name: 'cn-shenzhen',
  cnName: '华南 1',
  enName: 'China South 1 (Shenzhen)',
  showName: '华南1（深圳）',
  description: '华南 1',
  enDescription: 'China South 1 (Shenzhen)',
  ordering: 121,
  district: District.ASIA_PACIFIC
}, {
  type: 'region',
  name: 'cn-hongkong',
  cnName: '香港',
  enName: 'Hong Kong',
  showName: '香港',
  description: '香港Region',
  enDescription: null,
  ordering: 141,
  district: District.ASIA_PACIFIC
}, {
  type: 'region',
  name: 'ap-southeast-1',
  cnName: '亚太东南 1 (新加坡)',
  enName: 'Asia Pacific SE 1 (Singapore)',
  showName: '新加坡',
  description: '亚太东南 1 (新加坡)',
  enDescription: 'Asia Pacific SE 1 (Singapore)',
  ordering: 211,
  district: District.ASIA_PACIFIC
}, {
  type: 'region',
  name: 'ap-southeast-2',
  cnName: '亚太东南 2 (悉尼)',
  enName: 'Asia Pacific SE 2 (Sydney)',
  showName: '澳大利亚（悉尼）',
  description: '亚太东南 2 (悉尼)',
  enDescription: 'Asia Pacific SE 2 (Sydney)',
  ordering: 212,
  district: District.ASIA_PACIFIC
}, {
  type: 'region',
  name: 'ap-southeast-3',
  cnName: '亚太东南3 (吉隆坡)',
  enName: 'Asia Pacific SE 3 (Kuala Lumpur)',
  showName: '马来西亚（吉隆坡）',
  description: null,
  enDescription: null,
  ordering: 213,
  district: District.ASIA_PACIFIC
}, {
  type: 'region',
  name: 'ap-northeast-1',
  cnName: '亚太东北 1 (东京)',
  enName: 'Asia Pacific NE 1 (Tokyo)',
  showName: '日本（东京）',
  description: '亚太东北 1 (东京)',
  enDescription: 'Asia Pacific NE 1 (Tokyo)',
  ordering: 221,
  district: District.ASIA_PACIFIC
}, {
  type: 'region',
  name: 'us-west-1',
  cnName: '美国西部 1 (硅谷)',
  enName: 'US West 1 (Silicon Valley)',
  showName: '美国（硅谷）',
  description: '美国西部 1 (硅谷)',
  enDescription: 'US West 1 (Silicon Valley)',
  ordering: 311,
  district: District.EUROPE_AND_AMERICA
}, {
  type: 'region',
  name: 'us-east-1',
  cnName: '美国东部 1 (弗吉尼亚)',
  enName: 'US East 1 (Virginia)',
  showName: '美国（弗吉尼亚）',
  description: '美国东部 1 (弗吉尼亚)',
  enDescription: 'US East 1 (Virginia)',
  ordering: 312,
  district: District.EUROPE_AND_AMERICA
}, {
  type: 'region',
  name: 'eu-central-1',
  cnName: '欧洲中部 1 (法兰克福)',
  enName: 'EU Central 1 (Frankfurt)',
  showName: '德国（法兰克福）',
  description: '欧洲中部 1 (法兰克福)',
  enDescription: 'EU Central 1 (Frankfurt)',
  ordering: 313,
  district: District.EUROPE_AND_AMERICA
}, {
  type: 'region',
  name: 'me-east-1',
  cnName: '中东东部 1 (迪拜)',
  enName: 'Middle East 1 (Dubai)',
  showName: '阿联酋（迪拜）',
  description: '中东东部 1 (迪拜)',
  enDescription: 'Middle East 1 (Dubai)',
  ordering: 411,
  district: District.MIDDEL_EAST_AND_INDIA
}, {
  type: 'region',
  name: 'ap-south-1',
  cnName: '亚太南部 1 (孟买)',
  enName: 'Asia Pacific SOU 1 (Mumbai)',
  showName: '印度（孟买）',
  description: null,
  enDescription: null,
  ordering: 421,
  district: District.MIDDEL_EAST_AND_INDIA
}, {
  type: 'region',
  name: 'ap-southeast-5',
  cnName: '亚太东南 5 (雅加达)',
  enName: 'Asia Pacific SE 5 (Jakarta)',
  showName: '印度尼西亚（雅加达）',
  description: null,
  enDescription: null,
  ordering: 215,
  district: District.ASIA_PACIFIC
}];
import type { langType } from '../../utils/typings';
const lang: langType = {
  name: '正體中文',
  title: '老頭環地圖 EldenRing Map',
  menu: {
    map: '地圖',
    apo: '訊息',
    routes: '支線(開發中)',
    general: '設定',
    about: '說明',
  },
  map: {
    topright: {
      search: '搜索',
      add: '添加地標',
      placeholder: '搜索地標',
      result: '{result}個結果，點此清除結果',
      editModeHint: '在地圖上點擊一點添加坐標',
      editModeBtn: '退出編輯',
      changePositionModeHint: '在地圖上選擇新的位置',
    },
    left: {
      buttonBeforeOpen: '篩<br />選',
      buttonAfterOpen: '收<br />回',
      undergroundSwitcher1: '切換到地下地圖',
      undergroundSwitcher2: '切換到地面地圖',
      surface: '地表',
      cave: '洞穴墓穴下水道',
      afterBurning: '灰城',
      tips: 'tips:點擊地圖上的地標可以查看詳細ㄛ~',
      showNameButton: '顯示地名',
      fontSizeLabel: '字號',
      fontSizeSmall: '小',
      fontSizeMedium: '中',
      fontSizeLarge: '大',
    },
    bottom: {
      developerAndProvider: '開發&提供',
      donate: '請一杯奶茶',
    },
    modals: {
      add: {
        title: '添加一個地標',
        surface: '位於地面',
        underground: '位於地下',
        selector: '選擇類型',
        namePlaceHolder: '名稱',
        descPlaceHolder: '描述',
        reposition: '重新選擇位置',
        btn1: '添加',
        btn1EditMode: '修改',
        btn2: '取消',
        editModeTitle: '修改 {title}',
        addTip1: '添加前請仔細確認是否已經有人添加過了,沒有找到可能是因爲篩選沒有選擇()',
        addTip2: '若要補充信息請編輯原有地標的説明，不要另外添加同名地標~',
      },
      info: {
        like: '給予好評',
        dislike: '給予惡評',
        edit: '編輯',
        delete: '刪除',
        collect: '收藏',
        uncollect: '取消收藏',
        hide: '隱藏',
        lock: '鎖定',
        btn1: '關閉',
      },
      delete: {
        btn1: '確認刪除',
        btn2: '取消',
      },
    },
    alert: {
      exceeded: '名字(≤20)/描述(≤1000)太長了~',
      empty: '請填寫名字/選擇類型再提交~',
      repeat: '已經有了同名的地標了，請點"取消"返回去檢查一下捏，記得左邊篩選欄打開全選（）\r\n※ 如果要補充信息請編輯原有地標的説明 \r\n※ 如果是這裡判斷錯了，請點"確定"繼續添加',
      maperror: 'Oops! 從伺服器獲取數據失敗ㄌ(っ °Д °;)っ \r\n 如果刷新一下還不行的話恐怕是程式bug, 去訊息反饋一下吧orz',
    },
  },
  apothegm: {
    header: {
      placeholder: '搜索訊息',
      search: '搜索',
      result: '清楚結果',
      write: '寫下訊息',
      my: '我發送的',
    },
    list: {
      replies: '回應',
      like: '好評',
      dislike: '惡評',
    },
    reply: {
      return: '返回',
      delete: '刪除',
      share: '分享',
      reply: '留言',
    },
    modals: {
      add: {
        title: '寫下訊息',
        selector: '選擇類型',
        titlePlaceHolder: '標題',
        contentPlaceHolder: '內容',
        btn1: '寫下訊息',
        btn2: '收回褪色者手指',
      },
      reply: {
        title: '寫下對訊息的回應',
        contentPlaceHolder: '內容',
        btn1: '回應',
        btn2: '收回褪色者手指',
      },
      share: {
        title: '請長按拷貝',
        btn1: '返回',
      },
    },
    alert: {
      titleExceeded: '標題(≤20)/內容(≤1000)太長了~',
      titleEmpty: '請填寫標題/類型再提交~',
      contentExceeded: '內容(≤1000)太長了~',
      contentEmpty: '請填寫內容再提交~',
    },
  },
  general: {
    menulang: '菜單語言',
    maplang: '地圖語言轉換',
    dontConvert: '不轉換',
    theresNoHiddenPointByNow: '目前沒有隱藏點捏，點開地標後在下面可以隱藏這個地標，篩選欄裡可以切換是否顯示~',
    therereSomeHiddenPoints: '目前有{count}個隱藏點，確定要清除隱藏狀態，全部重置嗎?',
    hiddenPointYattaze: '重置了',
    clearHiddenPointButton: '重置所有隱藏點',
    developing: '後續功能開發中',
  },
  about: {
    lastUpdate: '最近更新',
    coffee: '請一杯奶茶☕',
    feedback: '漏洞・意見反饋',
    github: 'GitHub頁面',
    modals: {
      coffee: {
        text: '覺得幫到了自己的話，可以請咱喝一杯奶茶當作創作激勵(以及伺服器費用',
        or: '或者...',
        btn1: 'OK',
      },
    },
  },
  siteTypes: {
    functionalFilters: {
      myPoints: '我標註的',
      myCollect: '我的收藏',
      showHidden: '顯示隱藏的',
      hideBad: '隱藏惡評',
      selectAll: '全選/全不選',
      hideBadTip: '請註意：此舉會隱藏除了賜福外的所有惡評>好評的標註，一些實際上正確的標註也可能被包含在內!',
    },
    filterGroupNames: {
      sites: '地點',
      enemy: '敵人',
      items: '道具',
      collection: '收集',
      weapons: '武器',
      message: '留言',
    },
    filters: {
      cifu: '賜福',
      jiejing: '捷徑',
      portal: '傳送門',
      soulsite: '刷魂點',
      shop: '商店',
      npc: 'NPC',
      map: '地圖碎片',
      lianji: '聯機點',
      wind: '靈魂氣流',
      cave: '洞窟',
      cemetery: '地下墓穴',
      sword: '封印監牢',
      temple: '靈廟',
      place: '地點',
      bigboss: '半神BOSS',
      boss: 'BOSS(成就)',
      littleboss: '小BOSS',
      redsoul: '紅靈入侵',
      jingyingguai: '精英怪',
      stone: '鍛造石',
      orchid: '墓地鈴蘭',
      goldenseed: '黃金種子',
      ludi: '露滴',
      shengbeiludi: '聖杯露滴',
      bead: '鈴珠',
      key: '石劍鑰匙',
      sigen: '死根',
      item: '一般道具',
      gesture: '姿態',
      paint: '畫',
      magic: '魔法',
      daogao: '禱告',
      weapon: '武器',
      clothes: '裝備',
      zhanhui: '戰灰',
      guhui: '骨灰',
      text: '說明',
      warn: '警示',
      question: '求助',
      taoke: '逃課',
      importantitem: '重要道具',
      metarial: '材料',
      ring: '戒指護符',
      tear: '淚滴幼體',
    },
  },
  apoTypes: {
    functionalFilters: {
      all: '全部',
      my: '我的',
    },
    filterGroupNames: {
      website: '網站相關',
      game: '遊戲相關',
      others: '其他',
    },
    filters: {
      update: '更新',
      suggest: '建議',
      bug: 'Bug報道',
      strategy: '攻略',
      kokoroe: '心得',
      ask: '求助',
      message: '留言',
      water: '氵',
    },
  },
};
export default lang;

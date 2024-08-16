import { throttle } from '../../utils/func';

Component({
  behaviors: [],
  options: {
    addGlobalClass: false,
    virtualHost: true,
    pureDataPattern: /^_/,
  },
  properties: {
    alphabet: {
      type: Array,
      value: [],
    },
    currentKey: {
      type: String,
      value: '',
    },
  },

  data: {
    current: '',
    touching: false,
    _vibrated: true,
    _anchorItemH: 0,
    _anchorItemW: 0,
    _anchorTop: 0,
  },

  observers: {
    'alphabet': function (alphabet) {
      if (alphabet.length === 0) {
        return;
      }
      // 当数据更新后重新计算位置
      this.setData({ current: alphabet[0]?.label }, () => {
        // 右侧目录计算
        const query = this.createSelectorQuery()
        query.select('.anchor-list').boundingClientRect(rect => {
          this.data._anchorItemH = rect.height / this.data.alphabet.length
          this.data._anchorItemW = rect.width
          this.data._anchorTop = rect.top
        }).exec();
        this._sharedCurrentIdx = wx.worklet.shared(0)
      });
    },
    'current': function (current) {
      this._sharedCurrentIdx.value = this.data.alphabet.map(t => t.label).indexOf(current)
    },
    'currentKey': function (currentKey) {
      this.setData({ current: currentKey });
    }
  },

  lifetimes: {
    created() {
      this._handlePan = throttle(this._handlePan, 100)
      this._sharedCurrentIdx = wx.worklet.shared(0)
    },
    attached() {
      // 右侧目录计算
      const query = this.createSelectorQuery()
      query.select('.anchor-list').boundingClientRect(rect => {
        this.data._anchorItemH = rect.height / this.data.alphabet.length
        this.data._anchorItemW = rect.width
        this.data._anchorTop = rect.top
      }).exec()
    },
  },
  methods: {
    handlePan(e) {
      this._handlePan(e)
    },
    _handlePan(e) {
      const data = this.data
      const clientY = e.changedTouches[0].clientY
      const index = Math.floor((clientY - data._anchorTop) / data._anchorItemH)
      const current = data.alphabet[index].label
      if (current !== this.data.current) {
        wx.vibrateShort({
          type: 'light'
        })
        this.setData({
          current,
          touching: true
        })
      }
      this.triggerEvent('change', { index: current }, {});
    },
    cancelPan() {
      setTimeout(() => {
        this.setData({ touching: false })
      }, 150)
    },
  }
})

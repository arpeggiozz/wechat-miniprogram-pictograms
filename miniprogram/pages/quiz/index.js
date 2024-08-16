// pages/quiz/index.js
import { pictogramsByTimetable } from '../knowledge/constants';
import { getQuizIndex, setMore, setQuizIndex } from '../../utils/storage';

function randomPickFromArray(arr, limit) {
  return new Array(arr.length).fill(1).map((_, index) => index)
    .sort(((prev, next) => Math.random() > 0.5 ? 1 : -1))
    .slice(0, limit)
    .map(idx => arr[idx]);
}

function generateQuizs(next) {
  let idx = getQuizIndex();
  if (next) {
    idx += 2;
    setQuizIndex(idx % pictogramsByTimetable.length);
  }
  const { key, place, season, sports } = pictogramsByTimetable[idx];
  return randomPickFromArray(sports, 8).map(sport => ({ key: sport.cn, imgSrc: sport.imgSrc, solved: false, olympic: `${key.slice(-4)} ${place}${season === 'winter' ? '冬奥会' : '奥运会'}` }));
}

Page({
  /**
   * 页面的初始数据
   */
  data: {
    gridPositions: [],
    movablePosition: {},
    imgSize: 0,
    quizs: [],
    current: 0,
    orders: [],
    timerStatus: 0,
    completed: false,
    changing: false,
    btnPositionTop: 0,
    showButton: false,
    showHint: false,
  },
  onLoad() {
    const margin = 20;
    this.createSelectorQuery().select('.movable-area').boundingClientRect((rect) => {
      const { width, height } = rect;
      const imgSize = Math.floor((Math.min(width, height) - margin) / 3);
      const diff = Math.abs(width - height);
      const gridPositions = [
        { x: margin + imgSize * 0, y: margin / 2 },
        { x: margin + imgSize * 1, y: margin / 2 },
        { x: margin + imgSize * 2, y: margin / 2 },
        { x: margin + imgSize * 0, y: margin / 2 + imgSize },
        { x: margin + imgSize * 1, y: margin / 2 + imgSize, movable: true },
        { x: margin + imgSize * 2, y: margin / 2 + imgSize },
        { x: margin + imgSize * 0, y: margin / 2 + imgSize * 2 },
        { x: margin + imgSize * 1, y: margin / 2 + imgSize * 2 },
        { x: margin + imgSize * 2, y: margin / 2 + imgSize * 2 },
      ];
      let btnPositionTop = 0;
      if (width < height) {
        gridPositions.forEach(p => p.y += diff / 2);
        btnPositionTop = (height + gridPositions[7].y + imgSize) / 2 - 16;
      } else {
        gridPositions.forEach(p => p.x += diff / 2);
      }
      const randomOrders = randomPickFromArray([0, 1, 2, 3, 4, 5, 6, 7], 8);
      this.setData({
        gridPositions: gridPositions.filter(p => !p.movable),
        movablePosition: gridPositions.find(p => p.movable),
        imgSize: imgSize - margin,
        quizs: generateQuizs(),
        current: randomOrders[0],
        orders: randomOrders.slice(1),
        btnPositionTop,
      });
    }).exec();
  },
  handleChange(e) {
    if (e.detail.source === 'touch' && this.data.timerStatus === 0) {
      this.setData({ timerStatus: 1 });
    }
    const { x, y } = e.detail;
    const { x: targetX, y: targetY } = this.data.gridPositions[this.data.current];
    const fix = 20;
    if (x > targetX - fix && x < targetX + fix && y > targetY - fix && y < targetY + fix) {
      wx.vibrateShort({
        type: 'light'
      });
      if (this.data.orders.length === 0) {
        this.setData({
          quizs: this.data.quizs.map((q, index) => ({ ...q, solved: q.solved || index === this.data.current })),
          completed: true,
          timerStatus: 2,
          movablePosition: { ...this.data.movablePosition }
        });
        setTimeout(() => {
          this.setData({ showButton: true });
        }, 1000);
        return;
      }
      const next = this.data.orders[0];
      this.setData({
        quizs: this.data.quizs.map((q, index) => ({ ...q, solved: q.solved || index === this.data.current })),
        current: this.data.orders[0],
        orders: this.data.orders.slice(1),
        changing: true,
      }, () => {
        this.setData({ movablePosition: { ...this.data.movablePosition }, changing: false })
      });
    }
  },
  handleNext() {
    const randomOrders = randomPickFromArray([0, 1, 2, 3, 4, 5, 6, 7], 8);
    this.setData({
      quizs: generateQuizs(true),
      current: randomOrders[0],
      orders: randomOrders.slice(1),
      timerStatus: 0,
      completed: false,
      showButton: false,
    });
  },
  handleTap(e) {
    if (this.data.timerStatus === 0) {
      this.setData({ showHint: true }, () => {
        setTimeout(() => {
          this.setData({ showHint: false })
        }, 1500);
      })
    }
  },
  handleMore() {
    setMore(getQuizIndex());
    // 跳转到预览页
    wx.switchTab({ url: '/pages/knowledge/index' })
  },
});

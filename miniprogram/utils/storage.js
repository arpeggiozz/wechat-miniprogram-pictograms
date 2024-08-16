const albumKey = 'PICTOGRAM_ALBUM';
const quizIndexKey = 'QUIZ_INDEX';
const learnMoreKey = 'KNOWLEDGE_MORE_INDEX';

const map = new Map();

export function getAlbum() {
  const album = map.get(albumKey);
  if (album) {
    return album
  }
  return []
}

export function setAlbum(content) {
  map.set(albumKey, content);
}

export function getQuizIndex() {
  try {
    return wx.getStorageSync(quizIndexKey) || 0;
  } catch (e) {
    return 0;
  }
}

export function setQuizIndex(idx) {
  try {
    wx.setStorageSync(quizIndexKey, idx);
  } catch (e) {

  }
}

export function getMore() {
  const more = map.get(learnMoreKey);
  if (more || more === 0) {
    return more
  }
  return -1
}

export function setMore(content) {
  map.set(learnMoreKey, content);
}

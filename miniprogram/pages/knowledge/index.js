import { getMore, setMore } from '../../utils/storage';
import { pictogramsByTimetable, pictogramsBySports, sportsPinyinInitials } from './constants';

const contentsByTime = pictogramsByTimetable
    .map(t => {
        const { key, place, season, sports, desc } = t;
        return {
            key: `${key.slice(-4)} ${place}${season === 'winter' ? '冬季奥运会' : '奥运会'}`,
            desc,
            list: sports.map((sport, index) => ({
                src: sport.imgSrc,
                title: sport.cn,
                id: Date.now() + String(index)
            }))
        };
    });

const contentsBySports = pictogramsBySports.map(sp => {
    return {
        key: sp.key,
        initial: sportsPinyinInitials[sp.key],
        list: sp.list.map((item, index) => ({ ...item, id: Date.now() + String(index) }))
    }
});

// pages/knowledge/index.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        tabs: [{ title: '按时间' }, { title: '按项目' }],
        halfScreenOffset: 72,

        /** 图片配置项 */
        imageWidth: 0,
        imageMargin: 16, // 图片间距
        lineLimit: 2, // 每行多少张图片

        filterTab: 0,

        contents: [],
        current: 0,
        currentDetailDesc: '',

        showPreview: false,
        previewDetail: {},

        sliderOptions: [],
    },
    onLoad() {
        const { imageMargin, lineLimit } = this.data
        const { screenWidth } = wx.getSystemInfoSync()
        this.setData({
            imageWidth: (screenWidth - imageMargin * 4) / lineLimit, // 图片宽度
            contents: contentsByTime,
            current: 0,
            currentKey: contentsByTime[0].key,
            currentDetailDesc: contentsByTime[0].desc || ' ',
            sliderOptions: contentsByTime.map((t, index) => ({
                label: t.key,
                abbr: index % 4 === 3 ? '-' : '•',
            })),
        });
    },
    onShow() {
        const more = getMore();
        if (more === -1) {
            return;
        }
        setMore(-1);
        if (this.data.filterTab !== 0) {
            this.setData({ filterTab: 0 });
        }
        this.setData({
            contents: contentsByTime,
            current: more,
            currentKey: contentsByTime[more].key,
            currentDetailDesc: contentsByTime[more].desc || ' ',
            sliderOptions: contentsByTime.map((t, index) => ({
                label: t.key,
                abbr: index % 4 === 3 ? '-' : '•',
            })),
        });
    },
    onTabChange(e) {
        const { index } = e.detail
        this.setData({ filterTab: index });
        // 按时间
        if (index === 0) {
            this.setData({
                contents: contentsByTime,
                current: 0,
                currentKey: contentsByTime[0].key,
                currentDetailDesc: contentsByTime[0].desc || ' ',
                sliderOptions: contentsByTime.map((t, index) => ({
                    label: t.key,
                    abbr: index % 4 === 3 ? '-' : '•',
                })),
            });
        }
        // 按项目
        if (index === 1) {
            this.setData({
                contents: contentsBySports,
                current: 0,
                currentKey: contentsBySports[0].key,
                sliderOptions: contentsBySports.map((t, index) => {
                    let abbr = t.initial;
                    if (index > 0) {
                        abbr = contentsBySports[index - 1].initial === t.initial ? '•' : t.initial
                    }
                    return { label: t.key, abbr };
                }),
            });
        }
    },
    handleSwiper(e) {
        const { current } = e.detail;
        const { key, desc } = this.data.contents[current];
        this.setData({ current, currentKey: key, currentDetailDesc: desc || ' ' });
    },
    handlePreview(e) {
        this.setData({ showPreview: true, previewDetail: e.detail });
    },
    handleSliderChange(e) {
        const current = this.data.contents.findIndex((c) => c.key === e.detail.index);
        this.setData({ current });
    }
});

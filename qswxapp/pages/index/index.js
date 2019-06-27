//index.js
//获取应用实例
const app = getApp();
const baseUrl = "http://49.234.19.139:9999/questionnaire/";

Page({
    data: {},
    qsIdInput: function(e) {
        this.setData({
            qsId: e.detail.value
        })
    },
    getQsdata: function(e) {
        let that = this;
        let qsId = this.data.qsId || 83;
        wx.request({
            url: baseUrl + `questionnaire/loadQsnaire/${qsId}`,
            method: "GET",
            complete: ({data}) => {
                if(data.code === 0) {
                    that.setData({
                        searchResultQsData: data.data
                    })
                }
            }
        })
    },
    goQsPage: function () {
        wx.navigateTo({
            url: '../questionnaire/questionnaire'
        })
    },
    onLoad: function () {

    },
})

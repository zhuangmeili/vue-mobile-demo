/**
 * Created by Administrator on 2017/6/22 0022.
 * 约定 全局变量方法一定要大写，下划线分隔
 * 全局变量  GLO_
 * 全局方法 GLO_FN_   开头
 * 全局 格式化数据方法 GLO_FORMATE_  开头
 *
 *
 */
import Vue from 'vue'
window.IMG_URL="http://img.99114.com";
//全局变量的定义
window.GLO_DOMAIN = "https://p.youpin114.com";
window.GLO_USERINFO = {
  "nickName":"素颜清黛",
  "gender":2,
  "language":"zh_CN",
  "city":"",
  "province":"",
  "country":"CN",
  "avatarUrl": "http://wx.qlogo.cn/mmopen/vi_32/ZIa586hPAJwDJRZDGr1lY0y0p8Lju6bwpmPRUzzW6yQJvZYOUA0Aib3r86XZibfRdTxY5LQiaCDbHaqV3ugvCiaLsg/0",
  "id":"1001"
};

//全局经纬度
window.GLO_ORIG ={
  latitude: 39.90403,
  longitude: 116.407526
};

//浏览量处理
Vue.prototype.FORMAT_BIGR_NUM= function(num){
  if(typeof num != 'number'){
    return num;
  }
  if(num < 100000){
    return num;
  }
  if(num < 100000000){
    return parseInt(num / 10000) + 'W+';
  }
  return '9999W+'
}


//全局方法 在这里定义  。页面中 使用 this.fn1;
Vue.prototype.GLO_FN_NAME1=function () {
  //你的方法
  alert(1234);
};

//格式化数据为 两位数
Vue.prototype.GLO_FORMATE_NUMBER=function(n) {
  n = n.toString();
  return n[1] ? n : '0' + n
};

//格式化日期 例如 ：2017-02-13 15:00
Vue.prototype.GLO_FORMATE_DATE_HOUR_MIN=function(date){
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();

  return [year, month, day,].map(this.GLO_FORMATE_NUMBER).join('-')+ ' ' + [hour, minute].map(this.GLO_FORMATE_NUMBER).join(':');
};


//格式化日期 例如 ：02-13 15:00
Vue.prototype.GLO_DATE_HOUR_MIN=function(date){

  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  return [month, day,].map(this.GLO_FORMATE_NUMBER).join('-')+ ' ' + [hour, minute].map(this.GLO_FORMATE_NUMBER).join(':');
};

//格式化日期 例如 ：2017-02-13   8:00     02-13  8:00
Vue.prototype.GLO_FORMATE_YEAR_DATE_HOUR_MIN=function (date){
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();

  var now = new Date();
  var _year = now.getFullYear()
  var _month = now.getMonth()
  var _day = now.getDate()
  var _hour = date.getHours();
  var _minute = date.getMinutes();

  if(year >_year){
    return [year, month, day,].map(this.GLO_FORMATE_NUMBER).join('-')+ ' ' + [hour, minute].map(this.GLO_FORMATE_NUMBER).join(':');
  }else{
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    var interval = (now.getTime() - date.getTime()) / (3600 * 1000 * 24);
    return [ month, day].map(this.GLO_FORMATE_NUMBER).join('-') +' '+ [hour, minute].map(this.GLO_FORMATE_NUMBER).join(':');;
  }
};


//格式化日期 例如 ：2017-02-13 星期三  02-13 星期三
Vue.prototype.GLO_FORMATE_DATE_WEEK=function (date){
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();

  var now = new Date();
  var _year = now.getFullYear()
  var _month = now.getMonth()
  var _day = now.getDate()
  var _hour = date.getHours();
  var _minute = date.getMinutes();

  if(year >_year){
    return [year, month, day,].map(this.GLO_FORMATE_NUMBER).join('-')+ ' ' + this.GLO_FORMATE_WEEK(date);
  }else{
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    var interval = (now.getTime() - date.getTime()) / (3600 * 1000 * 24);
    return [ month, day].map(this.GLO_FORMATE_NUMBER).join('-') + " " + this.GLO_FORMATE_WEEK(date);
  }
};


//格式化日期 例如 ：2017-02-13 星期三  8:00     02-13 星期三  8:00
Vue.prototype.GLO_FORMATE_DATE_WEEK_HOUR_MIN=function (date){
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();

  var now = new Date();
  var _year = now.getFullYear()
  var _month = now.getMonth()
  var _day = now.getDate()
  var _hour = date.getHours();
  var _minute = date.getMinutes();

  if(year >_year){
    return [year, month, day,].map(this.GLO_FORMATE_NUMBER).join('-')+ ' ' + this.GLO_FORMATE_WEEK(date)+ ' ' + [hour, minute].map(this.GLO_FORMATE_NUMBER).join(':');
  }else{
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    var interval = (now.getTime() - date.getTime()) / (3600 * 1000 * 24);
    return [ month, day].map(this.GLO_FORMATE_NUMBER).join('-') + " " + this.GLO_FORMATE_WEEK(date)+' '+ [hour, minute].map(this.GLO_FORMATE_NUMBER).join(':');;
  }
};

//格式化日期   星期几
Vue.prototype.GLO_FORMATE_WEEK=function (date){
  var prefix ="周";
  var num = date.getDay();
  switch(num){
    case 1:
      return prefix+"一";
    case 2:
      return prefix+"二";
    case 3:
      return prefix+"三";
    case 4:
      return prefix+"四";
    case 5:
      return prefix+"五";
    case 6:
      return prefix+"六";
    case 0:
      return prefix+"日";
  }

}


//格式化日期 例如 ：2017-02-13
Vue.prototype.GLO_FORMATE_DATE=function(date){
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return [year, month, day].map(this.GLO_FORMATE_NUMBER).join('-');
};
Vue.prototype.GLO_FORMATE_HOUR=function(date){
  var hour = date.getHours()
  var minute = date.getMinutes()
  return [hour, minute].map(this.GLO_FORMATE_NUMBER).join(':')
}



//时间差：超过一天显示天，不超过的显示时分秒
Vue.prototype.GLO_FORMATE_TIMEDIFF2=function(date1, date2){
  let time1 = date1.getTime();
  let time2 = date2.getTime();
  let timeDiff = time1 - time2;
  if(timeDiff < 0){
    return 0;
  }
  let dayDiff = ~~((time1 - time2) / (1000 * 60 * 60 * 24));
  if(dayDiff > 1){
    return dayDiff + '天';
  }
  let hour = ~~(timeDiff / 1000 / 60 / 60 % 24);
  let minute = ~~(timeDiff / 1000 / 60 % 60);
  let second = ~~(timeDiff / 1000 % 60);
  return [hour, minute, second].map(this.GLO_FORMATE_NUMBER).join(':');
};


//时间差：超过一天显示天和小时，不超过的显示时分秒
Vue.prototype.GLO_FORMATE_TIMEDIFF3=function(date1, date2){
  let time1 = date1.getTime();
  let time2 = date2.getTime();
  let timeDiff = time1 - time2;
  if(timeDiff < 0){
    return 0;
  }
  let dayDiff = ~~((time1 - time2) / (1000 * 60 * 60 * 24));
  let hour = ~~(timeDiff / 1000 / 60 / 60 % 24);
  if(dayDiff > 1){
    return dayDiff + '天' + hour + "时";
  }

  let minute = ~~(timeDiff / 1000 / 60 % 60);
  let second = ~~(timeDiff / 1000 % 60);
  return [hour, minute, second].map(this.GLO_FORMATE_NUMBER).join(':');
};



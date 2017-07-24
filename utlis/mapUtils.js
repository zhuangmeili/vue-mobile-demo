/**
 * Created by Administrator on 2017/6/23 0023.
 * 地图相关的设置在这里
 * 前缀 GLO_MAP
 *
 */
import Vue from 'vue'
window.GLO_MAP_EARTH_RADIUS=6378137;
window.GLO_MAP_RADIUS= (d) => d * Math.PI / 180.0;

Vue.prototype.GLO_MAP_GETDISTANCE=function (lat1, lng1, lat2, lng2) {
  if(!lat1 || !lng1 || !lat2 || !lng2){
    return "距离未知";
  }
  lat1 = GLO_MAP_RADIUS(lat1);
  lng1 = GLO_MAP_RADIUS(lng1);
  lat2 = GLO_MAP_RADIUS(lat2);
  lng2 = GLO_MAP_RADIUS(lng2);
  let distance = Math.acos(Math.cos(lat1) * Math.cos(lng1) * Math.cos(lat2) * Math.cos(lng2) + Math.cos(lat1) * Math.sin(lng1) * Math.cos(lat2) * Math.sin(lng2) + Math.sin(lat1) * Math.sin(lat2)) * GLO_MAP_EARTH_RADIUS;
  if(~~distance <= 1000){
    return ~~(distance) + "m";
  }else{
    return ~~(distance / 1000) + "km";
  }
};
Vue.prototype.GLO_MAP_GEPURLDISTANCE=function (lat1, lng1, lat2, lng2) {
  if (!lat1 || !lng1 || !lat2 || !lng2) {
    return -1;
  }
  lat1 = GLO_MAP_RADIUS(lat1);
  lng1 = GLO_MAP_RADIUS(lng1);
  lat2 = GLO_MAP_RADIUS(lat2);
  lng2 = GLO_MAP_RADIUS(lng2);
  let distance = Math.acos(Math.cos(lat1) * Math.cos(lng1) * Math.cos(lat2) * Math.cos(lng2) + Math.cos(lat1) * Math.sin(lng1) * Math.cos(lat2) * Math.sin(lng2) + Math.sin(lat1) * Math.sin(lat2)) * GLO_MAP_EARTH_RADIUS;
  return distance;
};


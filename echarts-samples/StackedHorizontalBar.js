import * as echarts from "echarts";

var chartDom = document.getElementById("main");
var myChart = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow", // マウスホバー時のハイライト
    },
  },
  legend: {
    top: "5%",
    left: "center",
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "value",
    max: 100, // 100% を基準にする
    name: "割合 (%)",
  },
  yAxis: {
    type: "category",
    data: [""], // 一本のバー
    show: false, // Y軸のラベルを非表示
  },
  series: [
    {
      name: "10代男性",
      type: "bar",
      stack: "total",
      data: [8],
      itemStyle: { color: "#1E90FF" },
    }, // 青系
    {
      name: "20代男性",
      type: "bar",
      stack: "total",
      data: [10],
      itemStyle: { color: "#4682B4" },
    }, // やや暗い青
    {
      name: "30代男性",
      type: "bar",
      stack: "total",
      data: [12],
      itemStyle: { color: "#5F9EA0" },
    }, // 青緑系
    {
      name: "40代男性",
      type: "bar",
      stack: "total",
      data: [14],
      itemStyle: { color: "#6495ED" },
    }, // コーンフラワーブルー
    {
      name: "50代男性",
      type: "bar",
      stack: "total",
      data: [10],
      itemStyle: { color: "#4169E1" },
    }, // ロイヤルブルー
    {
      name: "60代男性",
      type: "bar",
      stack: "total",
      data: [8],
      itemStyle: { color: "#00BFFF" },
    }, // ディープスカイブルー
    {
      name: "70代男性",
      type: "bar",
      stack: "total",
      data: [6],
      itemStyle: { color: "#87CEFA" },
    }, // ライトスカイブルー
    {
      name: "10代女性",
      type: "bar",
      stack: "total",
      data: [7],
      itemStyle: { color: "#FF1493" },
    }, // ディープピンク
    {
      name: "20代女性",
      type: "bar",
      stack: "total",
      data: [9],
      itemStyle: { color: "#FF69B4" },
    }, // ホットピンク
    {
      name: "30代女性",
      type: "bar",
      stack: "total",
      data: [11],
      itemStyle: { color: "#FFB6C1" },
    }, // ライトピンク
    {
      name: "40代女性",
      type: "bar",
      stack: "total",
      data: [13],
      itemStyle: { color: "#DB7093" },
    }, // パレード
    {
      name: "50代女性",
      type: "bar",
      stack: "total",
      data: [9],
      itemStyle: { color: "#FF8C00" },
    }, // ダークオレンジ
    {
      name: "60代女性",
      type: "bar",
      stack: "total",
      data: [7],
      itemStyle: { color: "#FFA07A" },
    }, // ライトサーモン
    {
      name: "70代女性",
      type: "bar",
      stack: "total",
      data: [4],
      itemStyle: { color: "#FFD700" },
    }, // ゴールド
  ],
};

option && myChart.setOption(option);

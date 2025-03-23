import * as echarts from "echarts";

var chartDom = document.getElementById("main");
var myChart = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    trigger: "item",
    formatter: "{b}: {d}%", // ラベルの表示設定
  },
  legend: {
    top: "5%",
    left: "center",
  },
  series: [
    // 内側の円（性別）
    {
      name: "性別",
      type: "pie",
      radius: ["30%", "50%"], // 内側のドーナツ円
      label: {
        show: false, // 中央ラベルを非表示にする
      },
      data: [
        { value: 50, name: "男性", itemStyle: { color: "#3498db" } }, // 青
        { value: 50, name: "女性", itemStyle: { color: "#e74c3c" } }, // 赤
      ],
    },
    // 外側の円（年齢層）
    {
      name: "年齢層",
      type: "pie",
      radius: ["55%", "75%"], // 外側のドーナツ円
      label: {
        formatter: "{b}: {d}%", // 各年齢層の名前と割合を表示
      },
      data: [
        { value: 10, name: "10代男性", itemStyle: { color: "#1E90FF" } }, // 青系
        { value: 15, name: "20代男性", itemStyle: { color: "#4682B4" } },
        { value: 20, name: "30代男性", itemStyle: { color: "#5F9EA0" } },
        { value: 15, name: "40代男性", itemStyle: { color: "#6495ED" } },
        { value: 10, name: "50代男性", itemStyle: { color: "#4169E1" } },
        { value: 5, name: "60代男性", itemStyle: { color: "#00BFFF" } },
        { value: 5, name: "70代男性", itemStyle: { color: "#87CEFA" } },
        { value: 10, name: "10代女性", itemStyle: { color: "#FF1493" } }, // 赤系
        { value: 15, name: "20代女性", itemStyle: { color: "#FF69B4" } },
        { value: 20, name: "30代女性", itemStyle: { color: "#FFB6C1" } },
        { value: 15, name: "40代女性", itemStyle: { color: "#DB7093" } },
        { value: 10, name: "50代女性", itemStyle: { color: "#FF8C00" } },
        { value: 5, name: "60代女性", itemStyle: { color: "#FFA07A" } },
        { value: 5, name: "70代女性", itemStyle: { color: "#FFD700" } },
      ],
    },
  ],
};

option && myChart.setOption(option);

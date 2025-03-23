// **各グラフの年代別割合（合計100%）**
const seriesDataSets = [
  // **1つ目のグラフ（合計100%）**
  [
    { name: "10代男性", value: 4.5, color: "#1E90FF" },
    { name: "20代男性", value: 6.4, color: "#4682B4" },
    { name: "30代男性", value: 9.1, color: "#5F9EA0" },
    { name: "40代男性", value: 10.9, color: "#6495ED" },
    { name: "50代男性", value: 7.3, color: "#4169E1" },
    { name: "60代男性", value: 5.5, color: "#00BFFF" },
    { name: "70代男性", value: 3.6, color: "#87CEFA" },
    { name: "10代女性", value: 5.5, color: "#FF1493" },
    { name: "20代女性", value: 7.3, color: "#FF69B4" },
    { name: "30代女性", value: 10.9, color: "#FFB6C1" },
    { name: "40代女性", value: 12.7, color: "#DB7093" },
    { name: "50代女性", value: 8.2, color: "#FF8C00" },
    { name: "60代女性", value: 5.5, color: "#FFA07A" },
    { name: "70代女性", value: 2.7, color: "#FFD700" },
  ],
  // **2つ目のグラフ（合計100%）**
  [
    { name: "10代男性", value: 5.5, color: "#1E90FF" },
    { name: "20代男性", value: 8.2, color: "#4682B4" },
    { name: "30代男性", value: 10.0, color: "#5F9EA0" },
    { name: "40代男性", value: 11.8, color: "#6495ED" },
    { name: "50代男性", value: 9.1, color: "#4169E1" },
    { name: "60代男性", value: 6.4, color: "#00BFFF" },
    { name: "70代男性", value: 3.6, color: "#87CEFA" },
    { name: "10代女性", value: 5.5, color: "#FF1493" },
    { name: "20代女性", value: 7.3, color: "#FF69B4" },
    { name: "30代女性", value: 9.1, color: "#FFB6C1" },
    { name: "40代女性", value: 10.9, color: "#DB7093" },
    { name: "50代女性", value: 6.4, color: "#FF8C00" },
    { name: "60代女性", value: 4.5, color: "#FFA07A" },
    { name: "70代女性", value: 1.8, color: "#FFD700" },
  ],
  // **3つ目のグラフ（合計100%）**
  [
    { name: "10代男性", value: 6.1, color: "#1E90FF" },
    { name: "20代男性", value: 8.8, color: "#4682B4" },
    { name: "30代男性", value: 10.5, color: "#5F9EA0" },
    { name: "40代男性", value: 12.3, color: "#6495ED" },
    { name: "50代男性", value: 7.9, color: "#4169E1" },
    { name: "60代男性", value: 5.3, color: "#00BFFF" },
    { name: "70代男性", value: 2.6, color: "#87CEFA" },
    { name: "10代女性", value: 5.3, color: "#FF1493" },
    { name: "20代女性", value: 7.9, color: "#FF69B4" },
    { name: "30代女性", value: 9.6, color: "#FFB6C1" },
    { name: "40代女性", value: 11.4, color: "#DB7093" },
    { name: "50代女性", value: 6.1, color: "#FF8C00" },
    { name: "60代女性", value: 4.4, color: "#FFA07A" },
    { name: "70代女性", value: 1.8, color: "#FFD700" },
  ],
];

// **3つのグラフを作成**
const numCharts = 3; // 縦に並べるグラフの数
const gridConfig = [];
const xAxisConfig = [];
const yAxisConfig = [];
const seriesConfig = [];

for (let i = 0; i < numCharts; i++) {
  // **グリッド配置（縦に並べる）**
  gridConfig.push({
    top: `${i * 33 + 5}%`, // 縦に並べる
    left: "5%",
    right: "5%",
    height: "28%", // 各グラフの高さ
    containLabel: true,
  });

  // **X軸設定（各グラフごとに独立）**
  xAxisConfig.push({
    type: "value",
    max: 100, // 100% を基準
    name: "割合 (%)",
    gridIndex: i,
  });

  // **Y軸設定（共通で非表示）**
  yAxisConfig.push({
    type: "category",
    data: [""], // 一本のバー
    gridIndex: i,
    show: false, // Y軸のラベル非表示
  });

  // **各シリーズデータ（各グラフごとに異なるデータ）**
  seriesDataSets[i].forEach((item, index) => {
    seriesConfig.push({
      name: item.name,
      type: "bar",
      stack: `total-${i}`, // グラフごとに別のスタック
      data: [item.value],
      itemStyle: { color: item.color }, // **統一された色を適用**
      xAxisIndex: i,
      yAxisIndex: i,
    });
  });
}

// **オプション設定**
var option = {
  tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
  legend: { top: "2%", left: "center" },
  grid: gridConfig,
  xAxis: xAxisConfig,
  yAxis: yAxisConfig,
  series: seriesConfig,
};

// **描画**
myChart.setOption(option);

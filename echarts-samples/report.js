// **データセット**
var data = {
  dates: [
    "3/31",
    "3/30",
    "3/29",
    "3/28",
    "3/27",
    "3/26",
    "3/25",
    "3/24",
    "3/23",
    "3/22",
    "3/21",
    "3/20",
    "3/19",
    "3/18",
    "3/17",
    "3/16",
    "3/15",
    "3/14",
    "3/13",
    "3/12",
    "3/11",
    "3/10",
    "3/9",
    "3/8",
    "3/7",
    "3/6",
    "3/5",
    "3/4",
    "3/3",
    "3/2",
    "3/1",
  ],

  // ショップPV
  pv: [
    150, 200, 180, 220, 300, 280, 260, 270, 240, 210, 200, 190, 180, 160, 150,
    140, 130, 120, 110, 100, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40,
  ],

  // 詳細ページPV（4列目と同じデータを使用）
  detailPV: [
    100, 120, 150, 180, 220, 200, 190, 200, 180, 170, 160, 140, 130, 120, 110,
    105, 100, 90, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 28, 25,
  ],

  // 利用クリック
  clicks: [
    80, 90, 110, 120, 150, 140, 130, 140, 130, 120, 110, 100, 95, 85, 80, 75,
    70, 65, 60, 55, 50, 45, 40, 35, 30, 28, 25, 20, 18, 16, 15,
  ],

  // 5列目の値を3列目の「利用クリック」と統一
  total: [
    80, 90, 110, 120, 150, 140, 130, 140, 130, 120, 110, 100, 95, 85, 80, 75,
    70, 65, 60, 55, 50, 45, 40, 35, 30, 28, 25, 20, 18, 16, 15,
  ],
};

// **最終行（合計）**
var totalRow = {
  pv: data.pv.reduce((a, b) => a + b, 0),
  detailPV: data.detailPV.reduce((a, b) => a + b, 0),
  clicks: data.clicks.reduce((a, b) => a + b, 0),
  total: data.total.reduce((a, b) => a + b, 0), // 5列目の合計
};

// **各データの設定**
var chartOptions = [
  { title: "ショップPV", data: data.pv, color: "#3498db", gridIndex: 0 },
  {
    title: "詳細ページPV",
    data: data.detailPV,
    color: "#2ecc71",
    gridIndex: 1,
  },
  { title: "利用クリック", data: data.clicks, color: "#f1c40f", gridIndex: 2 },
  {
    title: "詳細ページPV(再表示)",
    data: data.detailPV,
    color: "#8e44ad",
    gridIndex: 3,
  }, // 4列目
  { title: "利用クリック数", data: data.total, color: "#e74c3c", gridIndex: 4 }, // 5列目
];

// **5つのグリッドを作成（横並び）**
var gridConfig = chartOptions.map((opt, i) => ({
  left: `${i * 19 + 3}%`, // 横に並べる
  width: "18%", // 各グラフの幅
  top: "10%",
  bottom: "10%",
}));

// **X軸の設定**
var xAxisConfig = chartOptions.map((opt, i) => ({
  type: "value",
  max: Math.max(...opt.data), // 各グラフの最大値をX軸の最大値に
  name: "回数",
  gridIndex: i,
}));

// **Y軸の設定**
var yAxisConfig = chartOptions.map((opt, i) => ({
  type: "category",
  data: [...data.dates, "合計"], // 最下段に合計を追加
  gridIndex: i,
  axisLabel: { show: i === 0 }, // 1つ目のグラフのみ日付ラベルを表示
}));

// **各グラフのシリーズデータ（バーの中に数値を表示）**
var seriesData = chartOptions.map((opt) => ({
  name: opt.title,
  type: "bar",
  xAxisIndex: opt.gridIndex,
  yAxisIndex: opt.gridIndex,
  data: [
    ...opt.data,
    totalRow[
      opt.title.includes("詳細ページPV")
        ? "detailPV"
        : opt.title.includes("ショップPV")
        ? "pv"
        : opt.title.includes("利用クリック")
        ? "clicks"
        : "total"
    ],
  ],
  itemStyle: { color: opt.color },
  label: { show: true, position: "insideRight", color: "#fff" }, // ⭐️ バーの中に数値を表示
}));

// **EChartsのオプション設定**
var option = {
  tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
  title: chartOptions.map((opt, i) => ({
    text: opt.title,
    left: `${i * 19 + 6}%`,
    top: "5%",
  })),
  grid: gridConfig,
  xAxis: xAxisConfig,
  yAxis: yAxisConfig,
  series: seriesData,
};

// **チャートを描画**
myChart.setOption(option);

option = {
  title: {
    text: "PV・詳細PV・クリック数の推移",
    left: "center", // ✅ タイトルを中央揃え
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  // ✅ 凡例を下部に配置し、アイコンを四角に
  legend: {
    icon: "rect", // ← 四角アイコン
    itemWidth: 14, // ← アイコンの横幅
    itemHeight: 14, // ← アイコンの縦幅
    bottom: 0, // ← 下部に配置
    left: "center", // ← 水平中央寄せ
    textStyle: {
      color: "#000", // ← テキストを黒文字に
    },
    data: ["PV", "詳細PV", "クリック数"],
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "10%", // ← 凡例が下にくる分、少し空ける
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: [
        "3/1",
        "3/2",
        "3/3",
        "3/4",
        "3/5",
        "3/6",
        "3/7",
        "3/8",
        "3/9",
        "3/10",
        "3/11",
        "3/12",
        "3/13",
        "3/14",
        "3/15",
        "3/16",
        "3/17",
        "3/18",
        "3/19",
        "3/20",
        "3/21",
        "3/22",
        "3/23",
        "3/24",
        "3/25",
        "3/26",
        "3/27",
        "3/28",
        "3/29",
        "3/30",
        "3/31",
      ],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "PV",
      type: "line",
      stack: "pvTotal",
      // PVを一番薄い緑
      itemStyle: { color: "rgba(165, 214, 167, 0.5)" },
      areaStyle: { color: "rgba(165, 214, 167, 0.5)" },
      emphasis: { focus: "series" },
      symbol: "none",
      lineStyle: { width: 0 },
      data: [
        8000, 6500, 10000, 3000, 5800, 3200, 7100, 9000, 6700, 4000, 7800, 7300,
        8600, 4900, 6000, 7200, 9100, 6800, 7500, 8500, 4700, 6900, 7200, 9300,
        7700, 8100, 6800, 6200, 7000, 8800, 7500,
      ],
    },
    {
      name: "詳細PV",
      type: "line",
      stack: "detailTotal",
      // 詳細PVを薄緑
      itemStyle: { color: "rgba(102, 187, 106, 0.5)" },
      areaStyle: { color: "rgba(102, 187, 106, 0.5)" },
      emphasis: { focus: "series" },
      symbol: "none",
      lineStyle: { width: 0 },
      data: [
        4500, 3900, 6200, 2800, 3500, 2600, 4700, 5100, 4300, 2900, 5200, 4800,
        5400, 3200, 4100, 4900, 5600, 4300, 5000, 5800, 3100, 4500, 4900, 5700,
        5200, 5400, 4400, 4000, 4700, 5500, 4900,
      ],
    },
    {
      name: "クリック数",
      type: "line",
      stack: "clickTotal",
      // クリック数を濃い緑
      itemStyle: { color: "rgba(27, 94, 32, 0.8)" },
      areaStyle: { color: "rgba(27, 94, 32, 0.8)" },
      emphasis: { focus: "series" },
      symbol: "none",
      lineStyle: { width: 0 },
      data: [
        900, 500, 1100, 300, 1500, 700, 850, 1200, 600, 400, 950, 700, 1300,
        500, 800, 1100, 1400, 750, 900, 1250, 450, 850, 1100, 1450, 900, 1200,
        700, 600, 900, 1350, 1000,
      ],
    },
  ],
};

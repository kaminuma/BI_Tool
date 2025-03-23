// **日付データ（1～31）**
const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());

// **EChartsのオプション設定**
var option = {
  tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
  legend: { top: "2%", left: "center" },
  grid: { left: "5%", right: "10%", bottom: "5%", containLabel: true },
  xAxis: {
    type: "category",
    data: days,
    name: "日付",
    axisLabel: { interval: 0 }, // **すべてのラベルを表示**
  },
  yAxis: { type: "value", name: "PV数" },
  series: [
    {
      name: "詳細ページ1",
      type: "bar",
      stack: "total",
      data: [
        4023, 4188, 4225, 4476, 4103, 4365, 4432, 4743, 4658, 4078, 4831, 4815,
        4184, 4340, 4635, 4690, 4872, 4293, 4894, 4475, 4477, 4424, 4470, 4978,
        4664, 4791, 4973, 4025, 4141, 4938, 4724,
      ],
      itemStyle: { color: "#3498db" },
    },
    {
      name: "詳細ページ2",
      type: "bar",
      stack: "total",
      data: [
        2651, 2785, 3118, 2906, 2632, 3162, 3108, 3231, 3064, 3088, 3198, 3324,
        2740, 3341, 2768, 3125, 3041, 3017, 2940, 2648, 2658, 2994, 2877, 2813,
        3399, 2882, 2648, 2856, 2889, 3007, 2699,
      ],
      itemStyle: { color: "#e74c3c" },
    },
    {
      name: "詳細ページ3",
      type: "bar",
      stack: "total",
      data: [
        2736, 2233, 2465, 2614, 2662, 2694, 2244, 2403, 2383, 2601, 2240, 2593,
        2496, 2705, 2631, 2483, 2666, 2623, 2663, 2562, 2206, 2646, 2242, 2211,
        2399, 2534, 2577, 2408, 2218, 2792, 2699,
      ],
      itemStyle: { color: "#2ecc71" },
    },
    {
      name: "詳細ページ4",
      type: "bar",
      stack: "total",
      data: [
        2131, 1904, 2126, 1950, 1915, 2200, 2157, 2087, 1925, 2088, 2110, 1959,
        2079, 1897, 1880, 1920, 2017, 2196, 2118, 2181, 1870, 1868, 1891, 1948,
        2007, 2181, 2025, 2197, 2056, 2137, 1996,
      ],
      itemStyle: { color: "#f1c40f" },
    },
  ],
};

// **描画**
myChart.setOption(option);

<template>
  <table class="chart-table">
    <thead>
      <tr>
        <th>日付</th>
        <th>PV</th>
        <th>詳細PV</th>
        <th>クリック数</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in normalizedData" :key="index">
        <td>{{ row.date }}</td>

        <td class="bar-cell">
          <div
            class="bar-fill pv"
            :style="{ width: row.pvPercent + '%' }"
          ></div>
          <span class="bar-value">{{ row.pv }}</span>
        </td>

        <td class="bar-cell">
          <div
            class="bar-fill detail"
            :style="{ width: row.detailPercent + '%' }"
          ></div>
          <span class="bar-value">{{ row.detailPv }}</span>
        </td>

        <td class="bar-cell">
          <div
            class="bar-fill click"
            :style="{ width: row.clickPercent + '%' }"
          ></div>
          <span class="bar-value">{{ row.click }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { computed } from "vue";

// ✅ props を使ってデータを受け取る
const props = defineProps({
  data: {
    type: Array,
    required: true, // ← データは必須
  },
});

// 最大値（正規化用）
const maxPv = computed(() => Math.max(...props.data.map((d) => d.pv)));
const maxDetail = computed(() =>
  Math.max(...props.data.map((d) => d.detailPv))
);
const maxClick = computed(() => Math.max(...props.data.map((d) => d.click)));

// 正規化データ
const normalizedData = computed(() => {
  return props.data.map((d) => ({
    ...d,
    pvPercent: (d.pv / maxPv.value) * 100,
    detailPercent: (d.detailPv / maxDetail.value) * 100,
    clickPercent: (d.click / maxClick.value) * 100,
  }));
});
</script>

<style scoped>
.chart-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  border: 1px solid #ccc;
  table-layout: fixed; /* ✅ 列幅を固定サイズにする */
}

.chart-table th,
.chart-table td {
  border: 1px solid #ccc;
  padding: 6px 10px;
  text-align: right; /* ✅ デフォルトは右揃え */
}

.chart-table th:first-child,
.chart-table td:first-child {
  width: 110px; /* ✅ 日付カラムの横幅を適切なサイズに固定 */
  text-align: left;
  white-space: nowrap; /* ✅ 折り返し防止 */
}

.bar-cell {
  position: relative;
  height: 24px;
  background: transparent;
  overflow: hidden;
}

.bar-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 1;
  border-radius: 0;
}

.bar-value {
  position: absolute;
  right: 10px;
  z-index: 2;
  font-weight: bold;
  color: black;
}

/* ✅ 色スタイル */
.pv {
  background: linear-gradient(to right, #2e7d32, #66bb6a, #c8e6c9);
}
.detail {
  background: linear-gradient(to right, #6a1b9a, #ab47bc, #e1bee7);
}
.click {
  background: linear-gradient(to right, #ff6f00, #ffa726, #ffcc80);
}
.chart-table td:first-child {
  text-align: left; /* ✅ 日付のカラムだけ左寄せ */
  white-space: nowrap; /* ✅ 長い日付でも折り返さない */
}
</style>

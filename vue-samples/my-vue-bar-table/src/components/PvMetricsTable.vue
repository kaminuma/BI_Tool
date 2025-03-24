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
  width: 400px; /* ← 横幅を固定 */
  border-collapse: collapse;
  font-size: 14px;
  border: 1px solid #ccc;
  table-layout: fixed;
  margin: 0 left; /* ← 中央寄せ（任意） */
}

.chart-table th,
.chart-table td {
  border: 1px solid #ccc;
  padding: 2px 6px; /* 高さを小さく */
  text-align: right;
  font-size: 12px;
  height: 22px;
}

.chart-table th:first-child,
.chart-table td:first-child {
  width: 100px;
  text-align: left;
  white-space: nowrap;
}

.bar-cell {
  position: relative;
  height: 12px; /* バーの高さを小さく */
  background: transparent;
  overflow: hidden;
}

.bar-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 1;
  border-radius: 4px;
}

.bar-value {
  position: absolute;
  right: 4px;
  z-index: 2;
  font-weight: bold;
  color: black;
  font-size: 10px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  line-height: 12px;
  height: 12px;
}

/* 色スタイル */
.pv {
  background: linear-gradient(to right, #2e7d32, #66bb6a, #c8e6c9);
}
.detail {
  background: linear-gradient(to right, #6a1b9a, #ab47bc, #e1bee7);
}
.click {
  background: linear-gradient(to right, #ff6f00, #ffa726, #ffcc80);
}
</style>

<template>
  <div>
    <h1>インセルバー付きテーブル</h1>
    <PvMetricsTable :data="tableData" />
  </div>
</template>

<script setup>
import PvMetricsTable from "./components/PvMetricsTable.vue";

const tableData = [
  { date: "2025/03/01（土）", pv: 8000, detailPv: 4500, click: 900 },
  { date: "2025/03/02（日）", pv: 6500, detailPv: 3900, click: 500 },
  { date: "2025/03/03（月）", pv: 10000, detailPv: 6200, click: 1100 },
  { date: "2025/03/04（火）", pv: 3000, detailPv: 2800, click: 300 },
  { date: "2025/03/05（水）", pv: 5800, detailPv: 3500, click: 1500 },
  { date: "2025/03/06（木）", pv: 3200, detailPv: 2600, click: 700 },
  { date: "2025/03/07（金）", pv: 7100, detailPv: 4700, click: 850 },
  { date: "2025/03/08（土）", pv: 9000, detailPv: 5100, click: 1200 },
  { date: "2025/03/09（日）", pv: 6700, detailPv: 4300, click: 600 },
  { date: "2025/03/10（月）", pv: 4000, detailPv: 2900, click: 400 },
  { date: "2025/03/11（火）", pv: 7800, detailPv: 5200, click: 950 },
  { date: "2025/03/12（水）", pv: 7300, detailPv: 4800, click: 700 },
  { date: "2025/03/13（木）", pv: 8600, detailPv: 5400, click: 1300 },
  { date: "2025/03/14（金）", pv: 4900, detailPv: 3200, click: 500 },
  { date: "2025/03/15（土）", pv: 6000, detailPv: 4100, click: 800 },
  { date: "2025/03/16（日）", pv: 7200, detailPv: 4900, click: 1100 },
  { date: "2025/03/17（月）", pv: 9100, detailPv: 5600, click: 1400 },
  { date: "2025/03/18（火）", pv: 6800, detailPv: 4300, click: 750 },
  { date: "2025/03/19（水）", pv: 7500, detailPv: 5000, click: 900 },
  { date: "2025/03/20（木）", pv: 8500, detailPv: 5800, click: 1250 },
  { date: "2025/03/21（金）", pv: 4700, detailPv: 3100, click: 450 },
  { date: "2025/03/22（土）", pv: 6900, detailPv: 4500, click: 850 },
  { date: "2025/03/23（日）", pv: 7200, detailPv: 4900, click: 1100 },
  { date: "2025/03/24（月）", pv: 9300, detailPv: 5700, click: 1450 },
  { date: "2025/03/25（火）", pv: 7700, detailPv: 5200, click: 900 },
  { date: "2025/03/26（水）", pv: 8100, detailPv: 5400, click: 1200 },
  { date: "2025/03/27（木）", pv: 6800, detailPv: 4400, click: 700 },
  { date: "2025/03/28（金）", pv: 6200, detailPv: 4000, click: 600 },
  { date: "2025/03/29（土）", pv: 7000, detailPv: 4700, click: 900 },
  { date: "2025/03/30（日）", pv: 8800, detailPv: 5500, click: 1350 },
  { date: "2025/03/31（月）", pv: 7500, detailPv: 4900, click: 1000 },
];
</script>

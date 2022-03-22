<script lang="ts">
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import { px } from '../common/px';
import { createEchartsOptions } from '../common/create-echarts-options';

export default {
    setup() {
        const divRef = ref(null);

        onMounted(() => {
            let myChart = echarts.init(divRef.value);
            myChart.setOption(
                createEchartsOptions({
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
                        splitLine: { show: true, lineStyle: { color: '#073E78' } },
                        axisTick: { show: false },
                        axisLine: { show: false },
                    },
                    yAxis: {
                        type: 'value',
                        splitLine: { lineStyle: { color: '#073E78' } },
                        axisLabel: {
                            formatter(val) {
                                return val * 100 + '%';
                            },
                        },
                    },
                    series: [
                        {
                            type: 'line',
                            data: [
                                0.15, 0.13, 0.11, 0.13, 0.14, 0.15, 0.16, 0.18, 0.21, 0.19, 0.17,
                                0.16, 0.15,
                            ],
                            symbol: 'circle',
                            symbolSize: px(12),
                            lineStyle: { width: px(2) },
                            areaStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#414a9f',
                                    },
                                    {
                                        offset: 1,
                                        color: '#1b1d52',
                                    },
                                ]),
                            },
                        },
                    ],
                })
            );
        });

        return {
            divRef,
        };
    },
};
</script>

<template>
    <div class="bordered anfashiduan">
        <h2>案发时段分析</h2>
        <div ref="divRef" class="chart" />
    </div>
</template>

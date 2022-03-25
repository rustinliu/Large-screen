<script lang="ts">
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import { px } from '../common/px';
import { createEchartsOptions } from '../common/create-echarts-options';

export default {
    setup() {
        const divRef = ref(null);
        const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
        onMounted(() => {
            let myChart = echarts.init(divRef.value);
            myChart.setOption(
                createEchartsOptions({
                    color: colors,
                    xAxis: { show: false },
                    yAxis: { show: false },
                    legend: { show: false },
                    series: [
                        {
                            startAngle: -20,
                            type: 'pie',
                            radius: ['25%', '90%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: true,
                                position: 'outside',
                                color: 'white',
                                fontSize: px(20),
                                distanceToLabelLine: 0,
                                formatter(options) {
                                    return options.value * 100 + '%';
                                },
                            },
                            labelLine: { show: true, length: 0 },
                            roseType: 'area',
                            itemStyle: {
                                shadowBlur: px(200),
                                shadowColor: 'rgba(0, 0, 0, 0.5)',
                            },
                            data: [
                                { value: 0.36, name: '刑事案件' },
                                { value: 0.2, name: '民事案件' },
                                { value: 0.18, name: '经济案件' },
                                { value: 0.24, name: '其他案件' },
                            ],
                        },
                    ],
                })
            );
        });

        return {
            divRef,
            colors,
        };
    },
};
</script>

<template>
    <div class="chart11">
        <div class="chart">
            <div class="main" ref="divRef" />
        </div>
        <div class="legend">
            <span :style="`background: ${colors[0]}`" />
            刑事
            <span :style="`background: ${colors[1]}`" />
            民事
            <span :style="`background: ${colors[2]}`" />
            经济
            <span :style="`background: ${colors[3]}`" />
            其他
        </div>
    </div>
</template>

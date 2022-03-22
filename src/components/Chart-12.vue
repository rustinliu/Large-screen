<script lang="ts">
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import { px } from '../common/px';
import { createEchartsOptions } from '../common/create-echarts-options';

export default {
    setup() {
        const divRef = ref(null);
        const data = [
            { value: 0.08, name: 'A市' },
            { value: 0.06, name: 'B市' },
            { value: 0.11, name: 'C市' },
            { value: 0.09, name: 'D市' },
            { value: 0.12, name: 'E市' },
            { value: 0.06, name: 'F市' },
            { value: 0.08, name: 'G市' },
            { value: 0.08, name: 'H市' },
            { value: 0.08, name: 'I市' },
        ];
        onMounted(() => {
            let myChart = echarts.init(divRef.value);
            myChart.setOption(
                createEchartsOptions({
                    xAxis: { show: false },
                    yAxis: { show: false },
                    grid: { x: 0, x2: 0, y: 0, y2: 0, containLabel: true },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        top: 'center',
                        textStyle: { color: 'white' },
                        itemWidth: px(10),
                        itemHeight: px(10),
                        formatter(name) {
                            const value = data.find((i) => i.name === name)?.value * 100 + '%';
                            return name + ' ' + value;
                        },
                    },
                    series: [
                        {
                            center: ['60%', '50%'],
                            type: 'pie',
                            radius: '80%',
                            label: { show: false },
                            labelLine: { show: false },
                            data: data,
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                                },
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
    <div className="chart12">
        <div className="chart">
            <div className="main" ref="divRef" />
        </div>
    </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import { px } from '../common/px';
import { createEchartsOptions } from '../common/create-echarts-options';

export default {
    setup() {
        const divRef = ref(null);
        const myChart = ref(null);
        const data = [
            { name: 'A开发区', count: 32 },
            { name: 'B开发区', count: 43 },
            { name: 'C开发区', count: 54 },
            { name: 'D开发区', count: 35 },
            { name: 'E开发区', count: 16 },
            { name: 'F开发区', count: 47 },
            { name: 'G开发区', count: 22 },
            { name: 'H开发区', count: 33 },
            { name: 'I开发区', count: 44 },
        ];
        onMounted(() => {
            myChart.value = echarts.init(divRef.value);
            setData(data);
            setInterval(() => {
                const newData = [
                    { name: 'A开发区', count: Math.floor(Math.random() * (50 - 10 + 1)) + 10 },
                    { name: 'B开发区', count: Math.floor(Math.random() * (50 - 10 + 1)) + 10 },
                    { name: 'C开发区', count: Math.floor(Math.random() * (50 - 10 + 1)) + 10 },
                    { name: 'D开发区', count: Math.floor(Math.random() * (50 - 10 + 1)) + 10 },
                    { name: 'E开发区', count: Math.floor(Math.random() * (50 - 10 + 1)) + 10 },
                    { name: 'F开发区', count: Math.floor(Math.random() * (50 - 10 + 1)) + 10 },
                    { name: 'G开发区', count: Math.floor(Math.random() * (50 - 10 + 1)) + 10 },
                    { name: 'H开发区', count: Math.floor(Math.random() * (50 - 10 + 1)) + 10 },
                    { name: 'I开发区', count: Math.floor(Math.random() * (50 - 10 + 1)) + 10 },
                ];
                setData(newData);
            }, 1000);
        });

        const setData = (data) => {
            myChart.value.setOption(
                createEchartsOptions({
                    xAxis: {
                        data: data.map((i) => i.name),
                        axisTick: { show: false },
                        axisLine: {
                            lineStyle: { color: '#083B70' },
                        },
                        axisLabel: {
                            formatter(val) {
                                if (val.length > 2) {
                                    const array = val.split('');
                                    array.splice(2, 0, '\n');
                                    return array.join('');
                                } else {
                                    return val;
                                }
                            },
                        },
                    },

                    yAxis: {
                        splitLine: { show: false },
                        axisLine: {
                            show: true,
                            lineStyle: { color: '#083B70' },
                        },
                    },
                    series: [
                        {
                            type: 'bar',
                            data: data.map((i) => i.count),
                        },
                    ],
                    grid: {
                        x: px(30),
                        y: px(10),
                        x2: px(10),
                        y2: px(40),
                        containLabel: true,
                    },
                })
            );
        };
        return {
            divRef,
        };
    },
};
</script>

<template>
    <div class="bordered guanxiatongji">
        <h2>案发派出所管辖统计</h2>
        <div ref="divRef" class="chart"></div>
    </div>
</template>

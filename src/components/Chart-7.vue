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
                    color: ['#8D70F8', '#33A4FA'],
                    xAxis: { show: false },
                    yAxis: { show: false },
                    legend: { show: false },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['75%', '90%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: true,
                                position: 'inside',
                                textStyle: { color: 'white', fontSize: px(20) },
                                formatter(options) {
                                    return options.value * 100 + '%';
                                },
                            },
                            labelLine: { show: false },
                            itemStyle: {
                                borderColor: '#0F113A',
                                borderWidth: px(4),
                            },
                            data: [
                                { value: 0.2, name: '女' },
                                { value: 0.8, name: '男' },
                            ],
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
    <div class="nianlingdu-tu1">
        <div class="chart">
            <div class="main" ref="divRef" />
            <div class="text">性别</div>
        </div>
        <div class="legend"><span class="male" />男 <span class="female" />女</div>
    </div>
</template>

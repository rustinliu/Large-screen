<script lang="ts">
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import { px } from '../common/px';
import { createEchartsOptions } from '../common/create-echarts-options';
import china from '../geo/china.json';

export default {
    setup() {
        const divRef = ref(null);
        const colors = { 广东省: 'red', 湖北省: '#15B8FD' };
        onMounted(() => {
            let myChart = echarts.init(divRef.value);
            // @ts-ignore
            echarts.registerMap('CN', china);
            myChart.setOption(
                createEchartsOptions({
                    xAxis: { show: false },
                    yAxis: { show: false },
                    series: [
                        {
                            type: 'map',
                            mapType: 'CN', // 自定义扩展图表类型
                            data: [{ name: '广东省', value: 1 }],
                            label: { show: false, color: 'white' },
                            itemStyle: {
                                areaColor: '#010D3D',
                                color: colors['广东省'],
                                borderColor: '#01A7F7',
                                emphasis: {
                                    label: { color: 'white' },
                                    areaColor: '#5470C6',
                                },
                            },
                        },
                        {
                            type: 'map',
                            mapType: 'CN',
                            data: [{ name: '湖北省', value: 2 }],
                            label: { show: false, color: 'white' },
                            itemStyle: {
                                areaColor: '#010D3D',
                                color: colors['湖北省'],
                                borderColor: '#01A7F7',
                                emphasis: {
                                    label: { color: 'white' },
                                    areaColor: '#5470C6',
                                },
                            },
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
    <div class="bordered jiguan">
        <h2>全市犯罪人员籍贯分布地</h2>
        <div class="wrapper">
            <div ref="divRef" class="chart" />
            <div class="legend bordered">
                <span class="icon" :style="`background: ${colors['广东省']}`" /> 广东省
                <span class="icon" :style="`background: ${colors['湖北省']}`" /> 湖北省
            </div>
            <div class="notes">该图仅显示中国部分区域</div>
        </div>
    </div>
</template>

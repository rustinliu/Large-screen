import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createEchartsOptions } from '../common/create-echarts-options';
import { px } from '../common/px';

export const Chart9 = () => {
    const divRef = useRef(null);
    useEffect(() => {
        var myChart = echarts.init(divRef.current);
        myChart.setOption(
            createEchartsOptions({
                color: '#F7A110',
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: [0, 18, 28, 38, 48, 58, 68, 78],
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
                        data: [0.19, 0.2, 0.26, 0.35, 0.26, 0.2, 0.08, 0.06],
                        symbol: 'circle',
                        symbolSize: px(12),
                        lineStyle: { width: px(2) },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#F7A110',
                                },
                                {
                                    offset: 1,
                                    color: '#1B1D52',
                                },
                            ]),
                        },
                    },
                ],
            })
        );
    }, []);

    return (
        <div className='nianlingdu-tu3'>
            <h3>犯罪年龄趋势图</h3>
            <div ref={divRef} className='chart'></div>
        </div>
    );
};

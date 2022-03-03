import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';
import { baseEchartOptions } from '../shared/base-echart-options';
import { createEchartsOptions } from '../shared/create-echarts-options';

export const Chart2 = () => {
    const divRef = useRef(null);
    useEffect(() => {
        var myChart = echarts.init(divRef.current);
        myChart.setOption(
            createEchartsOptions({
                ...baseEchartOptions,
                grid: {
                    x: px(100),
                    y: px(40),
                    x2: px(40),
                    y2: px(40),
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01],
                },
                yAxis: {
                    type: 'category',
                    data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
                },
                series: [
                    {
                        name: '2011年',
                        type: 'bar',
                        data: [18203, 23489, 29034, 104970, 131744, 630230],
                    },
                    {
                        name: '2012年',
                        type: 'bar',
                        data: [19325, 23438, 31000, 121594, 134141, 681807],
                    },
                ],
            })
        );
    }, []);

    return (
        <div className='bordered guanxiatongji'>
            <h2>案件破获排名</h2>
            <div ref={divRef} className='chart'></div>
        </div>
    );
};

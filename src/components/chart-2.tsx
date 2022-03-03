import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';
import { baseEchartOptions } from '../shared/base-echart-options';
import { createEchartsOptions } from '../shared/create-echarts-options';

export const Chart2 = () => {
    const divRef = useRef(null);
    const data = [
        { name: '城关区公安局', 2011: 2, 2012: 3 },
        { name: '七里河区公安局', 2011: 2, 2012: 3 },
        { name: '西固区公安局', 2011: 2, 2012: 3 },
        { name: '安宁区公安局', 2011: 2, 2012: 3 },
        { name: '红古区公安局', 2011: 2, 2012: 3 },
        { name: '永登县公安局', 2011: 2, 2012: 3 },
        { name: '皋兰县公安局', 2011: 2, 2012: 3 },
        { name: '榆中县公安局', 2011: 2, 2012: 3 },
        { name: '新区公安局', 2011: 2, 2012: 3 },
    ];
    useEffect(() => {
        var myChart = echarts.init(divRef.current);
        myChart.setOption(
            createEchartsOptions({
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01],
                    splitLine: { show: false },
                    axisLabel: { show: false },
                },
                yAxis: {
                    axisTick: { show: false },
                    type: 'category',
                    data: data.map((i) => i.name),
                    axisLabel: {
                        formatter(val) {
                            return val.replace('公安局', '\n公安局');
                        },
                    },
                },
                grid: {
                    x: px(50),
                    y: px(15),
                    x2: px(0),
                    y2: px(10),
                },
                series: [
                    {
                        name: '2011年',
                        type: 'bar',
                        data: data.map((i) => i[2011]),
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                    {
                                        offset: 0,
                                        color: '#2034F9',
                                    },
                                    {
                                        offset: 1,
                                        color: '#04A1FF',
                                    },
                                ]),
                            },
                        },
                    },
                    {
                        name: '2012年',
                        type: 'bar',
                        data: data.map((i) => i[2012]),
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                    {
                                        offset: 0,
                                        color: '#B92AE8',
                                    },
                                    {
                                        offset: 1,
                                        color: '#6773E7',
                                    },
                                ]),
                            },
                        },
                    },
                ],
            })
        );
    }, []);

    return (
        <div className='bordered pohuopaiming'>
            <h2>案件破获排名</h2>
            <div ref={divRef} className='chart' />
            <div className='legend'>
                <span className='first' /> 破案排名1
                <span className='second' /> 破案排名2
            </div>
        </div>
    );
};

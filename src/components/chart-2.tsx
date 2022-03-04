import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { px } from '../common/px';
import { baseEchartOptions } from '../common/base-echart-options';
import { createEchartsOptions } from '../common/create-echarts-options';

export const Chart2 = () => {
    const divRef = useRef(null);
    const myChart = useRef(null);
    const data = [
        { name: 'A市公安局', 2021: 2, 2022: 3 },
        { name: 'B市公安局', 2021: 2, 2022: 3 },
        { name: 'C市公安局', 2021: 2, 2022: 3 },
        { name: 'D市公安局', 2021: 2, 2022: 3 },
        { name: 'E市公安局', 2021: 2, 2022: 3 },
        { name: 'F市公安局', 2021: 2, 2022: 3 },
        { name: 'G市公安局', 2021: 2, 2022: 3 },
        { name: 'H市公安局', 2021: 2, 2022: 3 },
        { name: 'I市公安局', 2021: 2, 2022: 3 },
    ];
    const setData = (data) => {
        myChart.current.setOption(
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
                    containLabel: true,
                },
                series: [
                    {
                        name: '2021年',
                        type: 'bar',
                        data: data.map((i) => i[2021]),
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
                        name: '2022年',
                        type: 'bar',
                        data: data.map((i) => i[2022]),
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
    };
    useEffect(() => {
        setInterval(() => {
            const newData = [
                { name: 'A市公安局', 2021: Math.random() * 10, 2022: Math.random() * 10 },
                { name: 'B市公安局', 2021: Math.random() * 10, 2022: Math.random() * 10 },
                { name: 'C市公安局', 2021: Math.random() * 10, 2022: Math.random() * 10 },
                { name: 'D市公安局', 2021: Math.random() * 10, 2022: Math.random() * 10 },
                { name: 'E市公安局', 2021: Math.random() * 10, 2022: Math.random() * 10 },
                { name: 'F市公安局', 2021: Math.random() * 10, 2022: Math.random() * 10 },
                { name: 'G市公安局', 2021: Math.random() * 10, 2022: Math.random() * 10 },
                { name: 'H市公安局', 2021: Math.random() * 10, 2022: Math.random() * 10 },
                { name: 'I市公安局', 2021: Math.random() * 10, 2022: Math.random() * 10 },
            ];
            setData(newData);
        }, 1000);
    }, []);
    useEffect(() => {
        myChart.current = echarts.init(divRef.current);
        setData(data);
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

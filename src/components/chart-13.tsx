import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createEchartsOptions } from '../common/create-echarts-options';

export const Chart13 = () => {
    const divRef = useRef(null);
    const myChart = useRef(null);
    const setData = (data) => {
        myChart.current.setOption(
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
                    axisLabel: {
                        formatter(value) {
                            return (value * 100).toFixed(0) + '%';
                        },
                    },
                },
                series: [
                    {
                        type: 'bar',
                        data: data.map((i) => i.value),
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#0A97FB',
                            },
                            {
                                offset: 1,
                                color: '#1E34FA',
                            },
                        ]),
                    },
                ],
            })
        );
    };
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
    useEffect(() => {
        myChart.current = echarts.init(divRef.current);
        setData(data);
    }, []);
    useEffect(() => {
        setInterval(() => {
            const newData = [
                { value: Math.random() / 10, name: 'A市' },
                { value: Math.random() / 10, name: 'B市' },
                { value: Math.random() / 10, name: 'C市' },
                { value: Math.random() / 10, name: 'D市' },
                { value: Math.random() / 10, name: 'E市' },
                { value: Math.random() / 10, name: 'F市' },
                { value: Math.random() / 10, name: 'G市' },
                { value: Math.random() / 10, name: 'H市' },
                { value: Math.random() / 10, name: 'I市' },
            ];
            setData(newData);
        }, 1000);
    }, []);

    return <div ref={divRef} className='chart'></div>;
};

import React, { useEffect, useRef } from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import * as echarts from 'echarts';
const px = (n) => (n / 2420) * (window as any).pageWidth;
export const Home = () => {
    const divRef = useRef(null);
    useEffect(() => {
        console.log(divRef.current);

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(divRef.current);
        // 绘制图表
        myChart.setOption({
            textStyle: {
                fontSize: px(12),
                color: '#79839E',
            },
            title: { show: false },
            legend: { show: false },
            xAxis: {
                data: [
                    '兰州新区',
                    '兰州新区',
                    '兰州新区',
                    '兰州新区',
                    '兰州新区',
                    '兰州新区',
                    '兰州新区',
                    '兰州新区',
                    '兰州新区',
                ],
                axisTick: { show: false },
                axisLine: {
                    lineStyle: { color: '#083B70' },
                },
                axisLabel: {
                    fontSize: px(12),
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
            grid: {
                x: px(40),
                y: px(40),
                x2: px(40),
                y2: px(40),
            },
            yAxis: {
                splitLine: { show: false },
                axisLine: {
                    show: true,
                    lineStyle: { color: '#083B70' },
                },
                axisLabel: {
                    fontSize: px(12),
                },
            },
            series: [
                {
                    type: 'bar',
                    data: [10, 20, 36, 41, 15, 26, 37, 18, 29],
                },
            ],
        });
    }, []);

    return (
        <div className='home'>
            <header style={{ backgroundImage: `url(${headerBg})` }}></header>
            <main>
                <section className='section1 '>
                    <div className='guanxiatongji  bordered'>
                        <h2>案发派出所管辖统计</h2>
                        <div ref={divRef} className='chart'></div>
                    </div>
                </section>
                <section className='section2 bordered '></section>
                <section className='section3 bordered'></section>
                <section className='section4 bordered'></section>
                <section className='section5 bordered'></section>
            </main>
        </div>
    );
};

<script lang="ts">
import { ref } from 'vue';
import './index.scss';
import Chart1 from '../components/Chart-1.vue';
import Chart2 from '../components/Chart-2.vue';
import Chart3 from '../components/Chart-3.vue';
import Chart4 from '../components/Chart-4.vue';
import Chart5 from '../components/Chart-5.vue';
import Chart6 from '../components/Chart-6.vue';
import Chart7 from '../components/Chart-7.vue';
import Chart8 from '../components/Chart-8.vue';
import Chart9 from '../components/Chart-9.vue';
import Chart10 from '../components/Chart-10.vue';
import Chart11 from '../components/Chart-11.vue';
import Chart12 from '../components/Chart-12.vue';
import Chart13 from '../components/Chart-13.vue';
import Chart14 from '../components/Chart-14.vue';

export default {
    components: {
        Chart1,
        Chart2,
        Chart3,
        Chart4,
        Chart5,
        Chart6,
        Chart7,
        Chart8,
        Chart9,
        Chart10,
        Chart11,
        Chart12,
        Chart13,
        Chart14,
    },
};
</script>

<template>
    <div class="home">
        <header>
            <span></span>
            <h1>广东省公安厅合成作战平台</h1>
            <span></span>
        </header>
        <main>
            <section class="section1">
                <Chart1 />
                <Chart2 />
            </section>
            <section class="section2">
                <Chart3 />
                <Chart4 />
            </section>
            <section class="bordered section3">
                <Chart5 />
            </section>
            <section class="section4">
                <Chart6 />
                <div class="bordered nianlingdu">
                    <h2>犯罪人员年龄段分布</h2>
                    <div class="charts">
                        <Chart7 />
                        <Chart8 />
                        <Chart9 />
                    </div>
                </div>
            </section>
            <section class="section5">
                <div class="bordered row1 anfaleixing">
                    <h2>案发类型统计</h2>
                    <div class="charts">
                        <Chart10 />
                        <Chart11 />
                    </div>
                </div>
                <div class="bordered row2 anfajiedao">
                    <h2>案发城市统计</h2>
                    <div class="charts">
                        <Chart12 />
                        <Chart13 />
                    </div>
                </div>
                <div class="bordered row3 zuoanshouduan">
                    <h2>作案手段分析</h2>
                    <Chart14 />
                </div>
            </section>
        </main>
        <footer>
            <span></span>
            <a href="//github.com/rustinliu">@Rustin</a>
            <span></span>
        </footer>
    </div>
</template>

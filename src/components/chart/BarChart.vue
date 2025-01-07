<template>
    <div class="chart-container">
        <canvas ref="canvas"></canvas>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const props = defineProps({
    chartData: {
        type: Object,
        required: true
    },
    chartOptions: {
        type: Object,
        default: () => ({
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Task Distribution',
                },
            },
        })
    }
});

const canvas = ref(null);
let chartInstance = null;

const renderChart = () => {
    if (chartInstance) {
        chartInstance.destroy();
    }
    chartInstance = new ChartJS(canvas.value, {
        type: 'bar',
        data: props.chartData,
        options: props.chartOptions,
    });
};

onMounted(() => {
    renderChart();
});

watch(() => props.chartData, () => {
    renderChart();
}, { deep: true });
</script>

<style scoped>
.chart-container {
    max-height: 400px;
}
</style>
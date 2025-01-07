<template>
    <main class="summary-container">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <h1 class="mb-4">
                        Summary
                        <small class="text-muted">(Tasks this week)</small>
                    </h1>
                    <div class="summary-stats">
                        <div class="stat-item" v-for="(tasks, description) in summaries" :key="description">
                            <Summaries :tasks="tasks" :description="description" />
                        </div>
                    </div>
                    <div class="summary-chart mt-5">
                        <canvas id="tasksChart"></canvas>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { useSummaryStore } from "../stores/summary";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import Summaries from "../components/summaries/Summaries.vue";
import Chart from 'chart.js/auto';

const store = useSummaryStore();
const { summaries } = storeToRefs(store);
const { fetchTasksSummary } = store;

const renderChart = () => {
    const ctx = document.getElementById('tasksChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(summaries.value),
            datasets: [{
                label: 'Tasks',
                data: Object.values(summaries.value).map(tasks => tasks.length),
                backgroundColor: '#007bff',
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });
};

onMounted(async () => {
    await fetchTasksSummary();
    renderChart();
});
</script>

<style scoped>
.summary-container {
    min-height: 50vh;
    margin-top: 2rem;
    padding: 2rem 0;
}

.summary-stats {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 2rem;
}

.stat-item {
    flex: 1 1 45%;
    margin: 1rem;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
}

.summary-chart {
    position: relative;
    height: 400px;
}
</style>
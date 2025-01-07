<template>
    <main class="summary-container">
        <h1 class="text-center">Summary</h1>
        <div class="summary-stats">
            <div class="stat-item">
                <h2>Total Tasks</h2>
                <p>{{ totalTasks }}</p>
            </div>
            <div class="stat-item">
                <h2>Completed Tasks</h2>
                <p>{{ completedTasks }}</p>
            </div>
            <div class="stat-item">
                <h2>Pending Tasks</h2>
                <p>{{ pendingTasks }}</p>
            </div>
        </div>
        <div class="summary-chart">
            <!-- Placeholder for a chart, e.g., using Chart.js or another library -->
            <canvas id="tasksChart"></canvas>
        </div>
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useTaskStore } from '@/stores/task';
import Chart from 'chart.js/auto';

const taskStore = useTaskStore();
const totalTasks = ref(0);
const completedTasks = ref(0);
const pendingTasks = ref(0);

const fetchSummary = async () => {
    await taskStore.fetchTasks();
    totalTasks.value = taskStore.tasks.length;
    completedTasks.value = taskStore.tasks.filter(task => task.completed).length;
    pendingTasks.value = totalTasks.value - completedTasks.value;
};

const renderChart = () => {
    const ctx = document.getElementById('tasksChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Completed', 'Pending'],
            datasets: [{
                data: [completedTasks.value, pendingTasks.value],
                backgroundColor: ['#4caf50', '#f44336'],
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });
};

onMounted(async () => {
    await fetchSummary();
    renderChart();
});
</script>

<style scoped>
.summary-container {
    padding: 2rem;
    text-align: center;
}

.summary-stats {
    display: flex;
    justify-content: space-around;
    margin-bottom: 2rem;
}

.stat-item {
    flex: 1;
    margin: 0 1rem;
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
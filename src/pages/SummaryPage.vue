<template>
    <main class="summary-page">
        <div class="container py-4">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <!-- Header Section -->
                    <header class="d-flex justify-content-between align-items-center mb-4">
                        <h1>
                            Summary
                            <small class="text-muted fs-4">
                                {{ selectedFilter.text || "All Periods" }}
                            </small>
                        </h1>
                        <SummaryFilter @update="setSelectedFilter" />
                    </header>

                    <!-- Loader -->
                    <div v-if="isLoading" class="text-center my-5">
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>

                    <!-- Error Message -->
                    <div v-if="error" class="alert alert-danger">
                        {{ error }}
                    </div>

                    <!-- Summaries Section -->
                    <div v-else-if="Object.keys(summaries).length > 0">
                        <div v-for="(tasks, description) in summaries" :key="description" class="mb-4">
                            <Summaries :tasks="tasks" :description="description" />
                        </div>
                    </div>

                    <!-- Empty State -->
                    <div v-else class="text-center text-muted">
                        <p>No summaries available for the selected period.</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { useSummaryStore } from "../stores/summary";
import { onMounted, reactive, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import Summaries from "../components/summaries/Summaries.vue";
import SummaryFilter from "../components/summaries/filter/SummaryFilter.vue";

// State and Stores
const store = useSummaryStore();
const { summaries } = storeToRefs(store);
const { fetchTasksSummary } = store;
const selectedFilter = reactive({
    period: "",
    text: "",
});
const isLoading = ref(false);
const error = ref(null);

// Methods
const setSelectedFilter = (event) => Object.assign(selectedFilter, event);

// Fetch Summaries
const loadSummaries = async () => {
    try {
        isLoading.value = true;
        error.value = null;
        await fetchTasksSummary({ period: selectedFilter.period });
    } catch (err) {
        error.value = "Failed to load summaries. Please try again.";
    } finally {
        isLoading.value = false;
    }
};

// Lifecycle Hooks
onMounted(loadSummaries);

// Watchers
watch(
    () => selectedFilter.period,
    loadSummaries
);
</script>

<style scoped>
.summary-page {
    min-height: 50vh;
    margin-top: 2rem;
}

header h1 {
    font-size: 1.75rem;
}

header small {
    font-size: 1rem;
    color: #6c757d;
}

.spinner-border {
    width: 3rem;
    height: 3rem;
}
</style>
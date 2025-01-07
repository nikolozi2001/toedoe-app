<template>
    <main class="home-container">
        <section class="hero-section text-center">
            <h1 class="display-5 fw-bold mt-4">Stay Organized, Be Productive</h1>
            <p class="lead mb-4">Organize your ideas, and be productive every day.</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <template v-if="isLoggedIn">
                    <router-link :to="{ name: 'tasks' }" class="btn btn-primary btn-lg px-4 gap-3">View Tasks</router-link>
                    <router-link :to="{ name: 'summary' }" class="btn btn-outline-secondary btn-lg px-4">View Summary</router-link>
                </template>
                <template v-else>
                    <router-link :to="{ name: 'register' }" class="btn btn-primary btn-lg px-4 gap-3">Sign up</router-link>
                    <router-link :to="{ name: 'login' }" class="btn btn-outline-secondary btn-lg px-4">Sign in</router-link>
                </template>
            </div>
        </section>
        <section class="features-section text-center mt-5">
            <h2 class="mb-4">Features</h2>
            <div class="row">
                <div class="col-md-4">
                    <i class="fas fa-tasks fa-3x mb-3"></i>
                    <h3>Task Management</h3>
                    <p>Keep track of your tasks and stay organized.</p>
                </div>
                <div class="col-md-4">
                    <i class="fas fa-calendar-check fa-3x mb-3"></i>
                    <h3>Calendar Integration</h3>
                    <p>Sync your tasks with your calendar for better planning.</p>
                </div>
                <div class="col-md-4">
                    <i class="fas fa-chart-line fa-3x mb-3"></i>
                    <h3>Productivity Insights</h3>
                    <p>Get insights on your productivity and improve over time.</p>
                </div>
            </div>
        </section>
        <section class="testimonials-section text-center mt-5">
            <h2 class="mb-4">What Our Users Say</h2>
            <div class="row">
                <div class="col-md-4">
                    <blockquote class="blockquote">
                        <p>"This app has transformed the way I organize my tasks!"</p>
                        <footer class="blockquote-footer">Jane Doe</footer>
                    </blockquote>
                </div>
                <div class="col-md-4">
                    <blockquote class="blockquote">
                        <p>"I love the calendar integration feature. It's a game-changer."</p>
                        <footer class="blockquote-footer">John Smith</footer>
                    </blockquote>
                </div>
                <div class="col-md-4">
                    <blockquote class="blockquote">
                        <p>"The productivity insights have helped me improve my workflow."</p>
                        <footer class="blockquote-footer">Emily Johnson</footer>
                    </blockquote>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { computed } from 'vue';
import { useAuthStore } from '@/stores/auth';

const store = useAuthStore();
const isLoggedIn = computed(() => store.isLoggedIn);
</script>

<style scoped>
.home-container {
    padding: 2rem 0;
}

.hero-section {
    padding: 4rem 0;
    background-color: #f8f9fa;
}

.features-section {
    padding: 4rem 0;
}

.features-section .col-md-4 {
    margin-bottom: 2rem;
}

.testimonials-section {
    padding: 4rem 0;
    background-color: #f8f9fa;
}

.blockquote {
    font-size: 1.1rem;
    font-style: italic;
    margin: 1rem 0;
}

.blockquote-footer {
    font-size: 0.9rem;
    color: #6c757d;
}
</style>

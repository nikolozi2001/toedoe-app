<template>
    <main class="home-container">
        <h1 class="text-center">Welcome to ToeDoeList</h1>
        <p class="text-center lead">Your ultimate task management solution.</p>
        <div class="text-center mt-4">
            <RouterLink to="/login" class="btn btn-primary mx-2">Log in</RouterLink>
            <RouterLink to="/about" class="btn btn-secondary mx-2">Learn More</RouterLink>
        </div>
    </main>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'HomePage',
    components: {
        RouterLink
    }
}
</script>

<style scoped>
.home-container {
    min-height: 50vh;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.lead {
    font-size: 1.25rem;
    font-weight: 300;
}

.btn {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
}
</style>
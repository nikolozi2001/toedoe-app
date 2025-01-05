<template>
    <footer class="py-3 my-4 bg-light">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
                <RouterLink to="/terms" class="nav-link px-2 text-muted">Terms</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/privacy" class="nav-link px-2 text-muted">Privacy</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/faqs" class="nav-link px-2 text-muted">FAQs</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/about" class="nav-link px-2 text-muted">About</RouterLink>
            </li>
        </ul>
        <div class="text-center mb-3">
            <a href="https://facebook.com" target="_blank" class="text-muted mx-2">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" class="text-muted mx-2">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" class="text-muted mx-2">
                <i class="fab fa-instagram"></i>
            </a>
        </div>
        <p class="text-center text-muted">&copy; 2025 ToeDoeList</p>
    </footer>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'Footer',
    components: {
        RouterLink
    }
}
</script>

<style scoped>
footer {
    background-color: #f8f9fa;
}

.nav-link {
    transition: color 0.3s;
}

.nav-link:hover {
    color: #007bff;
}

.text-muted {
    color: #6c757d !important;
}

.text-muted:hover {
    color: #343a40 !important;
}

i {
    font-size: 1.2rem;
}
</style>

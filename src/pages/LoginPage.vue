<template>
    <main class="login-container">
        <h1 class="text-center">Login Page</h1> 
        <form @submit.prevent="handleSubmit" class="login-form">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" id="email" v-model="form.email" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="form.password" class="form-control" required>
            </div>
            <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
            <button type="submit" class="btn btn-primary btn-block">Login</button>
        </form>
    </main>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const store = useAuthStore();

const form = reactive({
    email: '',
    password: ''
});

const errorMessage = ref('');

const handleSubmit = async () => {
    try {
        await store.handleLogin(form);
        router.push('/');
    } catch (error) {
        if (error.response && error.response.status === 422) {
            errorMessage.value = 'Invalid email or password.';
        } else {
            errorMessage.value = 'An error occurred. Please try again.';
        }
        console.error(error);
    }
};
</script>

<style scoped>
.login-container {
    min-height: 50vh;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.login-form {
    width: 100%;
    max-width: 400px;
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff;
}

.form-group {
    margin-bottom: 1rem;
}

.form-control {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.btn-block {
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
}

.alert {
    margin-top: 1rem;
}
</style>
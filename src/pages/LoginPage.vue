<template>
    <main class="login-container">
        <h1 class="text-center">Login Page</h1>
        <form @submit.prevent="handleSubmit" class="login-form">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" v-model="username" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password" class="form-control" required>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Login</button>
        </form>
    </main>
</template>

<script>
export default {
    name: 'LoginPage',
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        handleSubmit() {
            // Handle login logic here
            console.log('Username:', this.username);
            console.log('Password:', this.password);
        }
    }
}
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
</style>
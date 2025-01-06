import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { csrfCookie, login, register, logout, getUser } from "../http/auth-api";

export const useAuthStore = defineStore("authStore", () => {
  const user = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const isLoggedIn = computed(() => !!user.value);

  const fetchUser = async () => {
    try {
      loading.value = true;
      const { data } = await getUser();
      user.value = data;
    } catch (err) {
      error.value = "Failed to fetch user data.";
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const handleLogin = async (credentials) => {
    try {
      loading.value = true;
      await csrfCookie();
      await login(credentials);
      await fetchUser();
    } catch (err) {
      error.value = "Login failed. Please check your credentials.";
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const handleRegister = async (newUser) => {
    try {
      loading.value = true;
      await register(newUser);
      await handleLogin({
        email: newUser.email,
        password: newUser.password,
      });
    } catch (err) {
      error.value = "Registration failed. Please try again.";
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const handleLogout = async () => {
    try {
      loading.value = true;
      await logout();
      user.value = null;
    } catch (err) {
      error.value = "Logout failed. Please try again.";
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    user,
    isLoggedIn,
    loading,
    error,
    fetchUser,
    handleLogin,
    handleRegister,
    handleLogout,
  };
});

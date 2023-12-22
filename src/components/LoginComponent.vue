<template>
<div class="flex w-full max-w-sm mx-auto my-40 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
    <img class="hidden bg-cover lg:block lg:w-1/2" src="../assets/images/login.png">

    <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <div class="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div class="px-6 py-4">
                <div class="flex justify-center mx-auto">
                    <img class="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="">
                </div>

                <h3 class="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome!</h3>

                <p class="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

                <form @submit.prevent="login">
                    <div class="mt-5">
                        <label for="id" class="sr-only">User ID</label>

                        <div class="relative">
                            <input required v-model="id" type="text" class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="User ID" />

                            <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div class="mt-5">
                        <label for="password" class="sr-only">User password</label>

                        <div class="relative">
                            <input required v-model="password" :type="showPassword ? 'text' : 'password'" class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="User password" />

                            <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg @click="togglePassword" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div class="flex items-center justify-between mt-5">
                        <a class="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</a>

                        <button type="submit" class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Sign In
                        </button>
                    </div>
                </form>
            </div>

            <div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                <span class="text-sm text-gray-600 dark:text-gray-200">If you are a student please - </span>

                <a href="#" class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Register</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2'

export default {
    name: "LoginComponent",
    data() {
        return {
            id: "",
            password: "",
            showPassword: false,
        }
    },
    methods: {
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
        async login() {
            let login = await axios.post("http://127.0.0.1:8000/api/user_login", {
                id: this.id,
                password: this.password
            })
            if (login.data.massage == "Student") {
                localStorage.setItem("student-details", JSON.stringify(login.data.data.student_Id))
                this.$router.push({
                    path: '/home-student'
                })
                Swal.fire({
                    title: "Login Successfull!",
                    icon: "success"
                });

            } else if (login.data.massage == "Admin") {
                localStorage.setItem("admin-details", JSON.stringify(login.data.data.admin_Id))
                this.$router.push({
                    path: '/home-admin'
                })
                Swal.fire({
                    title: "Login Successfull!",
                    icon: "success"
                });
            } else if (login.data.massage == "Supervisor") {
                localStorage.setItem("supervisor-details", JSON.stringify(login.data.data.supervisor_Id))
                this.$router.push({
                    path: '/home-supervisor'
                })
                Swal.fire({
                    title: "Login Successfull!",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Wrong username or password",
                    text: "Check your username and password carefully!",
                });
            }
            console.warn(login.data.massage)
        }
    }
}
</script>

<style>

</style>

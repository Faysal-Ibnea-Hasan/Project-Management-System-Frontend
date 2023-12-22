<template>
<!-- Team -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Title -->
    <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">

        <p class="mt-1 text-gray-600 dark:text-gray-400">Group Invitetion</p>
    </div>
    <!-- End Title -->

    <!-- Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700" v-for="(item,index) in request_data" :key="index">
            <div class="flex items-center gap-x-4">
                <img class="rounded-full w-20 h-20" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description">
                <div class="grow">
                    <h3 class="font-medium text-gray-800 dark:text-gray-200">
                        {{ item.students.name }}
                    </h3>
                    <p class="text-xs uppercase text-gray-500">
                        {{ item.students.student_Id}}
                    </p>
                </div>
            </div>

            <p class="mt-3 text-gray-500">
                Let's collaborate and coordinate efforts to ensure a smooth and successful completion of our group project.
            </p>

            <!-- Social Brands -->
            <div class="mt-3 space-x-1">
                <a class="inline-flex justify-center items-center p-2 w-auto h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                    <p>Group - {{ item.groups.name }}</p>
                </a>
                <a class="inline-flex justify-center items-center p-2 w-auto h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">

                    <p>{{ item.students.department }}</p>

                </a>
                <a class="inline-flex justify-center items-center p-2 w-auto h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                    <p>Batch - {{ item.students.batch }}</p>
                </a>
                <div v-if="item.status == 0" class="flex flex-row place-content-end space-x-1">
                    <a @click="reject_request(item.id)" class="inline-flex justify-center items-center  w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                        <svg class="w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </a>
                    <a @click="accept_request(item.groups.group_Id)" class="inline-flex justify-center items-center  w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                        <svg class="w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                        </svg>
                    </a>
                </div>
                <div v-else-if="item.status == 1" class="flex flex-row place-content-end space-x-1">
                    <a class="inline-flex justify-center items-center p-2  w-auto h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                        <p>Joined</p>
                    </a>
                    
                </div>
            </div>
            <!-- End Social Brands -->
        </div>
        <!-- End Col -->

    </div>
    <!-- End Grid -->
</div>
<!-- End Team -->
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
    name: "RequestComponentStudent",
    data() {
        return {
            id: JSON.parse(localStorage.getItem('student-details')),
            request_data: [],
            group_Id: ''
        }
    },
    methods: {
        async get_request() {
            let get_request = await axios.post("http://127.0.0.1:8000/api/get_request", {
                reciever_Id: this.id
            })
            if (get_request.data.status == true) {
                this.request_data = get_request.data.data
                // let group_data = this.request_data.map(item=>item.groups)
                // group_data.length = 1
                // this.group_Id = group_data.map(item=>item.group_Id)
                console.warn(this.request_data)
            }
        },
        async accept_request(group_Id) {
            console.warn(group_Id)
            let accept_request = await axios.post("http://127.0.0.1:8000/api/accept_student", {
                reciever_Id: this.id,
                status: 1
            })
            if (accept_request.data.status == true) {
                let seed_group = await axios.post("http://127.0.0.1:8000/api/create_seed", {
                    group_Id: group_Id,
                    student_Id: this.id
                })
                if (seed_group.data.status == true) {
                    Swal.fire("You joined the group!");
                    this.get_request();
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        
                    });
                }
            }
        },
        async reject_request(id) {
            let reject_request = await axios.post("http://127.0.0.1:8000/api/reject_request",{
                id: id,
            })
            if (reject_request.data.status == true) {
                this.get_request();
            }
        }
    },
    mounted() {
        this.get_request();
    }
}
</script>

<style>

</style>

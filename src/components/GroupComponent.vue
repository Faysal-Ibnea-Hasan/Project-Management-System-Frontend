<template>
<body>
    <!-- Subscribe -->
    <div class="max-w-6xl sm:px-6 lg:px-8  mx-auto">
        <div class="max-w-xl text-center mx-auto">
            <div class="mb-5">
                <h2 class="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">Sign up to our newsletter</h2>
            </div>

            <form @submit.prevent="create_group">
                <div class="lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                    <div class="w-full">
                        <label for="name" class="sr-only">Group Name</label>
                        <input type="text" v-model="post_group.name" id="name" name="name" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Enter your group name">
                    </div>
                    <button type="submit" class="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                        Create
                    </button>
                </div>
            </form>
            <form @submit.prevent="">
                <div class="lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                    <div class="w-full">
                        <label for="student_Id" class="sr-only">Invite</label>
                        <input type="text" id="student_Id" name="student_Id" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Enter student ID">
                    </div>
                    <a class="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                        Invite
                    </a>
                </div>
            </form>
        </div>
    </div>
    <!-- End Subscribe -->

    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

        <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-7" v-for="(item,index) in groups" :key="index">
            <h2 class="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800">{{ item.name }} | {{ item.group_Id }}</h2>
            <span class="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm mt-1">
                <button class="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative">
                    Edit
                </button>

                <button class="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative">
                    View
                </button>

                <button @click="delete_group(item.id)" class="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative">
                    Delete
                </button>
            </span>
            <p class="mt-5 text-xl font-bold text-gray-600 dark:text-gray-400">Group Member</p>

        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700" v-for="(item,index) in students" :key="index">
                <div class="flex items-center gap-x-4">
                    <img class="rounded-full w-20 h-20" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description">
                    <div class="grow">
                        <h3 class="font-medium text-gray-800 dark:text-gray-200">
                            {{ item.name }}
                        </h3>
                        <p class="text-xs uppercase text-gray-500">
                            {{item.student_Id}}
                        </p>
                    </div>
                </div>

                <p class="mt-3 text-gray-500">
                    {{ item.about }}
                </p>

                <div class="mt-3 space-x-1">
                    <a class="inline-flex justify-center items-center p-2 w-auto h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                        <p>Batch-{{ item.batch }}</p>
                    </a>
                    <a class="inline-flex justify-center items-center p-2 w-auto h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                        <p>{{ item.department }}</p>
                    </a>
                    <a class="inline-flex justify-center items-center p-2 w-auto h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                        <p>{{ item.email }}</p>
                    </a>
                </div>
            </div>
        </div>

    </div>

</body>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import {
    ref
} from 'vue'

export default {
    name: "GroupComponent",
    data() {

        return {
            student_Id: JSON.parse(localStorage.getItem("student-details")),
            post_group: {
                name: '',
            },
            group_Id: JSON.parse(localStorage.getItem("group-details")),
            seed_details: [],
            groups: [],
            students: [],
        }
    },
    methods: {
        delete_group(id) {
            console.warn(id);
            Swal.fire({
                title: "Do you want to save the changes?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Delete",
                denyButtonText: `Cancel`
            }).then(async (result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    let delete_group = await axios.post("http://127.0.0.1:8000/api/group_delete", {
                        id: id
                    });
                    if (delete_group.data.status == true) {
                        localStorage.removeItem('group-details');
                        Swal.fire("Group was deleted!", "", "success");
                        this.seed_data()
                    }
                } else if (result.isDenied) {
                    Swal.fire("Group was not deleted", "", "info");
                }
            });

        },
        async seed_group() {
            let seed_group = await axios.post("http://127.0.0.1:8000/api/create_seed", {
                group_Id: this.group_Id,
                student_Id: this.student_Id
            })
            console.warn(seed_group);
        },
        async create_group() {
            const group_exists = localStorage.getItem("group-details")
            if (group_exists) {
                Swal.fire({
                    icon: "error",
                    title: "You can't create multiple group",
                    text: "If you want to create another group delete this one!",

                });
            } else {
                let create_group = await axios.post("http://127.0.0.1:8000/api/group_create", {
                    name: this.post_group.name,
                })
                if (create_group.data.status) {
                    localStorage.setItem("group-details", JSON.stringify(create_group.data.group_Id))

                    this.seed_group();
                    this.seed_data();
                    console.warn(create_group.data.group_Id);
                }
            }

        },

        async seed_data() {
            let seed_data = await axios.post("http://127.0.0.1:8000/api/get_seed", {
                group_Id: this.group_Id,
            });
            if (seed_data.data.status == true) {
                const details = seed_data.data.data;
                this.seed_details = details
                this.groups = this.seed_details.map(item => item.groups);
                this.groups.length = 1
                this.students = this.seed_details.map(item => item.students)
            }
            console.warn(seed_data);
        }

    },
    mounted() {
        this.seed_data();

    }
}
</script>

<style>

</style>

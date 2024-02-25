<template>
    <div>
        <input v-model="newTask" placeholder="Add a new Task">
        <button @click="addTask">Add Task</button>

        <div>
            <button @click="setFilter('all')">All</button>
            <button @click="setFilter('active')">Active</button>
            <button @click="setFilter('completed')">Completed</button>
        </div>
      
        <ul>
            <li v-for="(task, index) in filteredTasks" :key="index">
                <input type="checkbox" v-model="task.complete">
                <span :class="{completed: task.completed}">{{ task.description }}</span>
                <button @click="deleteTask(index)">Delete</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newTask: '',
            tasks:[],
            filter: '',
        };
    },
    methods: {
        addTask() {
            if (this.newTask.trim()) {
                this.tasks.push({description: this.newTask, completed: false});
                this.newtask = '';
            }
        },
        setFilter(filter) {
            this.filter = filter;
        },
        deleteTask(index) {
            this.tasks.splice(index, 1);
        }

    },
    computed: {
        filteredTasks() {
            switch (this.filter) {
                case 'active': return this.tasks.filter(task => task.completed);
                case 'completed': return this.tasks.filter(task => task.completed);
                default: return this.tasks
            }
        }
    }
}

</script>

<style>
.completed {
    text-decoration: line-through;
}
</style>
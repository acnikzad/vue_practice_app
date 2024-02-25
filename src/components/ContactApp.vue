<template>
    <div>
        <input v-model="name" placeholder="Name">
        <input v-model="address" placeholder="Address">
        <input v-model="phoneNumber" placeholder="phoneNumber">
        <input v-model="email" placeholder="email">
        <button @click="addContact">Add Contact</button>
        <button @click="toggleListVisibility">Toggle List Visibility</button>
    </div>
    <div v-if="contacts" v-bind:class="{hidden: !isListVisible}">    
        <ul>
            <li v-for="contact in contacts" :key="contact.id">
                <p>{{ contact.name }}</p>
                <p>{{ contact.phoneNumber }}</p>
                <p>{{ contact.address }}</p>
                <p>{{ contact.email }}</p>
            </li>
        </ul>
    
    </div>

</template>

<script>
    export default {
        name: 'ContactApp',
        data() {
            return {
                contacts: [],
                address: "",
                phoneNumber: "",
                email: "",
                name: "",
                isListVisible: false,
            }
        },
        methods: {
            addContact() {
                let id = this.contacts.length + 1;
                const contactToAdd = {
                    id: id,
                    name: this.name,
                    email: this.email,
                    phoneNumber: this.phoneNumber,
                    address: this.address,
                }
                console.log(contactToAdd)
                this.contacts.push(contactToAdd);

                this.name = '';
                this.email = '';
                this.phoneNumber = '';
                this.address = '';
            },
            toggleListVisibility() {
                this.isListVisible = !this.isListVisible; 
            }

        },
        computed: {
        }
    }
</script>
<style>

.hidden {
    display: none;
}
</style>
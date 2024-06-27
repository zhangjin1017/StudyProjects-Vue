<template>
    <div class="post-form">
        <h1>Submit a Message</h1>
        <form @submit.prevent="submitForm">
            <div>
                <label for="message">Message:</label>
                <textarea v-model="message" id="message" required></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
        <div v-if="response">
            <h2>Response</h2>
            <p>Status: {{ response.status }}</p>
            <p>Message: {{ response.message }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            message: '',
            response: null
        }
    },
    methods: {
        async submitForm() {
            try {
                const res = await axios.post('http://localhost:5000/submit', {
                    name: this.name,
                    message: this.message
                });
                this.response = res.data;
            } catch (error) {
                console.error('There was an error!', error);
            }
        }
    }
}
</script>

<style scoped>
.post-form {
    max-width: 500px;
    margin: 0 auto;
}

label {
    display: block;
    margin-bottom: 5px;
}

input,
textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 10px 15px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #358e6d;
}
</style>
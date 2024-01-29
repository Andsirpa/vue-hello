const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Quack quack!',
            myImage: 'https://ilmondo-rivista.it/wp-content/uploads/2023/08/shutterstock_1729553983-1000x500.jpg?crop=1'
        }
    }
}).mount('#app')
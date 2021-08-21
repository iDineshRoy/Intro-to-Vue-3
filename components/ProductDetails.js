app.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template:

        /*html*/
        `<div class='product-details'>
        <ul>
        <li v-for="(detail, i) in details">{{ i+1 }}. {{ detail }}</li>
        </ul>
        </div>`,
})
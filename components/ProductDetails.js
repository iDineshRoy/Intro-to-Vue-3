app.component('product-details', {
    props: {
        details: {
            type: String,
            required: true
        }
    },
    template:

        /*html*/
        `<div class='product-details'>
        <p>Details: {{ detailsCompute }}</p>
        </div>`,
    computed: {
        detailsCompute() {
            if(this.details){
                return "What is this?"
            }
            return "I don't know how."
        },
    }
})
app.component('reviews-comp', {
    props: {
        reviews: {
            type: Array
        }
    },
    template:
    /*html*/
    `
    <div>
    <small>Reviews:</small>
    <ul>
        <li v-for="r in reviews">
            <small><strong>{{ r.name }}</strong> rated {{ r.rating }} stars.</small>
            <small>"{{ r.review }}"</small>
            <small>Recommends: <strong>{{ r.recommend }}</strong></small>
            
        </li>
    </ul>
    </div>
    `,
    methods:{
        
    },
})
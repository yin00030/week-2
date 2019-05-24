var app = new Vue({
    el: '#app' , 
    data: {
        name: 'Crusier' ,
        brand: 'Iron Horse' ,
        description: 'True to its name, the Iron Horse Crusier is an <i>experience and expression of freedom</i>.',
        cart: 0,
        features:  ['1200CC Air-cooled Evolution Engine',
        'Closed loop exhaust system', 'Chrome Details'],
        specs: {
          engine: '1200cc',
           torque: '99 NM',
           weight: '255 kg',
        other: ['Two tone colour', 'Fog Lamps', 'Alloy Wheels']
        },
        variations: [
            {
                color: 'red',
                quantity: 10,
                image: './img/motorcycle-red.jpg'
            },
            {
                color: 'blue',
                quantity: 3,
                image: './img/motorcycle-blue.jpg'
            }
        ],
        selectedVariation: 0,
        redButton: {backgroundColor: 'red'},
        tabs:['Features','Specs'],
        selectedTab:'Features'
    },
    computed: {
        title: function(){
           return this.brand + ' - ' + this.name
        },
        image: function() {
            return this.variations[this.selectedVariation].image
        }
    },
    methods: {
        updateProduct: function (index) {
         this.selectedVariation = index
        }
    }
}) 

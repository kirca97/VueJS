const products = [
	{id: 1,title: 'LenovoThinkpad x280', price: 1000.00, qty: 1, image: './img/ThinkPad_x280.png'},
	{id: 2,title: 'Apple Macbook Pro',price: 2500.00, qty: 1,image: './img/MacBook-Pro.png'},
	{id: 3,title: 'Amazon Kindle Ebook',price: 150.00,qty: 1,image: './img/Amazon_Kindle.png'},
	{id: 4,title: 'USB-C to HDMI cable',price: 10, qty: 1, image: './img/usbC_to_hdmi.jpg'},
];


// Your Code goes here
var vm = new Vue({
	el: '#app',
	data: {
		products:products,
		cartItems: []
	},
	methods: {
		addToCart: function (item) {
			var postoi = this.cartItems.find(i => i.id === item.id);
			if(postoi) {
				postoi.qty += item.qty;
			}
			else {
				this.cartItems.push({...item});
			}
			item.qty = 0;
		}
	},
	filters: {
		formatCurrency: function (value) {
			return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ".00";
		}
	}
});


Vue.component(
	"shopping-cart",
	{
		props: ["items"],
		methods: {
			removeItem: function (index) {
				return this.items.splice(index,1);
			}
		},
		computed: {
			Total: function () {
				var sum = 0;
				for(i in this.items) {
					sum += i.qty * i.price;
				}
				return 0;
			}
		},
		filters: {
			formatCurrency: function (value) {
				return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ".00";
			}
		}
	}
);

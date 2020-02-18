
// Your Vue code here....

var vm = new Vue({
    el: '#app',
    data: {
        message: '',
        has_uppercase: false,
        has_lowercase: false,
        has_number: false,
        has_special: false
    },
    methods: {
        passwordCheck: function () {
            this.has_uppercase = /[A-Z]/.test(this.message);
            this.has_lowercase = /[a-z]/.test(this.message);
            this.has_number = /[0-9]/.test(this.message);
            this.has_special = /[!@#$%^&*()_=+,.]/.test(this.message);
        }
    }
});

new Vue ({
	el 		: "#konten",
	data 	: {
		pesan : "Hello World !!",
	}
})
new Vue ({
	el 		: "#kondisi",
	data 	: {
		count : 2,
		terlihat : true
	}
})
new Vue ({
	el 		: "#perulangan",
	data 	: {
		data : [
					{ teks : "aaaaa"},
					{ teks : "bbbbb"},
					{ teks : "ccccc"}
				],
		data2 : [
					 "aaaaa",
					 "bbbbb",
					 "ccccc"
				],
		newdata : ''
	},
	methods :{
				add:function(){
					return this.data.push({teks: this.newdata})
				}
	},
	filters	:{
				capitalize:function(value){
					return value.toUpperCase()
				},
				asd:function(value){
					return value + 'y'
				}
	}
})
new Vue ({
	el 		: "#judul",
	data 	: {
		pesan : "Ini Pesan",
	}
})
new Vue ({
	el 		: "#inputan",
	data 	: {
		email : 'adri.saputra.ibrahim@gmail.com'
	}
})
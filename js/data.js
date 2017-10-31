define(['jquery'],function(jquery){
	/*function indexData(){
		$.get("data/index.json",function(result){
			var app = new Vue({
				el: "#main",
				data: {
						data: result
					}
			});
		},"json");
	}
	return indexData;*/
	return{
		"indexData":function(callback){
			$.get("data/index.json",function(result){
				callback(result);
			},"json");
		}
	}
})

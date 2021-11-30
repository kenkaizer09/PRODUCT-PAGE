$( document ).ready(function() {
	var orders = [],
		count = 0;

	$(".prod-sizes ul li").on("click", function(){
		$(".prod-sizes ul li").removeClass("active");
		$(this).addClass("active");
		var size = $(this).text();
		$(".selected-size").text(size);
	});
	
	$("#btnAddCard").on("click", function(){
		if($(".selected-size").text() == ""){
			alert("No size selected");
		}else{
			var size = $(".selected-size").text();
			var prodName = $(".prod-name").text();
			var prodAmt = $(".prod-amount").text();

			var order = {};
			order.size = size;
			order.name = prodName;
			order.prodAmt = prodAmt;
			
			orders.push(order)

			count++;
			$(".prod-count").text("(" + count + ")");	

			displayMyCart(orders);
		}
		
	});

	function displayMyCart(orders){

		var sizes = orders.map((size, index) => {
			return orders[index].size;
		});

		countSizes(sizes);		
	}

	function countSizes(sizes) {

		$(".my-items").empty();
		
		var str = "";
	    sizes.sort();

	    var current = null;
	    var cnt = 0;
	    for (var i = 0; i < sizes.length; i++) {
	        if (sizes[i] != current) {
	            if (cnt > 0) {
	               str += displayOrder(current, cnt);	  	
	            }
	            current = sizes[i];
	            cnt = 1;
	        } else {
	            cnt++;
	        }
	    }
	    if (cnt > 0) {
	        str += displayOrder(current, cnt);
	    }
	   $(".my-items").append(str);
	}

	function displayOrder(current, cnt){
		var str = '<li>' +
				'<div class="my-item-img">' +
					'<img src="img/classic-tee.jpg">' +
				'</div>' +
				'<div class="my-item-details">' +
					'<p class="item-name">Classic Tee</p>' +
					'<p>' +
						'<span class="item-quantity">'+ cnt +'</span>x ' +
						'<b class="item-amount">$75.00</b>' +
					'</p>' +
					'<p>' +
						'Size: <span class="item-size">'+ current +'</span>' +
					'</p>' +
				'</div>	' +
			'</li>';
			
		return str;
	}
});
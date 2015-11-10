var Start = (function($){
	function start(o){
		this.creat(o);
	};
	start.prototype = {
		creat: function (o){
			var size=$(o).height();
			var sizeMin=size/20;
			for(var i=0;i<400;i++){
        		$(o).append("<div class='min'></div>");
    		}
    		$(".min").css({"display":"inline-block","height":sizeMin+"px","width":sizeMin+"px","float":"left","background-color":"black","transition":"opacity 1.2s","-moz-transition":"opacity 1.2s","-webkit-transition":"opacity 1.2s","-o-transition":"opacity 1.2s"});
    		this.gone(o);
		},
		gone: function(o){
			var childs = $(o).children();
			console.log(childs);
			var count=0;
			var i=0;
			var child = new Array();
			for (var k = 0; k < 20; k++) {
				child[k] = new Array();
				for (var j = 0; j <20; j++) {
					child[k][j]=childs[i];
					i++;
				};
			};
			function change(){
				for ( i = 0; i <count; i++) {
					for (var j = 0; j <count; j++) {
						if(i+j<=count&&i<20&&j<20){$(child[i][j]).css("opacity","0");}
					};					
				};				
				if(count<55){t=setTimeout(change,50)}
				if(count==55){$(o).empty();}
				count++;
			}
			(function(){
				change();
			}());
		},
	}
	return {
		set: function(o){
			new start(o)
		}
	}
})(jQuery)
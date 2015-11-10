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
			var count=-1;
			var count2=20;
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
				for ( i = 0; i <20; i++) {
					if(count2<20&&count>=0&&count2>0){
						$(child[count][i]).css("opacity","0");
						$(child[i][count]).css("opacity","0");
						$(child[i][count2]).css("opacity","0");
						$(child[count2][i]).css("opacity","0");
					}
				};				
				if(count<20){t=setTimeout(change,100)}
				if(count==20){$(o).empty();}
				count++;
				count2--;
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
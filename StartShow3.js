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
    		$(".min").css({"display":"inline-block","height":sizeMin+"px","width":sizeMin+"px","float":"left","background-color":"black","transition":"opacity 0.5s","-moz-transition":"opacity 0.5s","-webkit-transition":"opacity 0.5s","-o-transition":"opacity 0.5s"});
    		this.gone(o);
		},
		gone: function(o){
			var childs = $(o).children();
			var count=0;
			var i=0;
			var myAr=new Array();
			var tm;
			var child = new Array();
			for (var k = 0; k < 20; k++) {
				child[k] = new Array();
				for (var j = 0; j <20; j++) {
					child[k][j]=childs[i];
					i++;
				};
			};
			function change(){
				if(count>0){
					miss();
					while($.inArray(tm,myAr)!=-1){
						miss();
						if(myAr.length>399){break;}
						console.log(1);
					}
					if($.inArray(tm,myAr)==-1){myAr.push(tm)}		
				}
				function miss(){
					var x=Math.floor(Math.random()*20);
	        		var y=Math.floor(Math.random()*20);
	        		$(child[x][y]).css("opacity","0");
	        		tm=x+"i"+y;	
				}
				if(count<600){t=setTimeout(change,4)}
				if(count==600){$(o).empty();}
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
	function YJImageFlow() {
	    /* Act on the event */
	    this.run = function(bodys) {
	        var that = this;
	        $(window).load(function() {
	            var panel = $(bodys.dom);
	            var box = panel.children('img');
	            box.css({
	                position: 'absolute',
	                display: 'block'
	            });
	            var length = box.length;
	            var height = box.height();
	            var spacing = bodys.spacing || 30;
	            var width = box.width() + spacing;
	            var offset = bodys.offset || 0;
	            var speed = bodys.speed || 1000;
	            var body = {
	                box: box,
	                width: width,
	                length: length,
	                offset: offset,
	                speed: speed
	            }
	            var domwidth = bodys.domwidth || width * (length - 1)
	            panel.css({
	                height: height,
	                display: "flex",
	                position: "relative",
	                overflow: "hidden",
	                width: domwidth
	            });
	            that.runflow(body)

	        });
	    }

	    this.runflow = function(body) {
	        for (var i = body.length - 1; i >= 0; i--) {
	            body.box.eq(i).css({ left: body.width * i - body.offset + 'px' })
	        }
	        this.flow(body)
	    }

	    this.flow = function(body) {
	        var that = this;
	        body.box.animate({
	                left: '-=' + body.width
	            },
	            body.speed, "linear",
	            function() {
	                if ($(this).css("left") == -body.width - body.offset + "px") {
	                    $(this).css({ left: (body.length - 1) * body.width - body.offset + "px" });
	                }
	                that.flow(body);
	            });
	    }
	}



	imgFlow = new YJImageFlow()
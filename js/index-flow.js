//Illustration by http://psdblast.com/flat-color-abstract-city-background-psd
$(window).on('mousemove', function(e) {
        var w = $(window).width();
        var h = $(window).height();
        var offsetX = 0.5 - e.pageX / w;
        var offsetY = 0.5 - e.pageY / h;

        $(".parallax").each(function(i, el) {
            var offset = parseInt($(el).data('offset'));
            var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)";

            $(el).css({
                '-webkit-transform': translate,
                'transform': translate,
                'moz-transform': translate
            });
        });
    });
	
	
	  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
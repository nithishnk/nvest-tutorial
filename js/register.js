wj_jquery_version = '1.12.4';
js_jquery_ab6174c1905390a3efc09758f122753c18a24767 = document.createElement('script');
js_jquery_ab6174c1905390a3efc09758f122753c18a24767.type = 'text/javascript';
js_jquery_ab6174c1905390a3efc09758f122753c18a24767.onload = function() {

    jquery_ab6174c1905390a3efc09758f122753c18a24767 = jQuery.noConflict(true);

    var css = '.wj-registration-modal-opened{overflow-y:hidden;}',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        iframeOffsetHeight = 0,
        iframeOffsetTop = 0;

    style.type = 'text/css';
    if (style.styleSheet){
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);

    var resize = function() {
        if (document.getElementById('regpopFrame') === null) {
            return false;
        }

        var receiver = document.getElementById('regpopFrame').contentWindow;

        receiver.postMessage({"a":"getOffsetHeight"}, '*');
        receiver.postMessage({"a":"getOffsetTop"}, '*');
        setTimeout(realResize, 50);
    }

    realResize = function() {
        var windowHeight3 = window.innerHeight;
        jquery_ab6174c1905390a3efc09758f122753c18a24767('#regpopFrame').height(windowHeight3).fadeIn();
    }

    var onMessage = function(messageEvent) {
        if (messageEvent.data.a == 'resize') {
            resize();
        }
        if (messageEvent.data.a == 'setOffsetHeight') {
            iframeOffsetHeight = messageEvent.data.v;
        }
        if (messageEvent.data.a == 'setOffsetTop') {
            iframeOffsetTop = messageEvent.data.v;
        }
        if (messageEvent.data.a == 'close') {
            jquery_ab6174c1905390a3efc09758f122753c18a24767("#frameContent").fadeOut();
            jquery_ab6174c1905390a3efc09758f122753c18a24767('#regpopFrame').fadeOut();
            jquery_ab6174c1905390a3efc09758f122753c18a24767("body").removeClass('wj-registration-modal-opened');
        }
        // if (messageEvent.data.a == 'redirect') {
        //     window.parent.location = messageEvent.data.url;
        // }
    }

    window.onload = function() {
        window.addEventListener('message', onMessage, false);
        window.addEventListener("resize", resize, false);
    }

    jquery_ab6174c1905390a3efc09758f122753c18a24767( document ).ready(function(jquery_ab6174c1905390a3efc09758f122753c18a24767) {

        var odiv=jquery_ab6174c1905390a3efc09758f122753c18a24767("<div>").attr("id","frameContent").css({"webkit-overflow-scrolling":"touch !important", "overflow-y":"hidden", "top":0, "left":0, "background":"rgba(0,0,0,0.8)", "position":"fixed", "width":"100%", "height":"100%", "display":"none", "z-index":2147483647});
        var div1 = jquery_ab6174c1905390a3efc09758f122753c18a24767("<div>").attr("id","div-wj-1").css({"width":"100%", "height": "100%", "position": "relative"});
        var div2 = jquery_ab6174c1905390a3efc09758f122753c18a24767("<div>").attr("id","div-wj-2").css({"margin":"auto", "height": "100%"});
        div1.append(div2);
        odiv.append(div1);
        var itz=jquery_ab6174c1905390a3efc09758f122753c18a24767("<input>").attr("type","hidden").attr("name","local_timezone");
        var regbut = jquery_ab6174c1905390a3efc09758f122753c18a24767("body").find("[title^='regpopbox']:first");
        if (regbut.length == 1) {
            var wjs_w = regbut.attr('title').split('_')[2];
            var wjs_m = regbut.attr('title').split('_')[1];
        }

        var d = new Date();
        var offset = -d.getTimezoneOffset();
        // default timezone
        jquery_ab6174c1905390a3efc09758f122753c18a24767(itz).val('America/New_York');
        var tz_xhr = jquery_ab6174c1905390a3efc09758f122753c18a24767.post('https://events.genndi.com/register/detectTimezone', {offset: offset});
        tz_xhr.done(function(data){
            jquery_ab6174c1905390a3efc09758f122753c18a24767(itz).val(data.timezone);
        });

        if (jquery_ab6174c1905390a3efc09758f122753c18a24767("#frameContent").length > 0) {
            // clean up legacy codes out there
            // data-wjs-required is used on login pages
            if (jquery_ab6174c1905390a3efc09758f122753c18a24767("#frameContent").attr('data-wjs-required') != 1) {
                jquery_ab6174c1905390a3efc09758f122753c18a24767("#frameContent").remove();
            }
        }


        jquery_ab6174c1905390a3efc09758f122753c18a24767("body").append(odiv, itz);

        var onClickEvent = function() {
            var titleValue = jquery_ab6174c1905390a3efc09758f122753c18a24767(this).attr('title');
            if (titleValue != "" && typeof titleValue !== "undefined") {
                var addressValue = titleValue.split('_')[0];
                if (typeof page === 'undefined' || typeof page === 'object') {
                    page = '';
                }
                if (addressValue == 'regpopbox') {
                    var memberid = titleValue.split('_')[1];
                    var webicode = titleValue.split('_')[2];
                    var timezone = jquery_ab6174c1905390a3efc09758f122753c18a24767("input[name=local_timezone]").val();
                    if (jquery_ab6174c1905390a3efc09758f122753c18a24767.trim(addressValue) != '' && jquery_ab6174c1905390a3efc09758f122753c18a24767.trim(memberid) != '' && jquery_ab6174c1905390a3efc09758f122753c18a24767.trim(webicode) != '') {
                        jquery_ab6174c1905390a3efc09758f122753c18a24767("body").addClass('wj-registration-modal-opened');

                        var url = "https://events.genndi.com/registerBoxEvergreen/"+memberid+"/"+webicode+"?page="+page+"&page_tag=formregistration&ts="+Date.now();

                        if (typeof timezone === "string") {
                            url = url.concat("&tz="+timezone);
                        }

                        jquery_ab6174c1905390a3efc09758f122753c18a24767("#regpopFrame").remove();
                        if (jquery_ab6174c1905390a3efc09758f122753c18a24767("#regpopFrame").length == 0) {
                            jquery_ab6174c1905390a3efc09758f122753c18a24767('<iframe>', {
                                src: url,
                                id:  'regpopFrame',
                                style: 'display:none;',
                                frameborder: 0,
                                name: 'regpopFrame',
                                scrolling: 'no'
                            }).appendTo(jquery_ab6174c1905390a3efc09758f122753c18a24767("#div-wj-2"));
                        }
                        jquery_ab6174c1905390a3efc09758f122753c18a24767('#regpopFrame').hide();
                        jquery_ab6174c1905390a3efc09758f122753c18a24767('#regpopFrame').css({'width':'100%', 'z-index':250});
                        jquery_ab6174c1905390a3efc09758f122753c18a24767("#frameContent").fadeIn('fast', function() {
                            jquery_ab6174c1905390a3efc09758f122753c18a24767('html, body').animate({ scrollTop: 0 }, 'fast');
                        });
                    }
                }
            }
        }

        var buttons = [].slice.call(document.querySelectorAll("a[title^=regpopbox], button[title^=regpopbox]"));
        buttons.forEach(function(el) {
            var classes = el.className.replace(/[\t\r\n\f]/g, " ");
            if (classes.indexOf('wj-click-event') === -1) {
                var newClasses = classes + ' wj-click-event';
                el.className = newClasses;
                el.removeEventListener('click', onClickEvent);
                el.addEventListener('click', onClickEvent);
            }
        });
    });
}
document.body.appendChild(js_jquery_ab6174c1905390a3efc09758f122753c18a24767);
js_jquery_ab6174c1905390a3efc09758f122753c18a24767.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/'+wj_jquery_version+'/jquery.min.js';
!function(s){s.widget("cc.sausage",{options:{page:".page",content:function(s){return'<span class="sausage-span">'+(s+1)+"</span>"}},_create:function(){var t=this.element;this.$outer=t,this.$inner=s.isWindow(this.element.get(0))?s("body"):t.children(":first-child"),this.$sausages=s('<div class="sausage-set"/>'),this.sausages=this.$sausages.get(0),this.offsets=[],this.$sausages.appendTo(this.$inner),this._trigger("create")},_init:function(){this.$outer.height()>=this.$inner.height()?this.destroy():(this.draw(),this._update(),this._events(),this._delegates(),this.$sausages.addClass("sausage-set-init"),this.blocked=!1,this._trigger("init"))},_events:function(){var s=this;s.hasScrolled=!1,s.$outer.bind("resize.sausage",function(){s.draw()}).bind("scroll.sausage",function(){s.hasScrolled=!0}),setInterval(function(){s.hasScrolled&&(s.hasScrolled=!1,s._update())},250)},_getCurrent:function(){var s=this.$outer.scrollTop()+this._getHandleHeight(this.$outer,this.$inner)/4;this.$outer.height(),this.$inner.height();var t=0;for(l=this.offsets.length;t<l&&this.offsets[t+1]&&!(s<=this.offsets[t])&&!(s>this.offsets[t]&&s<=this.offsets[t+1]);t++);return t},_delegates:function(){var t=this;t.$sausages.delegate(".sausage","hover",function(){t.blocked||s(this).toggleClass("sausage-hover")}).delegate(".sausage","click",function(e){if(e.preventDefault(),!t.blocked){var i=s(this),a=i.index(),n=t.$inner.find(t.options.page).eq(a).offset().top;t._scrollTo(n),t._trigger("onClick",e,{$sausage:i,i:a}),i.hasClass("current")||t._trigger("onUpdate",e,{$sausage:i,i:a})}})},_scrollTo:function(t){var e=this.$outer,i=Math.abs((this.offsets[this.current]-t)/2),i=i<1e3?i:1e3;this.$outer.get(0)===window&&(e=s("body, html, document")),e.stop(!0).animate({scrollTop:t},i)},_handleClick:function(){},_update:function(){i=this._getCurrent(),c="sausage-current",i===this.current||this.blocked||(this.current=i,this.$sausages.children().eq(i).addClass(c).siblings().removeClass(c),this._trigger("update"))},_getHandleHeight:function(s,t){var e=s.height(),i=t.height();return e/i*e},draw:function(){var s,t,e,i=this.$outer.height(),a=this.$inner.height(),n=this.$inner.find(this.options.page),h=[];this.offsets=[],this.count=n.length,this.$sausages.detach().empty();for(var o=0;o<this.count;o++)s=n.eq(o),t=s.offset(),e=t.top/a*i,h.push('<div class="sausage'+(o===this.current?" sausage-current":"")+'" style="height:'+s.outerHeight()/a*i+"px;top:"+e+'px;">'+this.options.content(o,s)+"</div>"),this.offsets.push(t.top);this.sausages.innerHTML=h.join(""),this.$sausages.appendTo(this.$inner)},block:function(){this.blocked=!0,this.$sausages.addClass("sausage-set-blocked")},unblock:function(){this.$sausages.removeClass("sausage-set-blocked"),this.blocked=!1},destroy:function(){this.$outer.unbind(".sausage"),this.$sausages.remove()}})}(jQuery);
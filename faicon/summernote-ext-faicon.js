(function (factory) {
  /* global define */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(window.jQuery);
  }
}(function ($) {

  // fontawesome icon picker plugin
  $.extend($.summernote.plugins, {
    /**
     * @param {Object} context - context object has status of editor.
     */
    'faicon': function (context) {
      var self = this;
      var ui = $.summernote.ui;
			var options = context.options;
			
			// font-awesome: version 4.6.3; removed aliases; sorted alphabetically
			var fa_icons = [
					'500px','adjust','adn','align-center','align-justify','align-left','align-right','amazon','ambulance','american-sign-language-interpreting','anchor','android','angellist','angle-double-down','angle-double-left','angle-double-right','angle-double-up','angle-down','angle-left','angle-right','angle-up','apple','archive','area-chart','arrow-circle-down','arrow-circle-left','arrow-circle-o-down','arrow-circle-o-left','arrow-circle-o-right','arrow-circle-o-up','arrow-circle-right','arrow-circle-up','arrow-down','arrow-left','arrow-right','arrow-up','arrows','arrows-alt','arrows-h','arrows-v','assistive-listening-systems','asterisk','at','audio-description','backward','balance-scale','ban','bar-chart','barcode','bars','battery-empty','battery-full','battery-half','battery-quarter','battery-three-quarters','bed','beer','behance','behance-square','bell','bell-o','bell-slash','bell-slash-o','bicycle','binoculars','birthday-cake','bitbucket','bitbucket-square','black-tie','blind','bluetooth','bluetooth-b','bold','bolt','bomb','book','bookmark','bookmark-o','braille','briefcase','btc','bug','building','building-o','bullhorn','bullseye','bus','buysellads','calculator','calendar','calendar-check-o','calendar-minus-o','calendar-o','calendar-plus-o','calendar-times-o','camera','camera-retro','car','caret-down','caret-left','caret-right','caret-square-o-down','caret-square-o-left','caret-square-o-right','caret-square-o-up','caret-up','cart-arrow-down','cart-plus','cc','cc-amex','cc-diners-club','cc-discover','cc-jcb','cc-mastercard','cc-paypal','cc-stripe','cc-visa','certificate','chain-broken','check','check-circle','check-circle-o','check-square','check-square-o','chevron-circle-down','chevron-circle-left','chevron-circle-right','chevron-circle-up','chevron-down','chevron-left','chevron-right','chevron-up','child','chrome','circle','circle-o','circle-o-notch','circle-thin','clipboard','clock-o','clone','cloud','cloud-download','cloud-upload','code','code-fork','codepen','codiepie','coffee','cog','cogs','columns','comment','comment-o','commenting','commenting-o','comments','comments-o','compass','compress','connectdevelop','contao','copyright','creative-commons','credit-card','credit-card-alt','crop','crosshairs','css3','cube','cubes','cutlery','dashcube','database','deaf','delicious','desktop','deviantart','diamond','digg','dot-circle-o','download','dribbble','dropbox','drupal','edge','eject','ellipsis-h','ellipsis-v','empire','envelope','envelope-o','envelope-square','envira','eraser','eur','exchange','exclamation','exclamation-circle','exclamation-triangle','expand','expeditedssl','external-link','external-link-square','eye','eye-slash','eyedropper','facebook','facebook-official','facebook-square','fast-backward','fast-forward','fax','female','fighter-jet','file','file-archive-o','file-audio-o','file-code-o','file-excel-o','file-image-o','file-o','file-pdf-o','file-powerpoint-o','file-text','file-text-o','file-video-o','file-word-o','files-o','film','filter','fire','fire-extinguisher','firefox','first-order','flag','flag-checkered','flag-o','flask','flickr','floppy-o','folder','folder-o','folder-open','folder-open-o','font','font-awesome','fonticons','fort-awesome','forumbee','forward','foursquare','frown-o','futbol-o','gamepad','gavel','gbp','genderless','get-pocket','gg','gg-circle','gift','git','git-square','github','github-alt','github-square','gitlab','glass','glide','glide-g','globe','google','google-plus','google-plus-official','google-plus-square','google-wallet','graduation-cap','gratipay','h-square','hacker-news','hand-lizard-o','hand-o-down','hand-o-left','hand-o-right','hand-o-up','hand-paper-o','hand-peace-o','hand-pointer-o','hand-rock-o','hand-scissors-o','hand-spock-o','hashtag','hdd-o','header','headphones','heart','heart-o','heartbeat','history','home','hospital-o','hourglass','hourglass-end','hourglass-half','hourglass-o','hourglass-start','houzz','html5','i-cursor','ils','inbox','indent','industry','info','info-circle','inr','instagram','internet-explorer','ioxhost','italic','joomla','jpy','jsfiddle','key','keyboard-o','krw','language','laptop','lastfm','lastfm-square','leaf','leanpub','lemon-o','level-down','level-up','life-ring','lightbulb-o','line-chart','link','linkedin','linkedin-square','linux','list','list-alt','list-ol','list-ul','location-arrow','lock','long-arrow-down','long-arrow-left','long-arrow-right','long-arrow-up','low-vision','magic','magnet','male','map','map-marker','map-o','map-pin','map-signs','mars','mars-double','mars-stroke','mars-stroke-h','mars-stroke-v','maxcdn','meanpath','medium','medkit','meh-o','mercury','microphone','microphone-slash','minus','minus-circle','minus-square','minus-square-o','mixcloud','mobile','modx','money','moon-o','motorcycle','mouse-pointer','music','neuter','newspaper-o','object-group','object-ungroup','odnoklassniki','odnoklassniki-square','opencart','openid','opera','optin-monster','outdent','pagelines','paint-brush','paper-plane','paper-plane-o','paperclip','paragraph','pause','pause-circle','pause-circle-o','paw','paypal','pencil','pencil-square','pencil-square-o','percent','phone','phone-square','picture-o','pie-chart','pied-piper','pied-piper-alt','pied-piper-pp','pinterest','pinterest-p','pinterest-square','plane','play','play-circle','play-circle-o','plug','plus','plus-circle','plus-square','plus-square-o','power-off','print','product-hunt','puzzle-piece','qq','qrcode','question','question-circle','question-circle-o','quote-left','quote-right','random','rebel','recycle','reddit','reddit-alien','reddit-square','refresh','registered','renren','repeat','reply','reply-all','retweet','road','rocket','rss','rss-square','rub','safari','scissors','scribd','search','search-minus','search-plus','sellsy','server','share','share-alt','share-alt-square','share-square','share-square-o','shield','ship','shirtsinbulk','shopping-bag','shopping-basket','shopping-cart','sign-in','sign-language','sign-out','signal','simplybuilt','sitemap','skyatlas','skype','slack','sliders','slideshare','smile-o','snapchat','snapchat-ghost','snapchat-square','sort','sort-alpha-asc','sort-alpha-desc','sort-amount-asc','sort-amount-desc','sort-asc','sort-desc','sort-numeric-asc','sort-numeric-desc','soundcloud','space-shuttle','spinner','spoon','spotify','square','square-o','stack-exchange','stack-overflow','star','star-half','star-half-o','star-o','steam','steam-square','step-backward','step-forward','stethoscope','sticky-note','sticky-note-o','stop','stop-circle','stop-circle-o','street-view','strikethrough','stumbleupon','stumbleupon-circle','subscript','subway','suitcase','sun-o','superscript','table','tablet','tachometer','tag','tags','tasks','taxi','television','tencent-weibo','terminal','text-height','text-width','th','th-large','th-list','themeisle','thumb-tack','thumbs-down','thumbs-o-down','thumbs-o-up','thumbs-up','ticket','times','times-circle','times-circle-o','tint','toggle-off','toggle-on','trademark','train','transgender','transgender-alt','trash','trash-o','tree','trello','tripadvisor','trophy','truck','try','tty','tumblr','tumblr-square','twitch','twitter','twitter-square','umbrella','underline','undo','universal-access','university','unlock','unlock-alt','upload','usb','usd','user','user-md','user-plus','user-secret','user-times','users','venus','venus-double','venus-mars','viacoin','viadeo','viadeo-square','video-camera','vimeo','vimeo-square','vine','vk','volume-control-phone','volume-down','volume-off','volume-up','weibo','weixin','whatsapp','wheelchair','wheelchair-alt','wifi','wikipedia-w','windows','wordpress','wpbeginner','wpforms','wrench','xing','xing-square','y-combinator','yahoo','yelp','yoast','youtube','youtube-play','youtube-square'
				];
			
      // add context menu button
      context.memo('button.faicon', function () {
        return ui.buttonGroup({
          className: 'note-ext-faicon',
          children: [
						ui.button({
							className: 'dropdown-toggle',
							contents: '<i class="fa fa-smile-o"/>' + ' ' + ui.icon(options.icons.caret, 'span'),
							tooltip: 'Icon',
							data: {
								toggle: 'dropdown'
							}
						}),
						ui.dropdown({
							className: 'dropdown-faicon',
              items: [
									'<li>',
									'<div class="btn-group">',
									'  <div class="note-ext-faicon-search">',
									'  <input type="text" placeholder="search..." class="form-control" />',
									'  </div>',
									'  <div class="note-ext-faicon-list" />',
									'</div>',
									'</li>'
								].join(''),
              callback: function ($dropdown) {
              	self.$search = $('.note-ext-faicon-search :input', $dropdown);
              	self.$list = $('.note-ext-faicon-list', $dropdown);
              }
						})
					]
				}).render();
      });


      // You can create elements for plugin
      self.initialize = function () {
      	var $search = self.$search;
      	var $list = self.$list;

				// fill/activate the elements in the inline dialog.
				self.$search.keyup(function () {
						self.filter($search.val());
					});
					
				// create icons by list
				$.each(fa_icons, function (index, icon_name) {
						$list.append('<button title="' + icon_name + '"><i class="fa fa-' + icon_name + '"></i></button>');
					});
					
				$("button", $list).click(function (event) {
						event.preventDefault(); // else, editor form is submitted
						context.invoke('faicon.insertIcon', $(this).attr('title'));
					});
      };

      
      // apply search filter on each key press in search input
      self.filter = function (filter) {
				var $icons = $('button', self.$list);
				var rx_filter;

				if (filter === '')
				{
					$icons.show();
				}
				else
				{
					rx_filter = new RegExp(filter);
					$icons.each(function() {
							var $item = $(this);
						
							if (rx_filter.test($item.attr('title')))
							{
								$item.show();
							}
							else
							{
								$item.hide();
							}
						});
				}
      };

      
			self.insertIcon = function (icon_name) {
				var $fa = $('<span class="ext-faicon-subst fa fa-' + icon_name + '"></span>').attr("data-icon", icon_name);

				// console.log("insert icon: ", icon_name);
				context.invoke('editor.insertNode', $fa[0]);
			};

    }
  });

}));

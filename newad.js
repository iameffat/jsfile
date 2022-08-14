//Function to display ads on the jQuery Blog and shuffle
(function($)
{
   var displayAds = {

       ads: {
           1: {
                title: "jQuery UI Widgets for PC, Mobile and Touch devices",
                href: "http://www.jqwidgets.com",
                img: "https://i.ibb.co/D7R7hGB/image.png"
           },
           2: {
                title: "jQuery Chop Slider 2.0 - The most eye catching image slider on the internet!",
                href: "http://www.idangero.us/cs/",
                img: "https://i.ibb.co/PjCpkqc/image.png"
           },
           3: {
                title: "Sauce Labs - Online Cross Browser Testing",
                href: "http://www.saucelabs.com/scouthome?utm_source=banner&amp;utm_medium=flat&amp;utm_campaign=all+all+banner+jquery4u",
                img: "https://i.ibb.co/HG44Z3f/image.png"
           },
           4: {
                title: "Diamond Slider - Ken Burns Effect &amp; Unlimited Transitions",
                href: "http://www.diamond.billykids-lab.net/",
                img: "https://i.ibb.co/HXBQSVr/image.png"
           },
           5: {
                title: "AJAX Zoom - jQuery Dynamic 2d/360 Degrees Zoom with ipad support.",
                href: "http://www.ajax-zoom.com",
                img: "https://i.ibb.co/PgMpjdT/image.png"
           }
       },

       signupAd: {
           title: "Advertise here",
           href: "http://www.jquery4u.com/advertise/"
       },

       shuffleAds: function(arr)
       {
          for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
          return arr;
       },

       load: function()
       {
           $('#shuffle-ads').hide();
           var adContainer = $('#jq4u-sidebar-ads').empty(), adsArray = Array();

           /* construct ads */
           $.each(this.ads, function(i,v)
           {
                adsArray.push('<a rel="nofollow noopener" target="_blank" href="' + v.href + '"><div class="jq4uadbox"><img title="' + v.title + '" alt="' + v.title + '" src="https://www.jquery4u.com/images/ads/' + v.img + '"/></div></a>');
           });

           /* shuffle ads in random order */
           adsArray = this.shuffleAds(adsArray);

           /* output ads */
           $.each(adsArray, function(i,v)
           {
              adContainer.append(v);
           });

           /* add the signup ad */
           adContainer.append('<a href="' + this.signupAd.href + '"><div class="jq4uadvertisebox">' + this.signupAd.title + '</div></a>');

           /* show shuffle button */
           adContainer.append('<a href="#" id="shuffle-ads">Shuffle</a>');
           $('#shuffle-ads').live('click', function(e)
           {
              e.preventDefault();
              displayAds.load();

           });
           $('#shuffle-ads').show();
       }
   }

   $(document).ready(function() {
      displayAds.load();
   });

})(jQuery);

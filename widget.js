(function() {

  // Localize jQuery variable
  var jQuery;

  /******** Load jQuery if not present *********/
  if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.4.2') {
      var script_tag = document.createElement('script');
      script_tag.setAttribute("type","text/javascript");
      script_tag.setAttribute("src","https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js");
  
      if (script_tag.readyState) {
        script_tag.onreadystatechange = function () { // For old versions of IE
          if (this.readyState == 'complete' || this.readyState == 'loaded') {
            scriptLoadHandler();
          }
        };
      } else {
        script_tag.onload = scriptLoadHandler;
      }
  
      // Try to find the head, otherwise default to the documentElement
      (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
  
      const script1 = document.createElement('script')
      script1.setAttribute("type","text/javascript");
      script1.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js");
      document.documentElement.appendChild(script1)
  
      const script2 = document.createElement('script')
      script2.setAttribute("type","text/javascript");
      script2.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/js/bootstrap.min.js");
      //document.head.append(script2)
  
      const script3 = document.createElement('script')
      script3.setAttribute("type","text/javascript");
      script3.setAttribute("src","https://connect.realm.com.br/script.js");
      document.documentElement.appendChild(script3)
  
      
  } else {
    // The jQuery version on the window is the one we want to use
    jQuery = window.jQuery;
    main();
  }

  /******** Called once jQuery has loaded ******/
  function scriptLoadHandler() {
      // Restore $ and window.jQuery to their previous values and store the
      // new jQuery in our local jQuery variable
      jQuery = window.jQuery.noConflict(true);
  
      main();
  }

  function main() {
    jQuery(document).ready(function($) {
  
      /******* Load CSS *******/
      var css_link1 = $("<link>",{
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
      });
  
      var css_link2 = $("<link>",{
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-material-design/4.0.2/bootstrap-material-design.css"
      });
  
      var css_link3 = $("<link>",{
        rel: "stylesheet",
        type: "text/css",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons"
      });
      
      var css_link4 = $("<link>", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://connect.realm.com.br/style.css"
      });
      
      css_link1.appendTo('head');
      //css_link2.appendTo('head');
      css_link3.appendTo('head');
      css_link4.appendTo('head');
  
      /******* Load HTML *******/
      /**
      var jsonp_url = "http://al.smeuh.org/cgi-bin/webwidget_tutorial.py?callback=?";
      $.getJSON(jsonp_url, function(data) {
        $('#example-widget-container').html("This data comes from another server: " + data.html);
      });
      */

      var cname = document.getElementById("cname").getAttribute("data-cname");
      var url = "https://realm.com.br/chatbot/"+cname;
      document.getElementById("realm-root").innerHTML = '<div id="body"> <div id="chat-circle" class="btn btn-raised up-win"> <div id="chat-overlay"></div> <i class="material-icons">chat</i> </div> <div class="chat-box up-win"> <div class="chat-box-header"> Atendente Virtual <span class="chat-box-toggle"><i class="material-icons">close</i></span> </div> <div class="chat-box-body"> <div class="chat-box-overlay"> </div> <iframe src="'+url+'" title="Realm Chatbot" width="100%" height="400"></iframe> </div> </div> </div>';
        
    });
  }

})();
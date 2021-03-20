<html>
  <head>
    <style>
      body {
        background-color: transparent !important;
      }
    </style>
  </head>
  <body>
      <script>
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        var cname = urlParams.get('cname');
        var url = "https://realm.com.br/chatbot/"+cname;
        //document.getElementById('realmlink').src="https://realm.com.br/chatbot/"+encodeURIComponent(window.location.href);
      </script>
    
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap.min.css'>
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bootstrap-material-design/4.0.2/bootstrap-material-design.css'>
      <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons'>
      <link rel="stylesheet" href="https://connect.realm.com.br/style.css">
    
    <div id="body">
      <div id="chat-circle" class="btn btn-raised up-win">
        <div id="chat-overlay"></div>
        <i class="material-icons">chat</i>
      </div>
      <div class="chat-box up-win">
        <div class="chat-box-header"> Atendente Virtual <span class="chat-box-toggle"><i class="material-icons">close</i></span> </div>
        <div class="chat-box-body">
          <div class="chat-box-overlay"> </div>
          <iframe id="realmlink" allowtransparency="true" src="https://realm.com.br/chatbot/realm" title="Realm Chatbot" width="100%" height="400"></iframe>
        </div>
      </div>
    </div>
    
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/js/bootstrap.min.js'></script>
    <script src="https://connect.realm.com.br/script.js"></script>
  </body>
</html>
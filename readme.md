# Connect

Allows you to connect a widget to a third party website using a javascript sdk.

# Config

File .htaccess

    RewriteEngine on
    RewriteRule ^sdk.js(.*)$ sdk.php

# Embed

## Stabled

    <!-- realm sdk -->
    <div style="position: fixed; bottom: 25px; right: 25px; z-index: 999999;">
        <iframe allowtransparency="true"
                src="https://connect.realm.com.br/sdk.js?cname=realm"
                style="width:360px; height:550px; border:0;"
                allow="autoplay; fullscreen"
                scrolling="no">
        </iframe>
    </div>

## Instable

    <!-- realm sdk -->
    <div class="up-win" id="realm-root"></div>
    <script type="text/javascript"
    				id="cname"
    				data-cname="{cname}"
    				src="https://connect.realm.com.br/widget.js">
    </script>

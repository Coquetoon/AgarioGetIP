(function() {
    var __WS_send = WebSocket.prototype.send;
    window.__WS_send = WebSocket.prototype.send;

    WebSocket.prototype.send = function(data) {
        var websocketURL = this.url;

        console.log(websocketURL);

        try {
            var agarBaseURL = 'http://agar.io/?sip=';
            var agarConnectedHost = /[^:\/]+\.agar\.io/.exec(websocketURL);

            console.log(agarBaseURL + agarConnectedHost[0]);
        } catch (err) {
            console.error(err.message);
        }

        try {
            __WS_send.apply(this, [data]);
            WebSocket.prototype.send = __WS_send;
        } catch (err) {
            window.__WS_send.apply(this, [data]);
            WebSocket.prototype.send = window.__WS_send;
        }
    }
})();
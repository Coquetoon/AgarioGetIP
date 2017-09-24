(function() {
    var __WS_send = WebSocket.prototype.send;
    window.__WS_send = WebSocket.prototype.send;
    WebSocket.prototype.send = function(data) {
        console.log(this.url);
        try {
            var domain = /([^:\/\n]+)\.*agar\.io/.exec(this.url);
            var port = /\:[0-9]{1,5}/.exec(this.url) || ':80';
            console.log("http://agar.io/?sip=" + domain[0] + port);
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
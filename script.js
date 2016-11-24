(function() {
    var __WS_send = WebSocket.prototype.send;
    window.__WS_send = WebSocket.prototype.send;
    WebSocket.prototype.send = function(data) {
        console.log(this.url);
        try {
            var re = /((?:[0-9]{1,3}(?:\.|\-)){1,3}[0-9]{1,3})(?:.*?)?(\:[0-9]{1,5})/;
            var match = re.exec(this.url);
            console.log("https://agar.io/?sip=" + match[1].split("-").join(".") + match[2]);
        } catch (err) {}
        try {
            __WS_send.apply(this, [data]);
            WebSocket.prototype.send = __WS_send;
        } catch (err) {
            window.__WS_send.apply(this, [data]);
            WebSocket.prototype.send = window.__WS_send;
        }
    }
})();


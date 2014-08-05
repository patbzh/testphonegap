/**
 * A remake of promptbasednativeapi.js => use console.log instead of alerts.
 */
(function () {
    var ConsoleBasedNativeApi = {
        exec: function(bridgeSecret, service, action, callbackId, argsJson) {
            return console.log(argsJson, 'gap:'+JSON.stringify([bridgeSecret, service, action, callbackId]));
        },
        setNativeToJsBridgeMode: function(bridgeSecret, value) {
            console.log(value, 'gap_bridge_mode:' + bridgeSecret);
        },
        retrieveJsMessages: function(bridgeSecret, fromOnlineEvent) {
            return console.log(+fromOnlineEvent, 'gap_poll:' + bridgeSecret);
        }
    };
    window._cordovaNative = ConsoleBasedNativeApi;
})();
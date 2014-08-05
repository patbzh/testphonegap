/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
/*        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');*/

        console.log('Received Event: ' + id);
    }
};


// These reference the same `device`

//var phoneName = device.name;


$(document).ready(function() {
/*
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        var phoneName = window.device.name;
        console.log(phoneName);
     //   console.log(device.cordova);
    }*/




    var baseUrl = 'http://gustom.dev.tekoway.com/';
    $.ajax({
        type:"GET",
        url: baseUrl + "ws/getGustomList",
        crossDomain: true,
        dataType: 'json',
        async: false,
        success:function (response) {
            $.each( response, function( id, gustom ) {
                $('.navigation').append('<li class="nav-item"><a href="'+baseUrl+'gustoms/'+gustom.key+'/index.html" target="_blank">'+gustom.name+'</a></li>');
            });
        },
        error:function(response) {
            console.log('error');

        }
    });
});

/*

// Wait for Cordova to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready
//
function onDeviceReady() {
    var element = document.getElementById('deviceProperties');

    element.innerHTML = 'Device Name: '     + device.model     + '<br />' +
        'Device Cordova: '  + device.cordova  + '<br />' +
        'Device Platform: ' + device.platform + '<br />' +
        'Device UUID: '     + device.uuid     + '<br />' +
        'Device Version: '  + device.version  + '<br />';
}
*/


/*
Battery level status

// Wait for device API libraries to load
//
function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

// device APIs are available
//
function onDeviceReady() {
    window.addEventListener("batterystatus", onBatteryStatus, false);
}

// Handle the batterystatus event
//
function onBatteryStatus(info) {
    console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
}*/



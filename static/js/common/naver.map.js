(function(context) {
    context.naver = context.naver || {};
    context.naver.map = {
        _instance: {},

        create: function(elementId, locationX, locationY) {
            var targetPoint = new nhn.api.map.LatLng(locationX, locationY);
            var targetEl = $('#' + elementId);
            var width = targetEl.outerWidth() == 0 ? 500 : targetEl.outerWidth();
            var height = targetEl.outerHeight() == 0 ? width : targetEl.outerHeight();
            var oMap = new nhn.api.map.Map(targetEl.get(0), {
                point : targetPoint,
                zoom : 11,
                enableWheelZoom : true,
                enableDragPan : true,
                enableDblClickZoom : false,
                mapMode : 0,
                activateTrafficMap : false,
                activateBicycleMap : false,
                minMaxLevel : [ 1, 14 ],
                size : new nhn.api.map.Size(width, height)
            });

            this._instance[elementId] = oMap;

            return oMap;
        },

        marker: function(elementId, name, locationX, locationY) {

            var oMap = this._instance[elementId];

            if (!oMap) {
                return;
            }

            var oPoint = new nhn.api.map.LatLng(locationX, locationY);

            var oSize = new nhn.api.map.Size(28, 37);
            var oOffset = new nhn.api.map.Size(14, 37);
            var oIcon = new nhn.api.map.Icon('/static/img/map/pin_spot2.png', oSize, oOffset);

            var mapInfoWindow = new nhn.api.map.InfoWindow(); // - info window 생성
            oMap.addOverlay(mapInfoWindow);     // - 지도에 추가.

            mapInfoWindow.setContent('<DIV style="border-top:1px solid; border-bottom:2px groove black; border-left:1px solid; border-right:2px groove black;margin-bottom:1px;color:black;background-color:white; width:auto; height:auto;">'+
                '<span style="color: #000000 !important;display: inline-block;font-size: 12px !important;font-weight: bold !important;letter-spacing: -1px !important;white-space: nowrap !important; padding: 2px 5px 2px 2px !important">' +
                'Hello World <br /><span></div>');
            mapInfoWindow.setPoint(oPoint);
            mapInfoWindow.setVisible(true);
            mapInfoWindow.autoPosition();

            var oMarker = new nhn.api.map.Marker(oIcon, { title : name });
            oMarker.setPoint(oPoint);
            oMap.addOverlay(oMarker);

            var oLabel = new nhn.api.map.MarkerLabel(); // - 마커 라벨 선언.
            oLabel.setVisible(true, oMarker); // - oLabel 표시 여부 지정.
            oMap.addOverlay(oLabel); // - 마커 라벨 지도에 추가.
        }
    };
})(window.wcard = window.wcard || {})
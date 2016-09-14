(function(context) {
    context.naver = context.naver || {};
    context.naver.map = {
        _instance: {},
        _marker: {},
        _label: {},

        /**
         * 맵 생성
         * @param elementId
         * @param pointX
         * @param pointY
         * @returns {nhn.api.map.Map}
         */
        create: function(elementId, pointX, pointY) {
            var targetPoint = new nhn.api.map.LatLng(pointY, pointX);
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

        /**
         * marker 생성
         * @param elementId
         * @param displayName
         * @param pointX
         * @param pointY
         * @returns {nhn.api.map.Marker}
         */
        marker: function(elementId, displayName, pointX, pointY) {

            var oMap = this._instance[elementId];

            if (!oMap) {
                return;
            }

            var oPoint = new nhn.api.map.LatLng(pointY, pointX);

            var oSize = new nhn.api.map.Size(28, 37);
            var oOffset = new nhn.api.map.Size(14, 37);
            var oIcon = new nhn.api.map.Icon('/static/base/img/map/pin_spot2.png', oSize, oOffset);

            var oMarker = new nhn.api.map.Marker(oIcon, { "title" : displayName });
            oMarker.setPoint(oPoint);
            oMap.addOverlay(oMarker);

            this._marker[elementId] = oMarker;

            var oLabel = new nhn.api.map.MarkerLabel(); // - 마커 라벨 선언.
            oMap.addOverlay(oLabel); // - 마커 라벨 지도에 추가. 기본은 라벨이 보이지 않는 상태로 추가됨.
            oLabel.setVisible(true, oMarker);

            this._label[elementId] = oLabel;

            return oMarker;
        }
    };
})(window.wcard = window.wcard || {})
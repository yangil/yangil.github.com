(function(context) {
    context.naver = context.naver || {};
    context.naver.map = {
        _instance: {},

        Structure: function(elId, locationX, locationY, height, width) {
            var targetPoint = new nhn.api.map.LatLng(locationX, locationY);
            var oMap = new nhn.api.map.Map(document.getElementById(elId), {
                point : targetPoint,
                zoom : 11,
                enableWheelZoom : true,
                enableDragPan : true,
                enableDblClickZoom : false,
                mapMode : 0,
                activateTrafficMap : false,
                activateBicycleMap : false,
                minMaxLevel : [ 1, 14 ],
                size : new nhn.api.map.Size(height, width)
            });

            this._instance[elId] = oMap;

            return oMap;
        }
    };
})(window.wcard = window.wcard || {})
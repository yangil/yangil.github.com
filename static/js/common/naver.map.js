(function(context) {
    context.naver = context.naver || {};
    context.naver.map = {
        _maps: {},

        Instance: function(elId, locationX, locationY, width, height) {
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
                size : new nhn.api.map.Size(width, height)
            });

            wcard.naver.map._maps[elId] = oMap;

            return oMap;
        }
    };
})(window.wcard = window.wcard || {})
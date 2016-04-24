(function(context) {
    context.naver = context.naver || {};
    context.naver.map = {
        _instance: {},

        Instance: function(elId, locationX, locationY) {
            var targetPoint = new nhn.api.map.LatLng(locationX, locationY);
            var targetEl = $('#' + elId);
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
                size : new nhn.api.map.Size(targetEl.outerWidth() == 0 ? 500 : targetEl.outerWidth(), targetEl.outerHeight() == 0 ? 400 : targetEl.outerHeight())
            });

            wcard.naver.map._instance[elId] = oMap;

            return oMap;
        }
    };
})(window.wcard = window.wcard || {})
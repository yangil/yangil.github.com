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

            wcard.naver.map._instance[elementId] = oMap;

            return oMap;
        },


    };
})(window.wcard = window.wcard || {})
$(function () {
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [55.771290, 37.613492],
                zoom: 17,
                controls: []
            }, {
                searchControlProvider: 'yandex#search'
            }),
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'БЕЛТИКО',
                balloonContent: 'м. Цветной бульвар Малый каратный переулок д.5'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/map-mark.png',
                iconImageSize: [60, 56],
                iconImageOffset: [0, -90]
            });

            myMap.behaviors.disable('scrollZoom');
            myMap.geoObjects.add(myPlacemark);
    })
});
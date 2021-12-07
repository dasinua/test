ymaps.ready(init);

 var myMap;

function init(){

    myMap = new ymaps.Map("map", {
        center: [52.280332, 104.290515],
        zoom: 16,
        controls: []
    });

    myMap.behaviors.disable("scrollZoom");

    myMap.controls.add("zoomControl", {
        position: {top: 15, left: 15}
    });

    myMap.behaviors.disable("drag");

   var myPlacemark = new ymaps.Placemark([52.280332, 104.290515] , {
    balloonContent: 'г. Город,<br> ул. Улица, 20, оф. 2'},
        { iconLayout: "default#image",
          iconImageHref: "images/map-pin.png",
          iconImageSize: [40, 51],
          iconImageOffset: [-20, -47] });

    myMap.geoObjects.add(myPlacemark);

    // myPlacemark.balloon.open();


};

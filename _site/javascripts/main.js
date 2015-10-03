(function ($) {
  $(document).ready( function() {
    if( $("#map").length > 0) {
      var myLatlng = new google.maps.LatLng(52.087629,16.662569);
      var mapCenter = new google.maps.LatLng(52.089629,16.662569);

      var myOptions = {
        zoom: 15,
        center: mapCenter,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      var map = new google.maps.Map(document.getElementById("map"), myOptions);
      var contentString = '<p><strong>Zakład produkcyjny:</strong><br> ul. Północna 48 <br>64-000 Kościan</p>';

      var infowindow = new google.maps.InfoWindow({
        content: contentString,
        position: myLatlng
      });

      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map
      });

      infowindow.open(map,marker);
    }
  });
})(jQuery);

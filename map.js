function initMap() {
          // The location of Tus
          const tus = { lat: 52.6755, lng: -8.6475 };
          
          const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: tus,
          });
          
          const marker = new google.maps.Marker({
            position: tus,
            map: map,
          });
        }

        window.initMap = initMap;
import { useEffect } from 'react';
import L from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import styles from './Map.module.css';

import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

import LocationMarker from './LocationMarker';


let CustomIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3277/3277631.png',
    iconSize:     [48, 58], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 44], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -15] // point from which the popup should open relative to the iconAnchor
  });

  let TurnRightIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2439/2439759.png',
    iconSize:     [40, 40], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 44], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });


const DEFAULT_CENTER = [33.2859578, -8.1478432]

const ROAD_MARKER = [33.30130181382317,-8.147555827360463]

const { MapContainer, Marker, Popup, GeoJSON } = ReactLeaflet;

const Map = ({ children, className, ...rest }) => {
  let mapClassName = styles.map;

  if ( className ) {
    mapClassName = `${mapClassName} ${className}`;
  }

  useEffect(() => {
    (async function init() {
      delete L.Icon.Default.prototype._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: iconRetinaUrl.src,
        iconUrl: iconUrl.src,
        shadowUrl: shadowUrl.src,
      });
    })();
  }, []);

  return (
    <MapContainer className={mapClassName} {...rest}>
      {children(ReactLeaflet)}
      <LocationMarker />

      <Marker icon={CustomIcon} position={DEFAULT_CENTER}>
        <Popup>
          Les charmes du terroire
        </Popup>
      </Marker>
      <Marker icon={TurnRightIcon} position={ROAD_MARKER}>
        <Popup>
          Entrée autoroute Tnine chtouka
        </Popup>
      </Marker>
      <GeoJSON data={{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            -8.147556234480959,
            33.30130066551082
          ],
          [
            -8.150162045262704,
            33.3017620182835
          ],
          [
            -8.15060463526251,
            33.30191995831237
          ],
          [
            -8.15085328132946,
            33.30209867957812
          ],
          [
            -8.151131764924088,
            33.30247274615871
          ],
          [
            -8.151360519305882,
            33.30282187352003
          ],
          [
            -8.151639002900538,
            33.303017217981534
          ],
          [
            -8.151837919754684,
            33.30306709309309
          ],
          [
            -8.152121376270571,
            33.30305878057656
          ],
          [
            -8.152394886944023,
            33.30295903031548
          ],
          [
            -8.152573912112956,
            33.302747060632
          ],
          [
            -8.152643533010917,
            33.302589122101494
          ],
          [
            -8.152688289302489,
            33.3023771515184
          ],
          [
            -8.15295682705596,
            33.300382109029414
          ],
          [
            -8.153176177859876,
            33.298636315961005
          ],
          [
            -8.15341332770467,
            33.29685186119923
          ],
          [
            -8.15347801025618,
            33.29667266434883
          ],
          [
            -8.153590611748058,
            33.29654079136009
          ],
          [
            -8.153624256422745,
            33.296386079966524
          ],
          [
            -8.15350721743448,
            33.296278879514574
          ],
          [
            -8.153275123931081,
            33.296274037050964
          ],
          [
            -8.153051942706497,
            33.29620966623433
          ],
          [
            -8.152455202785802,
            33.295754951229455
          ],
          [
            -8.152277802325585,
            33.29543344378365
          ],
          [
            -8.152234202128653,
            33.29492813585155
          ],
          [
            -8.152099229948988,
            33.29450958129706
          ],
          [
            -8.151671622600844,
            33.29408310111465
          ],
          [
            -8.15117405052419,
            33.293699747941545
          ],
          [
            -8.15012958773346,
            33.29243705587774
          ],
          [
            -8.14925613538827,
            33.29125471074903
          ],
          [
            -8.14753873121876,
            33.289202497754104
          ],
          [
            -8.146778055308175,
            33.2883216122345
          ],
          [
            -8.146582766846308,
            33.28807545565655
          ],
          [
            -8.145341533990262,
            33.28682633188575
          ],
          [
            -8.146127732664525,
            33.286059848890844
          ],
          [
            -8.146513539212947,
            33.285722887309134
          ],
          [
            -8.146853800979954,
            33.28557014975961
          ],
          [
            -8.147235253402783,
            33.28583998582339
          ]
        ],
        "type": "LineString"
      }
    }
  ]
}} />
    </MapContainer>
  )
}

export default Map;

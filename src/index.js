import * as $ from 'jquery'
import Map from 'ol/Map'
import Tile from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import View from 'ol/View'
import {fromLonLat} from 'ol/proj'

import './elements/my-element'

window.$ = $;

// $(`<my-element>`).appendTo('body');
const mapContainer = $(/*html*/`<div style="width: 400px; height: 300px; resize: both; overflow: hidden; border: 1px solid grey">`).appendTo('body');

var map = new Map({
    target: mapContainer[0],
    layers: [
      new Tile({
        source: new OSM()
      })
    ],
    view: new View({
      center: fromLonLat([20, 60]),
      zoom: 4
    })
  });


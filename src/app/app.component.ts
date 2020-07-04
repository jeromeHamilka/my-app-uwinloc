import { Component } from '@angular/core';
import "ol/ol.css";
import Map from "ol/Map.js";
import View from "ol/View.js";
import {
  defaults as defaultControls,
  Attribution,
  FullScreen,
  ScaleLine,
  ZoomToExtent,

} from "ol/control.js";
import {
  defaults as defaultInteractions,
  DragRotateAndZoom
} from "ol/interaction.js";
import { fromLonLat } from "ol/proj.js";
import TileLayer from "ol/layer/Tile.js";
import OSM from "ol/source/OSM.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app-uwinloc';
  ngAfterViewInit() {
    console.log(`OnInit`);

    var osmFrAttribution = `&copy; Openstreetmap France`;
    var map = new Map({
      layers: [
        new TileLayer({
          source: new OSM({
            attributions: [osmFrAttribution]
          })
        })
      ],
      controls: defaultControls({
        attribution: false
      }).extend([
        new Attribution({
          collapsible: false
        }),
        new ZoomToExtent({
          extent: [
            1.4167426884384156,
            43.62014063609365,
            1.4310013115615847,
            43.623247323772574
          ]
        }),
        new FullScreen(),
        new ScaleLine()
      ]),
      interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
      target: "map",
      view: new View({
        center: fromLonLat([1.423872, 43.621694]),
        zoom: 11
      })
    });

  }
}

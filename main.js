// Libraries
import maplibregl from 'maplibre-gl';
import * as pmtiles from "pmtiles";

// CSS Styles
import './node_modules/@picocss/pico/css/pico.min.css';
import './style.css';


let protocol = new pmtiles.Protocol();
maplibregl.addProtocol("pmtiles",protocol.tile);

let source="pmtiles";
let style="osm-bright";

const main = () => {
  const map = new maplibregl.Map({
    container: 'map', // container ID
    
    style: '', // style URL
    center: [-0.387268,39.473305], // starting position [lng, lat]
    zoom: 13, // starting zoom
    maxBounds: [-4.51,35.39,4.28,43.53],
    hash: true
  });

  const layerList = document.getElementById('styles');
  const inputs = layerList.getElementsByTagName('input');

  const updateStyle = ()=>{
    map.setStyle(`styles/${source}/${style}/style.json`);
    console.log(`🗺 source: ${source}, style:${style}`);
  }

  for (const input of inputs) {
    input.onclick = (layer) => {
      style = layer.target.id;
      updateStyle();
    };
  }

  const sourceList = document.getElementById('sources');
  const sourceInputs = sourceList.getElementsByTagName('input');
  for (const input of sourceInputs){
    input.onclick = (inputSource) => {
      source = inputSource.target.id;
      updateStyle();
    };
  }

  updateStyle();
}


document.addEventListener('DOMContentLoaded', main);
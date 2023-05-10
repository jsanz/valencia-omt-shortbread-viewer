// Libraries
import maplibregl from 'maplibre-gl';
import * as pmtiles from "pmtiles";

// CSS Styles
import './style.css';


let protocol = new pmtiles.Protocol();
maplibregl.addProtocol("pmtiles",protocol.tile);

const main = () => {
  const map = new maplibregl.Map({
    container: 'map', // container ID
    
    style: '/styles/vector-tiles/sb-shortbread.json', // style URL
    center: [-0.387268,39.473305], // starting position [lng, lat]
    zoom: 12, // starting zoom
    hash: true
  });

  const layerList = document.getElementById('menu');
  const inputs = layerList.getElementsByTagName('input');

  for (const input of inputs) {
    input.onclick = (layer) => {
      const layerId = layer.target.id;
      map.setStyle(`/styles/vector-tiles/${layerId}.json`);
    };
  }
}


document.addEventListener('DOMContentLoaded', main);
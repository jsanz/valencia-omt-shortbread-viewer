// Libraries
import maplibregl from 'maplibre-gl';
import * as pmtiles from "pmtiles";

// CSS Styles
import '../styles/style.css';

// Shortbread styles
import shortbreadUrl from '../styles/vector-tiles/versatiles/shortbread.json';
import eclipseUrl from '../styles/vector-tiles/versatiles/eclipse.json';
import neutrinoUrl from '../styles/vector-tiles/versatiles/neutrino.json';

// OMT Styles
import brightUrl from '../styles/vector-tiles/omt/osm-bright.json';
import brightDesaturatedUrl from '../styles/vector-tiles/omt/osm-bright-desaturated.json';
import darkMatterUrl from '../styles/vector-tiles/omt/darkmatter.json';


const styles = {
  'sb-shortbread': shortbreadUrl,
  'sb-eclipse': eclipseUrl,
  'sb-neutrino': neutrinoUrl,
  'omt-bright': brightUrl,
  'omt-bright-desaturated': brightDesaturatedUrl,
  'omt-darkmatter': darkMatterUrl
}

let protocol = new pmtiles.Protocol();
maplibregl.addProtocol("pmtiles",protocol.tile);

const main = () => {
  const map = new maplibregl.Map({
    container: 'map', // container ID
    
    style: shortbreadUrl, // style URL
    center: [-0.387268,39.473305], // starting position [lng, lat]
    zoom: 12, // starting zoom
    hash: true
  });

  const layerList = document.getElementById('menu');
  const inputs = layerList.getElementsByTagName('input');

  for (const input of inputs) {
    input.onclick = (layer) => {
      const layerId = layer.target.id;
      map.setStyle(styles[layerId]);
    };
  }
}


document.addEventListener('DOMContentLoaded', main);
# Valencia OpenMaptiles and Shortbread map

This is a minimal viewer created with [Maplibre](https://maplibre.org/) that renders the following styles:

* OpenMaptiles with some minor modifications for Elastic Maps Service:
  * [OSM Bright](https://github.com/elastic/osm-bright-gl-style)
  * [OSM Bright desaturated](https://github.com/elastic/osm-bright-desaturated-gl-style)
  * [Dark Matter](https://github.com/elastic/dark-matter-gl-style)
* [Versatiles styles](https://github.com/versatiles-org/versatiles-styles) for the Shortbread schema:
  * Shortbread
  * Neutrino
  * Eclipse 

Maps are rendered from two different sources:

* Vector tiles from the [Elastic Maps Service](https://maps.elastic.co/) and [Versatiles](https://tiles.versatiles.org/#1.34/0/0)
* [PMTiles](https://github.com/protomaps/PMTiles) rendered directly from this website without a backend using HTTP range requests

⚠️ This is a prototype to test the styles and the PMTiles approach and does not intend to be used on ony production system.

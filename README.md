# typed-mapbox-gl  [![Build Status](https://travis-ci.org/dobrud/typed-mapbox-gl.png?branch=master)](https://travis-ci.org/dobrud/typed-mapbox-gl)
Type definitions for Mapbox GL JS

## How to use
``` shell
npm install mapbox-gl --save
typings install dt~geojson --global --save
typings install github:dobrud/typed-mapbox-gl --global --save
```
Usage in code:
``` typescript
import * as mapboxgl from 'mapbox-gl';
```
If you need only a single class:
``` typescript
import {LngLat} from 'mapbox-gl';
```

## Run tests
``` shell
typings install
tsc mapbox-gl-tests.ts
```
declare module 'mapbox-gl/mapboxgl' {

	namespace mapboxgl {
		let accessToken: string;
		export interface Map {
			
			addControl(control: Control): mapboxgl.Map;

			addClass(klass: string, options: Object): mapboxgl.Map;

			removeClass(klass: string, options: Object): mapboxgl.Map;

			setClasses(klasses: string[], options: Object): mapboxgl.Map;

			hasClass(klass: string): boolean;

			getClasses(): string[];

			resize(): mapboxgl.Map;

			getBounds(): LngLatBounds;

			setMaxBounds(lnglatbounds: LngLatBounds|number[][]|any): mapboxgl.Map;

			setMinZoom(minZoom: number): mapboxgl.Map;

			setMaxZoom(maxZoom: number): mapboxgl.Map;

			project(lnglat: LngLat): Object;

			unproject(point: number[]): LngLat;

			queryRenderedFeatures(pointOrBox: Point|number[]|number[][], params: Object): Object[];

			querySourceFeatures(sourceID: string, params: Object): Object[];

			setStyle(style: Object): mapboxgl.Map;

			getStyle(): Object;

			addSource(id: string, source: Object): mapboxgl.Map;

			removeSource(id: string): mapboxgl.Map;

			getSource(id: string): mapboxgl.Map;

			addLayer(layer: StyleLayer|Object, before: string): mapboxgl.Map;

			removeLayer(id: string): mapboxgl.Map;  // Todo: add throws Error
			getLayer(id: string): Object;

			setFilter(layer: string, filter: any[]): mapboxgl.Map;

			setLayerZoomRange(layerId: string, minzoom: number, maxzoom: number): mapboxgl.Map;

			getFilter(layer: string): any[];

			setPaintProperty(layer: string, name: string, value: any, klass?: string): mapboxgl.Map;

			getPaintProperty(layer: string, name: string, klass?: string): any;

			setLayoutProperty(layer: string, name: string, value: any): mapboxgl.Map;

			getLayoutProperty(layer: string, name: string): any;

			getContainer(): HTMLElement;

			getCanvasContainer(): HTMLElement;

			getCanvas(): HTMLElement;

			loaded(): boolean;

			remove(): void;

			onError(): void;
		}

		export function Map(options: Object): void;

		export interface Control {
			addTo(map: mapboxgl.Map): Control;

			remove(): Control;
		}

		export interface Navigation {
			onAdd(map: mapboxgl.Map): HTMLElement; // Todo: HTMLElement return type is only an assertion
		}

		export interface Geolocate {
			onAdd(map: mapboxgl.Map): HTMLElement; // Todo: HTMLElement return type is only an assertion
		}

		export interface Attribution {
			onAdd(map: mapboxgl.Map): HTMLElement; // Todo: HTMLElement return type is only an assertion
		}

		export interface Popup {
			onAdd(map: mapboxgl.Map): Popup;

			remove(): Popup;

			getLngLat(): LngLat;

			setLngLat(lnglat: LngLat): Popup;

			setText(text: string): Popup;

			setHTML(html: string): Popup;

			setDOMContent(htmlNode: Node): Popup;
		}

		export interface GeoJSONSource {
			setData(data: Object|String): GeoJSONSource;

			onAdd(map: mapboxgl.Map): void;

			loaded(): boolean;

			update(transform: any): void; // Todo: Paramater type not documentet yet
			reload(): void;

			serialize(): Object;

			// Todo: variables
			// Todo: - getVisibleCoordinates
			// Todo: - getTitle
			// Todo: - queryRenderedFeatures
			// Todo: - querySourceFeatures
			// Todo: - redoPlacement
		}

		export interface VideoSource {
			getVideo(): VideoSource;

			onAdd(map: mapboxgl.Map): void;

			setCoordinates(coordinates: number[]): VideoSource;

			loaded(): boolean;

			update(): void;

			reload(): void;

			prepare(): void;

			getVisibleCoordinates(): number[];

			getTitle(): string;

			serialize(): Object;
		}

		export interface ImageSource {
			onAdd(map: mapboxgl.Map): void;

			setCoordinates(coordinates: number[]): ImageSource;

			loaded(): boolean;

			update(): void;

			reload(): void;

			prepare(): void;

			getVisibleCoordinates(): number[]|any[];

			getTitle(): string;

			serialize(): Object;
		}

		export interface LngLat {
			wrap(): LngLat;

			toArray(): number[];

			toString(): string;

			convert(input: number[]|LngLat): LngLat;
		}

		export interface LngLatBounds {
			extend(obj: LngLat|LngLatBounds): LngLatBounds;

			getCenter(): LngLat;

			getSouthWest(): LngLat;

			getNorthEast(): LngLat;

			getNorthWest(): LngLat;

			getSouthEast(): LngLat;

			getWest(): LngLat;

			getSouth(): LngLat;

			getEast(): LngLat;

			getNorth(): LngLat;

			toArray(): number[];

			toString(): string;

			convert(input: LngLatBounds|number[]|number[][]): LngLatBounds;
		}

		export interface Point {

			constructor(options: Object);

			clone(): Point;

			add(p: number): Point;

			sub(p: number): Point;

			mult(k: number): Point;

			div(k: number): Point;

			rotate(a: number): Point;

			matMult(m: number): Point;

			unit(): Point;

			perp(): Point;

			round(): Point;

			mag(): number;

			equals(): boolean;

			dist(): number;

			distSqr(): number;

			angle(): number;

			angleTo(): number;

			angleWidth(): number;

			angleWidthSep(): number;
		}

		export interface Evented {
			on(type: string, fn: Function): Evented;

			off(type: string|any, fn: Function): Evented;

			once(type: string, fn: Function): Evented;

			fire(type: string, data: Object): Evented;

			listens(type: string): boolean;
		}

		export interface StyleLayer {
			set(layer: any, refLayer: any): void; // Todo: not yet specified in documentation
			setLayoutProperty(name: any, value: any): void; // Todo: not yet specified in documentation
			getLayoutProperty(name: any): Object; // Todo: not yet specified in documentation
			getLayoutValue(name: any, globalProperties: any, featureProperties: any): any; // Todo: not yet specified in documentation
			setPaintProperty(name: any, value: any, klass: any): void; // Todo: not yet specified in documentation
			setPaintProperty(name: any, klass: any): Object; // Todo: not yet specified in documentation
			getPaintValue(name: any, globalProperties: any, featureProperties: any): Object; // Todo: not yet specified in documentation
			isPaintValueFeatureConstant(name: any): boolean; // Todo: not yet specified in documentation
			isHidden(zoom: any): boolean; // Todo: not yet specified in documentation
			updatePaintTransitions(classes: any, options: any, globalOptions: any, animationLoop: any): void; // Todo: not yet specified in documentation
			updatePaintTransition(name: any, classes: any, options: any, globalOptions: any, animationLoop: any): void; // Todo: not yet specified in documentation
			recalculate(zoom: any, zoomHistory: any): void; // Todo: not yet specified in documentation
			serialize(options: any): Object; // Todo: not yet specified in documentation
		}

	}

	export = mapboxgl;
}

declare module 'mapbox-gl' {
	import main = require('mapbox-gl/mapboxgl');
	export = main;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PlaceGetOverlayPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Lat" })
  lat: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Lon" })
  lon: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=height" })
  height: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: string[];

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=width" })
  width: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=z" })
  z: number;
}


export class PlaceGetOverlayQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lat" })
  lat: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location.lat" })
  locationLat: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location.lon" })
  locationLon: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lon" })
  lon: string;
}


export class PlaceGetOverlayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlaceGetOverlayPathParams;

  @SpeakeasyMetadata()
  queryParams: PlaceGetOverlayQueryParams;
}


export class PlaceGetOverlayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  systemObject?: Map<string, any>;
}

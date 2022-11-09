import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PlaceGetOverlayPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Lat" })
  lat: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Lon" })
  lon: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=height" })
  height: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: string[];

  @Metadata({ data: "pathParam, style=simple;explode=false;name=width" })
  width: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=z" })
  z: number;
}


export class PlaceGetOverlayQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lat" })
  lat: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=location.lat" })
  locationLat: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=location.lon" })
  locationLon: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lon" })
  lon: string;
}


export class PlaceGetOverlayRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlaceGetOverlayPathParams;

  @Metadata()
  queryParams: PlaceGetOverlayQueryParams;
}


export class PlaceGetOverlayResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  systemObject?: Map<string, any>;
}

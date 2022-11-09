import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PlaceGetAtPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Lat" })
  lat: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Lon" })
  lon: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: string[];
}


export class PlaceGetAtQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lat" })
  lat: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=location.lat" })
  locationLat: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=location.lon" })
  locationLon: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lon" })
  lon: string;
}


export class PlaceGetAtRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlaceGetAtPathParams;

  @Metadata()
  queryParams: PlaceGetAtQueryParams;
}


export class PlaceGetAtResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  systemObject?: Map<string, any>;
}

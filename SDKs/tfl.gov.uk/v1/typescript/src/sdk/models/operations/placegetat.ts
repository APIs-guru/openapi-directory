import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PlaceGetAtPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Lat" })
  lat: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Lon" })
  lon: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: string[];
}


export class PlaceGetAtQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lat" })
  lat: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location.lat" })
  locationLat: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location.lon" })
  locationLon: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lon" })
  lon: string;
}


export class PlaceGetAtRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlaceGetAtPathParams;

  @SpeakeasyMetadata()
  queryParams: PlaceGetAtQueryParams;
}


export class PlaceGetAtResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  systemObject?: Map<string, any>;
}

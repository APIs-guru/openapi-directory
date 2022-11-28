import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PlaceGetByGeoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=activeOnly" })
  activeOnly?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=categories" })
  categories?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeChildren" })
  includeChildren?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfPlacesToReturn" })
  numberOfPlacesToReturn?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=placeGeo.lat" })
  placeGeoLat?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=placeGeo.lon" })
  placeGeoLon?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=placeGeo.neLat" })
  placeGeoNeLat?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=placeGeo.neLon" })
  placeGeoNeLon?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=placeGeo.swLat" })
  placeGeoSwLat?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=placeGeo.swLon" })
  placeGeoSwLon?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string[];
}


export class PlaceGetByGeoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PlaceGetByGeoQueryParams;
}


export class PlaceGetByGeoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesStopPoint })
  tflApiPresentationEntitiesStopPoints?: shared.TflApiPresentationEntitiesStopPoint[];
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PlaceGetByGeoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=activeOnly" })
  activeOnly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=categories" })
  categories?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeChildren" })
  includeChildren?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=numberOfPlacesToReturn" })
  numberOfPlacesToReturn?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=placeGeo.lat" })
  placeGeoLat?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=placeGeo.lon" })
  placeGeoLon?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=placeGeo.neLat" })
  placeGeoNeLat?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=placeGeo.neLon" })
  placeGeoNeLon?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=placeGeo.swLat" })
  placeGeoSwLat?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=placeGeo.swLon" })
  placeGeoSwLon?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string[];
}


export class PlaceGetByGeoRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PlaceGetByGeoQueryParams;
}


export class PlaceGetByGeoResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TflApiPresentationEntitiesStopPoint })
  tflApiPresentationEntitiesStopPoints?: shared.TflApiPresentationEntitiesStopPoint[];
}

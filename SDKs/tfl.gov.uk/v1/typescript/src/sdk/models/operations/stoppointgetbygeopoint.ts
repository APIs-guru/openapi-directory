import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StopPointGetByGeoPointQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=categories" })
  categories?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location.lat" })
  locationLat: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location.lon" })
  locationLon: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modes" })
  modes?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=returnLines" })
  returnLines?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stopTypes" })
  stopTypes: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useStopPointHierarchy" })
  useStopPointHierarchy?: boolean;
}


export class StopPointGetByGeoPointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: StopPointGetByGeoPointQueryParams;
}


export class StopPointGetByGeoPointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tflApiPresentationEntitiesStopPointsResponse?: shared.TflApiPresentationEntitiesStopPointsResponse;
}

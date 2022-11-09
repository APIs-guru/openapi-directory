import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StopPointGetByGeoPointQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=categories" })
  categories?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=location.lat" })
  locationLat: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=location.lon" })
  locationLon: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=modes" })
  modes?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=returnLines" })
  returnLines?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=stopTypes" })
  stopTypes: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=useStopPointHierarchy" })
  useStopPointHierarchy?: boolean;
}


export class StopPointGetByGeoPointRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: StopPointGetByGeoPointQueryParams;
}


export class StopPointGetByGeoPointResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tflApiPresentationEntitiesStopPointsResponse?: shared.TflApiPresentationEntitiesStopPointsResponse;
}

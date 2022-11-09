import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StopPointDisruptionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string[];
}


export class StopPointDisruptionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=flattenResponse" })
  flattenResponse?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=getFamily" })
  getFamily?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeRouteBlockedStops" })
  includeRouteBlockedStops?: boolean;
}


export class StopPointDisruptionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StopPointDisruptionPathParams;

  @Metadata()
  queryParams: StopPointDisruptionQueryParams;
}


export class StopPointDisruptionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TflApiPresentationEntitiesDisruptedPoint })
  tflApiPresentationEntitiesDisruptedPoints?: shared.TflApiPresentationEntitiesDisruptedPoint[];
}

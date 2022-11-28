import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StopPointDisruptionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string[];
}


export class StopPointDisruptionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=flattenResponse" })
  flattenResponse?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getFamily" })
  getFamily?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeRouteBlockedStops" })
  includeRouteBlockedStops?: boolean;
}


export class StopPointDisruptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StopPointDisruptionPathParams;

  @SpeakeasyMetadata()
  queryParams: StopPointDisruptionQueryParams;
}


export class StopPointDisruptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesDisruptedPoint })
  tflApiPresentationEntitiesDisruptedPoints?: shared.TflApiPresentationEntitiesDisruptedPoint[];
}

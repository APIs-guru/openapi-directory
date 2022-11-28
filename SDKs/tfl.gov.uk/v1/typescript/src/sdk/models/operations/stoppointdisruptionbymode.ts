import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StopPointDisruptionByModePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modes" })
  modes: string[];
}


export class StopPointDisruptionByModeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeRouteBlockedStops" })
  includeRouteBlockedStops?: boolean;
}


export class StopPointDisruptionByModeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StopPointDisruptionByModePathParams;

  @SpeakeasyMetadata()
  queryParams: StopPointDisruptionByModeQueryParams;
}


export class StopPointDisruptionByModeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesDisruptedPoint })
  tflApiPresentationEntitiesDisruptedPoints?: shared.TflApiPresentationEntitiesDisruptedPoint[];
}

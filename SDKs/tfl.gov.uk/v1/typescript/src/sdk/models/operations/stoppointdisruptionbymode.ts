import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StopPointDisruptionByModePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=modes" })
  modes: string[];
}


export class StopPointDisruptionByModeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=includeRouteBlockedStops" })
  includeRouteBlockedStops?: boolean;
}


export class StopPointDisruptionByModeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StopPointDisruptionByModePathParams;

  @Metadata()
  queryParams: StopPointDisruptionByModeQueryParams;
}


export class StopPointDisruptionByModeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TflApiPresentationEntitiesDisruptedPoint })
  tflApiPresentationEntitiesDisruptedPoints?: shared.TflApiPresentationEntitiesDisruptedPoint[];
}

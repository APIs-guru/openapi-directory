import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LineStopPointsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class LineStopPointsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=tflOperatedNationalRailStationsOnly" })
  tflOperatedNationalRailStationsOnly?: boolean;
}


export class LineStopPointsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LineStopPointsPathParams;

  @Metadata()
  queryParams: LineStopPointsQueryParams;
}


export class LineStopPointsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TflApiPresentationEntitiesStopPoint })
  tflApiPresentationEntitiesStopPoints?: shared.TflApiPresentationEntitiesStopPoint[];
}

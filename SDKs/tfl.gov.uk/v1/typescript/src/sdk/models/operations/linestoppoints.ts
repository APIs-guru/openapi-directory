import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LineStopPointsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class LineStopPointsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tflOperatedNationalRailStationsOnly" })
  tflOperatedNationalRailStationsOnly?: boolean;
}


export class LineStopPointsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LineStopPointsPathParams;

  @SpeakeasyMetadata()
  queryParams: LineStopPointsQueryParams;
}


export class LineStopPointsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesStopPoint })
  tflApiPresentationEntitiesStopPoints?: shared.TflApiPresentationEntitiesStopPoint[];
}

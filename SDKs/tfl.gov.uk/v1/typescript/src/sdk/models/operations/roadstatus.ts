import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RoadStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string[];
}


export class RoadStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateRangeNullable.endDate" })
  dateRangeNullableEndDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateRangeNullable.startDate" })
  dateRangeNullableStartDate?: Date;
}


export class RoadStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RoadStatusPathParams;

  @SpeakeasyMetadata()
  queryParams: RoadStatusQueryParams;
}


export class RoadStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesRoadCorridor })
  tflApiPresentationEntitiesRoadCorridors?: shared.TflApiPresentationEntitiesRoadCorridor[];
}

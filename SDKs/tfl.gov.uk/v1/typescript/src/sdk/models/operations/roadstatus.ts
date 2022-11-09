import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RoadStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string[];
}


export class RoadStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=dateRangeNullable.endDate" })
  dateRangeNullableEndDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dateRangeNullable.startDate" })
  dateRangeNullableStartDate?: Date;
}


export class RoadStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RoadStatusPathParams;

  @Metadata()
  queryParams: RoadStatusQueryParams;
}


export class RoadStatusResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TflApiPresentationEntitiesRoadCorridor })
  tflApiPresentationEntitiesRoadCorridors?: shared.TflApiPresentationEntitiesRoadCorridor[];
}

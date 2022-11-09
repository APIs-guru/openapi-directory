import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OccupancyGetBikePointsOccupanciesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string[];
}


export class OccupancyGetBikePointsOccupanciesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OccupancyGetBikePointsOccupanciesPathParams;
}


export class OccupancyGetBikePointsOccupanciesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TflApiPresentationEntitiesBikePointOccupancy })
  tflApiPresentationEntitiesBikePointOccupancies?: shared.TflApiPresentationEntitiesBikePointOccupancy[];
}

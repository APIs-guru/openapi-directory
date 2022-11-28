import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OccupancyGetBikePointsOccupanciesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string[];
}


export class OccupancyGetBikePointsOccupanciesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OccupancyGetBikePointsOccupanciesPathParams;
}


export class OccupancyGetBikePointsOccupanciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesBikePointOccupancy })
  tflApiPresentationEntitiesBikePointOccupancies?: shared.TflApiPresentationEntitiesBikePointOccupancy[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRoadIdsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string[];
}


export class GetRoadIdsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRoadIdsPathParams;
}


export class GetRoadIdsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesRoadCorridor })
  tflApiPresentationEntitiesRoadCorridors?: shared.TflApiPresentationEntitiesRoadCorridor[];
}

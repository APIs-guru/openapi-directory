import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StopPointGetTaxiRanksByIdsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stopPointId" })
  stopPointId: string;
}


export class StopPointGetTaxiRanksByIdsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StopPointGetTaxiRanksByIdsPathParams;
}


export class StopPointGetTaxiRanksByIdsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesPlace })
  tflApiPresentationEntitiesPlaces?: shared.TflApiPresentationEntitiesPlace[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StopPointArrivalsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StopPointArrivalsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StopPointArrivalsPathParams;
}


export class StopPointArrivalsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesPrediction })
  tflApiPresentationEntitiesPredictions?: shared.TflApiPresentationEntitiesPrediction[];
}

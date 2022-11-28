import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VehicleGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string[];
}


export class VehicleGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VehicleGetPathParams;
}


export class VehicleGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesPrediction })
  tflApiPresentationEntitiesPredictions?: shared.TflApiPresentationEntitiesPrediction[];
}

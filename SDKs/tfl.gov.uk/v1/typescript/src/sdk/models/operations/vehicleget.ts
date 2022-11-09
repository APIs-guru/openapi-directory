import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VehicleGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string[];
}


export class VehicleGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VehicleGetPathParams;
}


export class VehicleGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TflApiPresentationEntitiesPrediction })
  tflApiPresentationEntitiesPredictions?: shared.TflApiPresentationEntitiesPrediction[];
}

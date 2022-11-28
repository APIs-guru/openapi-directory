import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LineDisruptionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string[];
}


export class LineDisruptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LineDisruptionPathParams;
}


export class LineDisruptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesDisruption })
  tflApiPresentationEntitiesDisruptions?: shared.TflApiPresentationEntitiesDisruption[];
}

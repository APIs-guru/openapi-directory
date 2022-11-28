import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LineDisruptionByModePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modes" })
  modes: string[];
}


export class LineDisruptionByModeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LineDisruptionByModePathParams;
}


export class LineDisruptionByModeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesDisruption })
  tflApiPresentationEntitiesDisruptions?: shared.TflApiPresentationEntitiesDisruption[];
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LineDisruptionByModePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=modes" })
  modes: string[];
}


export class LineDisruptionByModeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LineDisruptionByModePathParams;
}


export class LineDisruptionByModeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TflApiPresentationEntitiesDisruption })
  tflApiPresentationEntitiesDisruptions?: shared.TflApiPresentationEntitiesDisruption[];
}

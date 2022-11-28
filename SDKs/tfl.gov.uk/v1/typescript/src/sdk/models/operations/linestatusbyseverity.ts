import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LineStatusBySeverityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=severity" })
  severity: number;
}


export class LineStatusBySeverityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LineStatusBySeverityPathParams;
}


export class LineStatusBySeverityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesLine })
  tflApiPresentationEntitiesLines?: shared.TflApiPresentationEntitiesLine[];
}

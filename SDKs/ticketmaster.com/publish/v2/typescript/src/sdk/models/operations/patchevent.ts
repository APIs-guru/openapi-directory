import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchEventPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatchEventHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TMPS-Correlation-Id" })
  tmpsCorrelationId: string;
}


export class PatchEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchEventPathParams;

  @SpeakeasyMetadata()
  headers: PatchEventHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AugmentationData;
}


export class PatchEventResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

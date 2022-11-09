import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchEventPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatchEventHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=TMPS-Correlation-Id" })
  tmpsCorrelationId: string;
}


export class PatchEventRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchEventPathParams;

  @Metadata()
  headers: PatchEventHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AugmentationData;
}


export class PatchEventResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

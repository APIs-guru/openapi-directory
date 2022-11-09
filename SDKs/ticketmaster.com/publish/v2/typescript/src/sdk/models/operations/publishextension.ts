import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PublishExtensionHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=TMPS-Correlation-Id" })
  tmpsCorrelationId: string;
}


export class PublishExtensionRequest extends SpeakeasyBase {
  @Metadata()
  headers: PublishExtensionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ExtensionData;
}


export class PublishExtensionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

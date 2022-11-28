import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PublishExtensionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TMPS-Correlation-Id" })
  tmpsCorrelationId: string;
}


export class PublishExtensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PublishExtensionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ExtensionData;
}


export class PublishExtensionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

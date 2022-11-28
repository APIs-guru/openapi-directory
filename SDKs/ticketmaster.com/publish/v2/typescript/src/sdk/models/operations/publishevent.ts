import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PublishEventHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TMPS-Correlation-Id" })
  tmpsCorrelationId: string;
}


export class PublishEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PublishEventHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Event;
}


export class PublishEventResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

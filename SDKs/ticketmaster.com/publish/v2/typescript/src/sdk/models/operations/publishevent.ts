import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PublishEventHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=TMPS-Correlation-Id" })
  tmpsCorrelationId: string;
}


export class PublishEventRequest extends SpeakeasyBase {
  @Metadata()
  headers: PublishEventHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Event;
}


export class PublishEventResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

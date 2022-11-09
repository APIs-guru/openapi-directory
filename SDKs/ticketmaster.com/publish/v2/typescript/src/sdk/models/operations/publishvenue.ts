import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PublishVenueHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=TMPS-Correlation-Id" })
  tmpsCorrelationId: string;
}


export class PublishVenueRequest extends SpeakeasyBase {
  @Metadata()
  headers: PublishVenueHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Venue;
}


export class PublishVenueResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

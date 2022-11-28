import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PublishVenueHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TMPS-Correlation-Id" })
  tmpsCorrelationId: string;
}


export class PublishVenueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PublishVenueHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Venue;
}


export class PublishVenueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

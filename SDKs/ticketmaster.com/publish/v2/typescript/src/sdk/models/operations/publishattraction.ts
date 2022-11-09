import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PublishAttractionHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=TMPS-Correlation-Id" })
  tmpsCorrelationId: string;
}


export class PublishAttractionRequest extends SpeakeasyBase {
  @Metadata()
  headers: PublishAttractionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Attraction;
}


export class PublishAttractionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

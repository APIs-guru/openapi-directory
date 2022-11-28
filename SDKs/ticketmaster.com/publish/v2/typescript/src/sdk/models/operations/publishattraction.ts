import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PublishAttractionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TMPS-Correlation-Id" })
  tmpsCorrelationId: string;
}


export class PublishAttractionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PublishAttractionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Attraction;
}


export class PublishAttractionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

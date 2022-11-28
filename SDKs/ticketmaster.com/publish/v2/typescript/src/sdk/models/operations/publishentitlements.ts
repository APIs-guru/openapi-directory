import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PublishEntitlementsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TMPS-Correlation-Id" })
  tmpsCorrelationId: string;
}


export class PublishEntitlementsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PublishEntitlementsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Entitlement;
}


export class PublishEntitlementsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

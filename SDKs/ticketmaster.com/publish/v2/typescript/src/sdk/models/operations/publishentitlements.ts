import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PublishEntitlementsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=TMPS-Correlation-Id" })
  tmpsCorrelationId: string;
}


export class PublishEntitlementsRequest extends SpeakeasyBase {
  @Metadata()
  headers: PublishEntitlementsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Entitlement;
}


export class PublishEntitlementsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

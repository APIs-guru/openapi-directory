import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchRetrieveOrdersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class BatchRetrieveOrdersRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchRetrieveOrdersRequest;

  @Metadata()
  security: BatchRetrieveOrdersSecurity;
}


export class BatchRetrieveOrdersResponse extends SpeakeasyBase {
  @Metadata()
  batchRetrieveOrdersResponse?: shared.BatchRetrieveOrdersResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

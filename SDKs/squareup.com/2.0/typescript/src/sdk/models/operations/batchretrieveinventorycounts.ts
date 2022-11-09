import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchRetrieveInventoryCountsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class BatchRetrieveInventoryCountsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchRetrieveInventoryCountsRequest;

  @Metadata()
  security: BatchRetrieveInventoryCountsSecurity;
}


export class BatchRetrieveInventoryCountsResponse extends SpeakeasyBase {
  @Metadata()
  batchRetrieveInventoryCountsResponse?: shared.BatchRetrieveInventoryCountsResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeprecatedBatchRetrieveInventoryCountsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeprecatedBatchRetrieveInventoryCountsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchRetrieveInventoryCountsRequest;

  @Metadata()
  security: DeprecatedBatchRetrieveInventoryCountsSecurity;
}


export class DeprecatedBatchRetrieveInventoryCountsResponse extends SpeakeasyBase {
  @Metadata()
  batchRetrieveInventoryCountsResponse?: shared.BatchRetrieveInventoryCountsResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

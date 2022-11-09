import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeprecatedBatchRetrieveInventoryChangesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeprecatedBatchRetrieveInventoryChangesRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchRetrieveInventoryChangesRequest;

  @Metadata()
  security: DeprecatedBatchRetrieveInventoryChangesSecurity;
}


export class DeprecatedBatchRetrieveInventoryChangesResponse extends SpeakeasyBase {
  @Metadata()
  batchRetrieveInventoryChangesResponse?: shared.BatchRetrieveInventoryChangesResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

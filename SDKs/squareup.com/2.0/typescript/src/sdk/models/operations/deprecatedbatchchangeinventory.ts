import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeprecatedBatchChangeInventorySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeprecatedBatchChangeInventoryRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchChangeInventoryRequest;

  @Metadata()
  security: DeprecatedBatchChangeInventorySecurity;
}


export class DeprecatedBatchChangeInventoryResponse extends SpeakeasyBase {
  @Metadata()
  batchChangeInventoryResponse?: shared.BatchChangeInventoryResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

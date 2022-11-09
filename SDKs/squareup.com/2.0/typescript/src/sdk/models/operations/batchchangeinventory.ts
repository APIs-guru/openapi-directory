import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchChangeInventorySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class BatchChangeInventoryRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchChangeInventoryRequest;

  @Metadata()
  security: BatchChangeInventorySecurity;
}


export class BatchChangeInventoryResponse extends SpeakeasyBase {
  @Metadata()
  batchChangeInventoryResponse?: shared.BatchChangeInventoryResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

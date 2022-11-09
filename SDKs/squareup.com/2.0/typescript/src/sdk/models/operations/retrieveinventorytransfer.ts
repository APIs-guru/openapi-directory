import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveInventoryTransferPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=transfer_id" })
  transferId: string;
}


export class RetrieveInventoryTransferSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrieveInventoryTransferRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveInventoryTransferPathParams;

  @Metadata()
  security: RetrieveInventoryTransferSecurity;
}


export class RetrieveInventoryTransferResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveInventoryTransferResponse?: shared.RetrieveInventoryTransferResponse;

  @Metadata()
  statusCode: number;
}

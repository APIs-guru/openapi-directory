import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VoidTransactionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=location_id" })
  locationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=transaction_id" })
  transactionId: string;
}


export class VoidTransactionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class VoidTransactionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VoidTransactionPathParams;

  @Metadata()
  security: VoidTransactionSecurity;
}


export class VoidTransactionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  voidTransactionResponse?: shared.VoidTransactionResponse;
}

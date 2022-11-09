import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveTransactionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=location_id" })
  locationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=transaction_id" })
  transactionId: string;
}


export class RetrieveTransactionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrieveTransactionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveTransactionPathParams;

  @Metadata()
  security: RetrieveTransactionSecurity;
}


export class RetrieveTransactionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveTransactionResponse?: shared.RetrieveTransactionResponse;

  @Metadata()
  statusCode: number;
}

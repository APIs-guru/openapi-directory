import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutTransactionAccountsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutTransactionAccountsIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=institution_id" })
  institutionId?: number;
}


export class PutTransactionAccountsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutTransactionAccountsIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PutTransactionAccountsIdRequestBody;
}


export class PutTransactionAccountsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata()
  transactionAccount?: shared.TransactionAccount;
}

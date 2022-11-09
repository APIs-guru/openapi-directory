import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTransactionAccountsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetTransactionAccountsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTransactionAccountsIdPathParams;
}


export class GetTransactionAccountsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata()
  transactionAccount?: shared.TransactionAccount;
}

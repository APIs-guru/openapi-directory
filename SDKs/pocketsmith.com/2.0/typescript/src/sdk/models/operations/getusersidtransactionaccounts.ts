import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsersIdTransactionAccountsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetUsersIdTransactionAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUsersIdTransactionAccountsPathParams;
}


export class GetUsersIdTransactionAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TransactionAccount })
  transactionAccounts?: shared.TransactionAccount[];
}

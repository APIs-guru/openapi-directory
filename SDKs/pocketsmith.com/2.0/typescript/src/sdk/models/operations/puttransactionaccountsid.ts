import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutTransactionAccountsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutTransactionAccountsIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=institution_id" })
  institutionId?: number;
}


export class PutTransactionAccountsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutTransactionAccountsIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutTransactionAccountsIdRequestBody;
}


export class PutTransactionAccountsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  transactionAccount?: shared.TransactionAccount;
}

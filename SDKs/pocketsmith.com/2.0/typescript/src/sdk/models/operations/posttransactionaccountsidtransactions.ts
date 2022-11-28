import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostTransactionAccountsIdTransactionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostTransactionAccountsIdTransactionsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=category_id" })
  categoryId?: number;

  @SpeakeasyMetadata({ data: "json, name=cheque_number" })
  chequeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "json, name=is_transfer" })
  isTransfer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: string;

  @SpeakeasyMetadata({ data: "json, name=memo" })
  memo?: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=payee" })
  payee: string;
}


export class PostTransactionAccountsIdTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostTransactionAccountsIdTransactionsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostTransactionAccountsIdTransactionsRequestBody;
}


export class PostTransactionAccountsIdTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  transaction?: shared.Transaction;
}

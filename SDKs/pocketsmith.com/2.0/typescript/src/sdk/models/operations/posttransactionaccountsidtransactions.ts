import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostTransactionAccountsIdTransactionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostTransactionAccountsIdTransactionsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: number;

  @Metadata({ data: "json, name=category_id" })
  categoryId?: number;

  @Metadata({ data: "json, name=cheque_number" })
  chequeNumber?: string;

  @Metadata({ data: "json, name=date" })
  date: string;

  @Metadata({ data: "json, name=is_transfer" })
  isTransfer?: boolean;

  @Metadata({ data: "json, name=labels" })
  labels?: string;

  @Metadata({ data: "json, name=memo" })
  memo?: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=payee" })
  payee: string;
}


export class PostTransactionAccountsIdTransactionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostTransactionAccountsIdTransactionsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostTransactionAccountsIdTransactionsRequestBody;
}


export class PostTransactionAccountsIdTransactionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata()
  transaction?: shared.Transaction;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateTransactionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=transaction_id" })
  transactionId: string;
}


export class UpdateTransactionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateTransactionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SaveTransactionWrapper;
}


export class UpdateTransactionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  transactionResponse?: shared.TransactionResponse;
}

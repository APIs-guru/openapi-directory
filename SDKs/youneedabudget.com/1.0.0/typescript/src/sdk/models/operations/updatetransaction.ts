import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateTransactionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=transaction_id" })
  transactionId: string;
}


export class UpdateTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateTransactionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SaveTransactionWrapper;
}


export class UpdateTransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  transactionResponse?: shared.TransactionResponse;
}

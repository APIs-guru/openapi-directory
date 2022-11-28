import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateTransactionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;
}


export class CreateTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateTransactionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SaveTransactionsWrapper;
}


export class CreateTransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  saveTransactionsResponse?: shared.SaveTransactionsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

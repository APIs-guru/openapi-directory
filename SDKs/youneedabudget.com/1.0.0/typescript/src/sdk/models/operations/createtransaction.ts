import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateTransactionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;
}


export class CreateTransactionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateTransactionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SaveTransactionsWrapper;
}


export class CreateTransactionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  saveTransactionsResponse?: shared.SaveTransactionsResponse;

  @Metadata()
  statusCode: number;
}

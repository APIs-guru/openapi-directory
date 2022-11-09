import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTransactionByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=transaction_id" })
  transactionId: string;
}


export class GetTransactionByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTransactionByIdPathParams;
}


export class GetTransactionByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  transactionResponse?: shared.TransactionResponse;
}

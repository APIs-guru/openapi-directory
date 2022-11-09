import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetScheduledTransactionByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=scheduled_transaction_id" })
  scheduledTransactionId: string;
}


export class GetScheduledTransactionByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetScheduledTransactionByIdPathParams;
}


export class GetScheduledTransactionByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  scheduledTransactionResponse?: shared.ScheduledTransactionResponse;

  @Metadata()
  statusCode: number;
}

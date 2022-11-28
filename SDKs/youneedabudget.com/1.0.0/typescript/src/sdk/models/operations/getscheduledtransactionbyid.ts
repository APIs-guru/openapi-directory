import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetScheduledTransactionByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scheduled_transaction_id" })
  scheduledTransactionId: string;
}


export class GetScheduledTransactionByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetScheduledTransactionByIdPathParams;
}


export class GetScheduledTransactionByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  scheduledTransactionResponse?: shared.ScheduledTransactionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

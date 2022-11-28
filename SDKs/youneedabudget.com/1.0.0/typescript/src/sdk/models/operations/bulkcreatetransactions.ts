import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BulkCreateTransactionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;
}


export class BulkCreateTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BulkCreateTransactionsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BulkTransactions;
}


export class BulkCreateTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bulkResponse?: shared.BulkResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

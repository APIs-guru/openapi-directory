import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BulkCreateTransactionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;
}


export class BulkCreateTransactionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BulkCreateTransactionsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BulkTransactions;
}


export class BulkCreateTransactionsResponse extends SpeakeasyBase {
  @Metadata()
  bulkResponse?: shared.BulkResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}

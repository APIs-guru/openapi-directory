import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateTransactionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;
}


export class UpdateTransactionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateTransactionsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateTransactionsWrapper;
}


export class UpdateTransactionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  saveTransactionsResponse?: shared.SaveTransactionsResponse;

  @Metadata()
  statusCode: number;
}

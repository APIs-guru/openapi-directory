import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateTransactionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;
}


export class UpdateTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateTransactionsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateTransactionsWrapper;
}


export class UpdateTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  saveTransactionsResponse?: shared.SaveTransactionsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

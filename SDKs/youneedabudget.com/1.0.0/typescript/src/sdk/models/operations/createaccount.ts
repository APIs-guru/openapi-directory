import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;
}


export class CreateAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateAccountPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SaveAccountWrapper;
}


export class CreateAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accountResponse?: shared.AccountResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

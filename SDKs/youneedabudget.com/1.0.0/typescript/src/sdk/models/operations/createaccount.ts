import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateAccountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;
}


export class CreateAccountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateAccountPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SaveAccountWrapper;
}


export class CreateAccountResponse extends SpeakeasyBase {
  @Metadata()
  accountResponse?: shared.AccountResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}

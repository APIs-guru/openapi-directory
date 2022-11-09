import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAccountByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;
}


export class GetAccountByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAccountByIdPathParams;
}


export class GetAccountByIdResponse extends SpeakeasyBase {
  @Metadata()
  accountResponse?: shared.AccountResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}

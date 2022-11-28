import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccountsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;
}


export class GetAccountsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_knowledge_of_server" })
  lastKnowledgeOfServer?: number;
}


export class GetAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAccountsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAccountsQueryParams;
}


export class GetAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accountsResponse?: shared.AccountsResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

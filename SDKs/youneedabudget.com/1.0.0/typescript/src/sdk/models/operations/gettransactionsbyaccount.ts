import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTransactionsByAccountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;
}

export enum GetTransactionsByAccountTypeEnum {
    Uncategorized = "uncategorized"
,    Unapproved = "unapproved"
}


export class GetTransactionsByAccountQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=last_knowledge_of_server" })
  lastKnowledgeOfServer?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=since_date" })
  sinceDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetTransactionsByAccountTypeEnum;
}


export class GetTransactionsByAccountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTransactionsByAccountPathParams;

  @Metadata()
  queryParams: GetTransactionsByAccountQueryParams;
}


export class GetTransactionsByAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  transactionsResponse?: shared.TransactionsResponse;
}

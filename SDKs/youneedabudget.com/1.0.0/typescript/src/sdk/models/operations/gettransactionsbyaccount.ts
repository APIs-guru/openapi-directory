import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTransactionsByAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;
}

export enum GetTransactionsByAccountTypeEnum {
    Uncategorized = "uncategorized",
    Unapproved = "unapproved"
}


export class GetTransactionsByAccountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_knowledge_of_server" })
  lastKnowledgeOfServer?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since_date" })
  sinceDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetTransactionsByAccountTypeEnum;
}


export class GetTransactionsByAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTransactionsByAccountPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTransactionsByAccountQueryParams;
}


export class GetTransactionsByAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  transactionsResponse?: shared.TransactionsResponse;
}

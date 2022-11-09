import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTransactionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;
}

export enum GetTransactionsTypeEnum {
    Uncategorized = "uncategorized"
,    Unapproved = "unapproved"
}


export class GetTransactionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=last_knowledge_of_server" })
  lastKnowledgeOfServer?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=since_date" })
  sinceDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetTransactionsTypeEnum;
}


export class GetTransactionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTransactionsPathParams;

  @Metadata()
  queryParams: GetTransactionsQueryParams;
}


export class GetTransactionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  transactionsResponse?: shared.TransactionsResponse;
}

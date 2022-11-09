import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTransactionsByCategoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=category_id" })
  categoryId: string;
}

export enum GetTransactionsByCategoryTypeEnum {
    Uncategorized = "uncategorized"
,    Unapproved = "unapproved"
}


export class GetTransactionsByCategoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=last_knowledge_of_server" })
  lastKnowledgeOfServer?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=since_date" })
  sinceDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetTransactionsByCategoryTypeEnum;
}


export class GetTransactionsByCategoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTransactionsByCategoryPathParams;

  @Metadata()
  queryParams: GetTransactionsByCategoryQueryParams;
}


export class GetTransactionsByCategoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  hybridTransactionsResponse?: shared.HybridTransactionsResponse;

  @Metadata()
  statusCode: number;
}

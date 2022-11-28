import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTransactionsByCategoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category_id" })
  categoryId: string;
}

export enum GetTransactionsByCategoryTypeEnum {
    Uncategorized = "uncategorized",
    Unapproved = "unapproved"
}


export class GetTransactionsByCategoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_knowledge_of_server" })
  lastKnowledgeOfServer?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since_date" })
  sinceDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetTransactionsByCategoryTypeEnum;
}


export class GetTransactionsByCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTransactionsByCategoryPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTransactionsByCategoryQueryParams;
}


export class GetTransactionsByCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  hybridTransactionsResponse?: shared.HybridTransactionsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTransactionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;
}

export enum GetTransactionsTypeEnum {
    Uncategorized = "uncategorized",
    Unapproved = "unapproved"
}


export class GetTransactionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_knowledge_of_server" })
  lastKnowledgeOfServer?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since_date" })
  sinceDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetTransactionsTypeEnum;
}


export class GetTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTransactionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTransactionsQueryParams;
}


export class GetTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  transactionsResponse?: shared.TransactionsResponse;
}

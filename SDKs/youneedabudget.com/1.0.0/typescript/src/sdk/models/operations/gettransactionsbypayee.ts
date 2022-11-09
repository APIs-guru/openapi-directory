import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTransactionsByPayeePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=payee_id" })
  payeeId: string;
}

export enum GetTransactionsByPayeeTypeEnum {
    Uncategorized = "uncategorized"
,    Unapproved = "unapproved"
}


export class GetTransactionsByPayeeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=last_knowledge_of_server" })
  lastKnowledgeOfServer?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=since_date" })
  sinceDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetTransactionsByPayeeTypeEnum;
}


export class GetTransactionsByPayeeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTransactionsByPayeePathParams;

  @Metadata()
  queryParams: GetTransactionsByPayeeQueryParams;
}


export class GetTransactionsByPayeeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  hybridTransactionsResponse?: shared.HybridTransactionsResponse;

  @Metadata()
  statusCode: number;
}

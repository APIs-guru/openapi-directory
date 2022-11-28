import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTransactionsByPayeePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payee_id" })
  payeeId: string;
}

export enum GetTransactionsByPayeeTypeEnum {
    Uncategorized = "uncategorized",
    Unapproved = "unapproved"
}


export class GetTransactionsByPayeeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_knowledge_of_server" })
  lastKnowledgeOfServer?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since_date" })
  sinceDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetTransactionsByPayeeTypeEnum;
}


export class GetTransactionsByPayeeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTransactionsByPayeePathParams;

  @SpeakeasyMetadata()
  queryParams: GetTransactionsByPayeeQueryParams;
}


export class GetTransactionsByPayeeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  hybridTransactionsResponse?: shared.HybridTransactionsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
